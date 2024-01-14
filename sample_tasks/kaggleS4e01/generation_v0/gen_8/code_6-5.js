/** // 0.5258589623494955 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Weights for different features
    const creditScoreWeight = 0.05;
    const ageWeight = 0.1;
    const geographyWeight = (Geography === 'Germany') ? 0.2 : 0;
    const genderWeight = (Gender === 'Female') ? 0.1 : 0;
    const isActiveMemberWeight = -0.2;

    // Calculating the weighted sum
    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        geographyWeight +
        genderWeight +
        (IsActiveMember * isActiveMemberWeight);

    // Sigmoid function to get the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
