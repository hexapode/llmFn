/** // 0.5953257810506891 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreEffect = CreditScore * 0.005;
    const ageEffect = Age * 0.01;
    const balanceEffect = Balance * 0.00005;
    const geographyEffect = (Geography === 'Germany') ? 0.1 : 0;
    const genderEffect = (Gender === 'Female') ? 0.05 : 0;
    
    const weightedSum = creditScoreEffect + ageEffect + balanceEffect + geographyEffect + genderEffect - 1.5;
    
    const churnProbability = 1 / (1 + Math.exp(-weightedSum));

    return churnProbability;
}
