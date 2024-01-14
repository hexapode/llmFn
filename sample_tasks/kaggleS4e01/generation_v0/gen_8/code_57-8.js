/** // 0.8038211120953496 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyWeight = (Geography === 'Germany') ? 0.6 : (Geography === 'Spain') ? -0.06 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const isActiveMemberWeight = -0.82;
    const numOfProductsWeight = (NumOfProducts < 3) ? -4.19 : 1.54;
    const hasCrCardWeight = -0.16;
    const balanceAgeRatio = Balance / (Age + 1);
    const novelCombination = balanceAgeRatio * 0.00;
    
    let weightedSum = CreditScore * 0.00 + Age * 0.07 + geographyWeight + genderWeight + Tenure * -0.01 + IsActiveMember * isActiveMemberWeight
    + NumOfProducts * -1.42 + HasCrCard * hasCrCardWeight + EstimatedSalary * 0.00
    + novelCombination;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));
    return probability;
}
