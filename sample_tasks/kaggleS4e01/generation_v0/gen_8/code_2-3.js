/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15812210, Surname=Yashina, CreditScore=497, Geography=Germany, Gender=Female, Age=42.0, Tenure=8, Balance=111537.23, NumOfProducts=4, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=9497.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.01;
    const ageWeight = 0.15;
    const balanceWeight = 0.00002;
    const isActiveMemberWeight = 0.7;
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight + 
        (IsActiveMember * isActiveMemberWeight);

    const probability = Math.min(0.99, Math.max(0.01, 1 / (1 + Math.exp(-weightedSum))));

    return probability;
}
