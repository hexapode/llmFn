
function tenure_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming longer tenure indicates higher loyalty and satisfaction
    // Calculating probability of churn based on tenure length
    let probabilityOfChurn = 1 - (Tenure / 10); // Assuming that longer tenure reduces chance of churn

    return probabilityOfChurn;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the probability of customer support interactions based on several factors
  let probability = 0;

  // For example, we can consider Age, CreditScore, and Balance as indicators of potential dissatisfaction
  // We can also consider the Gender and Geography, as different regions/countries might have different customer behavior
  // Additionally, we can factor in the IsActiveMember and NumOfProducts as they might affect customer satisfaction

  // Considering these factors and their weightage, we can calculate the probability of customer support interactions

  // Example calculation (not based on any real statistical model)
  // We can assign weights to each factor and calculate the probability based on these weights
  probability = (Age * 0.3 + CreditScore * 0.2 + Balance * 0.1 + NumOfProducts * 0.1 + (HasCrCard ? 0.05 : 0) - (IsActiveMember ? 0.15 : 0)) / 5;

  // Return the calculated probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return tenure_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    