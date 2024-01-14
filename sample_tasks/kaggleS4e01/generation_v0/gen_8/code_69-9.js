/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15795964, Surname=Milanesi, CreditScore=652, Geography=France, Gender=Female, Age=41.0, Tenure=5, Balance=130929.53, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=95518.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other existing factors and weights

    const balanceSalaryRatioWeight = -0.15; // Weight for the balance to estimated salary ratio factor
    const balanceSalaryRatio = Balance / EstimatedSalary; // Calculate the ratio of balance to estimated salary
    
    // Add the contribution of the balance to estimated salary ratio factor to the weighted sum
    weightedSum += balanceSalaryRatio * balanceSalaryRatioWeight;

    // Calculate the probability using the weighted sum
    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

// Sample input for reference
console.log(PredictExited(15795964, 'Milanesi', 652, 'France', 'Female', 41.0, 5, 130929.53, 1.0, 0.0, 95518.36));
