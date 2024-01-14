/** // 0.7452422564015032 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15661075, Surname=T'ien, CreditScore=553, Geography=Spain, Gender=Male, Age=35.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=92916.35.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.004;
    const ageWeight = 0.25;
    const tenureWeight = 0.02;
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * tenureWeight +
        (IsActiveMember === 1 ? 0.12 : 0.88);
        
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
