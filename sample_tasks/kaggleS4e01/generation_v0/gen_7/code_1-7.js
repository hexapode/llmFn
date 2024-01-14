/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)
    
    // One-hot encoding for Surname parameter
    let surnameValue = 0;
    if (Surname === 'Okwudilichukwu') {
        surnameValue = 1;
    } else if (Surname === 'Okwudiliolisa') {
        surnameValue = 2;
    } else if (Surname === 'Hsueh') {
        surnameValue = 3;
    }
    // ... (similar checks for other surnames)

    // Include encoded Surname parameter in the linear combination
    const weightSurname = [0.03, 0.04, 0.02, ...];  // Weights for each possible surname value
    const surnameLinearCombination = weightSurname[surnameValue - 1];  // Subtract 1 to map to array index

    const finalLinearCombination = linearCombination + surnameLinearCombination;

    const probability = 1 / (1 + Math.exp(-finalLinearCombination));

    return probability;
}
