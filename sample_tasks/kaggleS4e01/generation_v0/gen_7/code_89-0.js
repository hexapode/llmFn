/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // ... (previous code remains unchanged)

    let genderImpact = (Gender === 'Male' ? 2.44 : -2.36);

    let linearCombination = (
        // ... (previous calculations)
        + coefficients.GenderImpact * genderImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
