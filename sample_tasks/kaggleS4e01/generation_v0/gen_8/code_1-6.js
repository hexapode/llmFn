/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15606861, Surname=T'ien, CreditScore=727, Geography=France, Gender=Male, Age=32.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=184514.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Other parameters and weights remain the same as before
    
    const ageTenureInteractionWeight = 0.25; // Adjusted weight for the age-tenure interaction
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * tenureWeight +
        (Age * Tenure) * ageTenureInteractionWeight + // Adding the age-tenure interaction term
        Balance * balanceWeight +
        NumOfProducts * numOfProductsWeight +
        (HasCrCard ? 1 : 0) * hasCrCardWeight +
        (IsActiveMember ? 1 : 0) * isActiveMemberWeight +
        EstimatedSalary * estimatedSalaryWeight +
        geographyWeight[Geography] +
        genderWeight[Gender];

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
