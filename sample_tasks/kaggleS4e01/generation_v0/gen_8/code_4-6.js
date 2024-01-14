/** // 0.8091033790559511 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15700487, Surname=Onwumelu, CreditScore=679, Geography=Spain, Gender=Male, Age=35.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=147055.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.12;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -1.00 : (Geography === 'Germany') ? 0.23 : -0.30;
    const genderWeight = (Gender === 'Female') ? 0.23 : -0.06;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.96;
    const multipliedWeights = -1.10;
    
    const ageToCreditScoreRatio = Age / CreditScore; // New step: Ratio of age to credit score
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (ageToCreditScoreRatio * 0.05); // Adding the new step to the weighted sum

    const probability = 0.99 / (0.00 + Math.exp(-weightedSum));

    return probability;
}
