/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15801441, Surname=Gordon, CreditScore=537, Geography=France, Gender=Female, Age=31.0, Tenure=2, Balance=112212.14, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=91406.62.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let ageSquaredImpact = coefficients.Age * (Age * Age) * 0.005;

    let linearCombination = (
        // ... (previous code remains the same)
        ageSquaredImpact +
        // ... (previous code remains the same)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
