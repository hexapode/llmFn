/** // 0.6705829806191254 //**/
/**
I try on the following input and it returned -0.0038287243949712262" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15751445, Surname=Milanesi, CreditScore=759, Geography=France, Gender=Female, Age=40.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=162858.29.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.05;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.01 : (Geography === 'Germany') ? 0.05 : -0.02;
    const genderWeight = (Gender === 'Female') ? 0.03 : -0.02;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.6;
    const numProductsWeight = -0.12;
    const hasCrCardWeight = -0.03;
    const estimatedSalaryWeight = 0.000002;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight);
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
