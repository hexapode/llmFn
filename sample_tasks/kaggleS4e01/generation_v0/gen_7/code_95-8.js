/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (Existing code remains the same)

    let linearCombination = (
        // ... (Existing linear combination terms remain the same)
        + coefficients.GenderImpact * (Gender === 'Male' ? 2.56 : -2.36) // Include impact of Gender
        // ... (Remaining terms and coefficients remain the same)
    );

    // ... (Remaining code remains the same)

}
