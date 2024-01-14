/** // 0.5758957771107842 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: -0.06,
        Age: 0.08,
        Tenure: -0.05,
        NumOfProducts: -0.25,
        HasCrCard: -0.20,
        IsActiveMember: -0.80,
        GeographyImpact: 0.35,
        GenderImpact: -0.15,
        SurnameImpact: 0.02
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.5 : (Geography === 'Spain' ? -0.4 : -0.3)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.3 : -0.3) +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.5 : 0.4)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
