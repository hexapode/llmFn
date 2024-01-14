/** // 0.6653809180996118 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15572294, Surname=K'ung, CreditScore=512, Geography=Spain, Gender=Female, Age=48.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=134876.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.003;
    const ageWeight = 0.02;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.2 : (Geography === 'Germany') ? 0.4 : -0.1;
    const genderWeight = (Gender === 'Female') ? 0.3 : -0.1;
    const tenureWeight = 0.03;
    const isActiveMemberWeight = -0.7;
    const multipliedWeights = -0.5;
    const hasCrCardWeight = -0.4;
    const salaryWeight = 0.000001;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * salaryWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
