
function factor_1_time_spent(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the given parameters
  let probability = 0;

  // Example calculation (you can use more complex calculations based on the parameters)
  if (Age >= 25 && Age <= 40) {
    probability += 0.2;
  }
  if (Tenure > 5) {
    probability += 0.3;
  }
  if (IsActiveMember === 1) {
    probability += 0.1;
  }
  if (EstimatedSalary > 100000) {
    probability += 0.15;
  }

  // Returning the calculated probability
  return probability;
}

function factor_2_customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the given parameters, calculate the probability of customer support interactions being a significant factor in predicting churn
    // You can use a scoring system based on the parameters to determine the likelihood of frequent or unresolved issues leading to churn
    // For example, higher age, lower credit score, and lower tenure may contribute to a higher probability
    
    let probability = 0; // Initialize the probability
    
    // Perform calculations and assign a value to probability based on the input parameters
    
    return probability; // Return the calculated probability
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_time_spent(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    