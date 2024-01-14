/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other weight calculations remain the same
    const surnameWeights = {
        'Okwudilichukwu': 0.12,
        'Okwudiliolisa': 0.10,
        'Hsueh': -0.08,
        'Kao': -0.05,
        'Chiemenam': 0.15,
        'Genovese': -0.07,
        'Ch\'ang': 0.09,
        'Chukwuebuka': 0.11,
        'Manna': -0.06,
        'Cattaneo': -0.09,
        'Fokine': -0.04,
        'Chiu': 0.07,
        'Rossi': -0.03,
        'Ts\'ai': 0.06,
        'Chukwuemeka': 0.13,
        'Tung': -0.02,
        'Macdonald': -0.11,
        'Esquivel': -0.10,
        'Hargreaves': -0.13,
        'Ts\'ui': -0.12
    };

    const surnameWeight = surnameWeights[Surname] || 0; // If surname not found, use 0 as default weight

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.00) +
        (CustomerId * customerIdWeight) +
        tenureBalanceInteractionWeight +
        (surnameWeight); // Include surname weight in the weighted sum

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
