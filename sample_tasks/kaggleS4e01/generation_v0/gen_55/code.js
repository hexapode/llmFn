
function factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Probability calculation based on Age
  let probability = 0;
  
  if (Age < 30) {
    probability = 0.8; // Assuming younger customers have 80% chance of switching providers
  } else if (Age >= 30 && Age < 50) {
    probability = 0.5; // Middle-aged customers have 50% chance of switching providers
  } else {
    probability = 0.2; // Older customers have 20% chance of switching providers
  }
  
  return probability;
}

function factor_2_usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the usage frequency factor based on the given parameters
  let usageFrequencyFactor = 0;

  // You can use a combination of the parameters to estimate the usage frequency factor
  // For example, you can consider Age, NumOfProducts, and IsActiveMember to approximate the frequency of service usage

  // Here is just an illustrative calculation based on the input parameters, this can be adjusted based on real-world data and analysis
  if (Age < 40 && NumOfProducts === 1 && IsActiveMember === 0) {
    usageFrequencyFactor = 0.7;
  } else {
    usageFrequencyFactor = 0.3;
  }

  // Return the calculated usage frequency factor
  return usageFrequencyFactor;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    