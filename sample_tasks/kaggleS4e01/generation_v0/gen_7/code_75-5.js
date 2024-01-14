/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (Previous code remains unchanged)

    let genderImpact = (Gender === 'Male') ? 1.87 : -1.64;

    // ... (Rest of the code remains unchanged)

    let linearCombination = (
        // ... (Previous linear combination calculation)

        + coefficients.GenderImpact * genderImpact
    );

    // ... (Probability calculation and return statement remains unchanged)
}
