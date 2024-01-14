/** // 0.7239041804818418 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: -0.01,
        Age: 0.05,
        Tenure: -0.02,
        NumOfProducts: -0.3,
        HasCrCard: -0.1,
        IsActiveMember: -0.2,
        GeographyImpact: 0.5, 
        GenderImpact: -0.4
    };

    const linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : -1) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));
    
    return probability;
}
