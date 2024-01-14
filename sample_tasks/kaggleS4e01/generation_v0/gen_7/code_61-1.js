/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Gender parameter could impact the prediction as it may introduce different behavioral patterns and preferences based on gender.
// I will add a step in the computation to incorporate the impact of the Gender parameter.


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous calculations remain unchanged)
        
        + coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.33) 

        // ... (additional calculations remain unchanged)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
