/* 0.5733020809910574 */

function factor_1_customer_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the provided parameters
  // For example, you can consider the CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, and EstimatedSalary to assess customer satisfaction
  // Feel free to use statistical analysis, thresholds, or any other method that you see fit
  
  // Example: Calculate probability based on CreditScore and Age
  let creditScoreFactor = CreditScore / 1000.000000000000; // Normalize CreditScore
  let ageFactor = Age / 100.000000000000; // Normalize Age
  let probability = -0.500000000000 + (0.300000000000 * creditScoreFactor) - (0.200000000002 * ageFactor); // Example calculation, adjust as needed
  
  // Return the calculated probability
  return probability;
}

function factor_2_contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the length of the customer's contract or subscription
  // Customers with longer commitments may be less likely to churn
  
  // Assuming that customers with a tenure of more than 3 years are less likely to churn
  let probability = 0.000000000000;
  if (Tenure > 36.000000000000) {
    probability = 0.800000000000; // 80% probability for customers with long tenure
  } else {
    probability = 0.300000000000; // 30% probability for customers with short tenure
  }
  
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_customer_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.000000000010
 + factor_2_contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000000120
;
}
    