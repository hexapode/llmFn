/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)
    
    // Map of surnames to weights
    const surnameWeights = {
        "Okwudilichukwu": 0.25,
        "Okwudiliolisa": -0.05,
        "Hsueh": 0.12,
        "Kao": -0.08,
        "Chiemenam": 0.17,
        "Genovese": -0.10,
        "Ch'ang": 0.08,
        "Chukwuebuka": 0.20,
        "Manna": -0.15,
        "Cattaneo": 0.05,
        "Fokine": -0.12,
        "Chiu": 0.10,
        "Rossi": -0.07,
        "Ts'ai": 0.13,
        "Chukwuemeka": 0.22,
        "Tung": -0.09,
        "Macdonald": -0.06,
        "Esquivel": -0.13,
        "Hargreaves": -0.04,
        "Ts'ui": 0.15
    };

    const surnameWeight = surnameWeights[Surname] || 0;  // Get weight for the provided surname, default to 0 if not found

    // Update the weighted sum by adding the weight corresponding to the provided Surname
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
        surnameWeight;  // Add the weight based on Surname
    
    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
