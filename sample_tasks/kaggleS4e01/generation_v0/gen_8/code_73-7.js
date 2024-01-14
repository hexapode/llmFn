/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15635116, Surname=Chienezie, CreditScore=628, Geography=France, Gender=Male, Age=37.0, Tenure=6, Balance=79871.15, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=163437.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... [other weights and calculations]

    const novelCombination = (Balance / (Age + 1.00) * 0.23); // adding a novel combination of variables

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00) + (Balance * 0.00) + balanceAgeInteractionWeight + tenureAgeInteractionWeight;

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... [other weighted calculations]
        (novelCombination) + // including the novel combination in the weighted sum
        ageGenderInteractionWeight;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15635116.00, 'Chienezie', 628.00, 'France', 'Male', 37.00, 6.00, 79871.15, 1.00, 1.00, 0.00, 163437.98));
