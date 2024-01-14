/** // 0.8169374113303165 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        GeographyImpact: 0.49,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.90;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.12;
    } else {
        geographyImpact = 0.05;
    }

    let genderImpact = (Gender === 'Male') ? 2.06 : -1.07;

    let surnameImpact = (Surname.length <= 5) ? -0.09 : 1.28;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.AdditionalImpact * Math.abs(CreditScore - -59.10) / 113.53 +
        coefficients.CustomParameterImpact * ((Age * 0.03) / (EstimatedSalary * 0.01))
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
