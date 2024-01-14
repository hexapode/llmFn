/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... [previous code]

    let genderImpact = (Gender === 'Male' ? 2.43 : -2.35);

    // ... [other calculations]

    let linearCombination = (
        // ... [previous linear combination terms]
        coefficients.GenderImpact * genderImpact +
        // ... [other terms]
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
