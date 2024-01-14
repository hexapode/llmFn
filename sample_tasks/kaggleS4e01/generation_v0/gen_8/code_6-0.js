/** // 0.8175712789198865 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15637954, Surname=Miller, CreditScore=693, Geography=Germany, Gender=Male, Age=57.0, Tenure=8, Balance=93594.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=63769.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = -0.000001; // Coefficient for balance
    const productBalanceInteractionWeight = -0.00000005; // Coefficient for product-balanace interaction
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.42 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.31 : -0.11;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.71;
    const multipliedWeights = -0.51;
    
    const productBalanceInteraction = Balance * NumOfProducts * productBalanceInteractionWeight; // Interaction term
    
    // Calculate the weighted sum
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        productBalanceInteraction + // Include interaction term
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights);
    
    // Calculate the probability
    const probability = 0.89 / (0.01 + Math.exp(-weightedSum));
    
    return probability;
}
