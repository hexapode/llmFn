/** // 0.8159728236418541 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: -0.01,
        Age: 0.99,
        Tenure: -0.11,
        NumOfProducts: -9.28,
        HasCrCard: -2.09,
        IsActiveMember: -7.66,
        GeographyImpact: 2.70, 
        GenderImpact: -1.42
    };

    let surnameImpact = Surname.length <= 5 ? -1.09 : 1.09;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.10 : -1.11) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 3.22 : -1.01) +
        surnameImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
