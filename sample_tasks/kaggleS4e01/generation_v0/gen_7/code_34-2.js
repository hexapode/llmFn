/** // 0.546772551582815 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.78,
        GeographyImpact: {
            'Germany': 0.39,
            'Spain': -0.50,
            'France': -0.30
        },
        GenderImpact: -0.20,
    };

    let geographyImpact = coefficients.GeographyImpact[Geography] || 0;
    let genderImpact = (Gender === 'Male') ? 0.11 : -0.11;

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

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));
    return probability;
}
