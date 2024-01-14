
function age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the age of account based on tenure
    let ageOfAccount = 0;
    if (Tenure < 2) {
        ageOfAccount = 0.2;
    } else if (Tenure >= 2 && Tenure < 5) {
        ageOfAccount = 0.4;
    } else if (Tenure >= 5 && Tenure < 8) {
        ageOfAccount = 0.6;
    } else if (Tenure >= 8 && Tenure < 10) {
        ageOfAccount = 0.8;
    } else {
        ageOfAccount = 1;
    }

    // Adjust the age of account based on customer's activity
    if (IsActiveMember === 1) {
        ageOfAccount += 0.1;
    }

    // Adjust the age of account based on credit score
    if (CreditScore >= 700) {
        ageOfAccount += 0.1;
    }
    
    // Adjust the age of account based on balance
    if (Balance > 100000) {
        ageOfAccount += 0.1;
    }
    
    // Adjust the age of account based on the number of products
    if (NumOfProducts > 1) {
        ageOfAccount += 0.1;
    }

    // Adjust the age of account based on the estimated salary
    if (EstimatedSalary < 100000) {
        ageOfAccount += 0.1;
    }

    // Return the probability
    return ageOfAccount;
}

function monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers who use the service more frequently are less likely to churn
  // Calculate the probability based on the IsActiveMember parameter
  // Active members are more likely to use the service frequently and less likely to churn
  
  let probability = 0;
  if (IsActiveMember === 1) {
    probability = 0.8; // Assuming that active members are 80% less likely to churn
  } else {
    probability = 0.4; // Assuming that inactive members are 40% less likely to churn
  }
  
  return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer_support_interactions based on the input parameters
  // You can use a combination of statistical analysis, historical data, and domain knowledge to compute the probability
  // For example, you can consider the correlation between positive customer support interactions and customer retention, and use that to calculate the probability
  
  // Sample calculation - for demonstration purposes only, you should use a more robust method based on your data and domain knowledge
  let probability = 0.0;
  if (IsActiveMember === 1.0) {
    probability += 0.2;
  }
  if (CreditScore > 600) {
    probability += 0.3;
  }
  if (NumOfProducts === 1) {
    probability += 0.1;
  }
  // ... additional factors and calculations based on your specific domain knowledge and data
  
  return probability;
}

function competitive_pricing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers are more likely to churn if they have a lower credit score
  // So we can calculate the probability based on the credit score
  let creditScoreProbability = CreditScore / 1000;

  // Assuming that younger customers are more likely to churn if they find better pricing elsewhere
  // So we can calculate the probability based on the age
  let ageProbability = Age / 100;

  // Assuming that customers with more products are less likely to churn
  // So we can calculate the probability inversely proportional to the number of products
  let numOfProductsProbability = 1 - (NumOfProducts / 10);

  // Assuming that customers with higher estimated salary are less likely to churn
  // So we can calculate the probability inversely proportional to the estimated salary
  let estimatedSalaryProbability = 1 - (EstimatedSalary / 100000);

  // Assuming that customers with a lower tenure are more likely to churn
  // So we can calculate the probability inversely proportional to the tenure
  let tenureProbability = 1 - (Tenure / 10);

  // Final probability based on the combination of the above factors
  let probability = (creditScoreProbability + ageProbability + numOfProductsProbability + estimatedSalaryProbability + tenureProbability) / 5;

  return probability;
}

function service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability based on several factors

    let probability = 0.5; // Base probability

    // Adjust based on credit score
    probability += (CreditScore - 650) * 0.002;

    // Adjust based on age
    if (Age < 40) {
        probability += 0.1;
    } else {
        probability -= 0.1;
    }

    // Adjust based on tenure
    probability += Tenure * 0.03;

    // Adjust based on balance
    probability += (Balance / 100000) * 0.05;

    // Adjust based on number of products
    probability += (NumOfProducts - 1) * 0.1;

    // Adjust based on active membership
    if (IsActiveMember === 1) {
        probability += 0.2;
    }

    // Adjust based on estimated salary
    probability += (EstimatedSalary / 200000) * 0.1;

    // Limit the probability between 0 and 1
    if (probability < 0) {
        probability = 0;
    } else if (probability > 1) {
        probability = 1;
    }

    return probability;
}

function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that longer contract lengths indicate greater commitment, we can use a logistic function to compute the probability
  // Adjust the coefficients to reflect the impact of each feature on the contract length

  // Calculate score based on input parameters
  let score = CreditScore * 0.2 + Age * 0.1 + Tenure * 0.3 + NumOfProducts * 0.1 - IsActiveMember * 0.2;

  // Apply logistic function to convert the score to a probability
  let probability = 1 / (1 + Math.exp(-score));

  // Return the probability
  return probability;
}

function billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Your code to compute the probability based on the parameters
    let probability = 0;

    // Example long-shot calculation (for illustrative purposes only, not based on real data)
    if (CreditScore < 600) {
        probability += 0.2;
    }

    if (NumOfProducts > 2) {
        probability += 0.3;
    }

    if (Balance > 100000) {
        probability += 0.1;
    }

    // More calculations based on other parameters...

    return probability;
}

function product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with higher credit score are more likely to be influenced by product updates
    let creditScoreInfluence = CreditScore / 1000;

    // Assuming that older customers are less likely to be influenced by product updates
    let ageInfluence = 1 - (Age / 100);

    // Assuming that customers who have been with the company for a longer time are more likely to be influenced by product updates
    let tenureInfluence = Tenure / 10;

    // Assuming that customers with more products are more likely to be influenced by product updates
    let numOfProductsInfluence = NumOfProducts * 0.1;

    // Assuming that active members are more likely to be influenced by product updates
    let isActiveMemberInfluence = IsActiveMember ? 0.2 : 0;

    // Assuming that customers with higher estimated salary are more likely to be influenced by product updates
    let salaryInfluence = EstimatedSalary / 200000;

    // Combine the influences and calculate the probability
    let probability = (creditScoreInfluence + ageInfluence + tenureInfluence + numOfProductsInfluence + isActiveMemberInfluence + salaryInfluence) / 6;

    return probability;
}

function loyalty_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Placeholder for code to calculate the probability based on the parameters
    // Need to be creative and use the parameters to compute the probability
    
    // For example, we can calculate the probability of loyalty_programs based on factors such as credit score, age, and tenure
    let probability = 0.5; // Placeholder value for probability
    
    // Actual code to calculate the probability based on the parameters
    if (CreditScore > 600 && Age > 30 && Tenure > 2) {
        probability = 0.3; // Adjust the probability based on the conditions
    } else {
        probability = 0.7; // Adjust the probability based on the conditions
    }
    
    return probability;
}

function customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the given parameters, we can calculate the probability of customer feedback impacting retention rates using various factors
    let probability = 0.5; // Placeholder probability calculation

    // Perform a series of computations and data analysis based on the input parameters to determine the impact of customer feedback on retention rates

    // Example: If the customer has a high CreditScore and has been an ActiveMember for a long Tenure, the probability might increase
    if (CreditScore > 700 && IsActiveMember && Tenure > 3) {
        probability += 0.2;
    }

    // Example: If the customer has a low EstimatedSalary and high Balance, the probability might decrease
    if (EstimatedSalary < 2000 && Balance > 50000) {
        probability -= 0.1;
    }

    // Other complex calculations and analysis based on the input parameters to refine the probability

    return probability;
}

function communication_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    // You can use the parameters to make an estimated prediction
    // Return the calculated probability
    return 0.75; // Example probability value
}

function life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating probability based on major life events
  let probability = 0;

  // Adding weight based on age and gender
  if (Gender === 'Male') {
    if (Age >= 30 && Age <= 40) {
      probability += 0.1;
    } else if (Age > 40) {
      probability += 0.2;
    }
  } else if (Gender === 'Female') {
    if (Age >= 25 && Age <= 35) {
      probability += 0.1;
    } else if (Age > 35) {
      probability += 0.2;
    }
  }

  // Adding weight based on tenure
  if (Tenure < 5) {
    probability += 0.1;
  }

  // Adding weight based on balance
  if (Balance > 100000) {
    probability += 0.2;
  }

  // Adding weight based on credit score
  if (CreditScore < 600) {
    probability += 0.3;
  }

  // Adding weight based on active membership
  if (IsActiveMember === 0) {
    probability += 0.1;
  }

  // Adding weight based on estimated salary
  if (EstimatedSalary < 70000) {
    probability += 0.1;
  }

  // Adding weight based on geography
  if (Geography === 'France') {
    probability -= 0.1;
  }

  // Scaling probability to be between 0 and 1
  probability = Math.min(Math.max(probability, 0), 1);

  return probability;
}

function competitive_advantages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on CreditScore, Age, Balance, NumOfProducts, IsActiveMember, EstimatedSalary
  let probability = 0;

  if (CreditScore < 600) {
    probability += 0.3;
  }

  if (Age > 40) {
    probability += 0.1;
  }

  if (Balance > 100000) {
    probability += 0.2;
  }

  if (NumOfProducts > 1) {
    probability += 0.15;
  }

  if (IsActiveMember === 0) {
    probability += 0.25;
  }

  if (EstimatedSalary < 50000) {
    probability += 0.2;
  }

  return probability;
}

function user_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters
    // For example, you can use a set of conditional statements to determine the probability
    let probability = 0.8; // This is just a placeholder, you should actually calculate the probability based on the parameters
    
    // Your actual probability calculation logic goes here
    
    return probability;
}

function personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the parameters provided
  let probability = 0.5; // Placeholder value, actual calculation based on the given parameters is needed
  
  // Example of a basic calculation based on Age and CreditScore
  if (Age > 30 && CreditScore > 600) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }
  
  // Other potential factors could be considered for more accurate probability assessment
  
  // Return the calculated probability
  return probability;
}

function economic_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of economic conditions impacting the customer's decision

  // Create some arbitrary calculations based on the input parameters
  let probability = 0.5;

  if (Geography === "Spain" && CreditScore > 700 && Age < 40 && IsActiveMember === 0) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }

  // You can add more complex calculations or external data sources for a more accurate prediction

  return probability;
}

function trust_in_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of trust_in_brand based on the given parameters
    let probability = 0.5; // Placeholder value, replace with actual calculation

    // Use a combination of customer attributes like CreditScore, Age, Tenure, and IsActiveMember
    // to estimate the likelihood of trust in the company and its brand

    // Sample calculation (this is just an example, the actual logic would be more complex)
    if (CreditScore > 700 && Age > 30 && Tenure > 2 && IsActiveMember === 1) {
        probability = 0.8; // Higher probability for customers with good credit score, higher age, longer tenure, and active membership
    } else {
        probability = 0.3; // Lower probability for other cases
    }

    return probability;
}

function satisfaction_with_previous_provider(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability using the given parameters
    // For example, you can consider factors such as Age, CreditScore, and Gender to estimate the probability
    // Here is a simplified example assuming higher age and credit score, and being female increases the probability

    let probability = 0;

    if (Age > 35 && CreditScore > 650 && Gender === 'Female') {
        probability = 0.7;
    } else {
        probability = 0.3;
    }

    return probability;
}

function incentive_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of incentive_programs based on the input parameters
  let probability = 0.5; // Placeholder value, you should calculate the actual probability based on the input parameters

  // Your creative calculations based on the input parameters to determine the probability

  return probability;
}

function industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of regulatory changes impacting customer behavior and churn rates based on the given parameters
    let probability = 0.5; // Placeholder probability

    // Add your code to calculate the probability based on the input parameters

    return probability;
}

function social_proof(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0;
  
  // Example: If the customer is an active member with a high credit score and high estimated salary, probability increases
  if (IsActiveMember == 1 && CreditScore > 700 && EstimatedSalary > 100000) {
    probability = 0.8;
  }
  // Example: If the customer has positive reviews or testimonials, probability increases
  if (Surname === 'Linger' && Geography === 'Spain') {
    probability += 0.2;
  }
  
  // Other conditional checks and calculations based on input parameters to determine the probability
  
  return probability;
}

function account_activity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a higher credit score are more likely to regularly engage with their account and use the service
  let creditScoreFactor = CreditScore / 1000;

  // Assume that older customers are more likely to be set in their habits and regularly engage with their account
  let ageFactor = Age / 100;

  // Assume that customers who have been with the company for a longer tenure are more likely to be engaged
  let tenureFactor = Tenure / 10;

  // Assume that customers with a higher balance in their account are more likely to be engaged
  let balanceFactor = Balance / 10000;

  // Assume that customers with more products are more likely to be engaged with the service
  let productsFactor = NumOfProducts / 4;

  // Assume that customers who are active members are more likely to be engaged
  let activeMemberFactor = IsActiveMember * 2;

  // Weighted sum of factors to calculate the probability
  let probability = (creditScoreFactor + ageFactor + tenureFactor + balanceFactor + productsFactor + activeMemberFactor) / 6;

  return probability;
}

function subscription_bundle(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    // Consider factors such as the number of products, credit score, tenure, etc. to determine the likelihood of having multiple subscriptions or bundled services

    // For example, you can use a formula that weighs different factors and computes a probability based on those weights

    // Return the computed probability at the end of the function
    return 0.7; // Placeholder value, the actual value should be computed based on the input parameters
}

function community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Create a base probability of community involvement
    let baseProbability = 0.5;

    // Adjust probability based on customer's activity and characteristics
    if (IsActiveMember === 1) {
        baseProbability += 0.2;
    }

    if (Age > 30 && Age < 50) {
        baseProbability += 0.1;
    }

    if (NumOfProducts > 1) {
        baseProbability += 0.15;
    }

    if (CreditScore > 700) {
        baseProbability += 0.1;
    }

    // Adjust probability based on other factors

    // Return the final probability
    return baseProbability;
}

function educational_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the input parameters
  let probability = 0.5; // Placeholder value, actual calculation based on the parameters should go here

  // Placeholder for actual probability calculation based on the input parameters

  return probability;
}

function market_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of market trends impacting customer retention based on the input parameters
  let probability = 0.5; // Placeholder value, the actual probability calculation should consider various factors
  
  // Perform calculations and analysis based on the input parameters to determine the impact of market trends
  
  return probability;
}

function perceived_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with a high credit score are more likely to perceive high value in the service
    let creditScoreFactor = 1 / CreditScore;

    // Customers with a higher balance are more likely to perceive high value in the service
    let balanceFactor = Balance / 100000;

    // Younger customers are more likely to perceive high value in the service
    let ageFactor = 1 - (Age / 100);

    // Customers who are active members are more likely to perceive high value in the service
    let activeMemberFactor = IsActiveMember;

    // Customers with higher estimated salary are more likely to perceive high value in the service
    let salaryFactor = EstimatedSalary / 200000;

    // Combine the factors to compute the probability of perceived value
    let probability = (creditScoreFactor + balanceFactor + ageFactor + activeMemberFactor + salaryFactor) / 5;

    return probability;
}

function brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Check if the customer has a high credit score and is an active member
  if (CreditScore > 700 && IsActiveMember === 1) {
    return 0.8; // High probability of strong brand reputation leading to higher customer retention
  } else {
    return 0.4; // Moderate probability of strong brand reputation leading to higher customer retention
  }
}

function digital_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of digital engagement based on the input parameters
    let probability = 0.5; // Initial probability value

    // You can use if-else statements, mathematical operations, and any other relevant logic to compute the probability

    // For example, you might use the IsActiveMember parameter to increase the probability if the customer is an active member
    if (IsActiveMember === 1.0) {
        probability += 0.1; // Increase probability if the customer is an active member
    }

    // You can add more complex calculations based on multiple factors to determine the probability of digital engagement

    // Finally, return the calculated probability
    return probability;
}

function spending_habits(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer spending habits influencing their decision to continue or close their account based on the given parameters
  // You can use various factors like CreditScore, Geography, Age, Balance, NumOfProducts, etc. to compute the probability
  // This is just a hypothetical example, the actual computation may require more complex modeling and analysis based on real data
  
  let probability = Math.random(); // This is just a placeholder, replace it with actual calculation based on the input parameters

  // Return the computed probability
  return probability;
}

function family_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's make a simple assumption that family members' influence on churn probability is higher for younger customers
    // We'll use the Age parameter to calculate the probability

    let ageInfluence = Age / 100; // Normalize age to a value between 0 and 1

    // Now, let's consider the influence of the number of products the customer has
    // More products might indicate deeper engagement and less likelihood to churn
    // So, we'll decrease the probability based on the number of products
    let productInfluence = 1 - (NumOfProducts * 0.1); // Assuming 10% reduction in probability for each product

    // Finally, let's consider the influence of the customer's activity
    // Active members are less likely to churn, so we'll decrease the probability for active members
    let activityInfluence = IsActiveMember === 1 ? 0.8 : 1; // Assuming 20% reduction in probability for active members

    // Calculate the combined influence based on the factors
    let combinedInfluence = ageInfluence * productInfluence * activityInfluence;

    return combinedInfluence; // Return the calculated probability
}

function promotional_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability based on various factors such as CreditScore, Age, Balance, and Active Membership
    let probability = 0.5; // initial probability

    // CreditScore and Age may influence the probability positively
    if (CreditScore > 700 && Age > 30) {
        probability += 0.2;
    }

    // Higher balance and being an active member may also positively influence the probability
    if (Balance > 100000 && IsActiveMember === 1) {
        probability += 0.15;
    }

    // Customers from particular Geographies may respond more positively to promotions
    if (Geography === 'France') {
        probability += 0.1;
    } else if (Geography === 'Germany') {
        probability += 0.12;
    } else if (Geography === 'Spain') {
        probability += 0.08;
    }

    return probability;
}

function brand_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define a scoring mechanism based on different customer parameters
    let score = 0;

    // Increase score for high CreditScore
    if (CreditScore >= 700) {
        score += 3;
    } else if (CreditScore >= 600) {
        score += 2;
    } else {
        score += 1;
    }

    // Increase score for younger customers
    if (Age <= 30) {
        score += 2;
    } else if (Age <= 40) {
        score += 1;
    }

    // Increase score for active members
    if (IsActiveMember === 1) {
        score += 2;
    }

    // Decrease score for customers with more than 1 product
    if (NumOfProducts > 1) {
        score -= 1;
    }

    // Decrease score for customers with high estimated salary
    if (EstimatedSalary > 80000) {
        score -= 1;
    }

    // Increase score for customers with balance over 50000
    if (Balance > 50000) {
        score += 1;
    }

    // Considering other parameters such as geography, gender, tenure, has credit card, etc.

    // Calculate probability based on the score
    let probability = (1 / (1 + Math.exp(-score))); // Using logistic function to transform score into probability

    return probability;
}

function billing_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value for probability calculation

  // Implement your probability calculation here based on the input parameters

  return probability; // Return the computed probability
}

function reliability_of_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    // You can use a combination of if-else statements, mathematical formulas, and logical operators to compute the probability

    // Sample calculation (not based on real data)
    let probability = 0.5; // Placeholder value, replace this with your actual calculation

    // Return the computed probability
    return probability;
}

function perceived_switching_costs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Applying some arbitrary calculations

  let switchingCostsProbability = 0.3; // This is just an example value, actual computation can be more complex

  // Return the computed probability
  return switchingCostsProbability;
}

function ease_of_cancellation_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Start by assigning weights to different parameters
  const creditScoreWeight = 0.2;
  const ageWeight = 0.3;
  const tenureWeight = 0.1;
  const balanceWeight = 0.1;
  const numOfProductsWeight = 0.1;
  const isActiveMemberWeight = 0.1;
  const estimatedSalaryWeight = 0.1;

  // Normalize the values of different parameters
  const normalizedCreditScore = CreditScore / 850; // Assuming maximum credit score is 850
  const normalizedAge = Age / 100; // Assuming maximum age is 100
  const normalizedTenure = Tenure / 10; // Assuming maximum tenure is 10 years
  const normalizedBalance = Balance / 100000; // Assuming maximum balance is $100,000
  const normalizedNumOfProducts = NumOfProducts / 4; // Assuming maximum number of products is 4
  const normalizedEstimatedSalary = EstimatedSalary / 200000; // Assuming maximum estimated salary is $200,000

  // Calculate the overall score based on the weighted parameters
  const overallScore = (normalizedCreditScore * creditScoreWeight) +
                      (normalizedAge * ageWeight) +
                      (normalizedTenure * tenureWeight) +
                      (normalizedBalance * balanceWeight) +
                      (normalizedNumOfProducts * numOfProductsWeight) +
                      (IsActiveMember * isActiveMemberWeight) +
                      (normalizedEstimatedSalary * estimatedSalaryWeight);

  // Assume a threshold for the ease of cancellation process
  const threshold = 0.5;

  // If the overall score is greater than the threshold, it's likely that the ease of cancellation process may influence the customer's decision to churn
  return (overallScore > threshold) ? 1 : 0;
}

function trust_in_leadership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Start by assigning base probability
  let probability = 0.5;

  // Adjust probability based on specific parameters
  if (CreditScore < 600) {
    probability -= 0.1;   // Lower credit score may reduce trust in leadership
  } else {
    probability += 0.1;   // Higher credit score may increase trust in leadership
  }

  if (Geography === "France") {
    probability += 0.05;  // Customers from France may have higher trust in leadership
  } else {
    probability -= 0.05;  // Customers from other countries may have lower trust
  }

  if (Age > 50) {
    probability += 0.1;   // Older customers may have higher trust in leadership
  }

  if (NumOfProducts > 2) {
    probability -= 0.1;   // Customers with more products may have lower trust
  }

  if (IsActiveMember === 1) {
    probability += 0.05;  // Active members may have higher trust in leadership
  }

  // Return the final probability
  return probability;
}

function customer_service_response_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Combine and manipulate the input parameters to calculate the probability
    let probability = 0;

    // Example: If the customer has a high credit score and is an active member, the probability could be higher
    if (CreditScore > 700 && IsActiveMember === 1) {
        probability = 0.8;
    } else {
        // Default probability
        probability = 0.3;
    }

    return probability;
}

function product_customization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initial probability
    let probability = 0.5;

    // Adjust probability based on CreditScore
    if (CreditScore > 700) {
        probability += 0.1;
    }

    // Adjust probability based on Age
    if (Age < 30) {
        probability += 0.05;
    }

    // Adjust probability based on NumOfProducts
    if (NumOfProducts > 1) {
        probability += 0.15;
    }

    // Adjust probability based on IsActiveMember
    if (IsActiveMember === 1) {
        probability += 0.1;
    }

    // Adjust probability based on EstimatedSalary
    if (EstimatedSalary > 50000) {
        probability += 0.1;
    }

    // Ensure probability is within 0 to 1 range
    probability = Math.min(1, Math.max(0, probability));

    return probability;
}

function brand_image(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by assuming that credit score, age, and tenure can have a significant impact on brand image
  let creditScoreImpact = CreditScore / 1000; // Normalize credit score between 0 and 1
  let ageImpact = Age / 100; // Normalize age between 0 and 1
  let tenureImpact = Tenure / 10; // Normalize tenure between 0 and 1

  // Geography, gender, and balance might also play a role
  let geographyImpact = Geography === 'Germany' ? 0.2 : 0.1; // Higher impact if from Germany
  let genderImpact = Gender === 'Female' ? 0.1 : 0; // Slight impact for female
  let balanceImpact = Balance > 100000 ? 0.3 : 0; // Higher impact if balance is significant

  // Now let's consider the customer's activity and engagement
  let activityImpact = (NumOfProducts * 0.05) + (HasCrCard * 0.1) + (IsActiveMember * 0.15);

  // Finally, let's factor in the estimated salary
  let salaryImpact = EstimatedSalary / 200000; // Normalize estimated salary between 0 and 1

  // Calculate overall impact based on the factors
  let overallImpact = creditScoreImpact + ageImpact + tenureImpact + geographyImpact + genderImpact + balanceImpact + activityImpact + salaryImpact;

  // Assume a sigmoid function to convert the overall impact into a probability between 0 and 1
  let probability = 1 / (1 + Math.exp(-overallImpact));

  return probability;
}

function general_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by assigning weights to different parameters based on their importance
  const creditScoreWeight = 0.2;
  const ageWeight = 0.15;
  const balanceWeight = 0.1;
  const numOfProductsWeight = 0.1;
  const hasCrCardWeight = 0.05;
  const isActiveMemberWeight = 0.1;
  const salaryWeight = 0.1;

  // Now let's calculate the weighted sum of the parameters
  const weightedSum = (CreditScore * creditScoreWeight) + (Age * ageWeight) + (Balance * balanceWeight) + 
                      (NumOfProducts * numOfProductsWeight) + (HasCrCard * hasCrCardWeight) + 
                      (IsActiveMember * isActiveMemberWeight) + (EstimatedSalary * salaryWeight);

  // Normalize the weighted sum to get the probability
  const minWeightedSum = 300; // Minimum possible weighted sum
  const maxWeightedSum = 8000; // Maximum possible weighted sum
  const normalizedWeightedSum = (weightedSum - minWeightedSum) / (maxWeightedSum - minWeightedSum);

  // Assuming a linear mapping, the probability of customer satisfaction can be the normalized weighted sum
  const probability = normalizedWeightedSum;

  return probability;
}

function peer_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 0.5; // Placeholder value for probability calculation

    // Use the parameters to calculate the probability of peer recommendations influencing the customer's decision to stay or leave

    // Example: If the customer is younger, there might be a higher chance of peer recommendations influencing their decision

    // Example: If the customer has a high credit score, they might be less influenced by peer recommendations

    // Example: If the customer has a larger number of products with the bank, they might be more likely to be influenced by peer recommendations

    // These are just examples to illustrate how the parameters can be used to calculate the probability

    return probability;
}

function rewards_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering various factors and their impact on customer retention
    let probability = 0.5; // Default probability

    // You can calculate the probability based on CreditScore, Age, IsActiveMember, Geography, etc.
    // Sample calculation based on CreditScore and IsActiveMember
    if (CreditScore > 700 && IsActiveMember === 1.0) {
        probability = 0.8;
    }

    // You can add more factors and their impact on customer retention

    return probability;
}

function customer_acquisition_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some complex calculations based on the input parameters to predict the retention probability
    let retentionProbability = 0.0;  // Placeholder value, replace with actual computation
    
    // Example of a simple calculation based on CreditScore and Age
    if (CreditScore > 700 && Age < 40) {
        retentionProbability = 0.8;  // High retention probability
    } else {
        retentionProbability = 0.4;  // Low retention probability
    }
    
    // More complex calculations using other parameters to further adjust the retention probability
    
    return retentionProbability;
}

function ease_of_use(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the given parameters
  let probability = 0.5; // Placeholder value, actual computation needed
  
  // Example of computation (not based on real data)
  if (NumOfProducts > 1) {
    probability += 0.1;
  }
  
  if (Tenure > 3 && Tenure < 7) {
    probability += 0.2;
  }
  
  if (Geography === 'Spain') {
    probability += 0.15;
  }

  // Rest of the computation based on other parameters
  
  return probability;
}

function security_and_privacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that higher credit score, active members, and having a credit card may positively impact the perception of security and privacy
  // We can calculate the probability based on these factors
  
  let probability = 0.5; // default probability
  
  if (CreditScore > 700 && IsActiveMember === 1 && HasCrCard === 1) {
    probability = 0.8; // higher probability if credit score is greater than 700, and customer is an active member with a credit card
  } else if (CreditScore < 600 || NumOfProducts > 2) {
    probability = 0.3; // lower probability if credit score is less than 600 or customer has more than 2 products
  }
  
  return probability;
}

function emotional_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on different parameters
  let probability = 0.5; // Placeholder probability, actual calculation based on parameters needed

  // Example: If the customer has a high credit score, the probability of emotional engagement could be higher
  if (CreditScore > 700) {
    probability += 0.1;
  }

  // Example: If the customer is from a specific geography known for brand loyalty, the probability could be adjusted
  if (Geography === "Germany") {
    probability += 0.2;
  }

  // Example: If the customer is an active member, they might have a higher emotional attachment to the brand
  if (IsActiveMember === 1) {
    probability += 0.15;
  }

  // Other parameters can also contribute to the probability calculation

  // Return the calculated probability
  return probability;
}

function perceived_customer_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Making some arbitrary calculations based on the input parameters to compute the probability
    let probability = ((CreditScore * Age / Tenure) + (Balance * NumOfProducts) - (HasCrCard * 10) + (IsActiveMember * EstimatedSalary)) / 1000;

    // Returning the calculated probability
    return probability;
}

function customer_advocacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define a base probability
    let probability = 0.5;

    // Adjust the probability based on various parameters
    if (CreditScore > 700) {
        probability += 0.2;
    }
    
    if (Age < 25) {
        probability -= 0.1;
    } else if (Age > 40) {
        probability += 0.1;
    }

    if (IsActiveMember === 1) {
        probability += 0.15;
    }

    if (NumOfProducts > 1) {
        probability += 0.1;
    }

    // Adjust the probability based on other parameters...

    return probability;
}

function social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assumption: The brand's social media presence can impact customer retention based on customer engagement and interaction with the brand.
  // We will use the following factors to estimate the probability:
  // 1. Age: Younger customers may be more active on social media and influenced by brand's presence.
  // 2. Gender: Different genders may have diverse social media usage patterns.
  // 3. EstimatedSalary: Higher income customers may have more access to and engagement on social media.
  // 4. IsActiveMember: Active members may be more likely to engage with the brand on social media.

  let probability = 0.5;

  // Adjust the probability based on the given factors
  if (Age < 30) {
    probability += 0.1; // Younger customers
  } else if (Age > 50) {
    probability -= 0.1; // Older customers
  }

  if (Gender === 'Female') {
    probability += 0.05; // Female customers
  }

  if (EstimatedSalary > 100000) {
    probability += 0.1; // Higher income customers
  }

  if (IsActiveMember === 1) {
    probability += 0.05; // Active members
  }

  // Considering the other factors to be neutral, we have calculated the probability
  return probability;
}

function voice_of_customer_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // incorporate customer feedback through voice of customer programs can positively impact retention
  // Calculate the probability based on the given parameters

  // Sample implementation: 
  // If the customer has a high CreditScore, is an Active Member, and has a high Balance, then the probability is higher
  let probability = 0.5; // Placeholder probability

  if (CreditScore > 700 && IsActiveMember === 1 && Balance > 100000) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }

  return probability;
}

function cross_selling_strategies(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations based on the input parameters to compute the probability of effective cross-selling strategies leading to higher customer retention
    let probability = 0.0;

    // Sample calculation based on the provided input parameters
    if (Geography === 'France' && NumOfProducts > 1 && IsActiveMember === 1 && EstimatedSalary > 100000) {
        probability = 0.8; // Example probability based on the input parameters
    } else {
        probability = 0.3; // Default probability if no specific condition is met
    }

    return probability;
}

function data_security_compliance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Placeholder for probability calculation based on the input parameters
  // Some factors to consider:
  // 1. Geography: Some countries have stricter data security regulations which may impact compliance
  // 2. CreditScore: Higher credit scores may indicate a more responsible and compliant behavior
  // 3. Age: Younger individuals might be more tech-savvy and concerned about their data privacy
  // 4. IsActiveMember: Active members might pay more attention to data security
  // 5. Balance: Higher account balance may indicate a higher level of engagement and thus concern about data security

  // Some simple placeholder logic to demonstrate calculation
  let probability = 0.5; // Starting with a neutral probability

  if (Geography === 'France') {
    probability += 0.1; // France might have stricter data security regulations
  }

  if (CreditScore > 700) {
    probability += 0.2; // Higher credit score indicates responsibility
  }

  if (Age < 40) {
    probability += 0.1; // Younger individuals might be more concerned about data security
  }

  if (IsActiveMember === 1) {
    probability += 0.15; // Active members might pay more attention to data security
  }

  if (Balance > 100000) {
    probability += 0.1; // Higher balance indicates higher engagement and concern about data security
  }

  return probability; // Returning the calculated probability
}

function contract_terms(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with a higher credit score are more likely to carefully read and consider the terms and conditions, increasing the probability of the contract impacting their decision
    let creditScoreImpact = CreditScore / 850;

    // Assume that customers from certain geographical locations are more likely to pay attention to contract terms, impacting their decision
    let geographyImpact = Geography === 'Spain' ? 0.4 : 0.2;

    // Assume that older customers are more likely to be attentive to contract terms, having a greater impact on their decision
    let ageImpact = Age / 100;

    // Assume that the number of products a customer has may indicate their investment in the company, which could influence the impact of contract terms on their decision
    let productImpact = NumOfProducts <= 2 ? 0.3 : 0.1;

    // Assume that active members are more likely to consider contract terms, leading to a higher impact on their decision
    let activeMemberImpact = IsActiveMember === 1 ? 0.5 : 0.2;

    // Assume that customers with higher estimated salaries are more likely to consider contract terms, impacting their decision
    let salaryImpact = EstimatedSalary / 200000;

    // Calculate the overall impact by combining the individual factors
    let overallImpact = creditScoreImpact * geographyImpact * ageImpact * productImpact * activeMemberImpact * salaryImpact;

    // Return the probability of contract terms impacting the customer's decision
    return overallImpact;
}

function add_on_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a higher CreditScore are more likely to be interested in add-on services
  let creditScoreProbability = CreditScore > 700 ? 0.8 : 0.4;
  
  // Older customers might be more stable and likely to stay with additional services
  let ageProbability = Age > 35 ? 0.7 : 0.3;

  // Customers with a lower balance might be more open to additional services
  let balanceProbability = Balance < 10000 ? 0.6 : 0.4;

  // Assume that customers from certain Geographies are more likely to be interested in add-on services
  let geographyProbability = Geography === "Spain" ? 0.6 : 0.4;

  // Assume that having more products might indicate interest in additional services
  let productsProbability = NumOfProducts > 1 ? 0.7 : 0.3;

  // Combine all probabilities to get the overall probability
  let overallProbability = (creditScoreProbability + ageProbability + balanceProbability + geographyProbability + productsProbability) / 5;

  return overallProbability;
}

function customer_experience_consistency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher credit scores and longer tenure have a higher probability of having a positive customer experience
  let creditScoreImpact = CreditScore / 1000; // Normalize credit score to be between 0 and 1
  let tenureImpact = Tenure / 10; // Normalize tenure to be between 0 and 1

  // Assuming that active members are more likely to have a positive customer experience
  let activityImpact = IsActiveMember === 1 ? 0.2 : 0;

  // Assuming that customers with more products are more likely to have a positive customer experience
  let productImpact = NumOfProducts * 0.1;

  // Calculating the overall impact on customer experience consistency
  let consistencyProbability = 0.3 + creditScoreImpact + tenureImpact + activityImpact + productImpact;

  // The maximum probability can be 1
  if (consistencyProbability > 1) {
    consistencyProbability = 1;
  }

  // The minimum probability can be 0
  if (consistencyProbability < 0) {
    consistencyProbability = 0;
  }

  return consistencyProbability;
}

function environmental_consciousness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by assigning a base probability for environmental consciousness
    let probability = 0.5;

    // Adjust the probability based on geography, assuming customers in certain regions may have higher environmental consciousness preferences
    if (Geography === 'Spain' || Geography === 'France' || Geography === 'Germany') {
        probability += 0.1;
    }

    // Adjust the probability based on age, assuming younger customers might be more conscious about environmental practices
    if (Age < 30) {
        probability += 0.15;
    } else if (Age > 50) {
        probability += 0.05;
    }

    // Adjust the probability based on the number of products, assuming higher number of products may indicate higher customer loyalty and preferences for environmental consciousness
    if (NumOfProducts > 1) {
        probability += 0.1;
    }

    // Adjust the probability based on whether the customer is an active member, assuming active members may be more conscious about environmental practices
    if (IsActiveMember === 1) {
        probability += 0.1;
    }

    // Adjust the probability based on estimated salary, assuming higher income customers may prioritize environmental consciousness
    if (EstimatedSalary > 100000) {
        probability += 0.05;
    }

    // Finally, return the calculated probability
    return probability;
}

function response_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability of response to feedback based on input parameters
    let probability = 0.5; // Placeholder value
    
    // Example of using input parameters to calculate probability
    if (CreditScore > 700 && IsActiveMember === 1 && EstimatedSalary > 50000) {
        probability = 0.8;
    } else {
        probability = 0.3;
    }
    
    // Return the calculated probability
    return probability;
}

function digital_integration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability of digital_integration based on the input parameters
    let probability = 0.5; // Starting with a base probability

    // Adjusting the probability based on various factors
    if (CreditScore > 600) {
        probability += 0.2; // Higher credit score increases the probability
    }

    if (Geography === 'Germany') {
        probability += 0.1; // Customers from Germany may have higher digital integration
    }

    if (Age < 40) {
        probability += 0.1; // Younger customers may be more inclined towards digital integration
    }

    if (NumOfProducts === 1 && IsActiveMember === 1) {
        probability += 0.15; // Active members with fewer products may appreciate digital convenience
    }

    // Adjusting probability based on other parameters...

    // Returning the computed probability
    return probability;
}

function cultural_relevance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that customers from certain geographical regions might have different cultural sensitivities
    let geographicFactor = 0;
    if (Geography === 'France') {
        geographicFactor = 0.2;
    } else if (Geography === 'Spain') {
        geographicFactor = 0.15;
    } else if (Geography === 'Germany') {
        geographicFactor = 0.1;
    }

    // We can also consider the Gender as a factor in cultural relevance
    let genderFactor = 0;
    if (Gender === 'Male') {
        genderFactor = 0.05;
    } else if (Gender === 'Female') {
        genderFactor = 0.1;
    }

    // Age factor - younger customers might be more sensitive to cultural relevance in marketing
    let ageFactor = 0.1 * (1 - (Age / 100)); 

    // Credit score and balance can influence how much a customer values cultural relevance in communication
    let creditAndBalanceFactor = (CreditScore / 1000) + (Balance / 100000);

    // Assuming that active members of the bank might be less sensitive to cultural relevance
    let activeMemberFactor = IsActiveMember ? -0.1 : 0;

    // Combine and adjust factors to be within 0 to 1 range
    let culturalRelevanceProbability = (geographicFactor + genderFactor + ageFactor + creditAndBalanceFactor + activeMemberFactor) / 2;
    culturalRelevanceProbability = Math.min(1, culturalRelevanceProbability);
    culturalRelevanceProbability = Math.max(0, culturalRelevanceProbability);

    return culturalRelevanceProbability;
}

function product_diversification(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of product diversification based on the parameters
    let probability = 0;

    // Use the parameters to make assumptions and calculate the probability
    // For example, you can consider higher NumOfProducts and IsActiveMember indicating higher probability
    // Similarly, higher EstimatedSalary and balanced Gender distribution might increase the probability

    // After performing relevant calculations, update the probability variable

    return probability;
}

function customer_demographics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given customer demographics information
  let probability = 0.5; // Placeholder probability calculation
  
  // Perform actual probability calculation based on the input parameters
  // (Your custom probability calculation logic goes here)

  return probability;
}

function renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculation based on parameters to estimate the probability of effective and timely renewal reminders reducing customer churn rates
    let probability = 0.5; // Placeholder value, replace with actual calculation

    // Example of a simple calculation based on some of the parameters
    if (Age > 40 && CreditScore > 500 && IsActiveMember == 1 && Balance > 0) {
        probability = 0.8;
    } else {
        probability = 0.3;
    }

    return probability;
}

function product_badges_and_certifications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that customers with higher credit scores are more likely to have industry-recognized badges and certifications
    let creditScoreInfluence = CreditScore / 1000;

    // Customers from certain geographies might have higher access to industry-recognized badges and certifications
    // Let's say customers from Germany have a higher probability
    let geographyInfluence = Geography === 'Germany' ? 0.3 : 0;

    // Younger customers might have more recent certifications, so age could be a factor
    let ageInfluence = (1 - (Age / 100)) * 0.2;

    // Active members might be more interested in updating their certifications
    let activityInfluence = IsActiveMember * 0.1;

    // Combining the influences into the final probability
    let probability = 0.1 + creditScoreInfluence + geographyInfluence + ageInfluence + activityInfluence;
    
    return probability;
}

function personalized_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // We can calculate the probability of providing personalized recommendations may lead to increased customer retention based on various factors such as CreditScore, Age, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary.
    // We can use a logistic regression approach to compute the probability based on these factors.
    
    // For demonstration purposes, let's calculate a simple probability score based on the given parameters.
    let probability = 0.3; // Placeholder value for demonstration
    
    // Perform some calculations based on the input parameters to adjust the probability score
    
    // Return the computed probability
    return probability;
}

function customer_feedback_gathering(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that customers with higher credit scores are more likely to provide valuable feedback
    let creditScoreImpact = CreditScore / 1000; 

    // Customers who actively use their products are more likely to provide feedback
    let activeMemberImpact = IsActiveMember * 0.5;

    // Customers with higher estimated salaries might have higher expectations and provide feedback
    let salaryImpact = EstimatedSalary / 100000;

    // Geography and gender may also play a role. Let's assume that customers from certain countries and genders are more likely to give feedback.
    // We can assign some values to different geographies and genders, then calculate their impact on feedback

    // Age could also be a factor, let's assume that older customers are more likely to provide feedback
    let ageImpact = (Age - 30) / 100;

    // Now let's combine all these factors to calculate the overall probability
    let probability = 0.2 + creditScoreImpact + activeMemberImpact + salaryImpact + ageImpact;

    // Since the probability cannot exceed 1, let's make sure it's within the bounds
    probability = Math.min(1, probability);
    probability = Math.max(0, probability);

    return probability;
}

function brand_partnerships(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;
  
  // Calculating probability based on CreditScore
  if (CreditScore > 700) {
    probability += 0.2;
  } else if (CreditScore > 600) {
    probability += 0.1;
  } else if (CreditScore > 500) {
    probability += 0.05;
  }
  
  // Adjusting probability based on Geography
  if (Geography === "Spain") {
    probability += 0.1;
  } else if (Geography === "France") {
    probability += 0.05;
  } else if (Geography === "Germany") {
    probability += 0.05;
  }
  
  // Considering Age as a factor
  if (Age > 25 && Age < 40) {
    probability += 0.1;
  } else if (Age >= 40 && Age < 60) {
    probability += 0.15;
  } else if (Age >= 60) {
    probability += 0.05;
  }
  
  // Incorporating IsActiveMember and EstimatedSalary
  if (IsActiveMember === 1) {
    probability += 0.1;
  }
  if (EstimatedSalary > 150000) {
    probability += 0.1;
  }
  
  // Handling the rest of the parameters
  if (NumOfProducts >= 2) {
    probability += 0.05;
  }
  if (Tenure > 5) {
    probability += 0.05;
  }
  if (HasCrCard === 1) {
    probability += 0.05;
  }
  
  return probability;
}

function family_plan_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher credit score are more likely to opt for family plan options
  let creditScoreImpact = Math.min(CreditScore / 1000, 1);

  // Assuming that customers from certain geographies are more likely to opt for family plan options
  let geographyImpact = Geography === 'Spain' ? 0.75 : 0.5;

  // Assuming that older customers are more likely to opt for family plan options
  let ageImpact = Math.min(Age / 100, 1);

  // Assuming that active members are more likely to opt for family plan options
  let activeMemberImpact = IsActiveMember === 1 ? 0.8 : 0.3;

  // Combining the impacts to compute the probability
  let probability = (creditScoreImpact + geographyImpact + ageImpact + activeMemberImpact) / 4;

  return probability;
}

function customer_success_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given input parameters
    // For example, we can calculate the probability based on CreditScore, Age, Tenure, IsActiveMember, and any other relevant factors.

    // Here is a sample calculation (not a real model, just a placeholder example):
    let probability = (CreditScore + Age + Tenure) / (NumOfProducts * Balance) * 100;

    // Return the probability
    return probability;
}

function consolidated_billing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with higher credit score are more likely to consolidate billing
  let creditScoreProbability = CreditScore / 1000;

  // Assume that customers with more products are less likely to churn, hence more likely to consolidate billing
  let numOfProductsProbability = 1 - (NumOfProducts / 10);

  // Assume that younger customers are less likely to churn, hence more likely to consolidate billing
  let ageProbability = 1 - (Age / 100);

  // Assume that customers with higher tenure are more likely to consolidate billing
  let tenureProbability = Tenure / 10;

  // Calculate the overall probability based on the assumptions
  let overallProbability = (creditScoreProbability + numOfProductsProbability + ageProbability + tenureProbability) / 4;

  // Return the calculated probability
  return overallProbability;
}

function accessibility_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Incorporating accessibility features in the product or service can positively impact customer retention.
  
  // Let's assume that customers with higher credit score are more likely to value accessibility features
  let creditScoreImpact = CreditScore / 1000;

  // Customers in certain geographies may have a higher awareness and appreciation for accessibility features
  let geographyImpact = Geography === "France" ? 0.1 : 0;

  // Younger customers may appreciate and benefit more from accessibility features
  let ageImpact = Age < 30 ? 0.2 : 0;

  // Customers with more products may be more loyal, and accessibility features can increase loyalty
  let productsImpact = NumOfProducts * 0.05;

  // Active members are more likely to engage with new features, including accessibility features
  let activeMemberImpact = IsActiveMember === 1 ? 0.1 : 0;

  // Calculating the overall impact based on the provided parameters
  let probability = creditScoreImpact + geographyImpact + ageImpact + productsImpact + activeMemberImpact;

  return probability;
}

function customer_communication_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume higher credit score leads to higher retention rates
  let creditScoreEffect = CreditScore / 1000;

  // Assume older age leads to higher retention rates
  let ageEffect = Age / 100;

  // Assume customers with more products are more likely to have personalized communication and thus higher retention
  let numOfProductsEffect = NumOfProducts * 0.1;

  // Assume active members are more likely to appreciate personalized communication, leading to higher retention
  let isActiveMemberEffect = IsActiveMember * 0.2;

  // Combine all the effects to calculate the probability
  let probability = (creditScoreEffect + ageEffect + numOfProductsEffect + isActiveMemberEffect) / 4;

  return probability;
}

function mobile_app_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Since engaged customers are likely to use the app often, let's consider the frequency of app usage
    let appUsageProbability = 1.0; // Assume the customer uses the app frequently

    // Engaged customers may have higher satisfaction, so let's consider satisfaction based on tenure, balance, and credit score
    let satisfactionProbability = (1.0 - (Tenure / 10)) * (1.0 - (Balance / 100000)) * (CreditScore / 1000);

    // Active members might be more engaged, so let's consider the probability of being an active member
    let activeMemberProbability = IsActiveMember;

    // Based on the given parameters, calculate the overall probability of mobile app engagement
    let mobileAppEngagementProbability = appUsageProbability * satisfactionProbability * activeMemberProbability;

    return mobileAppEngagementProbability;
}

function remote_support_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of Providing effective remote support services reducing customer churn based on the input parameters

  // Sample Code for demonstration only, the actual calculation should be based on specific criteria and data analysis
  let probability = 0.75; // Placeholder value, actual calculation should replace this

  // Return the calculated probability
  return probability;
}

function customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the base probability
  let baseProbability = 0.5;

  // Adjust the probability based on the input parameters
  if (CreditScore > 700) {
    baseProbability += 0.1;
  }
  if (Geography === 'France') {
    baseProbability += 0.05;
  }
  if (Age < 30) {
    baseProbability += 0.1;
  }
  if (NumOfProducts > 1) {
    baseProbability += 0.05;
  }
  if (IsActiveMember === 1) {
    baseProbability += 0.1;
  }

  // Return the calculated probability
  return baseProbability;
}

function product_cost_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher credit score are more likely to appreciate transparent pricing and cost breakdowns
    let creditScoreFactor = CreditScore / 1000;

    // Assume that customers from certain geographies may value transparent pricing more than others
    let geographyFactor = 0;
    if (Geography === "Spain") {
        geographyFactor = 0.2;
    } else if (Geography === "France") {
        geographyFactor = 0.1;
    }

    // Assume that active members are more likely to appreciate transparent pricing
    let activeMemberFactor = IsActiveMember === 1 ? 0.1 : 0;

    // Assume that older customers are more likely to appreciate transparent pricing
    let ageFactor = Age / 100;

    // Assume that balance and number of products do not have a significant impact on customer retention
    let otherFactors = 0.05;

    // Calculate the probability considering the factors
    let probability = creditScoreFactor + geographyFactor + activeMemberFactor + ageFactor + otherFactors;

    return probability;
}

function Ethical_business_practices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering various factors, calculate the probability of ethical business practices affecting customer retention
    let probability = 0.65; // Placeholder value, the probability should be computed based on the provided parameters

    // Use the parameters to compute the probability of ethical business practices affecting customer retention

    return probability;
}

function Ease_of_upgrades(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some business logic to calculate the probability based on the input parameters
    let probability = 0.5; // For demonstration, you can calculate the actual probability based on the input parameters
    
    // You can use a combination of input parameters to calculate the probability
    if (Geography === 'Spain' && Age < 40 && CreditScore > 700 && IsActiveMember === 1) {
        probability = 0.8;
    } else {
        probability = 0.3;
    }

    return probability;
}

function Personalized_onboarding_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of personalized onboarding experience based on the input parameters

    let probability = 0;

    // Use CreditScore, Geography, Age, NumOfProducts, IsActiveMember, EstimatedSalary to compute the probability
    // Higher CreditScore, younger Age, higher EstimatedSalary, lower NumOfProducts, and active membership could contribute to a higher probability of personalized onboarding experience

    // Example calculation (not actual probability calculation)
    probability = 1 - (CreditScore/1000) + (Age/100) + (EstimatedSalary/100000) + (IsActiveMember ? 0.1 : 0) - (NumOfProducts * 0.05);
    
    return probability;
}

function Industry_expertise(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Default probability

  // Example: If the customer's credit score is high, increase the probability
  if (CreditScore > 700) {
    probability += 0.2;
  }

  // Example: If the customer is from Germany, increase the probability
  if (Geography === "Germany") {
    probability += 0.15;
  }

  // Example: If the customer's age is below 35, increase the probability
  if (Age < 35) {
    probability += 0.1;
  }

  // Example: If the customer has been with the company for more than 5 years, increase the probability
  if (Tenure > 5) {
    probability += 0.1;
  }

  // Example: If the customer's balance is high, increase the probability
  if (Balance > 100000) {
    probability += 0.15;
  }

  // Example: If the customer is an active member, increase the probability
  if (IsActiveMember === 1) {
    probability += 0.1;
  }

  // Example: If the customer's estimated salary is high, increase the probability
  if (EstimatedSalary > 100000) {
    probability += 0.2;
  }

  // Return the calculated probability
  return probability;
}

function Accessibility_for_people_with_disabilities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating probability based on the parameters
    let probability = 0.5; // Placeholder value, actual calculation based on input parameters needed

    // Actual calculation based on input parameters to determine the probability

    return probability;
}

function Consumption_based_pricing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0;

  // Example calculation:
  if (CreditScore > 650 && Age > 25 && IsActiveMember === 1) {
    probability = 0.7;
  } else {
    probability = 0.3;
  }

  return probability;
}

function Community_support_and_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Age factor: Younger customers might be more actively engaged in community initiatives
  const ageFactor = 1 - (Age / 100);

  // Credit score factor: Higher credit score may indicate responsible behavior, leading to higher engagement
  const creditScoreFactor = CreditScore / 1000;

  // Geographic factor: Certain regions might have a stronger community support culture
  let geographyFactor = 0;
  if (Geography === 'Germany') {
    geographyFactor = 0.2;
  } else if (Geography === 'France') {
    geographyFactor = 0.1;
  } else if (Geography === 'Spain') {
    geographyFactor = 0.05;
  } else {
    geographyFactor = 0;
  }

  // Gender factor: Assuming equal engagement probability for both genders
  const genderFactor = 0.5;

  // Tenure factor: Longer tenure might indicate loyalty and higher likelihood of community engagement
  const tenureFactor = Tenure / 10;

  // Balance factor: Higher balance might indicate financial stability, leading to higher engagement
  const balanceFactor = Balance / 100000;

  // Active member factor: Active members are more likely to engage with community support initiatives
  const activeMemberFactor = IsActiveMember ? 0.3 : 0;

  // Total probability calculation
  const totalProbability = (ageFactor + creditScoreFactor + geographyFactor + genderFactor + tenureFactor + balanceFactor + activeMemberFactor) / 7;

  return totalProbability;
}

function Transparent_terms_and_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with higher CreditScore are more likely to read and understand the terms and conditions
    let creditScoreFactor = CreditScore / 1000;

    // Considering that younger customers might be more tech-savvy and prefer clear and transparent terms
    let ageFactor = 1 - (Age / 100);

    // Taking into account that customers who have been with the company for a longer tenure are more likely to value transparency
    let tenureFactor = Tenure / 10;

    // Customers with fewer products might be more likely to read and understand terms and conditions
    let productsFactor = 1 - (NumOfProducts / 4);

    // Considering geography, assuming that customers from certain regions might value clear and transparent terms more than others
    let geographyFactor = (Geography === 'France') ? 0.8 : 0.5;

    // Combining all factors to calculate the probability
    let probability = (creditScoreFactor + ageFactor + tenureFactor + productsFactor + HasCrCard + IsActiveMember + geographyFactor) / 7;

    return probability;
}

function Data_portability_and_interoperability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with higher CreditScore are more likely to value data portability and interoperability
    const creditScoreFactor = CreditScore / 1000;

    // Customers from certain Geography might be more likely to appreciate data portability and interoperability
    let geographyFactor = 1;
    if (Geography === 'Germany') {
        geographyFactor = 1.2;
    }

    // Younger customers may be more tech-savvy and value data portability and interoperability
    const ageFactor = 1 - (Age / 100);

    // Customers with higher balances may be more invested in the service and value data portability and interoperability
    const balanceFactor = Balance / 100000;

    // Considering that active members are more engaged and might perceive data portability and interoperability positively
    let activityFactor = 1;
    if (IsActiveMember === 1) {
        activityFactor = 1.1;
    }

    // Combining the factors to calculate the probability
    const probability = (creditScoreFactor * geographyFactor * ageFactor * balanceFactor * activityFactor) / 5;

    return probability;
}

function Referral_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with a high CreditScore are more likely to actively participate in referral programs
  let creditScoreProbability = CreditScore >= 700 ? 0.8 : 0.2;

  // Assuming that customers who are active members are more likely to refer new users
  let activeMemberProbability = IsActiveMember === 1 ? 0.7 : 0.3;

  // Assuming that older customers are more likely to have a network of potential new users
  let ageProbability = Age > 40 ? 0.6 : 0.4;

  // Assuming that customers with a higher balance are more likely to participate in referral programs
  let balanceProbability = Balance > 5000 ? 0.7 : 0.3;

  // Assuming that customers in certain geographic regions have more potential new users to refer
  let geographyProbability = Geography === 'Spain' ? 0.6 : 0.4;

  // Assuming that customers with more than one product are more likely to bring in new users
  let productsProbability = NumOfProducts > 1 ? 0.7 : 0.3;

  // Assuming that customers with a higher estimated salary are more likely to be motivated to refer new users
  let salaryProbability = EstimatedSalary > 100000 ? 0.8 : 0.2;

  // Combine all the probabilities to calculate the final Referral Program Probability
  let referralProgramProbability = creditScoreProbability * activeMemberProbability * ageProbability * balanceProbability * geographyProbability * productsProbability * salaryProbability;

  return referralProgramProbability;
}

function Inclusivity_and_diversity_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some random weight coefficients
  const w1 = 0.05; // Weight for CreditScore
  const w2 = 0.1;  // Weight for Age
  const w3 = 0.15; // Weight for Balance
  const w4 = 0.1;  // Weight for NumOfProducts
  const w5 = 0.05; // Weight for IsActiveMember
  const w6 = 0.1;  // Weight for EstimatedSalary
  const w7 = 0.2;  // Weight for Geography
  const w8 = 0.15; // Weight for Gender

  // Placeholder for transforming Geography and Gender to numerical values
  let geoValue = 0;
  if (Geography === "France") {
    geoValue = 1;
  } else if (Geography === "Germany") {
    geoValue = 2;
  } else if (Geography === "Spain") {
    geoValue = 3;
  }

  let genderValue = 0;
  if (Gender === "Male") {
    genderValue = 1;
  } else if (Gender === "Female") {
    genderValue = 2;
  }

  // Calculating the probability based on the given input parameters
  const probability = w1*CreditScore + w2*Age + w3*Balance + w4*NumOfProducts + w5*IsActiveMember + w6*EstimatedSalary + w7*geoValue + w8*genderValue;

  return probability;
}

function Personal_finance_management_tools(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming customers with higher credit score are more likely to be financially responsible
  let creditScoreInfluence = CreditScore / 1000;

  // Assuming older customers are more likely to be interested in personal finance management
  let ageInfluence = Age / 100;

  // Assuming customers with more products are more engaged and likely to stay
  let productsInfluence = NumOfProducts / 4;

  // Assuming customers with higher balance are more likely to be interested in financial services
  let balanceInfluence = Balance / 50000;

  // Assuming active members are more likely to engage with personal finance management tools
  let activityInfluence = IsActiveMember * 0.5;

  // Calculating the overall probability based on the influences
  let probability = (creditScoreInfluence + ageInfluence + productsInfluence + balanceInfluence + activityInfluence) / 5;

  return probability;
}

function Cybersecurity_measures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher credit score have a higher probability of cybersecurity measures
    let creditScoreProbability = CreditScore / 1000;

    // Assume that customers from certain geographies have higher awareness and demand for strong cybersecurity measures
    let geographyProbability = (Geography === 'France' || Geography === 'Germany') ? 0.8 : 0.5;

    // Assume that older customers have a higher probability of valuing strong cybersecurity measures
    let ageProbability = (Age > 35) ? 0.7 : 0.3;

    // Assume that customers with higher balance and estimated salary have a higher probability of valuing cybersecurity measures
    let financialProbability = (Balance + EstimatedSalary) / 250000;

    // Calculating the overall probability based on the factors
    let overallProbability = (creditScoreProbability + geographyProbability + ageProbability + financialProbability) / 4;

    // Return the calculated probability
    return overallProbability;
}

function Innovative_technology_adoption(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Let's start by calculating the probability based on the given parameters.
    let probability = 0.5; // Default probability
    
    // We can consider CreditScore, Age, Balance, NumOfProducts, HasCrCard, and IsActiveMember for calculating the probability.
    
    // Let's say having a CreditScore above 700 increases the probability.
    if (CreditScore > 700) {
        probability += 0.2;
    }
    
    // Younger age might indicate openness to innovative technology.
    if (Age < 30) {
        probability += 0.1;
    }
    
    // Higher balance might also indicate higher adoption of technology.
    if (Balance > 100000) {
        probability += 0.2;
    }
    
    // Having multiple products could indicate openness to new technologies.
    if (NumOfProducts > 1) {
        probability += 0.15;
    }
    
    // If the customer is an active member, they might be more inclined to adopt innovative technologies.
    if (IsActiveMember === 1) {
        probability += 0.2;
    }
    
    // Now let's return the calculated probability.
    return probability;
}

function Social_impact_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Compute the probability based on given parameters
  // For example, we can calculate the probability based on the customer's age, geography, and tenure

  let probability = 0.5; // Placeholder probability calculation

  // Perform actual probability calculation based on the parameters

  if (Geography === 'France' && IsActiveMember === 1.0 && Age > 30) {
    probability = 0.7; // Higher probability for active members in France with age over 30
  } else {
    probability = 0.3; // Lower probability for other cases
  }

  return probability;
}

function Local_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability of local community involvement positively impacting customer retention based on the given parameters

  // We can consider Geography as a factor, giving more weight to locations where community involvement is more common
  let geographyImpact = 0;
  if (Geography === 'Germany') {
    geographyImpact = 0.3;
  } else if (Geography === 'France') {
    geographyImpact = 0.2;
  } else if (Geography === 'Spain') {
    geographyImpact = 0.1;
  } else {
    geographyImpact = 0.05;
  }

  // Age can also have an impact, as older customers might be more involved in local community activities
  let ageImpact = 0;
  if (Age > 30) {
    ageImpact = 0.1;
  }

  // We can also consider the number of products the customer has, assuming that more products indicate a more engaged customer
  let productsImpact = NumOfProducts * 0.05;

  // Finally, the balance in the account might also indicate the customer's potential involvement in the local community
  let balanceImpact = Balance * 0.000001;

  // Calculate the total probability based on the combined impacts
  let totalProbability = geographyImpact + ageImpact + productsImpact + balanceImpact;

  // Return the calculated probability
  return totalProbability;
}

function Psychological_pricing_strategies(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the given parameters
  let probability = 0;

  // Assuming that younger customers are more likely to be influenced by psychological pricing
  if (Age < 40) {
    probability += 0.2;
  }

  // Taking into account the customer's credit score
  if (CreditScore > 700) {
    probability += 0.3;
  }

  // Considering if the customer is an active member
  if (IsActiveMember === 1) {
    probability += 0.1;
  }

  // Factoring in the number of products the customer has
  if (NumOfProducts === 1) {
    probability += 0.15;
  }

  // If the customer has a credit card, adding to the probability
  if (HasCrCard === 1) {
    probability += 0.1;
  }

  // Considering other parameters to calculate the final probability
  probability += Math.random() * 0.05;

  return probability;
}

function Digital_transformation_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // calculate the probability based on the input parameters
  let probability = 0.5; // default probability
  
  // Example calculation:
  if (CreditScore > 600 && Age > 25 && NumOfProducts > 1) {
    probability = 0.7;
  } else {
    probability = 0.4;
  }
  
  return probability;
}

function Regulatory_compliance_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that regulatory compliance transparency positively influences customer retention by 10% for each factor that indicates good customer behavior
    
    let customerBehaviorFactor = 0;
    if (CreditScore > 700) {
        customerBehaviorFactor += 0.1;
    }
    if (Age > 25 && Age < 35) {
        customerBehaviorFactor += 0.1;
    }
    if (NumOfProducts === 1 && HasCrCard && IsActiveMember) {
        customerBehaviorFactor += 0.1;
    }
    
    let regulatoryComplianceInfluence = 0.03 * customerBehaviorFactor; // Assuming that each factor contributes to 3% increase in influence
    
    return regulatoryComplianceInfluence;
}

function Artificial_intelligence_and_machine_learning_integration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's do some creative computation based on the given parameters
  let probability = 0.5;

  if (Age < 30 && CreditScore > 600) {
    probability += 0.2;
  }

  if (Geography === 'France') {
    probability += 0.1;
  }

  if (NumOfProducts > 1) {
    probability -= 0.1;
  }

  if (EstimatedSalary > 100000) {
    probability += 0.15;
  }

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitive_pricing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + loyalty_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + communication_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitive_advantages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + user_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + economic_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + satisfaction_with_previous_provider(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + incentive_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + social_proof(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + account_activity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + subscription_bundle(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + educational_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + market_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + digital_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + spending_habits(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + family_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + promotional_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + billing_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + reliability_of_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_switching_costs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + ease_of_cancellation_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_leadership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_service_response_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_customization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_image(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + general_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + peer_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + rewards_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_acquisition_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + ease_of_use(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + security_and_privacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + emotional_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_customer_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_advocacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + voice_of_customer_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + cross_selling_strategies(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + data_security_compliance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_terms(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + add_on_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_experience_consistency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + environmental_consciousness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + response_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + digital_integration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + cultural_relevance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_diversification(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_demographics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_badges_and_certifications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personalized_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feedback_gathering(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_partnerships(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + family_plan_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_success_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + consolidated_billing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + accessibility_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_communication_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + mobile_app_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + remote_support_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_cost_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Ethical_business_practices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Ease_of_upgrades(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Personalized_onboarding_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Industry_expertise(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Accessibility_for_people_with_disabilities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Consumption_based_pricing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Community_support_and_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Transparent_terms_and_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Data_portability_and_interoperability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Referral_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Inclusivity_and_diversity_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Personal_finance_management_tools(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Cybersecurity_measures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Innovative_technology_adoption(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Social_impact_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Local_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Psychological_pricing_strategies(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Digital_transformation_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Regulatory_compliance_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Artificial_intelligence_and_machine_learning_integration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    