/** // 0.4982923213769295 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // I am simplifying the model by using only essential parameters and removing unnecessary complexity
    const coefficients = {
        CreditScore: 0.05,
        Age: -0.1,
        Tenure: -0.02,
        Balance: 0.02,
        NumOfProducts: -0.3,
        HasCrCard: -0.2,
        IsActiveMember: -0.5,
        EstimatedSalary: 0.03,
        GeographyImpact: 0.4,
        GenderImpact: -0.2
    };

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 0.1;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.1;
    }

    let genderImpact = (Gender === 'Male') ? 0.1 : -0.1;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
