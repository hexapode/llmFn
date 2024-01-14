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
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
    };

    const surnameImpactLookup = {
        Okwudilichukwu: 0.20,
        Okwudiliolisa: 0.15,
        Hsueh: 0.08,
        Kao: 0.12,
        Chiemenam: 0.25,
        Genovese: 0.05,
        'Ch\'ang': 0.18,
        Chukwuebuka: 0.22,
        Manna: 0.09,
        Cattaneo: 0.13,
        Fokine: 0.11,
        Chiu: 0.10,
        Rossi: 0.06,
        'Ts\'ai': 0.17,
        Chukwuemeka: 0.24,
        Tung: 0.14,
        Macdonald: 0.07,
        Esquivel: 0.16,
        Hargreaves: 0.19,
        'Ts\'ui': 0.21,
    };

    let surnameImpact = surnameImpactLookup[Surname] || 0.00;

    // ... Rest of the function remains the same
}
