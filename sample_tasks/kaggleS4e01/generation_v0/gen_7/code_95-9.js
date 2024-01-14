/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // ... (previous code remains unchanged)

    let genderImpact = coefficients.GenderImpact * (Gender === 'Male' ? 2.56 : -2.36);

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous coefficients and parameters)
        coefficients.GenderImpact * genderImpact +
        // ... (rest of the linear combination)
    );

    // ... (remaining code)
}
