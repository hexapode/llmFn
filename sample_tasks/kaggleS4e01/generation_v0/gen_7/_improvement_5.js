/* Best score: 0.8196640933826728 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15597394, Surname=Rhodes, CreditScore=669, Geography=Germany, Gender=Female, Age=37.0, Tenure=9, Balance=130622.34, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=128499.94. */
    
    /** // 0.8184894147932577 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15597394, Surname=Rhodes, CreditScore=669, Geography=Germany, Gender=Female, Age=37.0, Tenure=9, Balance=130622.34, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=128499.94.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerId: 0.00,
    	CreditScore: -0.01,
    	Age: 0.97,
    	Tenure: -0.13,
    	Balance: 0.00,
    	NumOfProducts: -7.16,
    	HasCrCard: -2.00,
    	IsActiveMember: -10.53,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 2.89, 
    	GenderImpact: -1.52, 
    	SurnameImpact: 0.15,
    	NewParameterImpact: 0.08,  
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.28; 
    } else {
        surnameImpact = 2.19;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 0.00);  

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.09 : -1.20) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 3.32 : -0.90) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter  
    );

    
    const probability = 0.01 / (0.80 + Math.exp(-linearCombination));

    return probability;
}
