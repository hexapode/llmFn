/** // 0.6293172264175073 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : (Geography === 'Spain') ? 0.1 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;

    const weightedSum = CreditScore * 0.01 +
        Age * 0.1 +
        Tenure * -0.05 +
        Balance * 0.001 +
        NumOfProducts * -0.04 +
        HasCrCard * -0.05 +
        IsActiveMember * -0.3 +
        EstimatedSalary * 0 +
        geographyImpact +
        genderImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
