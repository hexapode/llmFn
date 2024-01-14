/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15585031, Surname=Milani, CreditScore=513, Geography=France, Gender=Male, Age=44.0, Tenure=8, Balance=126473.33, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=53394.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other weights and calculations
    
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... other calculations
    
    let weightedSum = // ... same as before
        + unusedParameterImpact;
        
    // ... same as before

   return probability;
}


const result = PredictExited(15585031.00, "Milani", 513.00, "France", "Male", 44.00, 8.00, 126473.33, 1.00, 1.00, 0.00, 53394.12);
console.log(result);
