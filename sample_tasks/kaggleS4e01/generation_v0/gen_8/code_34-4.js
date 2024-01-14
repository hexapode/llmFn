/** // 0.578218868772776 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15774727, Surname=Chukwuebuka, CreditScore=553, Geography=France, Gender=Male, Age=34.0, Tenure=8, Balance=172390.74, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=173365.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculations)

    const balanceToSalaryRatioWeight = 0.000002;  // Assuming a very small weight for this factor

    const balanceToSalaryRatio = Balance / EstimatedSalary;

    const balanceToSalaryImpact = balanceToSalaryRatio * balanceToSalaryRatioWeight;

    let weightedSum = // ... (previous sum)
        + balanceToSalaryImpact
        // ... (other factors)

    const probability = 0.69 / (-13.69 + Math.exp(-weightedSum));

   return probability;
}
