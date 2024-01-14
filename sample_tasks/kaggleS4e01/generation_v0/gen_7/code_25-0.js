/** // 0.5563227451491713 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.02,
        Age: 0.05,
        Tenure: -0.03,
        NumOfProducts: -0.05,
        HasCrCard: -0.10,
        IsActiveMember: -0.15,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.20,
        GenderImpact: -0.08,
    };

    let surnameImpact = Surname.length <= 5 ? -0.05 : 0.10;
    let geographyImpact = Geography === 'Germany' ? 0.25 : 0.05;
    let genderImpact = Gender === 'Male' ? 0.10 : -0.05;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact +
        surnameImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
