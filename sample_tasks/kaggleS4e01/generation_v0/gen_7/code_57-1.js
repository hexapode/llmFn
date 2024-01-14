/** // 0.4200959972350612 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15628963, Surname=Tsao, CreditScore=850, Geography=France, Gender=Male, Age=26.0, Tenure=10, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=120107.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (other coefficients and calculations remain the same)

    let salaryBalanceRatio = EstimatedSalary !== 0.0 ? Balance / EstimatedSalary : 0.0;
    let salaryBalanceImpact = salaryBalanceRatio * -1.28;

    let linearCombination = (
        // ... (other coefficients and calculations remain the same)
        + salaryBalanceImpact 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
