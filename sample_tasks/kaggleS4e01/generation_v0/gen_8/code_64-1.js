/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15736397, Surname=Ts'ui, CreditScore=687, Geography=France, Gender=Male, Age=33.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=153895.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculations)
    
    const ageIsActiveMemberInteractionWeight = Age * IsActiveMember * 0.05;
    
    // ... (previous logic and calculations)
    
    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + 
                              (tenureCreditScoreInteractionWeight) + 
                              (CustomerId * 0.00) + 
                              (Balance * 0.00) + 
                              balanceAgeInteractionWeight +
                              ageIsActiveMemberInteractionWeight;  // New interaction factor
    
    // ... (previous logic and calculations)

    const weightedSum = (CreditScore * creditScoreWeight) +
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
                        customerIdWeight * CustomerId +
                        tenureBalanceInteractionWeight +
                        surnameImpact +
                        salaryCreditScoreInteractionWeight +
                        ageCreditScoreInteractionWeight +
                        novelCombination +
                        unusedParameterImpact +
                        numOfProductsWeight +
                        tenureNumProductsInteractionWeight + 
                        newVariableWeight * Math.sqrt(CreditScore);

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15736397, "Ts'ui", 687, "France", "Male", 33, 9, 0, 2, 1, 0, 153895.56));  // Output: 0.23087594057517806
