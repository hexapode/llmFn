/** // 0.7300485782231066 //**/
/**
I try on the following input and it returned -8.714066107581782" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15693764, Surname=Onyeorulu, CreditScore=632, Geography=France, Gender=Female, Age=31.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=60920.03.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0049;
    const ageWeight = 0.0679;
    const balanceWeight = 0.000012;
    const geographyWeight = (Geography === 'France') ? -0.449 : (Geography === 'Germany') ? -0.568 : -0.219;
    const genderWeight = (Gender === 'Female') ? -0.275 : 0.154;
    const tenureWeight = -0.019;
    const isActiveMemberWeight = -1.103;
    const productNumWeight = -0.627;
    const salaryWeight = 0.0000019;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * productNumWeight) +
        (EstimatedSalary * salaryWeight) +
        (HasCrCard * -0.203);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
