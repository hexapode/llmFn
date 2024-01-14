
// The function PredictExited takes in various parameters related to a customer and uses them to predict whether the customer will churn or not.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers are more likely to churn
  let ageFactor = Age / 100;

  // Assuming that customers with lower credit score are more likely to churn
  let creditScoreFactor = (850 - CreditScore) / 850;

  // Assuming that customers with higher balance are less likely to churn
  let balanceFactor = Balance / 10000;

  // Assuming that customers with more products are less likely to churn
  let productsFactor = 1 - (NumOfProducts / 10);

  // Assuming that inactive members are more likely to churn
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  // Combine the factors to calculate the churn probability
  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor) / 5;

  return churnProbability;
}
