
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Define a base probability
  let ageProbability = 0.5;

  // Adjust the probability based on the age of the customer
  if (Age >= 50) {
    ageProbability = 0.8; // Older customers are less likely to churn
  } else if (Age >= 40) {
    ageProbability = 0.7; // Middle-aged customers have moderate ties to the company
  } else {
    ageProbability = 0.5; // Younger customers may have weaker ties to the company
  }

  // Return the calculated probability
  return ageProbability;
}

function monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of average monthly usage

  // For the sake of example, let's use the following logic to calculate the probability:
  // If the customer has a high CreditScore, more than one product, and is an active member, then the probability of high monthly usage is higher.
  // However, if the customer has a low CreditScore, low number of products, and is not an active member, the probability is lower.

  let probability = 0.5; // Default probability

  if (CreditScore > 700 && NumOfProducts > 1 && IsActiveMember === 1) {
    probability = 0.8; // High probability for heavy reliance on the service
  } else if (CreditScore < 600 && NumOfProducts === 1 && IsActiveMember === 0) {
    probability = 0.3; // Low probability for heavy reliance on the service
  }

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    