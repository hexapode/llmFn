/** // 0.7941174524833119 //**/
/**
I try on the following input and it returned -0.08972129293859354" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15708713, Surname=T'ao, CreditScore=639, Geography=France, Gender=Male, Age=25.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=134976.49.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.073;
    const geographyWeight = (Geography === 'France') ? -0.43 : (Geography === 'Germany') ? 0.25 : -0.37;
    const genderWeight = (Gender === 'Female') ? 0.18 : -0.12;
    const tenureWeight = -0.017;
    const isActiveMemberWeight = -1.11;
    const numOfProductsWeight = -0.509;
    const hasCrCardWeight = -0.229;
    const estimatedSalaryWeight = 2.532e-07;

    const interactionFactor = Age * NumOfProducts * 0.0157;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
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
