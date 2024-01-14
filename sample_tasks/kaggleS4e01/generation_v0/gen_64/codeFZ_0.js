/* 0.49526176620997764 */

function age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of churn based on the age of the account
  // Considering longer tenure reduces the probability of churning
  let probabilityOfChurn = 1.000000 - (Tenure / 10.000000); // Assuming that for every additional 10 years of tenure, the probability of churning reduces by 10%
  
  // Ensure the probability is within the bounds of 0 to 1
  probabilityOfChurn = Math.max(0.000000, Math.min(1.000000, probabilityOfChurn));
  
  return probabilityOfChurn;
}

function monthly_payment_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the monthly payment amount using the EstimatedSalary and the NumOfProducts
  const monthlyPaymentAmount = EstimatedSalary / NumOfProducts;
  
  // Assume that customers with lower monthly payment amounts are less likely to churn
  // We can calculate the probability by inversely proportional to the monthlyPaymentAmount
  // For example, we can say the probability is higher if the monthlyPaymentAmount is lower
  
  // For this example, let's simply assume that the probability is inversely proportional to the monthlyPaymentAmount
  // We'll use a basic linear inverse relation for demonstration purposes
  const probability = 1.000000 - (monthlyPaymentAmount / 100000.000000); // Assuming the monthlyPaymentAmount is less than 100,000
  
  return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer churn based on the given parameters
  let probability = 0.000000;

  // Use the number of interactions with customer support as an indicator for churn probability
  // Higher number of interactions may indicate dissatisfaction and higher likelihood of churn
  
  // Example computation
  let interactionsScore = 0.000000;
  // Use the tenure and age to calculate the potential number of interactions
  interactionsScore = (Tenure + Age) / 2.000000;

  // Use other parameters to adjust the probability
  if (NumOfProducts > 2.000000) {
    interactionsScore *= 1.500000; // Customers with more products may have higher interaction likelihood
  }

  // Adjust probability based on the interactions score
  probability = interactionsScore / 100.000000; // Scale the interactions score to a probability between 0 and 1

  // Return the calculated probability
  return probability;
}

function usage_of_additional_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your code to compute the probability based on the input parameters
  // For example, you can use the IsActiveMember parameter to determine the likelihood of using additional features
  
  let probability = 0.000000;

  if (IsActiveMember === 1.000000) {
    probability = 0.800000; // Assuming that active members are 80% less likely to churn
  } else {
    probability = 0.500000; // Assuming that inactive members are 50% less likely to churn
  }

  return probability;
}

function customer_satisfaction_rating(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that customer satisfaction rating is influenced by credit score, balance, age, and activity level
  // We will calculate a score based on these parameters to represent customer satisfaction rating
  
  let satisfactionRatingScore = 0.000000;
  
  // Credit score will have a significant impact on satisfaction rating
  satisfactionRatingScore += CreditScore / 850.000000; // Normalize credit score to be between 0 and 1
  
  // Higher balance might indicate a satisfied customer
  satisfactionRatingScore += Balance / 200000.000000; // Normalize balance to be between 0 and 1
  
  // Younger customers might be more satisfied
  satisfactionRatingScore += (1.000000 - (Age / 100.000000)); // Normalize age to be between 0 and 1
  
  // Active members are likely more satisfied
  satisfactionRatingScore += IsActiveMember * 0.200000; // Add 0.2 if the customer is an active member
  
  // Now, we will calculate the probability that a customer with higher satisfaction ratings is less likely to churn
  // We will use a logistic function to map satisfaction rating score to a probability
  
  let churnProbability = 1.000000 / (1.000000 + Math.exp(-satisfactionRatingScore));
  
  return churnProbability;
}

function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that longer contract lengths indicate a higher level of commitment, therefore decreasing the likelihood of churn
  
  // Normalize and transform the parameters to a scale that highlights the impact on contract length
  let normalizedAge = Age / 100.000000; // Normalize age to a scale of 0 to 1
  let normalizedTenure = Tenure / 10.000000; // Normalize tenure to a scale of 0 to 1
  let normalizedBalance = Balance / 100000.000000; // Normalize balance to a scale of 0 to 1
  let isActiveMemberFactor = IsActiveMember === 1.000000 ? 0.200000 : 0.000000; // If the customer is an active member, give a positive factor
  
  // Compute the overall probability based on the weighted sum of the factors
  let probability = 0.400000 * normalizedTenure + 0.300000 * normalizedAge + 0.200000 * normalizedBalance + 0.100000 * isActiveMemberFactor; // Weighted sum of factors
  
  return probability;
}

function number_of_competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with lower CreditScore are more likely to receive competitor offers
  let creditScoreImpact = CreditScore < 600.000000 ? 0.700000 : 0.300000;

  // Assume that customers with higher balance are more likely to receive competitor offers
  let balanceImpact = Balance > 100000.000000 ? 0.800000 : 0.200000;

  // Assume that younger customers are more likely to receive competitor offers
  let ageImpact = Age < 30.000000 ? 0.600000 : 0.400000;

  // Assume that customers from certain geographies are more likely to receive competitor offers
  let geographyImpact = Geography === "Germany" ? 0.500000 : 0.500000;

  // Assume that inactive members are more likely to receive competitor offers
  let activityImpact = IsActiveMember === 0.000000 ? 0.600000 : 0.400000;

  // Combine the impacts
  let probability = creditScoreImpact * balanceImpact * ageImpact * geographyImpact * activityImpact;

  return probability;
}

function lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // I will calculate the probability based on the input parameters
    // CreditScore, Age, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary could influence the lifetime value

    // Assuming CreditScore, Age, and EstimatedSalary are positively correlated with lifetime value
    let probability = (CreditScore / 850.000000) * (Age / 100.000000) * (EstimatedSalary / 200000.000000);

    // Assuming Balance, NumOfProducts, and IsActiveMember are negatively correlated with lifetime value
    probability *= (1.000000 - (Balance / 100000.000000)) * (1.000000 - (NumOfProducts / 4.000000)) * (1.000000 - IsActiveMember);

    // Normalizing the probability to be between 0 and 1
    probability = Math.min(1.000000, Math.max(0.000000, probability));

    // Return the calculated probability
    return probability;
}

function billing_issue_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability of billing issues leading to churn based on various factors

    // We can start by checking if the CreditScore is below a certain threshold, which might indicate financial instability
    let creditScoreProbability = CreditScore < 600.000000 ? 0.700000 : 0.300000;

    // Next, we can consider the balance in the account. A high balance might indicate potential issues with excessive spending
    let balanceProbability = Balance > 100000.000000 ? 0.600000 : 0.400000;

    // We can also consider the tenure of the customer. Longer tenure might indicate loyalty and lower chances of billing issues
    let tenureProbability = Tenure < 3.000000 ? 0.600000 : 0.400000;

    // The number of products the customer has might also play a role. More products might indicate a stronger relationship with the bank
    let productsProbability = NumOfProducts > 2.000000 ? 0.300000 : 0.700000;

    // Finally, we can consider the estimated salary. A lower salary might indicate higher financial strain
    let salaryProbability = EstimatedSalary < 50000.000000 ? 0.700000 : 0.300000;

    // Now, let's combine all these probabilities to calculate the overall probability of billing issues leading to churn
    let overallProbability = (creditScoreProbability + balanceProbability + tenureProbability + productsProbability + salaryProbability) / 5.000000;

    return overallProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + monthly_payment_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + usage_of_additional_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + customer_satisfaction_rating(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + number_of_competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + billing_issue_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000010
;
}
    