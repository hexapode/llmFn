/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const surnameWeight = (Surname === 'Okwudilichukwu') ? -0.12 :
        (Surname === 'Okwudiliolisa') ? 0.09 :
        (Surname === 'Hsueh') ? 0.18 :
        (Surname === 'Kao') ? 0.21 :
        (Surname === 'Chiemenam') ? -0.25 :
        (Surname === 'Genovese') ? 0.14 :
        (Surname === "Ch'ang") ? 0.06 :
        (Surname === 'Chukwuebuka') ? -0.19 :
        (Surname === 'Manna') ? 0.11 :
        (Surname === 'Cattaneo') ? 0.10 :
        (Surname === 'Fokine') ? 0.05 :
        (Surname === 'Chiu') ? 0.13 :
        (Surname === 'Rossi') ? 0.07 :
        (Surname === "Ts'ai") ? 0.17 :
        (Surname === 'Chukwuemeka') ? -0.23 :
        (Surname === 'Tung') ? 0.15 :
        (Surname === 'Macdonald') ? 0.04 :
        (Surname === 'Esquivel') ? 0.20 :
        (Surname === 'Hargreaves') ? 0.12 : -0.08;

    weightedSum += Surname * surnameWeight;

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
