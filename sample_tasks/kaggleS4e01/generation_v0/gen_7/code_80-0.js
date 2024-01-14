/** // 0.5998084040794129 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.04,
        Age: 0.08,
        Tenure: -0.03,
        Balance: 0.06,
        NumOfProducts: -0.3,
        HasCrCard: -0.2,
        IsActiveMember: -1.2,
        EstimatedSalary: 0.000003,
        GeographyImpact: 0.1,
        GenderImpact: -0.2,
    };

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        ((Geography === 'Germany') ? coefficients.GeographyImpact : ((Geography === 'Spain') ? -coefficients.GeographyImpact : 0)) +
        ((Gender === 'Male') ? coefficients.GenderImpact : -coefficients.GenderImpact)
    );
    
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination)); // Using the sigmoid function for probability calculation

    return probability;
}
