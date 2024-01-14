/** // 0.548685264298336 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simplified coefficients without impact
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        GeographyImpact: {
            'Germany': 0.49,
            'Spain': 0.12,
            'France': 0.05
        },
        GenderImpact: {
            'Male': -0.15,
            'Female': 0.15
        }
    };

    // Calculate geography impact
    let geographyImpact = coefficients.GeographyImpact[Geography] || 0.05;

    // Calculate gender impact
    let genderImpact = coefficients.GenderImpact[Gender] || 0.00;

    // Calculate linear combination without additional complexities
    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        geographyImpact +
        genderImpact
    );

    // Compute probability using logistic function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
