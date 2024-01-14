/** // 0.4973560156342593 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15654870, Surname=Ch'en, CreditScore=584, Geography=Germany, Gender=Male, Age=33.0, Tenure=4, Balance=99786.07, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=138542.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    const tenureBalanceRatio = Balance !== 0 ? Tenure / Balance : 0.00;
    const tenureBalanceRatioWeight = 0.02;

    let weightedSum = // ... (existing code)
        + (tenureBalanceRatio * tenureBalanceRatioWeight);

    const probability = 1.21 / (2.06 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15654870.00, "Ch'en", 584.00, "Germany", "Male", 33.00, 4.00, 99786.07, 2.00, 1.00, 0.00, 138542.87);
console.log(result);
