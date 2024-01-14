/** // 0.5498453324711743 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: -0.12,
        Age: 0.08,
        Tenure: -0.10,
        NumOfProducts: -0.45,
        HasCrCard: -0.20,
        IsActiveMember: -0.85,
        GeographyImpact: 0.35,
        GenderImpact: -0.15
    };

    let genderImpact = (Gender === "Male") ? 0.20 : -0.20;
    let geographyImpact = (Geography === "Germany") ? 0.25 : 0;

    let score = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact
    );

    let probability = 1 / (1 + Math.exp(-score));

    return probability;
}
