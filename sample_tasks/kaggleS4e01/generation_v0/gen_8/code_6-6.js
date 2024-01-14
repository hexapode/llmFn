/** // 0.8096129098770308 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15594928, Surname=Hsu, CreditScore=654, Geography=Spain, Gender=Male, Age=36.0, Tenure=8, Balance=135369.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=140133.22.
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
    
    // Adding a novel combination of variables
    const novelCombination = (CreditScore * Age) * 0.00005;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        novelCombination;

    const probability = 0.89 / (0.01 + Math.exp(-weightedSum));

    return probability;
}
