/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code remains the same

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.99; // Assigning a positive impact for "Male"
    } else {
        genderImpact = -1.23; // Assigning a negative impact for "Female"
    }

    // Remaining code remains the same

    let linearCombination = (
        // ... (existing code)
        + coefficients.GenderImpact * genderImpact // Including gender impact in the linear combination
        // ... (existing code)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
