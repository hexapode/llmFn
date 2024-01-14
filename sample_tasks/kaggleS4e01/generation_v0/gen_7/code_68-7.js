/** // 0.48315918162506044 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.04,
        Age: -0.1,
        Tenure: -0.05,
        NumOfProducts: -0.7,
        HasCrCard: -0.3,
        IsActiveMember: -1.7,
        GeographyImpact: 0.4,
        GenderImpact: -0.2,
    };

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 0.6;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.5;
    } else {
        geographyImpact = -0.5;
    }

    let genderImpact = (Gender === 'Male') ? 0.3 : -0.3;

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
