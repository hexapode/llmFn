/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    // Add step to compute the impact of Gender
    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.06;
    } else {
        genderImpact = -1.07;
    }

    let linearCombination = (
        // ... (previous linear combination calculation remains the same)
        coefficients.GenderImpact * genderImpact +
        // ... (other coefficient impacts remain the same)
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
