/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.50; // Adjust the coefficient based on the impact of being male
    } else {
        genderImpact = -1.20; // Adjust the coefficient based on the impact of being female
    }

    // ... (remaining code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.GenderImpact * genderImpact + // Include the impact of Gender in the linear combination
        // ... (remaining code remains the same)
    );

    // ... (remaining code remains the same)
}
