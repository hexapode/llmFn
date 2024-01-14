
function age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the age of the account based on the tenure
    let ageOfAccount = 1 / (1 + Math.exp(-0.5 * Tenure)); // Use sigmoid function to calculate the probability
    
    return ageOfAccount;
}

function monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the average monthly usage probability based on the input parameters
  let probability = 1 - (Balance / (NumOfProducts * EstimatedSalary));

  return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the parameters given
  let probability = 0;

  // Age factor: Younger customers may be more likely to interact with customer support
  if (Age < 30) {
    probability += 0.1;
  }

  // Credit score factor: Lower credit score may indicate dissatisfaction
  if (CreditScore < 600) {
    probability += 0.15;
  }

  // Balance factor: Higher balance may indicate higher expectations leading to more interactions
  if (Balance > 50000) {
    probability += 0.1;
  }

  // Geography factor: Certain regions may have different customer support experiences
  if (Geography === 'Germany') {
    probability += 0.05;
  } else if (Geography === 'Spain') {
    probability += 0.1;
  }

  // Gender factor: Some studies show that gender may affect satisfaction
  if (Gender === 'Female') {
    probability += 0.05;
  }

  // Activity factor: Inactive members are more likely to seek support before churning
  if (IsActiveMember === 0) {
    probability += 0.2;
  }

  // Probability should not exceed 1
  probability = Math.min(1, probability);

  return probability;
}

function contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some uncertainty may arise from the following parameters
  // 1. Geography: If the customer lives in an area with higher job mobility, they might be more inclined to choose a month-to-month contract
  // 2. Tenure: New customers might opt for month-to-month contracts until they build trust in the service
  // 3. Age: Younger customers might prefer month-to-month contracts due to uncertainty about future plans

  // Let's calculate the probability based on the given parameters
  let probability = 0.5; // Default probability

  if (Geography === "USA") {
    probability += 0.1; // Slightly higher likelihood for month-to-month in the USA
  }

  if (Tenure < 2) {
    probability += 0.15; // New customers have a higher likelihood of month-to-month contracts
  }

  if (Age < 30) {
    probability += 0.2; // Younger customers are more likely to choose month-to-month contracts
  }

  return probability; // Return the computed probability
}

function payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that the payment method choice is influenced by geography and credit score
  let probability = 0.5; // Base probability

  // Adjust probability based on geography
  if (Geography === 'Spain') {
    probability += 0.1; // Increase probability for customers from Spain
  } else if (Geography === 'Germany') {
    probability -= 0.1; // Decrease probability for customers from Germany
  }

  // Adjust probability based on credit score
  if (CreditScore > 700) {
    probability += 0.1; // Increase probability for customers with high credit score
  } else if (CreditScore < 600) {
    probability -= 0.1; // Decrease probability for customers with low credit score
  }

  // Other factors such as gender, age, tenure, balance, etc. can be used to further adjust the probability

  return probability;
}

function internet_speed(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters
  // For example, let's say higher CreditScore, EstimatedSalary, and IsActiveMember may indicate higher internet speed
  let probability = 0.5; // Placeholder value, replace with actual calculation

  // Return the probability
  return probability;
}

function number_of_subscriptions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher credit scores are more likely to have more subscriptions
  // Credit score range: 300 - 850, so we can calculate the probability based on the credit score
  const creditScoreProbability = (CreditScore - 300) / 550;

  // Assuming that younger customers are more likely to have more subscriptions
  // We can calculate the probability based on the customer's age
  const ageProbability = 1 - (Age / 100);

  // Assuming that customers with higher estimated salary are more likely to have more subscriptions
  // We can calculate the probability based on the estimated salary
  const salaryProbability = EstimatedSalary / 200000;

  // Combining the probabilities using a weighted average
  const totalProbability = (creditScoreProbability * 0.4) + (ageProbability * 0.3) + (salaryProbability * 0.3);

  // Returning the total probability
  return totalProbability;
}

function customer_rating(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's consider the impact of CreditScore, Age, Balance, NumOfProducts, and IsActiveMember on the customer rating
    let ratingProbability = 0;
    
    // Higher CreditScore may indicate better financial stability, so it could lead to a lower probability of churn
    if (CreditScore >= 700) {
        ratingProbability -= 0.2;
    } else if (CreditScore >= 600) {
        ratingProbability -= 0.1;
    } else {
        ratingProbability += 0.1;
    }
    
    // Younger customers may be more likely to switch, so we increase the probability of churn with lower age
    if (Age < 30) {
        ratingProbability += 0.15;
    } else if (Age < 40) {
        ratingProbability += 0.1;
    }
    
    // Higher balance might indicate stronger customer loyalty, so it decreases the probability of churn
    if (Balance > 100000) {
        ratingProbability -= 0.1;
    }
    
    // More products held by the customer could indicate a deeper relationship, hence lowering the churn probability
    if (NumOfProducts > 1) {
        ratingProbability -= 0.15;
    }
    
    // Inactive members might be more likely to leave, so it increases the probability of churn
    if (IsActiveMember === 0) {
        ratingProbability += 0.2;
    }
    
    // return the calculated probability
    return ratingProbability;
}

function promotional_offers_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the parameters
  let probability = 0.5; // Placeholder value

  // Example calculation (this is a simple made-up example, not based on real data)
  // If the customer has a high estimated salary and a high number of products, increase the probability
  if (EstimatedSalary > 80000 && NumOfProducts > 1) {
    probability = 0.8;
  }

  // Return the calculated probability
  return probability;
}

function average_bill_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // As there is no direct information related to average monthly bill amount, let's consider credit score, age, and balance to approximate the probability of average bill amount potentially correlating with lower likelihood of churn.
  
  let probability = 0.5; // default probability
  
  // Credit score: Assuming higher credit score correlates with lower likelihood of churn
  if (CreditScore > 700) {
    probability += 0.2; // Increase probability by 0.2
  }
  
  // Age: Assuming older age correlates with lower likelihood of churn
  if (Age > 35) {
    probability += 0.15; // Increase probability by 0.15
  }
  
  // Balance: Assuming higher balance correlates with lower likelihood of churn
  if (Balance > 10000) {
    probability += 0.15; // Increase probability by 0.15
  }
  
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + internet_speed(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + number_of_subscriptions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_rating(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + promotional_offers_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + average_bill_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    