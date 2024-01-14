/** // 0.7164490288698458 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simplified coefficients for impact calculation
    const coefficients = {
        Age: -0.01,
        Tenure: -0.05,
        NumOfProducts: -0.62,
        HasCrCard: -0.35,
        IsActiveMember: -1.72,
        GeographyImpact: {
            'Germany': 0.46,
            'Spain': -0.21,
            'France': -0.22
        },
        GenderImpact: {
            'Male': -0.21,
            'Female': 0.21
        }
    };

    let geographyImpact = coefficients.GeographyImpact[Geography];
    let genderImpact = coefficients.GenderImpact[Gender];
    let balanceNumProductsRatio = Balance / NumOfProducts;

    // Linear combination calculation
    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        geographyImpact +
        genderImpact
        // Add other parameters as needed
    );

    // Calculate probability using logistic function
    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
