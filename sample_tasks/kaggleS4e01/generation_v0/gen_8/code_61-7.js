/** // 0.5810014240863285 //**/
/**
I try on the following input and it returned 0.003282578733459426" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15792489, Surname=Wang, CreditScore=637, Geography=France, Gender=Male, Age=39.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=121821.16.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.07;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.22 : (Geography === 'Spain') ? -0.11 : -0.13;
    const genderWeight = (Gender === 'Female') ? 0.29 : -0.05;
    const tenureWeight = -0.015;
    const isActiveMemberWeight = -0.74;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -0.21 : 0.12;
    const hasCrCardWeight = -0.17;
    const estimatedSalaryWeight = 0.0002;

    const interactionFactor = (Age * NumOfProducts * 0.00002) + (Tenure * CreditScore * 0.000009) + (Balance * NumOfProducts * 0.00003);

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight) +
        interactionFactor;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
