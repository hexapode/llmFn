/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Existing coefficients and calculations...

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.43;
    } else {
        genderImpact = -2.33;
    }

    // Include the genderImpact in the linear combination
    let linearCombination = (
        // ... (existing coefficients)
        coefficients.GenderImpact * genderImpact +
        // ... (existing coefficients)
    );

    // Existing probability calculation...

    return probability;
}
