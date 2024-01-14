/** // 0.5920902273351991 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyFactor = (Geography === 'Germany') ? 0.6 : 0;
    const genderFactor = (Gender === 'Female') ? 0.5 : 0;
    const inactiveMemberFactor = (IsActiveMember === 0) ? 0.8 : 0;
    const interactionFactor = Age * NumOfProducts * 0.07 - Tenure * 0.01;
    
    const weightedSum = CreditScore * 0.002 + Age * 0.05 + Balance * 0.0001 + geographyFactor + genderFactor + inactiveMemberFactor + interactionFactor;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));
  
    return probability;
}

const result = PredictExited(15768124, "Ts'ui", 628, "France", "Female", 34, 2, 0, 2, 1, 0, 91844);
console.log(result);
