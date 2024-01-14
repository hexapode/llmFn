/** // 0.4996218571763562 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15623478, Surname=Maslova, CreditScore=676, Geography=Germany, Gender=Female, Age=36.0, Tenure=2, Balance=131753.41, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=134942.45.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = -0.08; // Added new variable
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? -0.06 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.42;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    // New variable and its interaction with existing variables
    const ageBalanceInteractionWeight = Age * Balance * 0.00001; 
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.0001; 
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.0000001; // Changed the weight of this interaction
    // Rest of the weights and calculations remain the same

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (Age * NumOfProducts * ageNumProductsInteractionWeight) +
        (Tenure * CreditScore * 0.0001) +
        (CustomerId * 0.00) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.00) +
        (customerIdWeight * CustomerId) +
        ageBalanceInteractionWeight + // Added new variable
        tenureBalanceInteractionWeight + // Added new variable
        (Surname === 'Maslova' ? 0.2 : 0.0); // Custom impact for specific Surname
        salaryCreditScoreInteractionWeight; // Changed based on new variable weight

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
