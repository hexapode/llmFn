/** // 0.8206481380037748 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = 
        -0.21 * (Geography === 'France') +
        0.59 * (Geography === 'Germany') +
        -0.19 * (Geography === 'Spain') +
        0.42 * (Gender === 'Female') +
        -0.10 * (Gender === 'Male') +
        -0.01 * Tenure -
        0.91 * IsActiveMember +
        -1.51 * NumOfProducts -
        0.15 * HasCrCard +
        0.06 * Age +
        0.02 * Age * NumOfProducts +
        (Surname.length % 4.18) * 0.02 +
        Balance / (Age + 1) * 0.00 -
        0.46;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
