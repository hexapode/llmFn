/** // 0.8183235860704219 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15686917, Surname=Page, CreditScore=633, Geography=Spain, Gender=Female, Age=40.0, Tenure=10, Balance=150507.21, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=84699.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.42 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.31 : -0.11;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.71;
    const numOfProductsWeight = -0.51;
    const salaryWeight = 0.000003;

    const novelCombination = (CreditScore * Age) * (HasCrCard === 1 ? 0.52 : -0.34) * salaryWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        novelCombination;

    const probability = 0.89 / (0.01 + Math.exp(-weightedSum));

    return probability;
}
