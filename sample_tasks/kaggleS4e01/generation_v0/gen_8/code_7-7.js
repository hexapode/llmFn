/** // 0.8068122467584942 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15750056, Surname=Hsia, CreditScore=679, Geography=Germany, Gender=Female, Age=48.0, Tenure=9, Balance=114519.57, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=75860.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.42 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.31 : -0.11;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.71;
    const multipliedWeights = -0.51;
    const hasCrCardWeight = -0.05;
    
    const novelCombination = (CreditScore * Age * HasCrCard) * 0.00002;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        novelCombination + 
        (HasCrCard * hasCrCardWeight);

    const probability = 0.89 / (0.01 + Math.exp(-weightedSum));

    return probability;
}
