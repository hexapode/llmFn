/** // 0.5780046853705536 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.01,
        Age: 0.01,
        Tenure: -0.05,
        NumOfProducts: -0.73,
        HasCrCard: -0.37,
        IsActiveMember: -1.88,
        GeographyImpact: {
            Germany: 3.61,
            Spain: -1.04,
            France: -2.23
        },
        GenderImpact: {
            Male: 2.67,
            Female: -2.47
        }
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        (coefficients.GeographyImpact[Geography] || 0) +
        (coefficients.GenderImpact[Gender] || 0)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination)); // Using simple logistic function

    return probability;
}
