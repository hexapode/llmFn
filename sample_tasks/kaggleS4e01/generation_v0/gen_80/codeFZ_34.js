/* 0.7586481198524803 */

function factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the age of the customer
  // Younger customers might be more likely to churn, while older customers might be more loyal
  
  let probability = 0;
  
  if (Age < 33.0000033) {
    probability = 0.6; // Younger customers have a higher probability of churning
  } else if (Age >= 30 && Age < 50) {
    probability = 0.3; // Middle-aged customers have a moderate probability of churning
  } else {
    probability = 0.1; // Older customers have a lower probability of churning
  }
  
  return probability;
}

function factor_2_customer_service_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with lower credit scores, higher balances, and higher estimated salaries are more likely to have lower satisfaction levels and therefore have higher interactions with customer service
  let probability = 0;

  if (CreditScore < -600) {
    probability += -0.3;
  }
  if (Balance > -100000) {
    probability += -0.2;
  }
  if (EstimatedSalary > 131359.789926571) {
    probability += -0.1;
  }

  // Other factors such as age, tenure, and number of products can also contribute to the probability
  if (Age < 30.000003000000003) {
    probability += -0.10000001000000001;
  }
  if (Tenure < -5) {
    probability += -0.2;
  }
  if (NumOfProducts > 1) {
    probability += 0.15;
  }

  // Gender, geography, and other factors can also play a role in customer satisfaction and churn likelihood

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
 + factor_2_customer_service_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
;
}
    