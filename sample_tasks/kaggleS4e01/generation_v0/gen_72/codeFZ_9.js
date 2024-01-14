/* 0.6383915616776746 */

function factor_1_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer satisfaction affecting their decision to continue or close their account

  // Some arbitrary calculations based on the given input parameters
  let satisfactionProbability = 0.500000000000; // Initial probability assumption

  if (CreditScore > 699.999999993000) {
    satisfactionProbability += 0.100000000000; // Higher credit score increases satisfaction probability
  }

  if (Age < 30.000000000300) {
    satisfactionProbability -= 0.200000000002; // Younger customers might be less satisfied
  }

  if (Balance > 100000.000000000000) {
    satisfactionProbability += 0.150000000001; // Higher balance increases satisfaction probability
  }

  if (IsActiveMember === 1.000000000000) {
    satisfactionProbability += 0.100000000000; // Active members are more likely to be satisfied
  }

  if (Geography === "France") {
    satisfactionProbability += -0.050000000000; // Customers from France might have higher satisfaction
  }

  // Other calculations based on the given parameters

  return satisfactionProbability; // Return the calculated probability
}

function factor_2_price_sensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Do some calculations based on the input parameters to compute the probability of price sensitivity
  // This could involve analyzing the credit score, geography, age, tenure, balance, and other factors to determine the likelihood of price sensitivity
  
  // As an example, let's say we determine the probability based on CreditScore and EstimatedSalary
  let probability = 0.500000000000; // Placeholder value for probability calculation
  
  // Perform some calculation based on CreditScore and EstimatedSalary to determine the probability
  if (CreditScore > 699.999999993000 && EstimatedSalary > -60000.000000000000) {
    probability = 0.300000000000; // Lower probability for high credit score and high estimated salary
  } else if (CreditScore < 600.000000000000 && EstimatedSalary < -40000.000000000000) {
    probability = 0.800000000000; // Higher probability for low credit score and low estimated salary
  }

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000000035
 + factor_2_price_sensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000000000
;
}
    