
function factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Probability calculation based on Age
  let probability = 0.00;
  
  if (Age < 30.00) {
    probability = 0.80; // Assuming younger customers have 80% chance of switching providers
  } else if (Age >= 30.00 && Age < 50.00) {
    probability = 0.50; // Middle-aged customers have 50% chance of switching providers
  } else {
    probability = 0.20; // Older customers have 20% chance of switching providers
  }
  
  return probability;
}

function factor_2_usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the usage frequency factor based on the given parameters
  let usageFrequencyFactor = 0.00;

  // You can use a combination of the parameters to estimate the usage frequency factor
  // For example, you can consider Age, NumOfProducts, and IsActiveMember to approximate the frequency of service usage

  // Here is just an illustrative calculation based on the input parameters, this can be adjusted based on real-world data and analysis
  if (Age < 40.00 && NumOfProducts === 1.00 && IsActiveMember === 0.00) {
    usageFrequencyFactor = 0.70;
  } else {
    usageFrequencyFactor = 0.30;
  }

  // Return the calculated usage frequency factor
  return usageFrequencyFactor;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.00
 + factor_2_usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * NaN
;
}
    