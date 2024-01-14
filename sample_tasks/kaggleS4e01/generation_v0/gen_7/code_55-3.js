/** // 0.5194226604366444 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: -0.05,
        Age: -0.1,
        Tenure: -0.05,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.7,
        GeographyImpact: 0.5,
        GenderImpact: -0.2
    };

    let genderImpact = (Gender === 'Male') ? 0.2 : -0.2;
    let geographyImpact = (Geography === 'Germany') ? 0.5 : (Geography === 'Spain') ? -0.4 : -0.4;
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

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    return probability;
}
