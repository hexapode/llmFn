/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous coefficients and calculations remain the same) ... 

    // Impact of Gender parameter
    let genderImpact = (Gender === 'Male' ? 0.87 : -0.91) * coefficients.GenderImpact;

    // Include genderImpact in the linear combination
    let linearCombination = (
        // ... (previous linear combination calculation) ... + 
        genderImpact +
        // ... (other parameters and impacts) ...
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
