/** // 0.4987411018285493 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = -0.04 * CreditScore + 0.05 * Age - 0.01 * Tenure - 0.61 * IsActiveMember - 0.09 * NumOfProducts - 0.13 * HasCrCard + 0.06 * EstimatedSalary;
    
    if (Geography === 'Germany') {
        weightedSum += 0.57;
    } else if (Geography === 'Spain') {
        weightedSum -= 0.05;
    }
    
    if (Gender === 'Female') {
        weightedSum += 0.41;
    } else {
        weightedSum -= 0.02;
    }

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15732270, "Lettiere", 673, "Spain", "Male", 40, 3, 0, 2, 1, 1, 57896.27);
console.log(result);
