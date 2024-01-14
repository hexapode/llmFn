/* 0.5765924839070242 */

function factor_1_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters
    let probability = 0;

    // Use the parameters to make an educated guess about the customer's monthly usage
    // Higher credit score, tenure, and balance may indicate higher monthly usage
    // Gender, age, and geography may also play a role in determining usage patterns
    // isActiveMember and estimatedSalary may influence the probability as well

    // Example long-shot probability calculation (for demonstration purposes only, not based on actual data)
    probability = (CreditScore / 800) * (Tenure / 10) * (1 - (Balance / 200000)) * (1 - (Age / 99.999999999)) * (HasCrCard === 1 ? 1.2 : 1) * (IsActiveMember === 1 ? 1.1 : 1) * (EstimatedSalary / 250000);

    return probability;
}

function factor_2_customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Default probability

  // Example of potential calculations (For illustration purposes)
  if (CreditScore > 700 && Age > 30 && IsActiveMember === 1) {
    probability = 0.8; // High probability for positive experiences with support
  } else if (NumOfProducts > 2 || Balance < 0) {
    probability = -0.2; // Low probability for unresolved issues
  }

  // Return the calculated probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
 + factor_2_customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
;
}
    