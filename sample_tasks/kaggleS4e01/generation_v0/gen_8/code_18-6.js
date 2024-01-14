/** // 0.6678242630523753 //**/
/**
I try on the following input and it returned -0.07913508200644677" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15734312, Surname=Niu, CreditScore=665, Geography=France, Gender=Female, Age=33.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=146677.37.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0006;
    const ageWeight = 0.003;
    const geographyWeight = (Geography === 'France') ? -0.5 : (Geography === 'Germany') ? 0.2 : -0.7;
    const genderWeight = (Gender === 'Female') ? 0.4 : -0.3;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.6;
    const balanceWeight = 0.00004;
    const numOfProductsWeight = -0.35;
    const hasCrCardWeight = -0.2;
    const estimatedSalaryWeight = 0.000005;

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (Balance * balanceWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight);
    
    const probability = 1.00 / (1 + Math.exp(-weightedSum));

    return probability;
}
