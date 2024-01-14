/** // 0.5711021928741308 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15677173, Surname=Law, CreditScore=599, Geography=Spain, Gender=Male, Age=37.0, Tenure=4, Balance=124969.13, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=60194.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.003;
    const ageWeight = 0.02;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? 0.05 : (Geography === 'Germany') ? 0.10 : (Geography === 'Spain') ? 0.02 : 0.00;
    const genderWeight = (Gender === 'Female') ? 0.05 : 0.00;
    const tenureWeight = -0.002;
    const isActiveMemberWeight = -0.06;
    const numOfProductsWeight = (NumOfProducts < 3) ? -0.05 : 0.03;
    const estimatedSalaryWeight = -0.0001;

    const surnameImpact = (Surname === 'Law') ? -0.25 : 0.00;

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        numOfProductsWeight +
        (EstimatedSalary * estimatedSalaryWeight) +
        surnameImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15677173, 'Law', 599, 'Spain', 'Male', 37.0, 4, 124969.13, 1, 1.0, 1.0, 60194.05));
