/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... existing code ...

    let genderImpact = Gender === 'Male' ? 2.06 : -1.07;

    // ... existing code ...

    let linearCombination = (
        // ... other parameters ...
        coefficients.GenderImpact * genderImpact +
        // ... other parameters ...
    );

    // ... existing code ...

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}

