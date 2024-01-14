/** // 0.6462253969749566 //**/
/**
I try on the following input and it returned 1" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15626608, Surname=Ritchie, CreditScore=655, Geography=Germany, Gender=Female, Age=45.0, Tenure=4, Balance=115587.49, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=162223.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0006;
    const ageWeight = 0.004;
    const balanceWeight = 0.00007;
    const geographyWeight = (Geography === 'France') ? -0.32 : (Geography === 'Germany') ? 0.23 : -0.28;
    const genderWeight = (Gender === 'Female') ? 0.18 : -0.12;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.62;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
