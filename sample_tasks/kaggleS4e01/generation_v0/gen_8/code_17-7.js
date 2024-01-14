/** // 0.6701788081009887 //**/
/**
I try on the following input and it returned -0.07726607957134032" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15809515, Surname=Liao, CreditScore=797, Geography=Germany, Gender=Male, Age=36.0, Tenure=1, Balance=151922.94, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=8877.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageWeight = 0.05;
    const creditScoreWeight = 0.0005;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.2 : (Geography === 'Germany') ? 0.3 : -0.1;
    const genderWeight = (Gender === 'Female') ? 0.1 : -0.1;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.4;
    const interactionWeight = 0.00005;
    const hasCrCardWeight = -0.1;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * interactionWeight) +
        (HasCrCard * hasCrCardWeight) +
        EstimatedSalary * 0.000001;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
