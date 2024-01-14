
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that younger customers (with lower Age) are more likely to churn
    // Calculating the probability of churn based on the Age of the customer
    // You may use logistic regression or other statistical models to create a probability score

    // For example, a simple linear calculation based on Age (you can adjust weights accordingly)
    let probabilityOfChurn = (100 - Age) / 100;

    // Considering other factors and adjusting the probability
    // For simplicity, summing up the influence of other factors on the probability
    probabilityOfChurn -= CreditScore / 1000; // lower credit score reduces probability
    probabilityOfChurn += NumOfProducts * 0.1; // more products increase probability
    probabilityOfChurn += IsActiveMember === 1 ? -0.2 : 0.2; // active members less likely to churn

    // Limiting the probability between 0 and 1
    probabilityOfChurn = Math.max(0, Math.min(1, probabilityOfChurn));

    // Returning the calculated probability
    return probabilityOfChurn;
}

function average_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the average monthly usage based on the input parameters
  // For example, we can use NumOfProducts and EstimatedSalary to estimate the average monthly usage
  let averageMonthlyUsage = NumOfProducts * (EstimatedSalary / 1000); // A simple estimation
  
  // The probability of less likely to churn can be calculated based on the average monthly usage
  let probability = 1 / (1 + Math.exp(-averageMonthlyUsage)); // Using a sigmoid function
  
  // Return the calculated probability
  return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering various parameters to calculate the probability
  // For simplicity, let's assume that if the customer has a lower credit score and a higher estimated salary, they are more likely to have had recent interactions with customer support
  // Also, if the customer's balance is high and they have multiple products, they may be experiencing issues and have interacted with customer support

  let probability = 0;

  if (CreditScore < 600 && EstimatedSalary > 100000) {
    probability += 0.3; // Assuming higher probability
  }

  if (Balance > 10000 && NumOfProducts > 1) {
    probability += 0.2; // Assuming higher probability
  }

  // More conditions and parameters can be considered to refine the probability calculation

  return probability;
}

function subscription_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of subscription_length based on the provided parameters
  // You can use a combination of the parameters to estimate the probability, such as Age, Tenure, IsActiveMember, etc.
  // For example, you can consider that older customers with longer tenure and active membership are more likely to stay with the service.
  
  let probability = 0.5; // Placeholder probability, replace this with your calculated value
  
  // Your calculation for probability goes here
  
  return probability;
}

function number_of_competitors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define the base probability for churn
    let baseProbability = 0.3;

    // Adjust the probability based on factors such as CreditScore, Age, Geography, etc.
    let adjustedProbability = baseProbability - (CreditScore * 0.0002) + (Age * 0.01);
    
    // Check if the Geography is Spain, which might have higher competition
    if (Geography === 'Spain') {
        adjustedProbability += 0.05;
    }

    // Adjust probability based on the number of products the customer has
    adjustedProbability -= (NumOfProducts * 0.03);

    // Adjust probability based on the customer's activity and credit card status
    if (HasCrCard === 0 && IsActiveMember === 0) {
        adjustedProbability += 0.1;
    }

    // Adjust probability based on estimated salary
    if (EstimatedSalary > 100000) {
        adjustedProbability -= 0.05;
    }

    // Limit the probability to a range between 0 and 1
    adjustedProbability = Math.max(0, Math.min(adjustedProbability, 1));

    return adjustedProbability;
}

function usage_of_promotional_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating probability based on the input parameters
  let probability = 0.3; // Initial probability

  // Customers with lower credit score might be more price-sensitive
  if (CreditScore < 650) {
    probability += 0.1;
  }

  // Customers with higher estimated salary might be less sensitive to price
  if (EstimatedSalary > 150000) {
    probability -= 0.05;
  }

  // Younger customers might be more open to promotional offers
  if (Age < 30) {
    probability += 0.15;
  }

  // Inactive members might be more likely to churn
  if (IsActiveMember === 0) {
    probability += 0.2;
  }

  // Customers with lower tenure might be less loyal to the brand
  if (Tenure < 5) {
    probability += 0.1;
  }

  // Return the computed probability
  return probability;
}

function customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume a linear relationship between customer satisfaction score and CreditScore, Age, Balance and IsActiveMember
  let satisfactionScore = 0.3 * CreditScore - 0.2 * Age + 0.4 * (1 - IsActiveMember) - 0.1 * (Balance/10000);
  
  // Adjust scores based on geography and gender
  if (Geography === "France" && Gender === "Female") {
    satisfactionScore += 0.1;
  } else if (Geography === "Germany" && Gender === "Male") {
    satisfactionScore -= 0.1;
  }

  // Calculate probability using a sigmoid function
  let probability = 1 / (1 + Math.exp(-satisfactionScore));

  return probability;
}

function financial_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with lower CreditScore are more likely to have unstable financial status
  let creditScoreProbability = CreditScore / 1000; // Assuming CreditScore ranges from 0 to 1000
  
  // Assuming that customers with higher EstimatedSalary are less likely to have unstable financial status
  let salaryProbability = 1 - (EstimatedSalary / 200000); // Assuming EstimatedSalary ranges from 0 to 200000
  
  // Assuming that customers with higher Balance are less likely to have unstable financial status
  let balanceProbability = 1 - (Balance / 150000); // Assuming Balance ranges from 0 to 150000
  
  // Assuming that customers with more products are more likely to have unstable financial status
  let productProbability = NumOfProducts / 4; // Assuming NumOfProducts ranges from 1 to 4
  
  // Combining all probabilities to get the overall probability of unstable financial status
  let overallProbability = (creditScoreProbability + salaryProbability + balanceProbability + productProbability) / 4;
  
  return overallProbability;
}

function change_in_usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of change_in_usage_patterns based on the given parameters
    let probability = 0;

    // Consider factors like recent activity, age, tenure, credit score, balance, and other parameters to determine the probability

    // Just an example to show the function computes a probability, actual computation may include more factors
    if (Age > 30 && Tenure < 2) {
        probability = 0.7;
    } else {
        probability = 0.3;
    }

    return probability;
}

function network_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers who have experienced frequent network outages are twice as likely to churn
    // Create a variable to represent the base churn probability
    let baseChurnProbability = 0.2;
    
    // If the customer has experienced frequent network outages, increase the churn probability
    if (Age >= 30 && Age <= 50 && Tenure < 5 && Balance === 0 && NumOfProducts === 1 && HasCrCard === 1 && IsActiveMember === 0) {
        baseChurnProbability *= 2;
    }
    
    // return the churn probability
    return baseChurnProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + average_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + subscription_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + number_of_competitors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_of_promotional_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + financial_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + change_in_usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + network_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    