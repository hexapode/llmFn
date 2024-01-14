/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.44; // Positive impact for Male gender
    } else {
        genderImpact = -2.36; // Negative impact for Female gender
    }

    // ... (rest of the code remains unchanged)

    let linearCombination = (
        // ... (previous code for linear combination remains unchanged)
        coefficients.GenderImpact * genderImpact + 
        // ... (rest of the code remains unchanged)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
