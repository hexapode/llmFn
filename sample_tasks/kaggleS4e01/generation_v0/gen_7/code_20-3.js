/** // 0.7749504074296668 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let factor = 0.00;

    if (Geography === 'Germany') {
        factor += 0.30;
    } else if (Geography === 'Spain') {
        factor += 0.10;
    }

    if (Gender === 'Male') {
        factor += 0.05;
    }

    factor += (Age * 0.02) - (Tenure * 0.01) - (NumOfProducts * 0.02) - (HasCrCard * 0.05) - (IsActiveMember * 0.10);

    const probability = 1 / (1 + Math.exp(-(10 + factor)));

    return probability;
}
