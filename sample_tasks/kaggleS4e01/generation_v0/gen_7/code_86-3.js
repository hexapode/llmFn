/** // 0.5288960558346608 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.08,
        Tenure: -0.02,
        NumOfProducts: -0.15,
        HasCrCard: -0.12,
        IsActiveMember: -0.45,
        GeographyImpact: 0.30,
        GenderImpact: -0.18
    };

    let linearCombination =
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.40 : (Geography === 'Spain' ? 0.15 : 0.10)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.25 : -0.20);

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    
    return probability;
}
