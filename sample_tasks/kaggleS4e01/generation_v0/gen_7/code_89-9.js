/** // 0.6429964467231387 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        Age: 0.05,
        Tenure: -0.05,
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        GeographyImpact: 0.46,
        GenderImpact: -0.21
    };

    let linearCombination = (
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember
    );

    if (Geography === 'Germany') {
        linearCombination += 2.00;
    } else if (Geography === 'Spain') {
        linearCombination -= 1.00;
    } else {
        linearCombination -= 2.00;
    }

    if (Gender === 'Male') {
        linearCombination += 1.50;
    } else {
        linearCombination -= 1.50;
    }

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));
    return probability;
}
