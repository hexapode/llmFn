/** // 0.5935572515888788 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15724150, Surname=Shao, CreditScore=704, Geography=Spain, Gender=Male, Age=34.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=145789.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerId: 0.00,
    	CreditScore: -0.01,
    	Age: 0.99,
    	SquaredAge: -0.02, // New coefficient for squared age
        Tenure: -0.11,
    	Balance: 0.00,
    	NumOfProducts: -9.28,
    	HasCrCard: -2.09,
    	IsActiveMember: -7.66,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 2.70, 
    	GenderImpact: -1.42, 
    	SurnameImpact: 0.15,  
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -1.09; 
    } else {
        surnameImpact = 1.09;
    }

    let squaredAge = Age * Age; // New variable for squared age

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.SquaredAge * squaredAge + // Adding squared age to linear combination
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.10 : -1.11) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 3.22 : -1.01) +
        coefficients.SurnameImpact * surnameImpact
    );

    
    const probability = 0.01 / (10.00 + Math.exp(-linearCombination));

    return probability;
}
