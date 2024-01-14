/** // 0.7104083878648628 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.03,
        Age: 0.07,
        Tenure: -0.05,
        NumOfProducts: -0.6,
        HasCrCard: -0.27,
        IsActiveMember: -1.8,
        GeographyImpact: 0.43,
        GenderImpact: -0.21,
        ExtraImpact: -0.45,
        CustomImpact: -0.42,
        ExtraParameterImpact: 0.76,
    };

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 2.26;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.16;
    }

    let genderImpact = (Gender === 'Male') ? 2.32 : -2.23;
    let balanceFactor = Balance > 0 ? 1 : 0;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.ExtraImpact * balanceFactor +
        coefficients.CustomImpact * (Age / EstimatedSalary) +
        coefficients.ExtraParameterImpact * (Age * 0.21)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
