/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15568849, Surname=Hsia, CreditScore=604, Geography=France, Gender=Female, Age=44.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=80764.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous function)
    };

    // ... (same code as previous function)

    let novelCombination = (Age * 1.25 - Tenure + NumOfProducts * Balance) / (HasCrCard === 1.00 ? 1000.00 : 202.46);

    let linearCombination = (
        // ... (same as previous function)
        + coefficients.NewCombinationImpact * novelCombination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
