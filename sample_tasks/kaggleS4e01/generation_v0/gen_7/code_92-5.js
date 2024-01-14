/** // 0.49910848035051025 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simplified coefficients for the linear combination
    const coefficients = {
        Age: 0.05,
        Tenure: -0.05,
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        EstimatedSalary: 0.02
    };

    let genderImpact = (Gender === 'Male') ? 0.21 : -0.21;

    // Calculate the linear combination
    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.0 : 0.0) +
        genderImpact +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -1.63 : 2.39) +
        coefficients.EstimatedSalary * EstimatedSalary
    );

    // Compute the probability using logistic function
    const probability = 1.0 / (1.0 + Math.exp(-linearCombination));

    return probability;
}
