/** // 0.498203190023044 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15580914, Surname=Fan, CreditScore=714, Geography=France, Gender=Male, Age=28.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=138882.97.
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
    	NewVariableImpact: 0.03,  
        UnusedParameterImpact: -0.01, 
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.19; 
    } else {
        surnameImpact = 2.09;
    }
    
    // Adding a new variable
    let newVariable = (Age * CreditScore) / (Math.sqrt(NumOfProducts + 1));

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
        coefficients.NewVariableImpact * newVariable +
        coefficients.UnusedParameterImpact * (1.01) 
    );

    
    const probability = 0.01 / (9.11 + Math.exp(-linearCombination));

    return probability;
}
