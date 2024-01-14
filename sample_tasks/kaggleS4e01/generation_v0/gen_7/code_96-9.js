/** // 0.5929371594091656 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: -0.1,
        Age: 0.05,
        Tenure: -0.05,
        Balance: 0.02,
        NumOfProducts: -0.3,
        HasCrCard: -0.2,
        IsActiveMember: -0.5,
        EstimatedSalary: 0.0001,
        GeographyImpact: 0.1,
        GenderImpact: -0.1
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
        (Geography === 'Germany' ? coefficients.GeographyImpact : 0) +
        (Gender === 'Male' ? coefficients.GenderImpact : 0)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
