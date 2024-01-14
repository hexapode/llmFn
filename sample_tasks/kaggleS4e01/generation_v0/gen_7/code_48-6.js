/** // 0.6607758052649706 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Impact coefficients for each parameter
    const coefficients = {
        Age: -0.01,
        Tenure: -0.05,
        NumOfProducts: -0.60,
        HasCrCard: -0.35,
        IsActiveMember: -1.71,
        GeographyImpact: { 'Germany': 0.46, 'Spain': -0.21, 'France': -0.24 },
        GenderImpact: { 'Male': 0.33, 'Female': -0.33 }
        // Add impact coefficients for other parameters
    };

    let geographyImpact = coefficients.GeographyImpact[Geography] || 0; // Get impact for Geography
    let genderImpact = coefficients.GenderImpact[Gender] || 0; // Get impact for Gender

    // Compute the linear combination of impacts
    let linearCombination = (coefficients.Age * Age) +
        (coefficients.Tenure * Tenure) +
        (coefficients.NumOfProducts * NumOfProducts) +
        (coefficients.HasCrCard * HasCrCard) +
        (coefficients.IsActiveMember * IsActiveMember) +
        geographyImpact + genderImpact; // Add impacts for other parameters

    // Calculate the probability of churning
    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
