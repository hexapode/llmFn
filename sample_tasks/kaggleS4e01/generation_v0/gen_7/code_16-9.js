/** // 0.5934885352026428 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let linearCombination = 0.00;

    if (Geography === 'Germany') {
        linearCombination += 0.90;
    } else {
        linearCombination -= 0.89;
    }

    if (Gender === 'Male') {
        linearCombination += 2.08;
    } else {
        linearCombination -= 1.08;
    }

    linearCombination += 0.07 * Age - 0.04 * Tenure - 0.52 * NumOfProducts - 0.16 * HasCrCard - 0.81 * IsActiveMember;

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
