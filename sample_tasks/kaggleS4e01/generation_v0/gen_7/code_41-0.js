/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (coefficients and other calculations)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = -0.72;  // Higher coefficient for Male
    } else {
        genderImpact = 0.58;  // Lower coefficient for Female
    }

    // ... (other calculations)

    let linearCombination = (
        // ... (previous calculations)
        coefficients.GenderImpact * genderImpact + // Include gender impact in linear combination
        // ... (previous calculations)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
