/** // 0.8184894147932577 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15597394, Surname=Rhodes, CreditScore=669, Geography=Germany, Gender=Female, Age=37.0, Tenure=9, Balance=130622.34, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=128499.94.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerId: 0.00,
    	CreditScore: -0.01,
    	Age: 0.98,
    	Tenure: -0.12,
    	Balance: 0.00,
    	NumOfProducts: -8.17,
    	HasCrCard: -1.99,
    	IsActiveMember: -10.62,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 2.80, 
    	GenderImpact: -1.42, 
    	SurnameImpact: 0.15,
    	NewParameterImpact: -0.03,  
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.19; 
    } else {
        surnameImpact = 2.09;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 1);  

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.10 : -1.11) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 3.22 : -1.01) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter  
    );

    
    const probability = 0.01 / (9.11 + Math.exp(-linearCombination));

    return probability;
}
