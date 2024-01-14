/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15751022, Surname=L?, CreditScore=659, Geography=France, Gender=Female, Age=41.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=173425.68.
**/

// Adding a step to the computation using the unused parameters to impact the prediction

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code...
    // ...

    // Impact from unused parameters
    const unusedParameterImpact = (HasCrCard * 0.06) - (IsActiveMember * 0.03);
    // Keep rest of the code unchanged
}

const result = PredictExited(15751022.00, "L?", 659.00, "France", "Female", 41.00, 8.00, 0.0, 1.00, 0.00, 0.00, 173425.68);
console.log(result); 
