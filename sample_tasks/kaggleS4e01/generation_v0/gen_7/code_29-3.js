/** // 0.7403816462600173 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        GeographyImpact: {
            Germany: 0.49,
            Spain: 0.12,
            France: 0.05
        },
        GenderImpact: {
            Male: -1.07,
            Female: 2.06
        }
    };

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact[Geography] +
        coefficients.GenderImpact[Gender]
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
