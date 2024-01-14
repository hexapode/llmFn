/** // 0.39694398126606467 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageFactor = 0.04;
    const geographyFactor = (Geography === 'Germany') ? 0.5 : 0;
    const genderFactor = (Gender === 'Female') ? 0.3 : 0;
    const tenureFactor = -0.02;
    const isActiveMemberFactor = -0.8;
    const productsFactor = -0.6;
    
    const weightedSum = CreditScore * 0.01 - Age * ageFactor + geographyFactor + genderFactor - Tenure * tenureFactor - Balance * 0.00002 - NumOfProducts * productsFactor - HasCrCard * 0.3 + IsActiveMember * isActiveMemberFactor + EstimatedSalary * 0.0000001;

    const probability = 1 / (1 + Math.exp(-weightedSum));
    return probability;
}
