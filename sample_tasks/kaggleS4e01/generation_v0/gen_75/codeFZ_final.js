
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the age of the customer
  let probability = 0;

  if (Age < 30) {
    probability = 0.7; // Younger customers are more likely to switch providers
  } else if (Age >= 30 && Age < 50) {
    probability = 0.5; // Middle-aged customers have moderate likelihood to churn
  } else {
    probability = 0.3; // Older customers are more loyal and stable
  }

  return probability;
}

function customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer satisfaction based on the given parameters
    let probability = 0;
    
    // You can use the parameters to create a formula or set of rules to determine the probability
    // For example, you can consider factors such as CreditScore, Age, Balance, IsActiveMember, etc. to influence the probability
    
    // Sample calculation (just for illustration, actual calculation should be based on thorough analysis)
    if (CreditScore > 650 && Age > 30 && Balance > 0 && IsActiveMember === 1) {
        probability = 0.8; // High probability of customer satisfaction
    } else {
        probability = 0.2; // Low probability of customer satisfaction
    }
    
    return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    