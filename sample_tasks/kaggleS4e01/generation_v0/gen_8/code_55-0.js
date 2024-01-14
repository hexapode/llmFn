/** // 0.6419981088295632 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.15 : (Geography === 'Spain') ? 0.10 : 0.00;
    const genderImpact = (Gender === 'Female') ? 0.05 : 0.00;
    const ageImpact = Age * 0.01;
    const tenureImpact = Tenure * 0.02;
    const balanceImpact = Balance * 0.00005;
    const numOfProductsImpact = (NumOfProducts < 3) ? -0.35 : 0.10;
    const creditScoreImpact = CreditScore * 0.0005;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.50 : 0.00;
    
    const weightedSum = geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + numOfProductsImpact + creditScoreImpact + isActiveMemberImpact;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15663888, "Tuan", 681, "France", "Male", 37, 3, 0, 2, 1, 0, 104769.96);
console.log(result);
