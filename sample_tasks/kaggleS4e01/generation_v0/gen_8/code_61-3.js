/** // 0.5478461556253774 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = -0.15 * CreditScore + 0.07 * Age - 0.01 * Tenure - 0.82 * IsActiveMember - 1.42 * NumOfProducts - 0.16 * HasCrCard + 0.00 * EstimatedSalary;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}

console.log(PredictExited(15778290, 'Tretyakova', 554, 'France', 'Female', 40, 3, 0, 2, 1, 0, 127557.02));
