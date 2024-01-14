
// Reasoning:
// We will use a logistic regression approach to predict customer churn based on the given parameters.
// We will assign weights to each parameter and use the sigmoid function to get the probability of churn.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Set weights for each parameter
  const creditScoreWeight = 0.05;
  const ageWeight = 0.07;
  const tenureWeight = 0.1;
  const balanceWeight = 0.05;
  const numOfProductsWeight = 0.1;
  const hasCrCardWeight = 0.02;
  const isActiveMemberWeight = 0.15;
  const estimatedSalaryWeight = 0.1;

  // Calculate the weighted sum of parameters
  const weightedSum = 
    CreditScore * creditScoreWeight +
    Age * ageWeight +
    Tenure * tenureWeight +
    Balance * balanceWeight +
    NumOfProducts * numOfProductsWeight +
    HasCrCard * hasCrCardWeight +
    IsActiveMember * isActiveMemberWeight +
    EstimatedSalary * estimatedSalaryWeight;

  // Use the sigmoid function to get the probability of churn
  const probability = 1 / (1 + Math.exp(-weightedSum));

  return probability;
}
