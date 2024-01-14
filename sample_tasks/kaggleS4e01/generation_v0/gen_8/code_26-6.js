/** // 0.6656509342671779 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15760456, Surname=Eberechukwu, CreditScore=731, Geography=France, Gender=Female, Age=62.0, Tenure=10, Balance=123711.73, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=171340.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0007;
    const ageWeight = 0.03;
    const balanceWeight = 0.00007;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.59 : -0.19;
    const genderWeight = (Gender === 'Female') ? 0.42 : -0.10;
    const tenureWeight = -0.03;
    const isActiveMemberWeight = -0.91;
    const numOfProductsWeight = -0.6;
    const hasCrCardWeight = -0.15;
    const estimatedSalaryWeight = 0.0000008;

    const interactionFactor = (Age * NumOfProducts + Balance) * 0.0000014;

    const weightedSum = (CreditScore * creditScoreWeight) +
                        (Age * ageWeight) +
                        (Balance * balanceWeight) +
                        geographyWeight +
                        genderWeight +
                        (Tenure * tenureWeight) +
                        (IsActiveMember * isActiveMemberWeight) +
                        (NumOfProducts * numOfProductsWeight) +
                        (HasCrCard * hasCrCardWeight) +
                        (EstimatedSalary * estimatedSalaryWeight) +
                        interactionFactor;

    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}
