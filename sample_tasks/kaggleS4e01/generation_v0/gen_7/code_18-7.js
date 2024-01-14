/** // 0.7700314388146434 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
        CustomParameterImpact: -1.01,
    };

    let surnameImpact = Surname.length <= 5 ? -0.09 : 1.28;

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.89) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.06 : -1.07) +
        coefficients.CustomParameterImpact * ((Age * 0.03) / (EstimatedSalary * 0.01)) +
        surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
