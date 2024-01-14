
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability;

  // Calculate the probability based on the age of the customer
  if (Age < 30) {
    probability = 0.7; // Higher probability for younger customers
  } else if (Age >= 30 && Age < 50) {
    probability = 0.5; // Medium probability for middle-aged customers
  } else {
    probability = 0.3; // Lower probability for older customers
  }

  return probability;
}

function account_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of churn based on account tenure
  // We can use the tenure and age of the customer to estimate the probability
  // Customers with longer tenure and older age are less likely to churn

  // Example calculation - This is just a simplified calculation for demo purposes
  let probability = (Tenure / (Age * 0.1)) * 0.01;

  return probability;
}

function average_monthly_spend(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the average monthly spend based on the provided parameters
  let average_monthly_spend = (Balance * 12) / Tenure;

  // Apply logic to determine the probability based on average monthly spend
  let probability = 0;
  if (average_monthly_spend > 5000) {
    probability = 0.9; // High probability of being less likely to churn
  } else if (average_monthly_spend > 3000) {
    probability = 0.7; // Moderate probability of being less likely to churn
  } else if (average_monthly_spend > 1000) {
    probability = 0.5; // Neutral probability of being less likely to churn
  } else {
    probability = 0.3; // Low probability of being less likely to churn
  }

  // Return the calculated probability
  return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability of customer dissatisfaction based on the number of interactions with customer support

  let dissatisfactionProbability = 0;

  // Higher number of interactions with customer support may indicate dissatisfaction
  // Let's assume that if the number of interactions is greater than 3, the dissatisfaction probability is higher
  if (NumOfProducts > 3) {
    dissatisfactionProbability = 0.8; // 80% probability of dissatisfaction
  } else {
    dissatisfactionProbability = 0.2; // 20% probability of dissatisfaction
  }

  return dissatisfactionProbability;
}

function usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that younger customers are more likely to use the service frequently
  let ageFactor = 1 - (Age / 100);
  
  // Assume that having more products with the service indicates higher usage frequency
  let productFactor = 1 + (NumOfProducts * 0.1);
  
  // Assume that being an active member of the service positively influences usage frequency
  let activeMemberFactor = IsActiveMember ? 1.2 : 1;

  // Combine the factors to calculate the probability of usage frequency
  let probability = ageFactor * productFactor * activeMemberFactor;

  return probability;
}

function customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  // Checking if the customer is from a specific location known for high churn rate
  if (Geography === "France") {
    probability += 0.1; // adding 10% to the probability
  } else if (Geography === "Germany") {
    probability += 0.2; // adding 20% to the probability
  } else if (Geography === "Spain") {
    probability += 0.15; // adding 15% to the probability
  }

  // Considering other factors such as cultural and economic influences
  if (CreditScore < 600) {
    probability += 0.1; // adding 10% to the probability
  }
  if (Age > 30 && Age < 50) {
    probability += 0.05; // adding 5% to the probability
  }
  if (EstimatedSalary < 50000) {
    probability += 0.1; // adding 10% to the probability
  }

  return probability;
}

function number_of_products_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the number of products used
  // Customers using a wider range of products are more likely to be embedded in the ecosystem

  let probability = 0;

  if (NumOfProducts >= 3) {
    probability = 0.8; // Assuming a high probability for customers using three or more products
  } else if (NumOfProducts === 2) {
    probability = 0.5; // Assuming a medium probability for customers using two products
  } else {
    probability = 0.3; // Assuming a lower probability for customers using one product
  }

  return probability;
}

function customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the input parameters
    let probability = 0;
  
    // Use CreditScore, Age, Balance, NumOfProducts, HasCrCard, and IsActiveMember to determine the customer satisfaction probability
  
    if (CreditScore < 600) {
        probability += 0.2;
    }
  
    if (Age < 30 || Age > 60) {
        probability += 0.1;
    }
  
    if (Balance === 0) {
        probability += 0.05;
    } else if (Balance < 100) {
        probability += 0.1;
    }
  
    if (NumOfProducts > 2) {
        probability += 0.1;
    }
  
    if (HasCrCard === 0) {
        probability += 0.1;
    }
  
    if (IsActiveMember === 0) {
        probability += 0.15;
    }
  
    // Adjust the probability based on other parameters as needed
  
    // Returning the final calculated probability
    return probability;
}

function contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Here you can calculate the probability of Customers on contract-based plans having lower likelihood of churn based on the input parameters
  // You could take into account factors such as CreditScore, Age, Tenure, and IsActiveMember to make your prediction

  // Sample Calculation (for demonstration purposes only, actual probabilities should be based on data analysis)
  let probability = 0.3 - (CreditScore * 0.001) + (Age * 0.005) + (Tenure * 0.01) + (IsActiveMember ? 0.1 : 0);
  
  // Make sure the probability is between 0 and 1
  probability = Math.max(0, Math.min(1, probability));

  return probability;
}

function competitor_offerings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of competitor_offerings based on the input parameters
  let probability = 0;

  // Example Calculation:
  if (CreditScore < 600) {
    probability += 0.2; // If the CreditScore is low, there's a higher chance of customer churn due to competitor offerings
  }
  if (Geography === 'France') {
    probability += 0.1; // If the customer is in France, there's a lower chance of being lured away by competitor offerings
  }
  if (NumOfProducts >= 3) {
    probability += 0.15; // If the customer has multiple products, there's a higher chance of being lured away by competitor offerings
  }
  // ... other calculations based on the input parameters

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + account_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + average_monthly_spend(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + number_of_products_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitor_offerings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    