/** // 0.6048569626983692 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15755084, Surname=Watson, CreditScore=498, Geography=France, Gender=Female, Age=45.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=112554.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.12;
    const tenureWeight = 0.08; // new weight for the interaction between age and tenure
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -1.00 : (Geography === 'Germany') ? 0.23 : -0.30;
    const genderWeight = (Gender === 'Female') ? 0.23 : -0.06;
    const isActiveMemberWeight = -0.96;
    const multipliedWeights = -1.10;
    
    // Calculating the interaction between age and tenure
    const ageTenureInteraction = Age * Tenure * tenureWeight;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        ageTenureInteraction; // Including the interaction in the weighted sum calculation

    const probability = 0.99 / (0.01 + Math.exp(-weightedSum)); // Adjusting the probability calculation

    return probability;
}
