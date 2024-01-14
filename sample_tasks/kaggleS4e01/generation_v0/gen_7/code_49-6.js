/** // 0.5831572315960484 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering some common factors that might impact the customer churn
    let linearCombination =
        (CreditScore * 0.01) +
        (Age * -0.1) +
        (Tenure * -0.05) +
        (Balance * 0.001) +
        (NumOfProducts * -0.5) +
        (HasCrCard * -0.3) +
        (IsActiveMember * -1.7) +
        (EstimatedSalary * 0.0001);

    // Adjusting based on Geography
    if (Geography === 'Germany') {
        linearCombination += 0.3;
    } else if (Geography === 'Spain') {
        linearCombination -= 0.3;
    } else {
        linearCombination -= 0.5;
    }

    // Adjusting based on Gender
    linearCombination += (Gender === 'Male' ? -0.2 : 0.1);

    // Adjusting based on Surname length
    linearCombination += (Surname.length <= 5 ? -0.2 : 0.1);

    // Normalizing probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
