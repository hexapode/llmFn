/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15808526, Surname=Olisaemeka, CreditScore=633, Geography=France, Gender=Male, Age=49.0, Tenure=10, Balance=69712.74, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=161479.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let unusedParameterImpact = 0.00;
    unusedParameterImpact = (HasCrCard + IsActiveMember) * 0.23;
    
    let linearCombination = (
        // ... (previous linear combination calculation remains the same)
        + unusedParameterImpact
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
