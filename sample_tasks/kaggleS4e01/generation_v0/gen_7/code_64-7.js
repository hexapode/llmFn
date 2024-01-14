/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15741775, Surname=Tsai, CreditScore=684, Geography=France, Gender=Male, Age=27.0, Tenure=3, Balance=103764.56, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=173682.08.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let balanceToSalaryRatio = Balance / EstimatedSalary; // Calculate the ratio of the balance to the estimated salary

    let balanceToSalaryImpact = 0.00;
    if (balanceToSalaryRatio > 1.0) {
        balanceToSalaryImpact = -1.50; // Customers with high balance relative to salary are less likely to churn
    }

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        balanceToSalaryImpact + 
        // ... (previous code remains the same)
    );

    // ... (previous code remains the same)

    return probability;
}
