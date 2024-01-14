/** // 0.5364824716456016 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.78,
        GeographyImpact: { "Germany": 0.39, "Spain": -0.55, "France": -0.39 },
        GenderImpact: { "Male": 0.20, "Female": -0.20 },
    };

    let surnameImpact = Surname.length <= 5 ? -1.18 : 0.42;
    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);
    let additionalVariable = Math.abs(CreditScore - 600) / 800;

    let geographyImpact = coefficients.GeographyImpact[Geography] || 0;
    let genderImpact = coefficients.GenderImpact[Gender] || 0;

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        geographyImpact +
        genderImpact +
        surnameImpact +
        newParameter -
        additionalVariable
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
