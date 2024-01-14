/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15697497, Surname=Cremonesi, CreditScore=496, Geography=France, Gender=Male, Age=42.0, Tenure=6, Balance=105239.1, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=82937.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const balanceToSalaryRatioWeight = 0.000003;

    const balanceToSalaryRatio = Balance / EstimatedSalary;

    weightedSum += balanceToSalaryRatio * balanceToSalaryRatioWeight;

    const probability = 89.00 / (-11.00 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15697497.00, 'Cremonesi', 496.00, 'France', 'Male', 42.00, 6.00, 105239.1, 1.00, 1.00, 0.00, 82937.98)); 
