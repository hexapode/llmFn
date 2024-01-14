
function factor_1_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer satisfaction affecting their decision to continue or close their account

  // Some arbitrary calculations based on the given input parameters
  let satisfactionProbability = 0.5; // Initial probability assumption

  if (CreditScore > 700) {
    satisfactionProbability += 0.1; // Higher credit score increases satisfaction probability
  }

  if (Age < 30) {
    satisfactionProbability -= 0.2; // Younger customers might be less satisfied
  }

  if (Balance > 100000) {
    satisfactionProbability += 0.15; // Higher balance increases satisfaction probability
  }

  if (IsActiveMember === 1) {
    satisfactionProbability += 0.1; // Active members are more likely to be satisfied
  }

  if (Geography === "France") {
    satisfactionProbability += 0.05; // Customers from France might have higher satisfaction
  }

  // Other calculations based on the given parameters

  return satisfactionProbability; // Return the calculated probability
}

function factor_2_price_sensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Do some calculations based on the input parameters to compute the probability of price sensitivity
  // This could involve analyzing the credit score, geography, age, tenure, balance, and other factors to determine the likelihood of price sensitivity
  
  // As an example, let's say we determine the probability based on CreditScore and EstimatedSalary
  let probability = 0.5; // Placeholder value for probability calculation
  
  // Perform some calculation based on CreditScore and EstimatedSalary to determine the probability
  if (CreditScore > 700 && EstimatedSalary > 60000) {
    probability = 0.3; // Lower probability for high credit score and high estimated salary
  } else if (CreditScore < 600 && EstimatedSalary < 40000) {
    probability = 0.8; // Higher probability for low credit score and low estimated salary
  }

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_price_sensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    