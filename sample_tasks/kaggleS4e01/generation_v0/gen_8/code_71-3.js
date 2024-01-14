/** // 0.7156106513229837 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15785865, Surname=Milanesi, CreditScore=678, Geography=France, Gender=Female, Age=40.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=60956.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.08;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.08 : (Geography === 'Germany') ? 0.63 : (Geography === 'Spain') ? -0.07 : -0.08;
    const genderWeight = (Gender === 'Female') ? 0.48 : 0.00;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.85;
    const multipliedWeights = -1.43;
    const novelVariable = (NumOfProducts * 0.12) + (HasCrCard * 0.20) - (Age * 0.10);
    const weightedSum = (CreditScore * creditScoreWeight) + (Age * ageWeight) + (Balance * balanceWeight) + (geographyWeight) + (genderWeight) + (Tenure * tenureWeight) + (IsActiveMember * isActiveMemberWeight) + (NumOfProducts * multipliedWeights) + novelVariable;
    
    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));
    return probability;
}

console.log(PredictExited(15785865, 'Milanesi', 678, 'France', 'Female', 40.0, 5, 0.0, 2, 1.0, 0.0, 60956.85));
