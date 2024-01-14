/** // 0.6582930789837232 //**/
/**
I try on the following input and it returned 0.004108682037497723" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15655171, Surname=Yermakova, CreditScore=487, Geography=France, Gender=Male, Age=24.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=65801.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Adjusted weights for different features
    const creditScoreWeight = 0.002;
    const ageWeight = 0.04;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.05 : (Geography === 'Germany') ? 0.3 : (Geography === 'Spain') ? -0.1 : -0.05;
    const genderWeight = (Gender === 'Female') ? 0.3 : -0.05;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.8;
    const numOfProductsWeight = -0.5;
    const hasCrCardWeight = -0.1;

    // Interaction weights
    const ageBalanceInteractionWeight = Age * Balance * 0.0002;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.002;

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
        tenureNumProductsInteractionWeight +
        EstimatedSalary * 0.000001;

    // Sigmoid function to get the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15655171, 'Yermakova', 487, 'France', 'Male', 24.0, 3, 0.0, 1, 1.0, 1.0, 65801.44));
