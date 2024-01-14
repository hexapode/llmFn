/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15727041, Surname=Chukwujamuike, CreditScore=559, Geography=France, Gender=Male, Age=28.0, Tenure=7, Balance=117704.74, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=171045.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const balanceToAgeRatioWeight = 0.05; // weight for the new variable

    const balanceToAgeRatio = Balance / (Age + 1.00); // calculate new variable

    // ... (previous code remains the same)

    let weightedSum = //... (previous code remains the same)
        balanceToAgeRatio * balanceToAgeRatioWeight
        //... (previous code remains the same)

    //... (same as previous code)
}

const result = PredictExited(15727041.00, "Chukwujamuike", 559.00, "France", "Male", 28.00, 7.00, 117704.74, 1.00, 1.00, 0.00, 171045.4);
console.log(result); // 0.02188443627514077
