/** // 0.5920263484417051 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = 0;

    if (Geography === 'France') {
        weightedSum += 0.05;
    } else if (Geography === 'Germany') {
        weightedSum += 0.30;
    } else if (Geography === 'Spain') {
        weightedSum += 0.02;
    } else {
        weightedSum += 0.05;
    }

    weightedSum += (Gender === 'Female') ? 0.35 : 0;

    weightedSum += (Age * 0.07) - (Tenure * 0.01) - (IsActiveMember * 0.80) + (NumOfProducts * 1.40) - (HasCrCard * 0.15) + (EstimatedSalary * 0.0000002) - (CreditScore * 0.0000005);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15663888, "Tuan", 681, "France", "Male", 37, 3, 0, 2, 1, 0, 104769.96);
console.log(result);
