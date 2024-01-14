/** // 0.4200959989957501 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15610755, Surname=Onwuemelie, CreditScore=586, Geography=France, Gender=Male, Age=35.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=130486.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    let balanceToSalaryRatio = Balance / EstimatedSalary;
    let balanceToSalaryImpact = -2.14;  // Coefficient for the balance to salary ratio factor

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous linear combination terms remain unchanged)
        + balanceToSalaryRatio * balanceToSalaryImpact  // Include the balance to salary ratio factor
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
