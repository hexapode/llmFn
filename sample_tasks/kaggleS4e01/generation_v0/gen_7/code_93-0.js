/** // 0.36186270710852697 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15585961, Surname=Collier, CreditScore=576, Geography=Spain, Gender=Male, Age=30.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=179066.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous implementation)
        NovelCombinationImpact: 0.15 // Additional impact from novel combination of variables
    };

    // ... (same as previous implementation)

    let novelCombination = (Age * Tenure) / (Balance + NumOfProducts) * IsActiveMember;
    let novCombImpact = novelCombination * coefficients.NovelCombinationImpact;

    // ... (same as previous implementation)

    let linearCombination = (
        // ... (same as previous implementation)
        + novCombImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
