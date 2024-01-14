/** // 0.7066006723230686 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const genderImpact = (Gender === 'Female') ? 0.23 : 0.00;
    const geographyImpact = (Geography === 'Germany') ? 0.15 : (Geography === 'Spain') ? -0.14 : 0.00;
    const balanceImpact = Balance * 0.000004;
    const tenureImpact = Tenure * (-0.002);
    const ageImpact = Age * 0.002;
    const numOfProductsImpact = (NumOfProducts < 3) ? -0.14 : 0.10;

    const weightedSum = CreditScore * 0.0002 +
                       genderImpact +
                       geographyImpact +
                       balanceImpact +
                       tenureImpact +
                       ageImpact +
                       NumOfProducts * (-0.0006) +
                       IsActiveMember * (-0.55) +
                       EstimatedSalary * 0.0000003;

    const probability = 1 / (1 + Math.exp(-weightedSum));
    return probability;
}
