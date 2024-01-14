/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Gender=Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.33;
    } else {
        genderImpact = -2.34;
    }

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.GenderImpact * genderImpact +
        // ... (previous code remains the same)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}