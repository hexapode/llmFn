/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Since the Gender parameter can impact the prediction, we can include it in the computation by adding a step that takes into account the gender impact. This step will adjust the linear combination based on the gender of the customer.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let linearCombinationWithGender = (
        // ... (previous linear combination code)
        coefficients.GenderImpact * (Gender === 'Male' ? 2.06 : -1.07) + // incorporating gender impact
        // ... (remaining code)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombinationWithGender));

    return probability;
}
