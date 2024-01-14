/** // 0.585913506867204 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.03,
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        GeographyImpact: 0.49,
        GenderImpact: 0.20,
    };

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 1;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.5;
    }

    let genderImpact = (Gender === 'Male') ? 1 : 0;

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
