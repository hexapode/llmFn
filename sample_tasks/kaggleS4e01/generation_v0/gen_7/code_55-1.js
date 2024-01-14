/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15804822, Surname=Yobanna, CreditScore=553, Geography=Spain, Gender=Male, Age=26.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=126761.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        TenureImpact: -0.03, 
        // ... (other coefficients remain the same)
    };

    // ... (other parts of the function remain the same)

    let linearCombination = (
        // ... (other parts of the calculation remain the same)
        coefficients.TenureImpact * Tenure +  // Include tenure impact in the linear combination
        // ... (other parts of the calculation remain the same)
    );

    // ... (other parts of the function remain the same)
}
