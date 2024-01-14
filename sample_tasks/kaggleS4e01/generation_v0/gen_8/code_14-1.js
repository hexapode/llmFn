/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const surnameWeights = {
        "Okwudilichukwu": 0.12,
        "Okwudiliolisa": 0.09,
        "Hsueh": -0.05,
        "Kao": -0.08,
        "Chiemenam": 0.10,
        "Genovese": -0.06,
        "Ch'ang": -0.03,
        "Chukwuebuka": 0.11,
        "Manna": -0.07,
        "Cattaneo": -0.04,
        "Fokine": -0.02,
        "Chiu": -0.01,
        "Rossi": -0.05,
        "Ts'ai": 0.08,
        "Chukwuemeka": 0.13,
        "Tung": -0.09,
        "Macdonald": -0.11,
        "Esquivel": -0.03,
        "Hargreaves": -0.07,
        "Ts'ui": 0.06
    };

    const surnameFactor = surnameWeights[Surname] || 0;

    let weightedSum = // ... (same as before)

    weightedSum += (surnameFactor * 0.5); // Adjust the magnitude of the impact of surname

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
