/** // 0.7234971459639273 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15717155, Surname=Milano, CreditScore=573, Geography=Spain, Gender=Female, Age=45.0, Tenure=7, Balance=65612.55, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=100403.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.36,
        IsActiveMember: -1.70,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
    };

    let genderImpact = Gender === 'Male' ? 0.42 : -0.33;

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.96 : (Geography === 'Spain' ? -2.09 : -2.36)) +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -2.18 : 1.35)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
