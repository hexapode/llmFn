
// We will use a simple logistic regression model to predict customer churn based on the given input parameters.
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's define the coefficients for our logistic regression model
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.02,
        Balance: 0.08,
        NumOfProducts: 0.1,
        IsActiveMember: -0.2,
        EstimatedSalary: 0.0001
    };

    // Apply sigmoid function to predict the probability of customer churn
    const z = 
        coefficients.CreditScore * CreditScore + 
        coefficients.Age * Age + 
        coefficients.Balance * Balance + 
        coefficients.NumOfProducts * NumOfProducts + 
        coefficients.IsActiveMember * IsActiveMember + 
        coefficients.EstimatedSalary * EstimatedSalary;
    const probabilityChurn = 1 / (1 + Math.exp(-z));

    return probabilityChurn;
}
