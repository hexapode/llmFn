/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... 

    let genderImpact = coefficients.GenderImpact * (Gender === 'Male' ? 2.06 : -1.07);

    // ...

    let linearCombination = (
        // ... (previous linear combination)
        + genderImpact
        // ... (continue with the rest of the linear combination)
    );

    // ...

    return probability;
}
