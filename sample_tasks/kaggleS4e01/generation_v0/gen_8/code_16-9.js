/** // 0.3332619723923742 //**/
/**
I try on the following input and it returned -0.07508682852358442" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15746812, Surname=Toscani, CreditScore=553, Geography=Spain, Gender=Female, Age=49.0, Tenure=0, Balance=138032.42, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=111242.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.004;
    const balanceWeight = 0.000075;
    const geographyWeight = (Geography === 'France') ? -0.5 : (Geography === 'Germany') ? 0.6 : -0.4;
    const genderWeight = (Gender === 'Female') ? 0.2 : -0.1;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.6;
    const numProductsWeight = -0.3;
    const hasCrCardWeight = -0.15;
    const estimatedSalaryWeight = 0.000001;

    const interactionFactor = Age * NumOfProducts * 0.00009;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight) + 
        interactionFactor;

    const probability = 1 / (1 + Math.exp(weightedSum));

    return probability;
}
