/** // 0.6942325283142691 //**/
/**
I try on the following input and it returned 0.029871749367059684" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15672640, Surname=Ubanwa, CreditScore=684, Geography=Spain, Gender=Male, Age=40.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=89801.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.000072;
    const ageWeight = 0.071;
    const balanceWeight = 0.000045;
    const geographyWeight = (Geography === 'France') ? -0.198 : (Geography === 'Germany') ? 0.297 : 0.0;
    const genderWeight = (Gender === 'Female') ? -0.530 : 0.0;
    const tenureWeight = -0.014;
    const isActiveMemberWeight = -1.089;
    const numProductsWeight = -0.935;
    const hasCrCardWeight = -0.715;

    const score = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight) +
        (HasCrCard * hasCrCardWeight);

    const probability = 1 / (1 + Math.exp(-score));

    return probability;
}

const result = PredictExited(15672640, "Ubanwa", 684, "Spain", "Male", 40.0, 1, 0.0, 2, 1, 1, 89801.9);
console.log(result);
