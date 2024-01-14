/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// After analyzing the Gender parameter, I can see that it may impact the prediction based on the historical data. 
// Let's add a step in the computation using the Gender parameter.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... [Previous code remains the same]

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.44;
    } else {
        genderImpact = -2.36;
    }

    // ... [Previous code remains the same]

    let linearCombination = (
        // ... [Other calculations remain the same]
        coefficients.GenderImpact * genderImpact
        // ... [Other calculations remain the same]
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
