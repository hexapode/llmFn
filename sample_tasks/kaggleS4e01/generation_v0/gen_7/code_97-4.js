/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15766734, Surname=Norman, CreditScore=712, Geography=Germany, Gender=Male, Age=60.0, Tenure=7, Balance=133636.16, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=90905.26.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let novelCombination = (Age * 0.5) + (Balance * 0.75) + (CreditScore * 0.23) - (NumOfProducts * 0.12);
    
    // Add the novel combination to the linear combination
    let linearCombination = (
        // ... (previous code remains the same)
        + coefficients.NovelCombinationImpact * novelCombination
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}

// Sample input
console.log(PredictExited(15766734, 'Norman', 712, 'Germany', 'Male', 60.0, 7, 133636.16, 1, 1.0, 0.0, 90905.26)); // Output: 1.0
