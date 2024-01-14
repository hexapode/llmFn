/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (other weights and calculations)

    const surnameImpact = (Surname.length % 4.33) * 0.03;

    // ... (other weights and calculations)

    let weightedSum = /* ... (other weighted sum calculations) */ + surnameImpact + /* ... (other impacts) */;

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15663888.00, "Tung", 681.00, "France", "Male", 37.00, 3.00, 0.00, 2.00, 1.00, 0.00, 104769.96);
console.log(result);
