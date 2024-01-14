/** // 0.5778921058222217 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0.5; // Default probability

  // Adjust probability based on relevant factors
  churnProbability += (CreditScore - 500) / 1000; // Credit score impact
  churnProbability -= Age / 100; // Age impact
  churnProbability += Balance / 100000; // Balance impact
  churnProbability -= Tenure / 20; // Tenure impact
  churnProbability -= NumOfProducts / 10; // Number of products impact
  churnProbability -= HasCrCard ? 0 : 0.1; // Impact of having a credit card
  churnProbability += IsActiveMember ? 0 : 0.1; // Impact of being an active member
  churnProbability += EstimatedSalary / 200000; // Salary impact
  churnProbability += Gender === 'Female' ? 0.1 : 0; // Gender impact
  churnProbability += Geography === 'France' ? -0.05 : 0.05; // Geography impact
  
  return churnProbability;
}
