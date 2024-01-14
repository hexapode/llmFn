/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = -1.20;  // Assigning a negative impact for "Male"
    } else {
        genderImpact = 0.80;  // Assigning a positive impact for "Female"
    }

    // ... (previous code)

    let linearCombination = (
        // ... (previous code)
        coefficients.GenderImpact * genderImpact + // Including the impact of Gender in the linear combination
        // ... (previous code)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination)); // Using the logistic function to compute the probability

    return probability;
}
