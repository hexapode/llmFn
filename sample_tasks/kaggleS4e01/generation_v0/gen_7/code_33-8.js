/** // 0.6098093755989463 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.02,
        Age: 0.05,
        Tenure: -0.03,
        NumOfProducts: -0.25,
        HasCrCard: -0.12,
        IsActiveMember: -0.70,
        GeographyImpact: 0.35,
        GenderImpact: -0.18,
    };

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 0.8;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.6;
    } else {
        geographyImpact = -0.5;
    }

    let genderImpact = (Gender === 'Male') ? 0.9 : -0.9;

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

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
