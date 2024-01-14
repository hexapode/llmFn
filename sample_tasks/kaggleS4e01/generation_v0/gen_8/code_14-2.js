/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const culturalBackgroundWeight = (Surname.includes('Okwudili') || Surname.includes('Chukwu') || Surname.includes('Chiem')) ? -0.3 : 
                                       (Surname.includes('Hsueh') || Surname.includes('Kao') || Surname.includes('Tung')) ? 0.1 : 
                                       (Surname.includes('Genovese') || Surname.includes('Rossi') || Surname.includes('Cattaneo')) ? 0.2 : 
                                       (Surname.includes('Ch\'ang') || Surname.includes('Chiu') || Surname.includes('Ts\'ui')) ? 0.05 : 
                                       (Surname.includes('Manna') || Surname.includes('Fokine') || Surname.includes('Esquivel')) ? -0.15 : 0.0;

    // ... (other weights and calculations remain the same)

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
        culturalBackgroundWeight; // Include the cultural background weight

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
