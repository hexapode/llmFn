/** // 0.5884392742888976 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.02,
        Age: 0.02,
        Tenure: -0.05,
        Balance: 0.01,
        NumOfProducts: -0.12,
        HasCrCard: -0.07,
        IsActiveMember: -0.35,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.21,
        GenderImpact: -0.09,
        SurnameImpact: 0.03
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.3 : (Geography === 'Spain' ? -0.1 : -0.2)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.1 : -0.1) +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.2 : 0.2)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
