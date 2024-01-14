/** // 0.5742772112443133 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.05;
    const ageWeight = 0.1;
    const balanceWeight = 0.02;
    const geographyWeight = (Geography === 'Germany') ? 0.1 : 0;
    const genderWeight = (Gender === 'Female') ? 0.05 : 0;
    const isActiveMemberWeight = -0.1;
    
    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (IsActiveMember * isActiveMemberWeight) -
        2.5;

    return 1 / (1 + Math.exp(-weightedSum));
}
