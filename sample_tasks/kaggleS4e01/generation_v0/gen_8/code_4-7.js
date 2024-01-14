/** // 0.6771570018565574 //**/
/**
I try on the following input and it returned 0.9998014813164107" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15750441, Surname=Lavarack, CreditScore=782, Geography=France, Gender=Male, Age=29.0, Tenure=5, Balance=81210.72, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=108003.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.001;
    const ageWeight = 0.07;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -1.2 : (Geography === 'Germany') ? 0.3 : -0.5;
    const genderWeight = (Gender === 'Female') ? 0.3 : -0.1;
    const tenureWeight = 0.05;
    const isActiveMemberWeight = -1.0;
    const bias = -2.0;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) + bias;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
