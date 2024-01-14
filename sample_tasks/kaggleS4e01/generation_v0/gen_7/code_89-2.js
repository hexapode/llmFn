/** // 0.7401979071495471 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        Tenure: -0.05,
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04
    };

    let linearCombination = (
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.00 : (Geography === 'Spain' ? -1.00 : -2.00)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1.00 : -1.00) +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -1.00 : 1.00)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    
    return probability;
}
