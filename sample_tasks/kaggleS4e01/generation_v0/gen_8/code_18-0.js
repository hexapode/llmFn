/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing weights and calculations
    // ...
    
    const surnameWeights = {
        "Okwudilichukwu": 0.12,
        "Okwudiliolisa": 0.08,
        "Hsueh": -0.30,
        "Kao": -0.25,
        "Chiemenam": 0.10,
        "Genovese": -0.15,
        "Ch'ang": -0.20,
        "Chukwuebuka": 0.15,
        "Manna": -0.12,
        "Cattaneo": -0.18,
        "Fokine": 0.20,
        "Chiu": -0.09,
        "Rossi": -0.22,
        "Ts'ai": -0.27,
        "Chukwuemeka": 0.16,
        "Tung": -0.13,
        "Macdonald": -0.10,
        "Esquivel": -0.25,
        "Hargreaves": -0.07,
        "Ts'ui": -0.29
    };

    const surnameWeight = surnameWeights[Surname] || 0; // Default weight to 0 if surname is not found in the lookup table

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
        (surnameWeight); // Adding surname weight to the weighted sum
    
    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
