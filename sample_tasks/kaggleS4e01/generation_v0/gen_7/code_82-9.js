/** // 0.5632765938594045 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15593773, Surname=Olejuru, CreditScore=683, Geography=Spain, Gender=Male, Age=30.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=1557.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let ageTenureInteraction = Age * Tenure * 0.01;  // Adding the interaction term

    let linearCombination = (
        // ... (previous code remains the same)
        + ageTenureInteraction  // Adding the interaction term to the linear combination
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));  // Using the logistic function to compute the probability

    return probability;
}
