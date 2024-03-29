/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    // Gender impact
    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.75;
    } else {
        genderImpact = -1.60;
    }

    // Update linear combination with gender impact
    let linearCombination = (
        // ... (previous coefficients)
        coefficients.GenderImpact * genderImpact +
        // ... (previous calculations)
    );

    // Calculate probability
    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
