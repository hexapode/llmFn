/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (other coefficients and calculations)

    let GenderImpact = 0.00;
    if (Gender === 'Male') {
        GenderImpact = 0.95;  // Assuming a positive impact for male gender
    } else {
        GenderImpact = -1.12;  // Assuming a negative impact for female gender
    }

    // ... (other calculations)

    let linearCombination = (
        // ... (previous linear combination calculation)
        coefficients.GenderImpact * GenderImpact +  // Incorporating the impact of Gender parameter
        // ... (other coefficients and calculations)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
