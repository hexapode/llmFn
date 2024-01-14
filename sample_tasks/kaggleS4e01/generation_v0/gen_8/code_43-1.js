/** // 0.5782189759547124 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15725002, Surname=Smith, CreditScore=680, Geography=France, Gender=Male, Age=35.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=64771.61.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // previous weights and calculations remain the same
    
    const balanceToSalaryRatio = (Balance !== 0) ? (Balance / EstimatedSalary) * 0.35 : 0;

    // update the weightedSum
    let weightedSum = // ... (previous calculations)
        (balanceToSalaryRatio);

    const probability = 12.21 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15725002.00, "Smith", 680.00, "France", "Male", 35.00, 4.00, 0.00, 2.00, 1.00, 1.00, 64771.61);
console.log(result); 
