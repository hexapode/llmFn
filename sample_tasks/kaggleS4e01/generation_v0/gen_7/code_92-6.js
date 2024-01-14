/** // 0.49964221712245543 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.01,
        Age: 0.02,
        Tenure: -0.05,
        Balance: 0.03,
        NumOfProducts: -0.1,
        HasCrCard: -0.2,
        IsActiveMember: -0.3,
        EstimatedSalary: 0.01,
        GeographyImpact: 0.2,
        GenderImpact: -0.1,
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
        (Geography === 'Germany' ? coefficients.GeographyImpact : 0.0) +
        (Gender === 'Male' ? coefficients.GenderImpact : 0.0)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
