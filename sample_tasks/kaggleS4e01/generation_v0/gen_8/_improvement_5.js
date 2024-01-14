/* Best score: 0.8183854712038839 */


    /* Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15580912, Surname=McNeill, CreditScore=488, Geography=Germany, Gender=Male, Age=34.0, Tenure=5, Balance=154737.88, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=172638.13. */
    
    /** // 0.7651489400089272 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15580912, Surname=McNeill, CreditScore=488, Geography=Germany, Gender=Male, Age=34.0, Tenure=5, Balance=154737.88, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=172638.13.
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
    
    // Novel combination of CreditScore and Age
    const novelCombination = (CreditScore * Age) * 0.00;
    
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
