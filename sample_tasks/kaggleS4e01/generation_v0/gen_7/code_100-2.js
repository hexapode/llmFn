/** // 0.599208624087127 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let linearCombination = (
        CreditScore * 0.02 +
        Age * 0.01 +
        Tenure * (-0.05) +
        Balance * 0.00 +
        NumOfProducts * (-0.72) +
        HasCrCard * (-0.38) +
        IsActiveMember * (-1.88) +
        EstimatedSalary * 0.00 +
        (Geography === 'Germany' ? 0.47 : (Geography === 'Spain' ? -0.21 : -0.16)) +
        (Gender === 'Male' ? -0.21 : 0.00) +
        (Surname.length <= 5 ? -2.39 : 1.61) +
        (Age * Tenure + (HasCrCard === 1 ? 1000 : 428.54)) / (NumOfProducts + Balance) * 0.02
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
