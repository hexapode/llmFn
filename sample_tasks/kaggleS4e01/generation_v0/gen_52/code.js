
function factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering Age as a factor in churn probability
  if (Age < 35) {
    // Younger customers are more likely to close their account
    return 0.7; // 70% probability of churn for younger customers
  } else if (Age >= 35 && Age < 50) {
    // Customers between 35 and 50 have moderate probability of churn
    return 0.4; // 40% probability of churn for middle-aged customers
  } else {
    // Older customers are less likely to churn
    return 0.2; // 20% probability of churn for older customers
  }
}

function factor_2_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0;
  
  if (IsActiveMember === 1 && NumOfProducts > 1) {
    probability = 0.8; // Customers who use the service frequently and engage with the platform are more likely to continue their account
  } else {
    probability = 0.3; // Those with low or decreasing usage may be more prone to churn
  }
  
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    