/** // 0.7611124541976093 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15613216, Surname=Cameron, CreditScore=523, Geography=Spain, Gender=Male, Age=39.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=92455.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Logistic regression coefficients
    const coefficients = {
        intercept: -2.498165,
        CreditScore: -0.0008956,
        Age: 0.0727205,
        Geography_France: -0.5833627,
        Geography_Germany: 0.7990896,
        Gender_Male: 0.5076482,
        Tenure: -0.0390332,
        NumOfProducts: -0.0755307,
        HasCrCard: -0.0660664,
        IsActiveMember: -1.0543955,
        EstimatedSalary: 0.0000015,
        InteractionTerm: 0.0000042  // Interaction term for Age and NumOfProducts
    };

    // Compute the weighted sum
    let weightedSum = coefficients.intercept +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        ((Geography === 'France') ? coefficients.Geography_France : 0) +
        ((Geography === 'Germany') ? coefficients.Geography_Germany : 0) +
        ((Gender === 'Male') ? coefficients.Gender_Male : 0) +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.InteractionTerm * Age * NumOfProducts;

    // Apply the logistic function to obtain the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
