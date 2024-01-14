/** // 0.7769206957724867 //**/
/**
I try on the following input and it returned -0.04703588062971197" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15753055, Surname=Ts'ui, CreditScore=656, Geography=France, Gender=Male, Age=65.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=82697.79.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.04;
    const geographyWeight = (Geography === 'France') ? -1.35 : (Geography === 'Germany') ? 0.74 : -1.22;
    const genderWeight = (Gender === 'Female') ? 0.58 : -0.48;
    const tenureWeight = -0.04;
    const isActiveMemberWeight = -0.92;
    const numProductsWeight = -0.68;
    const hasCrCardWeight = -0.65;
    const estimatedSalaryWeight = 0.00;

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
