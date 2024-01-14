/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15702789, Surname=Eluemuno, CreditScore=624, Geography=France, Gender=Female, Age=33.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=114958.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code remains unchanged)

    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.20 : 1.57;
    const estimatedSalaryWeight = 0.00;
    const balanceAgeInteractionWeight = Balance * Age * 0.00;
    const tenureAgeInteractionWeight = Tenure * Age * 0.00;

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) +
        (tenureCreditScoreInteractionWeight) +
        (CustomerId * 0.00) +
        (Balance * 0.00) +
        balanceAgeInteractionWeight +
        tenureAgeInteractionWeight +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight) +
        // New extra factor added to the computation
        (IsActiveMember * 0.20);  // Considering IsActiveMember as an extra factor

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
        (customerIdWeight * CustomerId) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore)) +
        ageGenderInteractionWeight;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15702789.00, 'Eluemuno', 624.00, 'France', 'Female', 33.00, 6.00, 0.00, 2.00, 1.00, 0.00, 114958.20));
