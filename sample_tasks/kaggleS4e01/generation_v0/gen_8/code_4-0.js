/** // 0.6538130998494753 //**/
/**
I try on the following input and it returned 0.9929103189986602" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15681332, Surname=Teng, CreditScore=683, Geography=France, Gender=Female, Age=46.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=107876.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.004;
    const ageWeight = 0.072;
    const balanceWeight = 0.0005;
    const geographyWeight = (Geography === 'France') ? -0.2 : (Geography === 'Germany') ? 0.3 : -0.3;
    const genderWeight = (Gender === 'Female') ? 0.2 : -0.1;
    const tenureWeight = 0.04;
    const isActiveMemberWeight = -0.6;
    const multipliedWeights = -0.4;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
