
function factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering Age as a factor in churn probability
  if (Age < 35.00) {
    // Younger customers are more likely to close their account
    return 0.70; // 70% probability of churn for younger customers
  } else if (Age >= 35.00 && Age < 50.00) {
    // Customers between 35 and 50 have moderate probability of churn
    return 0.40; // 40% probability of churn for middle-aged customers
  } else {
    // Older customers are less likely to churn
    return 0.20; // 20% probability of churn for older customers
  }
}

function factor_2_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.00;
  
  if (IsActiveMember === 1.00 && NumOfProducts > 1.00) {
    probability = 0.80; // Customers who use the service frequently and engage with the platform are more likely to continue their account
  } else {
    probability = 0.30; // Those with low or decreasing usage may be more prone to churn
  }
  
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.00
 + factor_2_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * NaN
;
}
    