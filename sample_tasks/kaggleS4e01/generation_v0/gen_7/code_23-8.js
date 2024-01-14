/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {...}; // Coefficients remain unchanged

    // ... (previous code remains unchanged)

    let genderImpact = (Gender === 'Male') ? 0.57 : -0.32;

    let linearCombination = (
        // ... (previous linear combination calculation remains unchanged)
        coefficients.GenderImpact * genderImpact
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
