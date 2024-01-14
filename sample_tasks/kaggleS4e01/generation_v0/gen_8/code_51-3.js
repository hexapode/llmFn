/** // 0.6174690745829265 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.01;
    const ageWeight = 0.05;
    const balanceWeight = 0.02;
    const geographyWeight = (Geography === 'Germany') ? 0.1 : -0.1; 
    const genderWeight = (Gender === 'Female') ? 0.3 : 0;
    const tenureWeight = -0.05;
    const isActiveMemberWeight = -0.5;
    
    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
