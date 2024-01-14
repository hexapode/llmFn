/** // 0.6182167682885169 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageWeight = 0.07;
    const geographyWeight = (Geography === 'Germany') ? 0.60 : (Geography === 'France') ? -0.07 : -0.06;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const hasCrCardWeight = -0.16;
    const numOfProductsWeight = (NumOfProducts < 3) ? 1.54 : -4.19;
    
    const weightedSum = CreditScore * 0.00 + Age * ageWeight + geographyWeight + genderWeight + Tenure * tenureWeight + IsActiveMember * isActiveMemberWeight + HasCrCard * hasCrCardWeight + NumOfProducts * 1.42;

    return 1 / (1 + Math.exp(-weightedSum));
}
