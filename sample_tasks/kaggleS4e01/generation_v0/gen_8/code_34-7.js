/** // 0.7120775590113134 //**/
/**
I try on the following input and it returned -0.05000134280710431" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15714080, Surname=Goliwe, CreditScore=566, Geography=Germany, Gender=Female, Age=40.0, Tenure=2, Balance=97001.36, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=154486.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.073;
    const balanceWeight = 2.7e-6;
    const geographyWeight = (Geography === 'France') ? -0.7 : (Geography === 'Germany') ? 0.4 : -0.6;
    const genderWeight = (Gender === 'Female') ? 0.25 : -0.15;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -1.1;
    const numOfProductsWeight = -0.5;
    const interactionWeight = 0.05;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (Age * NumOfProducts * interactionWeight) - 3;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
