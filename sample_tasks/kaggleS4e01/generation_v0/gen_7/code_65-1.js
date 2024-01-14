/** // 0.480292392313767 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.03,
        Age: -0.1,
        Tenure: -0.05,
        NumOfProducts: -0.7,
        HasCrCard: -0.3,
        IsActiveMember: -1.5,
        GeographyImpact: 0.4,
        GenderImpact: -0.2,
    };

    let linearCombination =
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.5 : Geography === 'Spain' ? -0.4 : -0.4) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.7 : -0.7);

    const probability = 1 / (1 + Math.exp(-linearCombination));
    return probability;
}
