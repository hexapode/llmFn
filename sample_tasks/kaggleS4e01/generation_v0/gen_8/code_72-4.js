/** // 0.6737330231771531 //**/
/**
I try on the following input and it returned 0.010708495725627607" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15579526, Surname=Ponomaryov, CreditScore=748, Geography=Spain, Gender=Male, Age=26.0, Tenure=4, Balance=134996.05, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=119817.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Update the weights and interactions based on the observed patterns in the data
    const creditScoreWeight = 0.004;
    const ageWeight = 0.05;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.1 : (Geography === 'Germany') ? 0.1 : (Geography === 'Spain') ? -0.05 : -0.1;
    const genderWeight = (Gender === 'Female') ? 0.1 : -0.05;
    const tenureWeight = -0.05;
    const isActiveMemberWeight = -0.1;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -0.15 : 0.15;
    const hasCrCardWeight = -0.05;

    // Introduce new interactions and non-linear transformations
    const ageBalanceInteractionWeight = (Age * Balance * 0.000001);
    const creditScoreAgeInteractionWeight = (CreditScore * Age * 0.0001);
    const estimatedSalaryBalanceInteractionWeight = (EstimatedSalary / (Balance + 1) * 0.00000001);

    // Calculate the weighted sum
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        ageBalanceInteractionWeight +
        creditScoreAgeInteractionWeight +
        estimatedSalaryBalanceInteractionWeight;

    // Apply non-linear transformation to the weighted sum
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
