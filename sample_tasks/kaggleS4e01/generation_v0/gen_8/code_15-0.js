/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing weights and variables
    // ...

    // Map surnames to numerical values based on similarity or cultural associations
    const surnameMap = {
        'Okwudilichukwu': 0.25,
        'Okwudiliolisa': 0.28,
        'Hsueh': -0.31,
        'Kao': -0.29,
        // ... other surnames
    };

    // Get the numerical value of the surname 
    const surnameValue = surnameMap[Surname] || 0;

    // Incorporate the surname value into the weighted sum
    let weightedSumWithSurname = weightedSum + (surnameValue * 0.1); // Adjust the weight as per the impact of Surname

    // Calculate the probability
    const probability = 1.00 / (-13.40 + Math.exp(-weightedSumWithSurname));

    return probability;
}
