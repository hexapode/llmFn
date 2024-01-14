/** // 0.5381070324376528 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.06,
        Tenure: -0.03,
        NumOfProducts: -0.5,
        HasCrCard: -0.15,
        IsActiveMember: -0.8,
        GeographyImpact: 0.4,
        GenderImpact: -0.1,
        SurnameImpact: 0.05,
        CustomParameterImpact: -1,
    };

    let genderImpact = Gender === 'Male' ? 0.2 : -0.1;

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 0.5;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.1;
    }

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.1 : 0.5) +
        coefficients.CustomParameterImpact * (Age / EstimatedSalary)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
