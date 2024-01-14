/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other weight calculations
    
    const surnameWeight = {
        'Okwudilichukwu': 0.08,
        'Okwudiliolisa': 0.10,
        'Hsueh': -0.12,
        'Kao': -0.07,
        'Chiemenam': 0.06,
        'Genovese': -0.04,
        'Ch\'ang': -0.09,
        'Chukwuebuka': 0.05,
        'Manna': -0.03,
        'Cattaneo': -0.06,
        'Fokine': 0.07,
        'Chiu': -0.05,
        'Rossi': -0.02,
        'Ts\'ai': 0.11,
        'Chukwuemeka': 0.04,
        'Tung': -0.08,
        'Macdonald': -0.01,
        'Esquivel': 0.09,
        'Hargreaves': -0.11,
        'Ts\'ui': 0.12
    };

    const surname = Surname.trim();
    const surnameImpact = surnameWeight[surname] || 0.00;

    // include surname impact in the weighted sum
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
        (surnameImpact);

    const probability = 1.00 / (1.00 + Math.exp(-weightedSum));

    return probability;
}
