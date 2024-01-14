/** // 0.5549829892109961 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Compute a weighted sum of the input features
  const weightedSum = 0.04 * CreditScore 
                     - 0.2 * Age 
                     + 0.1 * Balance 
                     - 0.1 * (Geography === 'Germany' ? 1 : 0) 
                     + 0.3 * (Gender === 'Female' ? 1 : 0) 
                     - 0.02 * Tenure 
                     - 0.5 * IsActiveMember 
                     - 0.6 * NumOfProducts
                     - 0.00001 * EstimatedSalary 
                     - 0.03 * HasCrCard;
                     
  // Apply the logistic function to get the probability of churning
  const probability = 1 / (1 + Math.exp(-weightedSum));
  
  return probability;
}
