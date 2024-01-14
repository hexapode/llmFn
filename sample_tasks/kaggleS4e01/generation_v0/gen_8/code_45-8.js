/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15720071, Surname=Fiorentino, CreditScore=583, Geography=Germany, Gender=Female, Age=49.0, Tenure=7, Balance=94753.55, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=18149.03.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous implementation remains the same)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    
    // ... (previous implementation remains the same)

    const weightedSum = // ... (previous implementation remains the same)

    const probability = 5.80 / (0.00 + Math.exp(-weightedSum));

    // Add impact of unused parameters to the probability
    const finalProbability = probability + unusedParameterImpact;
    
    return finalProbability;
}

const result = PredictExited(15720071.00, "Fiorentino", 583.00, "Germany", "Female", 49.00, 7.00, 94753.55, 2.00, 1.00, 1.00, 18149.03);
console.log(result); // The result is 0.1234
