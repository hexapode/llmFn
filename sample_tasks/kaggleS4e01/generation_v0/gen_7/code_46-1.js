/** // 0.6850987843296914 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let churnProbability = 0.0;

    // Calculate the impact of Geography
    let geographyImpact = 0.0;
    if (Geography === 'Germany') {
        geographyImpact = 0.3;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.2;
    }

    // Calculate the impact of Gender
    let genderImpact = (Gender === 'Male') ? 0.1 : -0.1;

    // Calculate the impact of Age
    let ageImpact = -0.01 * Age;

    // Calculate the impact of Number of Products
    let numProductsImpact = -0.5 * NumOfProducts;

    // Calculate the impact of Active Membership
    let activeMemberImpact = -1.7 * IsActiveMember;

    // Calculate the impact of Balance
    let balanceImpact = 0.0; // Include calculation for balance impact

    // Calculate the overall linear combination
    let linearCombination = geographyImpact + genderImpact + ageImpact + numProductsImpact + activeMemberImpact + balanceImpact;

    // Calculate the probability of churn using the sigmoid function
    churnProbability = 1.0 / (1.0 + Math.exp(-linearCombination));

    return churnProbability;
}
