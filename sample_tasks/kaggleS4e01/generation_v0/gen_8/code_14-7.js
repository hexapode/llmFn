/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const surnameWeight = (Surname === 'Okwudilichukwu') ? 0.12 :
        (Surname === 'Okwudiliolisa') ? 0.08 :
        (Surname === 'Hsueh') ? -0.05 :
        (Surname === 'Kao') ? 0.03 :
        (Surname === 'Chiemenam') ? 0.18 :
        (Surname === 'Genovese') ? -0.09 :
        (Surname === 'Ch\'ang') ? 0.15 :
        (Surname === 'Chukwuebuka') ? 0.10 :
        (Surname === 'Manna') ? -0.07 :
        (Surname === 'Cattaneo') ? -0.11 :
        (Surname === 'Fokine') ? 0.06 :
        (Surname === 'Chiu') ? 0.04 :
        (Surname === 'Rossi') ? -0.14 :
        (Surname === 'Ts\'ai') ? 0.05 :
        (Surname === 'Chukwuemeka') ? 0.09 :
        (Surname === 'Tung') ? -0.06 :
        (Surname === 'Macdonald') ? -0.10 :
        (Surname === 'Esquivel') ? -0.08 :
        (Surname === 'Hargreaves') ? -0.12 :
        (Surname === 'Ts\'ui') ? 0.07 : 0.00;

    weightedSum += (surnameWeight * 0.05); // Include surname weight in the calculation

    // ... (remaining code remains unchanged)

    return probability;
}
