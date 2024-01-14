/** // 0.550104413220133 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.03,
        Age: 0.07,
        Tenure: -0.02,
        NumOfProducts: -0.05,
        HasCrCard: -0.10,
        IsActiveMember: -0.20,
        GeographyImpact: 0.40,
        GenderImpact: -0.15
    };

    let genderImpact = (Gender === 'Male') ? 0.05 : -0.05;
    let geographyImpact = (Geography === 'Germany') ? 0.10 : -0.10;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}