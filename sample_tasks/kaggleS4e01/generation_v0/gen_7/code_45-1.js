/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (Previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Female') {
        genderImpact = 1.25;
    } else {
        genderImpact = -1.15;
    }

    // ... (Remaining code remains unchanged)

    let linearCombination = (
        // ... (Previous code for linear combination remains unchanged)
        coefficients.GenderImpact * genderImpact +
        // ... (Remaining code remains unchanged)
    );

    // ... (Remaining code remains unchanged)

    return probability;
}
