/** // 0.8217594480794294 //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.06,
        Balance: 0.00,
        NumOfProducts: -0.39,
        HasCrCard: -0.16,
        IsActiveMember: -0.84,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.40, 
        GenderImpact: -0.15, 
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,  
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.29; 
    } else {
        surnameImpact = 1.28;
    }

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit; 

    // New computation step using the Surname parameter
    if (Surname === 'Okwudilichukwu' || Surname === 'Okwudiliolisa' || Surname === 'Chiemenam' || Surname === 'Chukwuebuka' || Surname === "Chukwuemeka") {
        surnameImpact = 1.50;
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.90) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 2.11 : -1.10) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact
    );

    const probability = 0.05 / (11.11 + Math.exp(-linearCombination));

    return probability;
}
