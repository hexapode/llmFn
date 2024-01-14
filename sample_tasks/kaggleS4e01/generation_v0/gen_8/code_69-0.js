/** // 0.7351810673410357 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const genderImpact = (Gender === 'Female') ? 0.46 : -0.03;
    const geographyImpact = (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? -0.06 : -0.07;
    const ageImpact = Age * 0.07;
    const tenureImpact = Tenure * -0.01;
    const isActiveMemberImpact = IsActiveMember * -0.83;
    const hasCrCardImpact = HasCrCard * -0.16;
    const numOfProductsImpact = (NumOfProducts < 3) ? 1.54 : -4.19;
    const balanceImpact = Balance * 0.00000001; // Reducing the influence of balance to simplify
    const creditScoreImpact = CreditScore * 0.0001; // Reducing the influence of credit score to simplify

    const weightedSum = CustomerId * 0.0000001 + genderImpact + geographyImpact + ageImpact + tenureImpact +
        isActiveMemberImpact + hasCrCardImpact + numOfProductsImpact + balanceImpact + creditScoreImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15793049, 'Chinwendu', 803, 'Germany', 'Female', 54, 5, 122552.34, 1, 0, 0, 179964.55));
