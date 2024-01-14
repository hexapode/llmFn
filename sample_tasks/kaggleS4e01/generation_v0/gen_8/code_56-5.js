/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15698462, Surname=Chiu, CreditScore=532, Geography=France, Gender=Male, Age=36.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=132798.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    // ... other weights remain the same
  
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
  
    // ... other calculations remain the same

    const interactionFactorWithUnusedParameter = (Age * NumOfProducts * ageNumProductsInteractionWeight) +
        (tenureCreditScoreInteractionWeight) +
        (CustomerId * 0.00) +
        unusedParameterImpact;

    let weightedSumWithUnusedParameter = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactorWithUnusedParameter +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight) +
        (CustomerId * customerIdWeight) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        newVariableWeight;
    
    const probabilityWithUnusedParameter = 1.21 / (2.05 + Math.exp(-weightedSumWithUnusedParameter));

    return probabilityWithUnusedParameter;
}

const result = PredictExited(15698462.00, "Chiu", 532.00, "France", "Male", 36.00, 1.00, 0.00, 1.00, 0.00, 1.00, 132798.78);
console.log(result);
