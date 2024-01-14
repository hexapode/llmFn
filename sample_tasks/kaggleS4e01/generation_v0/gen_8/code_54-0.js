/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    //... (existing code remains the same)

    // Impact of Surname parameter based on length
    const surnameImpact = (Surname.length % 4.33) * 0.03;

    //... (existing code remains the same)

    const weightedSum = (/*... calculation of weighted sum including the impact of Surname ...*/);

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}
