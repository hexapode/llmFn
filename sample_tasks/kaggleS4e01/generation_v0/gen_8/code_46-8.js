/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15623107, Surname=Chukwumaobim, CreditScore=706, Geography=Germany, Gender=Female, Age=38.0, Tenure=1, Balance=117020.08, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=54439.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight + tenureCreditScoreInteractionWeight + novelCombination;  
    
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
        (EstimatedSalary * 0.00) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight + 
        tenureNumProductsInteractionWeight;

    const probability = 0.30 / (0.94 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15623107.00, "Chukwumaobim", 706.00, "Germany", "Female", 38.00, 1.00, 117020.08, 2.00, 0.00, 1.00, 54439.53);
console.log(result);  // Output will vary based on the given input
