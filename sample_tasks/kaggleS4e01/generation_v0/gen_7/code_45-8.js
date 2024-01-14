/** // 0.6463655260223984 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination = 0.00;

    // Age and Balance impact
    const ageBalanceImpact = Age * Balance * (IsActiveMember === 1 ? 2.00 : 1.00);

    // Geography impact
    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.36;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.05;
    } else {
        geographyImpact = -2.28;
    }

    // Gender impact
    const genderImpact = (Gender === 'Male' ? -1.00 : 1.00);

    // Calculate linear combination
    linearCombination = 0.04 * Age + 0.02 * Balance - 0.60 * NumOfProducts - 0.36 * HasCrCard - 1.70 * IsActiveMember + 0.46 * geographyImpact + genderImpact;

    // Sigmoid function to get the probability of churning
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
