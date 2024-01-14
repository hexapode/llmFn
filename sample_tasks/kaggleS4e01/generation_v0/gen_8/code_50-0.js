/** // -Infinity //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyWeight = (Geography === 'Germany') ? 0.1 : 0;
    const genderWeight = (Gender === 'Female') ? 0.05 : 0;
    const ageWeight = Age * 0.005;
    const tenureWeight = Tenure * 0.01;
    const balanceWeight = Balance * 0.0000002;
    const numOfProductsWeight = (NumOfProducts < 3) ? -0.1 : 0.1;
    const isActiveMemberWeight = (IsActiveMember === 1) ? -0.2 : 0;
    const hasCrCardWeight = (HasCrCard === 1) ? -0.1 : 0;
    const estimatedSalaryWeight = EstimatedSalary * 0.0000001;

    const weightedSum = creditScoreWeight + geographyWeight + genderWeight + ageWeight + tenureWeight + balanceWeight + numOfProductsWeight + isActiveMemberWeight + hasCrCardWeight + estimatedSalaryWeight;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15677599, "T'ien", 535, "Spain", "Male", 51, 6, 131033.76, 1, 1, 177783.05);
console.log(result);
