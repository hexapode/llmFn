/** // 0.630575066084833 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15661162, Surname=Maclean, CreditScore=715, Geography=France, Gender=Female, Age=40.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=158043.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.004;
    const ageWeight = 0.02;
    const balanceWeight = 0.0001;
    const genderWeight = (Gender === 'Female') ? 0.26 : -0.08;
    const tenureWeight = 0.003;
    const isActiveMemberWeight = -0.25;
    const estimatedSalaryWeight = 0.0000003;
    
    const novelCombination = (CreditScore * Age) * estimatedSalaryWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        novelCombination;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
