/** // 0.4807606396020457 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the input parameters, calculate the churn probability
  let balanceFactor = Balance / 100000; // Scale the balance
  let tenureFactor = Tenure / 10; // Scale the tenure

  let churnProbability = 0.2 * CreditScore / 800 + 0.1 * Age / 100 + 0.15 * Balance / 100000 + 0.1 * NumOfProducts - 0.05 * Tenure + 0.1 * IsActiveMember - 0.05 * EstimatedSalary / 100000;

  return churnProbability;
}
