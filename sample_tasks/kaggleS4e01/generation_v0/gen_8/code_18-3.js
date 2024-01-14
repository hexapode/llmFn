/** // 0.6814378136238002 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.004,
        Age: 0.05,
        Balance: 0.0001,
        Geography: {
            'France': -0.2,
            'Germany': 0.6,
            'Spain': -0.2
        },
        Gender: {
            'Female': 0.4,
            'Male': -0.1
        },
        Tenure: -0.05,
        IsActiveMember: -0.8,
        NumOfProducts: -1,
        HasCrCard: -0.15,
        EstimatedSalary: 0.000005
    };

    let weightedSum = coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Balance * Balance +
        coefficients.Geography[Geography] +
        coefficients.Gender[Gender] +
        coefficients.Tenure * Tenure +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.EstimatedSalary * EstimatedSalary;

    const probability = 1 / (1 + Math.exp(-weightedSum)); // Sigmoid function

    return probability;
}
