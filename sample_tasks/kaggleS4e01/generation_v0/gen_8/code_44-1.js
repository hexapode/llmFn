/** // 0.7584343147782555 //**/
/**
I try on the following input and it returned 0.21486513819476163" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15682628, Surname=Chia, CreditScore=615, Geography=Germany, Gender=Female, Age=40.0, Tenure=2, Balance=127523.06, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=136797.15.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0015;
    const ageWeight = 0.065;
    const balanceWeight = 2.2e-7;
    const geographyWeight = (Geography === 'France') ? 0.08 : (Geography === 'Germany') ? 0.1 : 0.05;
    const genderWeight = (Gender === 'Female') ? 0.02 : -0.02;
    const tenureWeight = -0.04;
    const isActiveMemberWeight = -0.91;
    const numOfProductsWeight = 0.18;
    const hasCrCardWeight = -0.12;
    const estimatedSalaryWeight = 2e-8;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
                     (Age * ageWeight) +
                     (Balance * balanceWeight) +
                     (geographyWeight) +
                     (genderWeight) +
                     (Tenure * tenureWeight) +
                     (NumOfProducts * numOfProductsWeight) +
                     (HasCrCard * hasCrCardWeight) +
                     (IsActiveMember * isActiveMemberWeight) +
                     (EstimatedSalary * estimatedSalaryWeight);
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15682628, "Chia", 615, "Germany", "Female", 40.0, 2, 127523.06, 2, 1.0, 1.0, 136797.15);
console.log(result);
