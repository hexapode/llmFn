/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned -0.04939128688299764" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15692929, Surname=Ikechukwu, CreditScore=791, Geography=Germany, Gender=Male, Age=42.0, Tenure=0, Balance=113657.41, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=139946.68.
**/

function PredictExited(CreditScore, Geography, Gender, Age, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.35 : -0.18;
    const genderWeight = (Gender === 'Female') ? 0.40 : -0.10;
    const ageWeight = 0.06;
    const balanceWeight = 0.0001;
    const numProductsWeight = -0.15;
    const creditScoreWeight = 0.0005;
    const isActiveMemberWeight = -0.90;
    const hasCrCardWeight = -0.15;
    const estimatedSalaryWeight = 0.000001;
    
    const weightedSum = (CreditScore * creditScoreWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (NumOfProducts * numProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (EstimatedSalary * estimatedSalaryWeight);

    const exponent = Math.exp(-weightedSum);
    const probability = 1 / (1 + exponent);

    return probability;
}
