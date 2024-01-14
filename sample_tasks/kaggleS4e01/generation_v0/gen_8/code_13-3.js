/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const surnameWeight = (Surname === 'Okwudilichukwu' || Surname === 'Okwudiliolisa' || Surname === 'Chukwuebuka' || Surname === 'Chiemenam' || Surname === 'Chukwuemeka') ? 0.20 :
        (Surname === 'Hsueh' || Surname === 'Kao' || Surname === 'Chi' || Surname === 'Ts'ai' || Surname === 'Ch'ang' || Surname === 'Ts'ui') ? 0.15 :
        (Surname === 'Genovese' || Surname === 'Rossi' || Surname === 'Cattaneo' || Surname === 'Fokine' || Surname === 'Manna' || Surname === 'Esquivel' || Surname === 'Macdonald') ? 0.10 :
        (Surname === 'Chiu' || Surname === 'Tung' || Surname === 'Hargreaves') ? 0.05 : 0.00;

    // ... (previous code)

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
        (Surname * surnameWeight);

    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));
    return probability;
}
