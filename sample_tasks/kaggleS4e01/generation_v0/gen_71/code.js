
function factor_1_customer_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the provided parameters
  // For example, you can consider the CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, and EstimatedSalary to assess customer satisfaction
  // Feel free to use statistical analysis, thresholds, or any other method that you see fit
  
  // Example: Calculate probability based on CreditScore and Age
  let creditScoreFactor = CreditScore / 1000; // Normalize CreditScore
  let ageFactor = Age / 100; // Normalize Age
  let probability = 0.5 + (0.3 * creditScoreFactor) - (0.2 * ageFactor); // Example calculation, adjust as needed
  
  // Return the calculated probability
  return probability;
}

function factor_2_contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the length of the customer's contract or subscription
  // Customers with longer commitments may be less likely to churn
  
  // Assuming that customers with a tenure of more than 3 years are less likely to churn
  let probability = 0;
  if (Tenure > 36) {
    probability = 0.8; // 80% probability for customers with long tenure
  } else {
    probability = 0.3; // 30% probability for customers with short tenure
  }
  
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_customer_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    