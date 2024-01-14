/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15567834, Surname=Nieves, CreditScore=719, Geography=France, Gender=Male, Age=49.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=16246.59.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculations)

    const estimatedSalaryWeight = 0.00001;

    // ... (previous calculations)

    let weightedSum = // ... (previous calculations)
        (EstimatedSalary * estimatedSalaryWeight);

    // ... (previous calculations and return statement)
}
