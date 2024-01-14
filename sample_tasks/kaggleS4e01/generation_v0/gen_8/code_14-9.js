/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const surnameWeights = {
        "Okwudilichukwu": 0.15,
        "Okwudiliolisa": 0.25,
        "Hsueh": 0.05,
        "Kao": 0.08,
        "Chiemenam": 0.18,
        "Genovese": 0.12,
        "Ch'ang": 0.11,
        "Chukwuebuka": 0.16,
        "Manna": 0.09,
        "Cattaneo": 0.14,
        "Fokine": 0.07,
        "Chiu": 0.10,
        "Rossi": 0.20,
        "Ts'ai": 0.06,
        "Chukwuemeka": 0.17,
        "Tung": 0.13,
        "Macdonald": 0.22,
        "Esquivel": 0.19,
        "Hargreaves": 0.21,
        "Ts'ui": 0.23
    };

    const surnameWeight = surnameWeights[Surname] || 0.00;

    // ... (other weights and calculations)

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
        surnameWeight; // Including surnameWeight in the weighted sum

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
