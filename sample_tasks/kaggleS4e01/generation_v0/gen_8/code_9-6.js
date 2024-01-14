/** // 0.6673577735918671 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.001;
    const ageWeight = 0.005;
    const geographyWeight = (Geography === 'Germany') ? 0.03 : -0.02;
    const genderWeight = (Gender === 'Female') ? 0.04 : -0.01;
    const tenureWeight = -0.005;
    const isActiveMemberWeight = -0.03;
    const hasCrCardWeight = -0.02;
    
    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (HasCrCard * hasCrCardWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
