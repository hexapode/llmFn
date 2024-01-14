/** // 0.6131668008984165 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.6 : (Geography === 'France') ? -0.1 : -0.2;
    const genderImpact = (Gender === 'Female') ? 0.5 : 0;
    const memberInactiveImpact = (IsActiveMember === 0) ? 0.8 : 0;
    const productsImpact = (NumOfProducts < 3) ? 1.5 : -4;

    const weightedSum = CreditScore * 0.01 + Age * 0.1 + Tenure * 0.01 + Balance * 0.001 +
        geographyImpact + genderImpact + memberInactiveImpact + productsImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));
    return probability;
}
