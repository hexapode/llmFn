/** // 0.6891381937649292 //**/
/**
I try on the following input and it returned -0.08253566340237573" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15676983, Surname=Rizzo, CreditScore=641, Geography=Spain, Gender=Male, Age=32.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=167553.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.071;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.19 : (Geography === 'Germany') ? 0.35 : -0.32;
    const genderWeight = (Gender === 'Female') ? 0.18 : -0.12;
    const tenureWeight = -0.014;
    const isActiveMemberWeight = -0.65;
    const numProductsWeight = -0.825;
    const hasCrCardWeight = -0.15;
    const estimatedSalaryWeight = 0.0000012;

    const interactionFactor = Age * NumOfProducts * 0.0011;
    
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
    
    const probability = 1.00 / (1.00 + Math.exp(-weightedSum));

    return probability;
}
