/** // 0.8163340934537577 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
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
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -1.09; 
    } else {
        surnameImpact = 1.09;
    }

    // Extracting the last digit of the CustomerId
    let lastDigit = CustomerId % 10;

    let linearCombination = (
        coefficients.CustomerId * lastDigit + // Unique impact based on last digit of CustomerId
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
        coefficients.SurnameImpact * surnameImpact
    );

    
    const probability = 0.01 / (10.00 + Math.exp(-linearCombination));

    return probability;
}
