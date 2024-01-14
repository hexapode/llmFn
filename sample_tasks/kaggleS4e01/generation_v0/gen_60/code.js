
function tenure_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of tenure_length based on the given parameters
    // It's likely that customers with longer tenure are less likely to churn
    // We can factor in Age, IsActiveMember, and CreditScore as potential indicators of customer loyalty
    // Balance, NumOfProducts, HasCrCard may also have some impact
    // However, the calculation of such probability would require a detailed analysis of historical data and customer behavior
    
    // As a simple approximation, we can use a heuristic approach based on given parameters
    let probability = 1; // Default probability
    
    // Calculations or heuristics to adjust the probability based on given parameters
    
    // Return the computed probability
    return probability;
}

function customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a lower credit score are more likely to have negative interactions with customer support
  let creditScoreProbability = CreditScore < 600 ? 0.7 : 0.3;

  // Customers with higher age may have more complex issues, leading to higher probability of negative interactions
  let ageProbability = Age > 50 ? 0.6 : 0.4;

  // Geography can also play a role - customers from certain regions may face more challenges
  let geographyProbability = Geography === 'France' ? 0.4 : 0.6;

  // Having a lower balance may indicate financial stress, which can lead to more interactions with customer support
  let balanceProbability = Balance < 1000 ? 0.6 : 0.4;

  // Customers with more products may have more reasons to contact customer support, leading to higher probability
  let productsProbability = NumOfProducts >= 2 ? 0.7 : 0.3;

  // Active members are less likely to churn due to unresolved issues, so lower active member status increases the probability
  let activeMemberProbability = IsActiveMember === 1 ? 0.3 : 0.7;

  // Let's assume a base churn probability and incorporate the calculated factors
  let baseChurnProbability = 0.2;
  let combinedProbability = baseChurnProbability * creditScoreProbability * ageProbability * geographyProbability * balanceProbability * productsProbability * activeMemberProbability;

  // Return the combined probability after considering multiple factors
  return combinedProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return tenure_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    