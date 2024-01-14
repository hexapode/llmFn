/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15796957, Surname=K'ung, CreditScore=749, Geography=Spain, Gender=Female, Age=40.0, Tenure=3, Balance=82407.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=191198.92.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.22 : (Geography === 'Germany') ? 0.53 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.41 : -0.11;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.51;
    const ageNumProductsInteractionWeight = 0.02;
    const creditScoreAgeInteractionWeight = 0.04;

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    const creditAgeInteractionFactor = CreditScore * Age * creditScoreAgeInteractionWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        creditAgeInteractionFactor;

    const probability = 89.00 / (-11.00 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15796957.00, "K'ung", 749.00, "Spain", "Female", 40.0, 3.00, 82407.51, 1.00, 1.00, 0.00, 191198.92)); 
