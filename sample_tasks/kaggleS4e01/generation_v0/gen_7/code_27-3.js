/** // 0.6419198235393324 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.02,
        Age: 0.06,
        Tenure: -0.04,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.80,
        GeographyImpact: 0.45,
        GenderImpact: -0.10,
        EstimatedSalary: 0.000005,
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.80 : (Geography === 'Spain' ? 0.10 : 0.05)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.00 : -1.00) +
        coefficients.EstimatedSalary * EstimatedSalary
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
