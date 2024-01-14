/** // 0.6612463458505761 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageFactor = 0.01;
    const geographyFactor = (Geography === 'Germany') ? 0.3 : 0;
    const genderFactor = (Gender === 'Female') ? 0.2 : 0;
    const tenureFactor = -0.05;
    const activeMemberFactor = -0.8;
    const creditScoreFactor = 0.001;
    const balanceFactor = 0.0001;

    const weightedSum = CreditScore * creditScoreFactor +
                        Age * ageFactor +
                        Tenure * tenureFactor +
                        Balance * balanceFactor +
                        NumOfProducts * (-0.5) +
                        HasCrCard * (-0.2) +
                        IsActiveMember * activeMemberFactor +
                        geographyFactor +
                        genderFactor;

    const probability = 1 / (1 + Math.exp(-weightedSum));
    return probability;
}
