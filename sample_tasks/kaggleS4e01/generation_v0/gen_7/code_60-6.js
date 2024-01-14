/** // 0.7700660779477233 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Age and NumOfProducts are negatively correlated with churn
    let linearCombination = 0.5 * Age - 0.8 * NumOfProducts;

    // Germany customers are more likely to churn
    if (Geography === 'Germany') {
        linearCombination += 0.3;
    }

    // Inactive members and customers with credit card are more likely to churn
    linearCombination -= 1.2 * IsActiveMember + 0.6 * HasCrCard;

    // Higher credit score and estimated salary reduce churn probability
    linearCombination += 0.004 * CreditScore + 0.0000002 * EstimatedSalary;

    // Male customers are more likely to churn
    if (Gender === 'Male') {
        linearCombination += 0.5;
    }

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
