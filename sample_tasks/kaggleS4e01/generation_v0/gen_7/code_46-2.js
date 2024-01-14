/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (existing code for other calculations)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.32;
    } else {
        genderImpact = -0.32;
    }

    let linearCombination = (
        // ... (existing linear combination calculation)
        coefficients.GenderImpact * genderImpact +
        // ... (other terms in the linear combination)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
