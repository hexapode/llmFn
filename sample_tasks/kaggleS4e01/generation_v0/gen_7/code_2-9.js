/** // 0.7837228316429266 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageCoefficient = 0.05;
    const numOfProductsCoefficient = -0.8;
    const hasCrCardCoefficient = -0.5;
    const isActiveMemberCoefficient = -0.7;

    const linearCombination = (ageCoefficient * Age +
                               numOfProductsCoefficient * NumOfProducts +
                               hasCrCardCoefficient * HasCrCard +
                               isActiveMemberCoefficient * IsActiveMember);

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
