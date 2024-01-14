/** // 0.4570765929686452 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.3 : (Geography === 'France') ? -0.1 : 0;

    const ageBalanceRatio = Age > 0 ? Balance / Age : 0;
    
    const weightedSum = -0.1 * CreditScore + 0.05 * Age - 0.1 * Tenure - 0.2 * IsActiveMember - 0.1 * NumOfProducts +
        geographyImpact + 0.05 * ageBalanceRatio - 0.1 * HasCrCard - 0.000001 * CustomerId + 0.0000002 * EstimatedSalary;

    const probability = 1 / (1 + Math.exp(weightedSum));
    
    return probability;
}

const result = PredictExited(15677599, "T'ien", 535, "Spain", "Male", 51, 6, 131033.76, 1, 1, 177783.05);
console.log(result);
