
function tenure_in_months(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming longer tenure increases the probability of staying, we can calculate the probability based on the tenure length
    let probability = Math.min(1, Math.sqrt(Tenure / 60)); // Using a simple square root function as a proxy for tenure's effect on probability

    return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the number of interactions with customer support
  // Customers with more interactions, especially related to issues or complaints, are more likely to churn

  // We can take into consideration the Age and CreditScore of the customer
  let ageEffect = Age > 30 ? 0.2 : 0.1; // Older customers are more likely to churn
  let creditScoreEffect = CreditScore < 600 ? 0.3 : 0.1; // Lower credit score customers are more likely to churn

  // Combine the effects of Age and CreditScore to calculate the probability
  let probability = ageEffect + creditScoreEffect;

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return tenure_in_months(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    