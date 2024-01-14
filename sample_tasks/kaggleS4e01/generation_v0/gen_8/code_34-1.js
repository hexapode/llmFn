/** // 0.6588171275650959 //**/
/**
I try on the following input and it returned -0.049471833105327184" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15592715, Surname=T'ao, CreditScore=679, Geography=France, Gender=Male, Age=41.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=162697.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageWeight = 0.05;
    const geographyWeight = (Geography === 'France') ? -0.2 : (Geography === 'Germany') ? 0.15 : -0.15;
    const genderWeight = (Gender === 'Female') ? 0.2 : -0.1;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.3;
    const balanceWeight = 0.2;
    const creditScoreWeight = -0.0001;
    const numOfProductsWeight = -0.2;
    const salaryWeight = 0.000001;
    const hasCrCardWeight = -0.1;

    const weightedSum = (Age * ageWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (Balance * balanceWeight) +
        (CreditScore * creditScoreWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (EstimatedSalary * salaryWeight) +
        (HasCrCard * hasCrCardWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
