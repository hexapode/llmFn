/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15750243, Surname=Hsiung, CreditScore=741, Geography=Germany, Gender=Female, Age=39.0, Tenure=2, Balance=106506.84, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=180800.27.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Previous weights and calculations remain the same

    // Introducing impact of unused parameters
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    let weightedSum =  // previous calculations remain the same

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum + unusedParameterImpact));  // including impact of unused parameters

    return probability;
}

const result = PredictExited(15750243, "Hsiung", 741, "Germany", "Female", 39.0, 2, 106506.84, 2, 1.0, 0.0, 180800.27);
console.log(result);
