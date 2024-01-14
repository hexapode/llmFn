
function customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value
  
  // Use the input parameters to perform calculations and determine the probability
  
  // For example, one approach could involve assigning weights to different parameters and then summing them up to get the probability
  
  // Other parameters may also need to be considered, such as customer feedback, previous interactions, etc.
  
  // Finally, return the calculated probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    