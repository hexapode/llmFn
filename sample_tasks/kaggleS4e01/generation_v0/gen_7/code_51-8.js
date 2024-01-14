/** // 0.49883483452276234 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // You can implement a simplified logistic regression model to predict churn probability based on the input features. 
    // Define the coefficients for each feature
    const coefficients = {
        CreditScore: 0.02,
        Age: -0.05,
        Tenure: -0.08,
        Balance: 0.12,
        NumOfProducts: -0.15,
        HasCrCard: -0.18,
        IsActiveMember: -0.75,
        EstimatedSalary: 0.03,
        Geography_Germany: 0.35,
        Gender_Male: -0.2
    };

    // Calculate the linear combination of coefficients and input features
    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        (Geography === 'Germany' ? coefficients.Geography_Germany : 0) +
        (Gender === 'Male' ? coefficients.Gender_Male : 0)
    );

    // Calculate the probability using the logistic function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
