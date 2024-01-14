/** // 0.4200959959145445 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15743582, Surname=P'eng, CreditScore=611, Geography=France, Gender=Male, Age=61.0, Tenure=1, Balance=104267.7, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=62845.64.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const balanceSalaryRatio = Balance / EstimatedSalary;
    const balanceSalaryRatioWeight = -0.36;
    
    const weightedSum = // ... (previous code remains the same)
        (balanceSalaryRatio * balanceSalaryRatioWeight);

    const probability = 1.21 / (3.21 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15743582, "P'eng", 611, "France", "Male", 61.0, 1, 104267.7, 1.0, 0.0, 1.0, 62845.64);
console.log(result); // Output should be 0
