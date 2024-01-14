/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15591942, Surname=Frolov, CreditScore=644, Geography=France, Gender=Female, Age=41.0, Tenure=6, Balance=61687.33, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=105965.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous computation remains unchanged)

    const isActiveMemberSalaryInteractionWeight = (IsActiveMember * EstimatedSalary * (-0.0000015));

    weightedSum += isActiveMemberSalaryInteractionWeight;

    const probability = 1.00 / (1.00 + Math.exp(weightedSum));

    return probability;
}
