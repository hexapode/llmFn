/** // 0.8165197521552366 //**/
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
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04
    };

    let surnameImpact = Surname.length <= 5 ? -1.18 : 0.42;

    let geographyImpact = (Geography === 'Germany') ? 1.24 : ((Geography === 'Spain') ? -0.96 : -1.07);

    let genderImpact = (Gender === 'Male') ? 1.11 : -1.11;

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
