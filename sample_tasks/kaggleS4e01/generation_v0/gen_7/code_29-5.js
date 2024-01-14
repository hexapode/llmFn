/** // 0.5594602119868176 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.04,
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        GeographyImpact: {
            'Germany': 0.49,
            'Spain': 0.12,
            'France': 0.05
        }
    };

    let surnameImpact = Surname.length <= 5 ? -0.09 : 1.28;

    let geographyImpact = coefficients.GeographyImpact[Geography] || 0.00;

    let genderImpact = Gender === 'Male' ? 0.20 : -0.10;

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

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    return probability;
}
