/** // 0.5290818685964839 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.02,
        Tenure: -0.1,
        NumOfProducts: -0.8,
        HasCrCard: -0.4,
        IsActiveMember: -0.9,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        SurnameImpact: 0.1,
        UnusedParameterImpact: 0.2,
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.5 : (Geography === 'Spain' ? -0.3 : -0.1)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.4 : -0.3) +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -0.3 : 0.2) +
        coefficients.UnusedParameterImpact * 0.1 
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    return probability;
}
