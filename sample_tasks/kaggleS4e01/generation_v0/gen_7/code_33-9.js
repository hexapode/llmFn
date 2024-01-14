/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.50;  // Assigning a positive impact for Male
    } else if (Gender === 'Female') {
        genderImpact = -0.35;  // Assigning a negative impact for Female
    }

    // ... (rest of the code remains unchanged)

    let linearCombination = (
        // ... (previous linear combination remains unchanged)
        coefficients.GenderImpact * genderImpact +  // Including the impact of gender in the linear combination
        // ... (rest of the linear combination calculation remains unchanged)
    );

    // ... (rest of the code remains unchanged)

    return probability;
}
