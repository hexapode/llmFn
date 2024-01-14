/** // 0.8159061076184004 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15772467, Surname=Chiang, CreditScore=661, Geography=Germany, Gender=Female, Age=40.0, Tenure=3, Balance=118627.07, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=172363.66.
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
    const hasCrCardWeight = 0.15; // New weight based on HasCrCard parameter
    const estimatedSalaryWeight = 0.0000005; // New weight based on EstimatedSalary parameter
    
    const novelCombination = (CreditScore * Age) * 0.00;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (HasCrCard * hasCrCardWeight) + // Using HasCrCard parameter
        (EstimatedSalary * estimatedSalaryWeight) +  // Using EstimatedSalary parameter
        novelCombination;

    const probability = 0.89 / (0.01 + Math.exp(-weightedSum));

    return probability;
}
