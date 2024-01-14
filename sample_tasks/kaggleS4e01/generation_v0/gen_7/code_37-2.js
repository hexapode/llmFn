/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code...

    let linearCombination = (
        // Other coefficient calculations...
        coefficients.GenderImpact * (Gender === 'Male' ? 1.21 : -1.12) +
        // Other calculations...
    );

    // Remaining code and return statement...
}
