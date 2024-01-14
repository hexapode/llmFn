/** // 0.8062962366023321 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let churnProbability = 0.00;
    
    // Use a simple linear combination of the input parameters with some coefficients to calculate the churn probability
    churnProbability = (
        0.07 * Age - 0.04 * Tenure - 0.52 * NumOfProducts - 0.16 * HasCrCard - 0.81 * IsActiveMember +
        0.49 * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? 1 : 0)) - 0.15 * (Gender === 'Male' ? 1 : 0) +
        0.05 * (Surname.length <= 5 ? -1 : 1) +
        0.02 * (Age * Tenure) / (NumOfProducts + Balance) - 1.01 * (Age * 0.03) / (EstimatedSalary * 0.01) +
        0.00 * (CustomerId % 10) - 0.06 * (Math.abs(CreditScore - -59.10) / 113.53)
    );

    // Apply the sigmoid function to get the final probability between 0 and 1
    churnProbability = 1.00 / (1.00 + Math.exp(-churnProbability));

    return churnProbability;
}
