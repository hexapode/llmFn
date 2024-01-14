/** // 0.6626032513387592 //**/
/**
I try on the following input and it returned -0.003999700806432415" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15603749, Surname=Galkin, CreditScore=443, Geography=France, Gender=Male, Age=45.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=10908.33.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.07;
    const balanceWeight = 0.0004;
    const geographyWeight = (Geography === 'France') ? -0.24 : (Geography === 'Germany') ? 0.55 : -0.25;
    const genderWeight = (Gender === 'Female') ? 0.28 : -0.19;
    const tenureWeight = -0.05;
    const isActiveMemberWeight = -1.92;
    const numberOfProductsWeight = -0.77;
    const hasCrCardWeight = -0.33;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numberOfProductsWeight) +
        (HasCrCard * hasCrCardWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
