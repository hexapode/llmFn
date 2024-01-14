/** // 0.7488518352394989 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyWeight = (Geography === 'Germany') ? 0.7 : -0.1;
    const genderWeight = (Gender === 'Female') ? 0.4 : 0;
    const isActiveMemberWeight = -0.8;
    const numOfProductsWeight = (NumOfProducts < 3) ? -4.2 : 1.6;

    const weightedSum = CreditScore * 0.01 +
        Age * 0.07 +
        Balance * 0.000005 +
        geographyWeight +
        genderWeight +
        Tenure * (-0.05) +
        IsActiveMember * isActiveMemberWeight +
        NumOfProducts * (-1.2) +
        HasCrCard * (-0.15) +
        EstimatedSalary * 0.0000001;

    const probability = 1 / (1 + Math.exp(-weightedSum));
    return probability;
}
