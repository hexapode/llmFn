/** // 0.5694695784709921 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15651883, Surname=Genovesi, CreditScore=553, Geography=Germany, Gender=Male, Age=55.0, Tenure=6, Balance=115796.7, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=160526.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    
    // ... (remaining code remains the same)

    let weightedSum = /* ... (previous code remains the same) */ + unusedParameterImpact;

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15651883.00, "Genovesi", 553.00, "Germany", "Male", 55.00, 6.00, 115796.7, 1.00, 1.00, 0.00, 160526.36);
console.log(result);
