/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15705885, Surname=Chukwufumnanya, CreditScore=725, Geography=France, Gender=Male, Age=30.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=14081.64.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... existing code ...

    // Add the EstimatedSalary as an extra factor in the interactionFactor calculation
    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight * (EstimatedSalary / 10000);

    // ... existing code ...

    const probability = 0.66 / (-13.59 + Math.exp(-weightedSum));

    return probability;
}
