/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15702416, Surname=Bellucci, CreditScore=712, Geography=France, Gender=Male, Age=34.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=65906.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const novelCombination = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06); // Impact of the unused parameter

    // ... (remaining code remains the same)

    const weightedSum = // ... (calculation remains the same)

    const probability = 1.21 / (3.21 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15702416.00, "Bellucci", 712.00, "France", "Male", 34.00, 7.00, 0.00, 2.00, 1.00, 0.00, 65906.07);
console.log(result);
