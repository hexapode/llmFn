/** // 0.8170797841557236 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize impact coefficients
    const coefficients = {
        Age: 0.07,
        Tenure: -0.04,
        NumOfProducts: -0.49,
        HasCrCard: -0.16,
        IsActiveMember: -0.80,
        GeographyImpact: { 'Germany': 0.39, 'Spain': -0.20, 'France': -0.20 }, 
        GenderImpact: { 'Male': -0.20, 'Female': 0.20 }
    };
    
    // Calculate linear combination of input parameters and coefficients
    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact[Geography] +
        coefficients.GenderImpact[Gender]
    );

    // Calculate probability using sigmoid function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
