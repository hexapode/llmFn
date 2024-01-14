/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // We can use the first letter of the surname to determine if the customer is more likely to churn
    const surnameFirstLetter = Surname.charAt(0).toLowerCase();
    const surnameWeight = (surnameFirstLetter === 'a' || surnameFirstLetter === 'c' || surnameFirstLetter === 'e') ? 0.1 : 
                          (surnameFirstLetter === 'h' || surnameFirstLetter === 'm' || surnameFirstLetter === 'r') ? -0.1 : 0.0;

    // Other weights and calculations remain the same as before

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
        (EstimatedSalary * 0.0) + 
        (CustomerId * customerIdWeight) +
        (surnameWeight);

    const probability = 1.0 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
