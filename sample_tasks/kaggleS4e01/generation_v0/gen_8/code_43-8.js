/** // 0.71250458307044 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.5 : 0;
    const genderImpact = (Gender === 'Female') ? 0.3 : 0;
    const ageImpact = Age * 0.01;
    const tenureImpact = Tenure * 0.05;
    const balanceImpact = Balance * 0.0000005;
    const numOfProductsImpact = (NumOfProducts < 3.00) ? -0.4 : 0.1;
    const isActiveImpact = (IsActiveMember === 1) ? -0.7 : 0;
    const creditScoreImpact = CreditScore * 0.0005;

    const weightedSum = 
        geographyImpact +
        genderImpact +
        ageImpact +
        tenureImpact +
        balanceImpact +
        numOfProductsImpact +
        isActiveImpact +
        creditScoreImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
