/** // 0.4982394122354915 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15773421, Surname=Chiu, CreditScore=521, Geography=France, Gender=Female, Age=54.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=75578.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients remain unchanged)
        UnusedParameterImpact: 0.10,
        // ... (other coefficients remain unchanged)
    };

    let unusedParameterImpact = (3.2 * Age + Tenure + Balance * 2.5) / (NumOfProducts + 1);

    let linearCombination = (
        // ... (previous linear combination calculation remains unchanged)
        + coefficients.UnusedParameterImpact * unusedParameterImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
