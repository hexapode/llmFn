/** // 0.7282401156769297 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15649744, Surname=Chidiebere, CreditScore=648, Geography=Germany, Gender=Male, Age=40.0, Tenure=8, Balance=92436.86, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=137963.0.
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
        UnusedParameterImpact: -0.01, 
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.19; 
    } else {
        surnameImpact = 2.09;
    }
    
    let novelCombination = (Age * NumOfProducts) - (Balance / (Tenure + 1)); // Novel combination of variables
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
        coefficients.UnusedParameterImpact * novelCombination 
    );

    
    const probability = 0.01 / (9.11 + Math.exp(-linearCombination));

    return probability;
}
