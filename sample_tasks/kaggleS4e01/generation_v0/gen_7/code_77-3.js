/** // 0.7193921381023768 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        Age: -0.01,
        Tenure: -0.05,
        NumOfProducts: -0.73,
        HasCrCard: -0.35,
        IsActiveMember: -1.73,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04
    };

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.20 : (Geography === 'Spain' ? -1.03 : -1.22)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.43 : -0.35) +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.22 : 0.33)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
