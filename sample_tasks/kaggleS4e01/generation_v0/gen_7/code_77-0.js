/** // 0.4520083447858888 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.04,
        Age: -0.10,
        Tenure: -0.05,
        NumOfProducts: -0.50,
        HasCrCard: -0.35,
        IsActiveMember: -1.50,
        GeographyImpact: 0.30,
        GenderImpact: -0.20,
    };

    let isActiveMemberImpact = IsActiveMember === 1 ? 0 : -coefficients.IsActiveMember;
    let genderImpact = Gender === 'Male' ? coefficients.GenderImpact : -coefficients.GenderImpact;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        isActiveMemberImpact +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : -2)) +
        genderImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    return probability;
}
