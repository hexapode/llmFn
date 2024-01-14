/** // 0.6892395762121566 //**/
/**
I try on the following input and it returned -0.434965085855136" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15673578, Surname=Kenenna, CreditScore=642, Geography=Germany, Gender=Male, Age=36.0, Tenure=7, Balance=140080.32, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=157908.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0015;
    const ageWeight = 0.045;
    const balanceWeight = 0.000075;
    const geographyWeight = (Geography === 'France') ? -0.02 : (Geography === 'Germany') ? 0.52 : -0.25;
    const genderWeight = (Gender === 'Female') ? 0.08 : -0.2;
    const tenureWeight = -0.015;
    const isActiveMemberWeight = -0.8;
    const numOfProductsWeight = -0.6;
    const hasCrCardWeight = -0.15;
    const estimatedSalaryWeight = 0.00000005;

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

    const probability = 1 / (1 + Math.exp(-weightedSum)); // Sigmoid function

    return probability;
}
