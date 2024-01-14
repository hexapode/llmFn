
function age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that the probability of a customer continuing with their account increases with their tenure with the company
  // We can use a linear relationship to calculate the probability
  // Higher tenure leads to a higher probability

  // Assuming a maximum tenure of 10 years for simplicity
  const maxTenure = 10;

  // Calculating the probability with a linear relationship
  const probability = Tenure / maxTenure;

  return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer support interactions leading to dissatisfaction and account closure

  // For the sake of simplicity, let's assume that the probability of dissatisfaction and account closure increases as the number of interactions with customer support increases.
  let interactionFactor = 0;
  if (NumOfProducts > 1) {
    interactionFactor = 0.2; // Assuming higher probability if the customer has multiple products
  }

  // Other factors such as low credit score, high balance, and inactivity may also contribute to dissatisfaction and account closure
  let otherFactors = (1 - (CreditScore / 850)) * 0.2 + (Balance / 100000) * 0.3 + (1 - IsActiveMember) * 0.2;

  // Combine the interaction factor and other factors to compute the overall probability
  let probability = interactionFactor + otherFactors;

  // Return the computed probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    