/** // 0.8171561342286647 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15691705, Surname=Onyemauchechukwu, CreditScore=687, Geography=France, Gender=Female, Age=31.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=139049.95.
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

    // New combination of variables
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.09 : (Geography === 'France' ? 0 : -1.20)) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 3.32 : -0.90) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter  
    );

    
    const probability = 0.01 / (0.80 + Math.exp(-linearCombination));

    return probability;
}
