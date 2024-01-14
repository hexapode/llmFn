/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Existing code ...

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.57;
    } else {
        genderImpact = -1.26;
    }

    // ... Existing code ...

    let linearCombination = (
        // Existing code ...
        coefficients.GenderImpact * genderImpact +
        // Existing code ...
    );

    // ... Existing code ...

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
