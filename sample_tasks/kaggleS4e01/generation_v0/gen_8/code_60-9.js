/** // 0.6331390028208136 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyWeight = (Geography === 'Germany') ? 0.6 : (Geography === 'Spain') ? -0.1 : -0.05;
    const genderWeight = (Gender === 'Female') ? 0.43 : 0;
    const isActiveMemberWeight = -0.8;
    const numOfProductsWeight = (NumOfProducts < 3) ? -4 : 2;
    
    const weightedSum = CreditScore * 0.01 + Age * 0.1 + Tenure * -0.05 + Balance * 0.001 +
                       geographyWeight + genderWeight + isActiveMemberWeight + numOfProductsWeight +
                       HasCrCard * -0.1 + EstimatedSalary * 0.000001;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
