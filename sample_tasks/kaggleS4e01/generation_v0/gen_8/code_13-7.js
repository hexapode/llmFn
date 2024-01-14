/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15711219, Surname=Chiawuotu, CreditScore=612, Geography=Germany, Gender=Male, Age=28.0, Tenure=8, Balance=131834.8, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=95718.32.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code remains the same)
    
    const balanceToSalaryRatio = Balance / EstimatedSalary;
    const balanceToSalaryRatioWeight = -0.05;

    weightedSum += balanceToSalaryRatio * balanceToSalaryRatioWeight;

    // ... (existing code remains the same)

    return 1.00 / (-13.40 + Math.exp(-weightedSum));
}
