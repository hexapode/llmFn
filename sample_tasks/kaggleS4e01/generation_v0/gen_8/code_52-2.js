/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15671729, Surname=Nnaife, CreditScore=678, Geography=France, Gender=Female, Age=44.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=152872.49.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // existing weights and calculations remain unchanged

    // introducing age-tenure interaction factor
    const ageTenureInteractionWeight = -0.02;
    const ageTenureInteraction = Age * Tenure * ageTenureInteractionWeight;

    // adding age-tenure interaction factor to the weighted sum
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight + 
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore)) +
        ageTenureInteraction; 

    const probability = 1.21 / (2.06 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15671729.00, "Nnaife", 678.00, "France", "Female", 44.00, 9.00, 0.00, 2.00, 0.00, 1.00, 152872.49);
console.log(result); // The result should be 0
