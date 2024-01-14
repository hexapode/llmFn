/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous calculation for other parameters)
        coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.35) +
        // ... (other parameters and impacts)
    );

    // ... (rest of the code remains the same)
    
    return probability;
}
