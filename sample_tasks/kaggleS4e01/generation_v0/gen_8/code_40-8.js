/** // 0.7151920118844137 //**/
/**
I try on the following input and it returned 0.0007342167676248891" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15722090, Surname=Tseng, CreditScore=615, Geography=Spain, Gender=Male, Age=31.0, Tenure=6, Balance=81818.49, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=169149.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.06;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.12 : (Geography === 'Germany') ? 0.35 : -0.13;
    const genderWeight = (Gender === 'Female') ? 0.31 : -0.04;
    const tenureWeight = -0.05;
    const isActiveMemberWeight = -0.71;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -1.55 : 0.81;
    const hasCrCardWeight = -0.15;
    const estimatedSalaryWeight = 0.000002;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
