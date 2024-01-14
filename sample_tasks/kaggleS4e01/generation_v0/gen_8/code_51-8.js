/** // 0.5782192424789937 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15656322, Surname=Fomin, CreditScore=619, Geography=Germany, Gender=Male, Age=32.0, Tenure=7, Balance=152541.25, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=87413.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const balanceToSalaryRatio = Balance / EstimatedSalary;
    const balanceToSalaryRatioWeight = 0.8;
    
    // ... (other weights and calculations remain the same)

    let weightedSum = // ... (calculate the weighted sum as before)
        + (balanceToSalaryRatio * balanceToSalaryRatioWeight);
    
    const probability = 1.21 / (2.06 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15656322.00, "Fomin", 619.00, "Germany", "Male", 32.00, 7.00, 152541.25, 2.00, 1.00, 1.00, 87413.46);
console.log(result);
