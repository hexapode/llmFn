/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15718773, Surname=Pisano, CreditScore=638, Geography=France, Gender=Female, Age=32.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=160129.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    // Adding the impact of tenure on the churn prediction
    let tenureImpact = 0.00;
    if (Tenure < 3.00) {
        tenureImpact = -1.50;
    } else {
        tenureImpact = 2.00;
    }

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous code remains unchanged)
        coefficients.TenureImpact * tenureImpact +
        // ... (previous code remains unchanged)
    );

    // ... (previous code remains unchanged)

    return probability;
}
