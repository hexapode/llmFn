/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and computations)

    const surnameWeights = {
        "Okwudilichukwu": 0.08,
        "Okwudiliolisa": 0.12,
        "Hsueh": -0.15,
        "Kao": 0.10,
        "Chiemenam": 0.06,
        // ... (other surnames and their corresponding weights)
    };

    const surnameWeight = surnameWeights[Surname] || 0; // Default weight if surname is not found

    // Add the contribution of the surname to the weighted sum
    weightedSum += (surnameWeight * Surname.length);
    
    // ... (rest of the computations)

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
