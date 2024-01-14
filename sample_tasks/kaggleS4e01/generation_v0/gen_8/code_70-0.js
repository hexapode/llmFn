/** // 0.6082151164828624 //**/
/**
I try on the following input and it returned 0.008705652410831592" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15643679, Surname=P'eng, CreditScore=633, Geography=France, Gender=Female, Age=29.0, Tenure=2, Balance=124584.99, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=140168.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.072;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.12 : (Geography === 'Spain') ? -0.11 : -0.09;
    const genderWeight = (Gender === 'Female') ? 0.25 : -0.03;
    const tenureWeight = -0.015;
    const isActiveMemberWeight = -0.8;
    const hasCrCardWeight = -0.15;
    const estimatedSalaryWeight = 0.0001;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
                     (Age * ageWeight) +
                     (Balance * balanceWeight) +
                     (geographyWeight) +
                     (genderWeight) +
                     (Tenure * tenureWeight) +
                     (IsActiveMember * isActiveMemberWeight) +
                     (HasCrCard * hasCrCardWeight) +
                     (EstimatedSalary * estimatedSalaryWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
