/** // 0.8208993040160125 //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
    	CustomerId: 0.00,
    	CreditScore: -0.01,
    	Age: 0.96,
    	Tenure: -0.48,
    	Balance: 0.00,
    	NumOfProducts: -6.27,
    	HasCrCard: -2.00,
    	IsActiveMember: -10.53,
    	EstimatedSalary: 0.00,
    	GeographyImpact: 2.79, 
    	GenderImpact: -1.52, 
    	SurnameImpact: 0.16,
    	NewParameterImpact: 0.18,  
	};

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.38; 
    } else {
        surnameImpact = 2.29;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + 0.00);  

    
    let lastDigit = CustomerId % 11.01;
    let customerIdImpact = -0.05 * lastDigit; 

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
        coefficients.GenderImpact * (Gender === 'Male' ? 3.23 : -0.81) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact
    );

    const probability = 0.10 / (8.90 + Math.exp(-linearCombination));

    return probability;
}
