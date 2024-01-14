/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.51,
        HasCrCard: -0.16,
        IsActiveMember: -0.82,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
    };

    const surnameImpactValues = {
        Okwudilichukwu: 0.12,
        Okwudiliolisa: 0.09,
        Hsueh: -0.04,
        Kao: 0.07,
        Chiemenam: 0.14,
        Genovese: 0.05,
        "Ch'ang": -0.06,
        Chukwuebuka: 0.08,
        Manna: 0.10,
        Cattaneo: 0.06,
        Fokine: 0.03,
        Chiu: -0.11,
        Rossi: -0.07,
        Ts'ai: 0.04,
        Chukwuemeka: 0.13,
        Tung: -0.05,
        Macdonald: -0.09,
        Esquivel: 0.11,
        Hargreaves: -0.08,
        "Ts'ui": 0.02,
    };

    let surnameImpact = surnameImpactValues[Surname] || 0.00;

    // ... (rest of the code remains the same)

    let linearCombination = (
        // ... (other parameter calculations)
        coefficients.SurnameImpact * surnameImpact +
        // ... (rest of the linear combination calculation)
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
