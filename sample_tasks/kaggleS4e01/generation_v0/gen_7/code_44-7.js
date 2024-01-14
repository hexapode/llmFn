/** // 0.4831146645871374 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.05,
        Age: -0.1,
        Tenure: -0.05,
        NumOfProducts: -0.6,
        HasCrCard: -0.35,
        IsActiveMember: -1.8,
        GeographyImpact: 0.45,
        GenderImpact: -0.2
    };

    let genderImpact = (Gender === 'Male') ? coefficients.GenderImpact : -1 * coefficients.GenderImpact;
    let geographyImpact = 0;
    
    if (Geography === 'Germany') {
        geographyImpact = 0.5;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.4;
    }

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        genderImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
