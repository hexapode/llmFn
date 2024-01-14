/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.02,
        Age: -0.1,
        Tenure: -0.05,
        Balance: 0.0007,
        NumOfProducts: -0.7,
        HasCrCard: -0.4,
        IsActiveMember: -1.8,
        EstimatedSalary: 0.0002,
        GeographyImpact: 0.5,
        GenderImpact: -0.3
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.5 : (Geography === 'Spain' ? -1.2 : -1.1)) +
        coefficients.GenderImpact * (Gender === 'Male' ? -0.2 : 0.1)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
