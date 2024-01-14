/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)
    
    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.44;
    } else if (Gender === 'Female') {
        genderImpact = -2.36;
    } else {
        genderImpact = 0.00; // Handle other cases if needed
    }

    // ... (other parameter calculations)

    let linearCombination = (
        // ... (previous code)
        coefficients.GenderImpact * genderImpact +
        // ... (other parameter impacts)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
