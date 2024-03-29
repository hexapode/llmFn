/** // 0.8021987154100917 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15739803, Surname=Lucciano, CreditScore=686, Geography=Spain, Gender=Male, Age=34.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=127569.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerId: 0.00,
    	CreditScore: -0.01,
    	Age: 1.00,
    	Tenure: -0.10,
    	Balance: 0.00,
    	NumOfProducts: -10.39,
    	HasCrCard: -1.20,
    	IsActiveMember: -2.72,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 1.61, 
    	GenderImpact: -1.41, 
    	SurnameImpact: 0.05,  // Impact of Surname on prediction
	};

    let surnameLength = Surname.length; // Getting the length of the Surname
    let surnameImpact = 0;

    if (surnameLength <= 5) {
        surnameImpact = 0.02; // Adjusting impact based on length of Surname
    } else {
        surnameImpact = -0.02;
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.11 : -1.11) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 2.11 : -1.11) +
        coefficients.SurnameImpact * surnameImpact
    );

    
    const probability = 0.10 / (1000.00 + Math.exp(-linearCombination));

    return probability;
}
