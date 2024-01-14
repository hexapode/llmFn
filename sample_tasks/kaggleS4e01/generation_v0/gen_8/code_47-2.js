/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15578799, Surname=Ts'ao, CreditScore=614, Geography=France, Gender=Male, Age=43.0, Tenure=8, Balance=71379.53, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=152210.81.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    // Adding unused parameter impact
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (remaining code remains the same)
    
    const probability = 1.21 / (2.24 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15578799.00, "Ts'ao", 614.00, "France", "Male", 43.00, 8.00, 71379.53, 1.00, 0.00, 1.00, 152210.81);
console.log(result);
