/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15794890, Surname=Maclean, CreditScore=713, Geography=France, Gender=Male, Age=37.0, Tenure=4, Balance=141352.02, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=105817.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code remains unchanged
    // ...
    
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    
    // Existing code remains unchanged
    // ...

    let weightedSum = // Existing calculation plus the impact of the unused parameter
        // ... (existing calculation)
        + unusedParameterImpact;
    
    // Existing code remains unchanged
    // ...
}
