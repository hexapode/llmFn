/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous coefficients and calculations)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.75;  // Positive impact for Male gender
    } else {
        genderImpact = -0.63; // Negative impact for Female gender
    }

    // ... (previous calculations)

    let linearCombination = (
        // ... (previous linear combination terms)
        + coefficients.GenderImpact * genderImpact
        // ... (other terms)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
