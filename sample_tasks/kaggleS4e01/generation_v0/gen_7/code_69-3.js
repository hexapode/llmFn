/** // 0.6031769120351238 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: -0.06,
        Age: 0.07,
        Tenure: -0.10,
        NumOfProducts: -0.93,
        HasCrCard: -0.35,
        IsActiveMember: -1.50,
        GeographyImpact: 0.35,
        GenderImpact: -0.20
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : -2)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    return probability;
}
