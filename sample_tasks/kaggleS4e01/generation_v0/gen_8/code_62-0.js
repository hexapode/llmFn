/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15662397, Surname=Chiang, CreditScore=628, Geography=Germany, Gender=Male, Age=29.0, Tenure=7, Balance=111092.85, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=161074.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code remains unchanged)

    const ageImpact = (Age <= 30) ? 0.12 : (Age > 30 && Age <= 40) ? 0.06 : (Age > 40 && Age <= 50) ? -0.04 : -0.10;

    // ... (existing code remains unchanged)

    let weightedSum = // ... (existing code remains unchanged)

    // Include age impact
    weightedSum += ageImpact;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15662397.0, 'Chiang', 628.0, 'Germany', 'Male', 29.0, 7.0, 111092.85, 2.0, 1.0, 1.0, 161074.01));
