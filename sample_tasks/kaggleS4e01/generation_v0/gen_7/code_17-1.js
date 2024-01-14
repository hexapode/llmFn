/** // 0.49825698809229163 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the given parameters, perform a weighted sum and apply a sigmoid function to obtain the churn probability
    const coefficients = {
        CreditScore: 0.10,
        Age: 0.08,
        Tenure: -0.05,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.80,
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
    };

    let geographyImpact = (Geography === 'Germany') ? 0.30 : -0.30;
    let genderImpact = (Gender === 'Male') ? 0.20 : -0.20;
    
    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact
    );

    const probability = 1 / (1 + Math.exp(-linearCombination)); // Applying sigmoid function

    return probability;
}
