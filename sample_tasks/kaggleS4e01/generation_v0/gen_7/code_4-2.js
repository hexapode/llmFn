/** // 0.8163263871385535 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15718773, Surname=Pisano, CreditScore=638, Geography=France, Gender=Female, Age=32.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=160129.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerId: 0.00,
    	CreditScore: -0.01,
    	Age: 0.99,
    	Tenure: -0.11,
    	Balance: 0.00,
    	NumOfProducts: -9.28,
    	HasCrCard: -2.09,
    	IsActiveMember: -7.66,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 2.70, 
    	GenderImpact: -1.42, 
    	SurnameImpact: 0.15,  
        UnusedParameterImpact: 0.5, // New coefficient for the impact of an unused parameter
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -1.09; 
    } else {
        surnameImpact = 1.09;
    }

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
        coefficients.UnusedParameterImpact * (1.0) // impact of an unused parameter, for example, 1.0 for simplicity
    );

    
    const probability = 0.01 / (10.00 + Math.exp(-linearCombination));

    return probability;
}
