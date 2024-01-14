/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Female') {
        genderImpact = -1.50;  // Assume females are more likely to churn
    } else {
        genderImpact = 0.00;
    }

    // ... (rest of the code remains the same)

    let linearCombination = (
        // ... (previous coefficients)
        coefficients.GenderImpact * genderImpact +
        // ... (rest of the parameters)
    );

    // ... (rest of the code remains the same)

    return probability;
}
