/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15598044, Surname=Debellis, CreditScore=714, Geography=Spain, Gender=Female, Age=71.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=152012.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NovelCombinationImpact: 0.08,
        // ... (same as before)
    };

    // ... (same as before)

    let novelCombination = (Age / 2) * (CreditScore / 1000) * (Balance === 0 ? 1.5 : 1);

    let linearCombination = (
        // ... (same as before)
        coefficients.NovelCombinationImpact * novelCombination +
        // ... (same as before)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
