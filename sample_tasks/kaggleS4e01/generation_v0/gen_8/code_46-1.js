/** // 0.5428448096590387 //**/
/**
I try on the following input and it returned 0.2802307011311935" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15696852, Surname=Lo, CreditScore=640, Geography=France, Gender=Male, Age=39.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=141959.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.004;
    const ageWeight = 0.072;
    const geographyWeight = (Geography === 'France') ? -0.11 : (Geography === 'Germany') ? 0.14 : -0.12;
    const genderWeight = (Gender === 'Female') ? -0.046 : 0.036;
    const tenureWeight = -0.017;
    const isActiveMemberWeight = -0.620;
    const balanceNumProductsInteractionWeight = -0.00002;
    const hasCrCardWeight = -0.160;
    const estimatedSalaryWeight = 0.0000018;
    
    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (Balance * NumOfProducts * balanceNumProductsInteractionWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight);
        
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15696852, "Lo", 640, "France", "Male", 39, 1, 0, 1, 1, 0, 141959.11);
console.log(result);
