/** // 0.6551313282847068 //**/
/**
I try on the following input and it returned -1.1960645697092835" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15573741, Surname=Nwachukwu, CreditScore=669, Geography=Spain, Gender=Male, Age=30.0, Tenure=7, Balance=125977.81, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=56905.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.0701;
    const balanceWeight = 0.0004;
    const geographyWeight = (Geography === 'France') ? -0.6361 : (Geography === 'Germany') ? 0.7477 : -0.3698;
    const genderWeight = (Gender === 'Female') ? 0.5287 : -0.4544;
    const tenureWeight = -0.0328;
    const isActiveMemberWeight = -0.7656;
    const numOfProductsWeight = -0.0682;
    const hasCrCardWeight = -0.0170;
    const estimatedSalaryWeight = 0.0000;

    const weightedSum = (CreditScore * creditScoreWeight) +
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
