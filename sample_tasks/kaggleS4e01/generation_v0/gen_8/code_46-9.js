/** // 0.4982244327345527 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15674880, Surname=H?, CreditScore=671, Geography=France, Gender=Male, Age=31.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=157097.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary, TransactionVolume) {
    // ... (existing code)

    const transactionVolumeWeight = TransactionVolume * 0.0000003; // Adjust the weight to account for the impact

    // ... (existing code)

    let weightedSum = // ... (existing calculation)
        transactionVolumeWeight; // Add the new parameter into the weighted sum calculation

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

// Sample usage
const result = PredictExited(15674880, "H?", 671, "France", "Male", 31.0, 8, 0.0, 2, 1.0, 1.0, 157097.09, 1500);
console.log(result);
