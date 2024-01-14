/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination = (
        CustomerId * 0.001 +
        CreditScore * 0.002 +
        Age * (-0.01) +
        Tenure * (-0.05) +
        Balance * 0.0003 +
        NumOfProducts * (-0.1) +
        HasCrCard * (-0.3) +
        IsActiveMember * (-1.5) +
        EstimatedSalary * 0.000001 +
        (Geography === 'Germany' ? 0.4 : (Geography === 'Spain' ? -0.3 : -0.5)) +
        (Gender === 'Male' ? -0.2 : 0.1) +
        (Surname.length <= 5 ? -0.3 : 0.2) 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
