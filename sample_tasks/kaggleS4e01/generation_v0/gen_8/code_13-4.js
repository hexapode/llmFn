/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)
    
    const surnameWeight = 
        (Surname === 'Okwudilichukwu') ? 0.15 :
        (Surname === 'Okwudiliolisa') ? 0.12 :
        (Surname === 'Hsueh') ? -0.08 :
        (Surname === 'Kao') ? -0.10 :
        (Surname === 'Chiemenam') ? 0.25 :
        (Surname === 'Genovese') ? -0.05 :
        (Surname === "Ch'ang") ? 0.07 :
        (Surname === 'Chukwuebuka') ? 0.18 :
        (Surname === 'Manna') ? 0.13 :
        (Surname === 'Cattaneo') ? -0.09 :
        (Surname === 'Fokine') ? -0.07 :
        (Surname === 'Chiu') ? 0.08 :
        (Surname === 'Rossi') ? -0.11 :
        (Surname === "Ts'ai") ? 0.06 :
        (Surname === 'Chukwuemeka') ? 0.20 :
        (Surname === 'Tung') ? -0.12 :
        (Surname === 'Macdonald') ? -0.14 :
        (Surname === 'Esquivel') ? 0.10 :
        (Surname === 'Hargreaves') ? -0.06 :
        (Surname === "Ts'ui") ? 0.09 : 0.00;

    let weightedSum = // ... (previous weighted sum calculation)

    weightedSum += surnameWeight;

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
