/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15672246, Surname=Smith, CreditScore=767, Geography=France, Gender=Male, Age=47.0, Tenure=6, Balance=141816.25, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=134875.37.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    //... (previous implementation remains the same)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    //... (rest of the implementation remains the same)

    const weightedSum = //... (same as before) +
        unusedParameterImpact + // incorporate the impact of the unused parameter

    const probability = 1.21 / (2.06 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15672246.00, "Smith", 767.00, "France", "Male", 47.00, 6.00, 141816.25, 1.00, 1.00, 1.00, 134875.37);
console.log(result);
