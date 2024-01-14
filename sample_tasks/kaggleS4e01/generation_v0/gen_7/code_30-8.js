/** // 0.4884479591730027 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.03,
        Age: -0.02,
        Tenure: -0.05,
        NumOfProducts: -0.25,
        HasCrCard: -0.1,
        IsActiveMember: -0.5,
        GeographyImpact: 0.2,
        GenderImpact: -0.1,
        SurnameImpact: 0.03,
        CustomParameterImpact: -0.4, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = (surnameLength <= 5) ? -0.1 : 0.2;

    let geographyImpact = (Geography === 'Germany') ? 0.3 : 0.1;

    let genderImpact = (Gender === 'Male') ? 0.2 : -0.1;

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

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
        coefficients.CustomParameterImpact * customParameter
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
