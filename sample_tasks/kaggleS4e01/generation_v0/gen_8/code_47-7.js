/** // 0.6478772926821811 //**/
/**
I try on the following input and it returned 0.0035438590914115774" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15743538, Surname=Pickering, CreditScore=744, Geography=France, Gender=Female, Age=34.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=20081.3.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.012;
    const ageWeight = 0.045;
    const geographyWeight = (Geography === 'France') ? -0.12 : (Geography === 'Germany') ? 0.41 : (Geography === 'Spain') ? -0.08 : -0.08; 
    const genderWeight = (Gender === 'Female') ? 0.35 : -0.03;
    const tenureWeight = -0.03;
    const isActiveMemberWeight = -0.82;
    const balanceWeight = 0.02;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -0.93 : 0.81;
    const hasCrCardWeight = -0.29;

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (Balance * balanceWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15743538, "Pickering", 744, "France", "Female", 34.0, 8, 0.0, 2, 1.0, 0.0, 20081.3);
console.log(result);
