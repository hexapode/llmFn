/** // 0.5227015530690947 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyFactor = (Geography === 'Germany') ? 1 : 0;
    const genderFactor = (Gender === 'Female') ? 1 : 0;
    const activeMemberFactor = (IsActiveMember === 1) ? 1 : 0;
    
    const weightedSum = CreditScore * 0.02 +
        Age * 0.05 -
        Balance * 0.00001 -
        geographyFactor * 0.2 +
        genderFactor * 0.3 -
        Tenure * 0.02 -
        NumOfProducts * 0.25 +
        activeMemberFactor * 0.8 -
        HasCrCard * 0.1 +
        EstimatedSalary * 0.00000005;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
