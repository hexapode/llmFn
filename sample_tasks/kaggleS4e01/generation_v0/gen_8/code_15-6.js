/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other weights and factors remain the same

    const commonSurnames = ["Okwudilichukwu", "Okwudiliolisa", "Hsueh", "Kao", "Chiemenam"];
    const uncommonSurnameWeight = -0.25; // Adjust the weight based on the impact of common vs. uncommon surnames

    const surnameWeight = (commonSurnames.includes(Surname)) ? 0.15 : uncommonSurnameWeight;

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... other weighted sum computations remain the same
        + (Surname * surnameWeight); // Include the Surname parameter in the weighted sum calculation

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
