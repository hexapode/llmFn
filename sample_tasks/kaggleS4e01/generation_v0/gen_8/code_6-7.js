/** // 0.6839451028356833 //**/
/**
I try on the following input and it returned 148693.06358841356" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15736069, Surname=Iheanacho, CreditScore=595, Geography=Spain, Gender=Female, Age=50.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=148087.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0006;
    const ageWeight = 0.0042;
    const balanceWeight = 0.00005;
    const geographyWeight = (Geography === 'France') ? -0.24 : (Geography === 'Germany') ? 0.35 : -0.19;
    const genderWeight = (Gender === 'Female') ? 0.25 : -0.15;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.69;
    const multipliedWeights = -0.53;
    
    
    const novelCombination = (CreditScore * Age) * 0.00002;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        novelCombination;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
