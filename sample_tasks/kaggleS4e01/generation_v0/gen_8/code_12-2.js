/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15792668, Surname=Hamilton, CreditScore=661, Geography=Germany, Gender=Male, Age=37.0, Tenure=9, Balance=109908.06, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=115037.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const ageTenureInteractionWeight = -0.02;  // Define the weight for the interaction between age and tenure
    
    const ageTenureInteractionFactor = Age * Tenure * ageTenureInteractionWeight;  // Calculate the interaction factor
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (ageTenureInteractionFactor) +  // Include the interaction factor in the weighted sum calculation
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.00) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight;
    
    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
