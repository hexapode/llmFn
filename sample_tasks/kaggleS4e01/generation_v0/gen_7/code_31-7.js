/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // other coefficients...
        GenderImpact: 0.20,  // Updated coefficient for gender impact
        // other coefficients...
    };

    // other variable calculations...

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = coefficients.GenderImpact;
    } else {
        genderImpact = -coefficients.GenderImpact;
    }

    // Include genderImpact in the linear combination calculation
    let linearCombination = (
        // ... other terms ...
        + coefficients.GenderImpact * genderImpact
        // ... other terms ...
    );

    // ... rest of the function ...

}
