/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (existing code)

    // New step to incorporate the impact of Gender
    let genderImpact = (Gender === 'Male' ? 2.56 : -2.36) * coefficients.GenderImpact;

    // ... (existing code)

    let linearCombination = (
        // ... (existing code)
        coefficients.GenderImpact * genderImpact +
        // ... (existing code)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
