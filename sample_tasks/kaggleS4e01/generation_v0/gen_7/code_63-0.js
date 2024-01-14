/** // 0.4992329496108416 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.01,
        Age: -0.02,
        Tenure: -0.1,
        NumOfProducts: -0.5,
        HasCrCard: -0.3,
        IsActiveMember: -1.5,
        EstimatedSalary: 0.001,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        SurnameImpact: 0.05
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        (Geography === 'Germany' ? coefficients.GeographyImpact : 0) +
        (Gender === 'Male' ? coefficients.GenderImpact : 0) +
        (Surname.length <= 5 ? -0.2 : 0.3)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
