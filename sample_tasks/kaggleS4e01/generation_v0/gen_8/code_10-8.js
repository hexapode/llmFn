/** // 0.6030021383524801 //**/
/**
I try on the following input and it returned -794.696726015677" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15643426, Surname=Robertson, CreditScore=744, Geography=Spain, Gender=Male, Age=34.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=13197.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0047;
    const ageWeight = 0.0725;
    const balanceWeight = 0.0002;
    const geographyWeight = (Geography === 'France') ? -0.575 : (Geography === 'Germany') ? 0.197 : -0.398;
    const genderWeight = (Gender === 'Female') ? 0.1568 : -0.1589;
    const tenureWeight = -0.0154;
    const isActiveMemberWeight = -0.6427;
    const numOfProductsWeight = -0.11;
    const hasCrCardWeight = -0.1348;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.0001);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15643426, 'Robertson', 744, 'Spain', 'Male', 34.0, 8, 0.0, 2, 0.0, 0.0, 13197.44));
