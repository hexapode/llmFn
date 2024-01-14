/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    /* 
    Here we will add a step in the computation to incorporate the impact of the Gender parameter on the prediction. 
    We will use a coefficient to represent the impact of gender, with a positive coefficient for 'Male' gender and a negative 
    coefficient for 'Female' gender.
    */

    const coefficients = {
        // ... (other coefficients remain unchanged)
        GenderImpact: -0.15, // Updated the coefficient for Gender impact
        // ... (other coefficients remain unchanged)
    };

    // ... (other parts of the function remain unchanged)

    let linearCombination = (
        // ... (other parts of the linear combination calculation remain unchanged)
        coefficients.GenderImpact * (Gender === 'Male' ? 1.00 : -1.00) + // Include the impact of Gender in the linear combination
        // ... (other parts of the linear combination calculation remain unchanged)
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
