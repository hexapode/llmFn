/** // 0.2495055340182925 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15624781, Surname=Chukwukere, CreditScore=668, Geography=Spain, Gender=Male, Age=35.0, Tenure=1, Balance=118851.05, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=172601.62.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        AgeSquaredImpact: -0.02,  // coefficient for the Age^2 term
    };

    // ... (other calculations remain the same)

    let ageSquared = Age * Age * coefficients.AgeSquaredImpact;

    let linearCombination = (
        // ... (all other components remain the same)
        ageSquared
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
