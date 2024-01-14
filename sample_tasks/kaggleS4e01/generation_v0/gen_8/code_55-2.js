/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15644833, Surname=Onyemauchechi, CreditScore=689, Geography=France, Gender=Male, Age=67.0, Tenure=5, Balance=93249.4, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=77335.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // previous weights remain the same

    // New impact from unused parameters
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // Rest of the function remains the same
}

const result = PredictExited(15644833.00, "Onyemauchechi", 689.00, "France", "Male", 67.00, 5.00, 93249.4, 1.00, 0.00, 1.00, 77335.75);
console.log(result);
