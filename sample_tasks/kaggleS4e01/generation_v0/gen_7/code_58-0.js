/** // 0.7217194831485387 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        Age: -0.01,
        Tenure: -0.05,
        NumOfProducts: -0.62,
        HasCrCard: -0.35,
        IsActiveMember: -1.72,
        GeographyImpact: {
            'Germany': 0.46,
            'Spain': -0.52,
            'France': -0.58
        },
        GenderImpact: {
            'Male': -0.21,
            'Female': 0.21
        }
    };

    let geographyImpact = coefficients.GeographyImpact[Geography] || 0.00;
    let genderImpact = coefficients.GenderImpact[Gender] || 0.00;

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        geographyImpact +
        genderImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
