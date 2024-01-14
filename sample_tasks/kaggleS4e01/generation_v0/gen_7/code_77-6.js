/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15731543, Surname=Mazzanti, CreditScore=705, Geography=France, Gender=Male, Age=45.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=120105.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    // Calculate the new parameter: EstimatedSalary to Age ratio
    let estimatedSalaryToAgeRatio = EstimatedSalary / Age;

    // Impact of the new parameter on the prediction
    let newParameterImpact = -0.02; // Considering a negative impact on churning probability for lower EstimatedSalary to Age ratio

    // Update the linear combination
    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.NewParameterImpact * newParameter +
        // ... (previous code remains the same)
    );

    // ... (remaining code remains the same)
}
