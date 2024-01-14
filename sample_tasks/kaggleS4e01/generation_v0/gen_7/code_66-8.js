/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.50; // Male impact
    } else {
        genderImpact = -0.80; // Female impact
    }

    let linearCombination = (
        // ... (previous code remains unchanged)
        coefficients.GenderImpact * genderImpact +
        // ... (other parameters and impacts)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
