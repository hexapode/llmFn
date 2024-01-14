
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers (age < 30) are less committed to long-term relationships
  // and are more likely to churn
  let probabilityOfChurning = 0;
  
  if (Age < 30) {
    probabilityOfChurning = 0.6; // Arbitrary high probability for younger customers
  } else if (Age >= 30 && Age < 40) {
    probabilityOfChurning = 0.4; // Moderate probability for customers in their 30s
  } else if (Age >= 40 && Age < 50) {
    probabilityOfChurning = 0.3; // Slightly lower probability for customers in their 40s
  } else {
    probabilityOfChurning = 0.2; // Lowest probability for customers above 50
  }

  return probabilityOfChurning;
}

function monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of monthly usage based on given parameters
    // You can use the parameters to compute the probability, for example, you can consider Age, Tenure, and IsActiveMember to estimate the likelihood of monthly usage
    // Let's assume that the probability of monthly usage increases with Age and Tenure, and decreases if the customer is not an active member

    let ageFactor = Age / 100; // Assuming that older customers are more likely to use the service monthly
    let tenureFactor = Tenure / 10; // Assuming that customers with longer tenure are more likely to use the service monthly
    let activeMemberFactor = IsActiveMember === 1.0 ? 1 : 0.5; // Assuming that active members are more likely to use the service monthly

    let probability = (ageFactor + tenureFactor) * activeMemberFactor;
    
    return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by defining some factors that may indicate frequent interactions with customer support
  let supportInteractionsProbability = 0;

  // One possible factor indicating frequent interactions with customer support is having a low credit score
  if (CreditScore < 600) {
    supportInteractionsProbability += 0.3; // assuming a significant impact on the probability
  }

  // Another factor could be having a high number of products, indicating potential complexity and need for support
  if (NumOfProducts > 2) {
    supportInteractionsProbability += 0.2; // assuming a moderate impact on the probability
  }

  // Active members are less likely to interact frequently with customer support
  if (IsActiveMember === 0) {
    supportInteractionsProbability += 0.2; // assuming an impact on the probability
  }

  // Balance could be an indicator, as customers with low balance might have more inquiries
  if (Balance < 100) {
    supportInteractionsProbability += 0.1; // assuming a minor impact on the probability
  }

  // Gender and Geography might not directly impact support interactions, so we'll skip those

  // Age could also be a factor, with younger customers potentially needing more support
  if (Age < 30) {
    supportInteractionsProbability += 0.1; // assuming a minor impact on the probability
  }

  // Let's now return the final probability for customer support interactions
  return supportInteractionsProbability;
}

function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering the tenure as a factor, we can calculate the probability by assuming that the longer the tenure, the less likely the customer is to churn
    // We can create a formula to map tenure to probability, for example, probability = 1 / (1 + e^(-0.1 * tenure))

    const probability = 1 / (1 + Math.exp(-0.1 * Tenure));
    
    return probability;
}

function billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the given parameters, we can calculate the probability of billing issues
  let probability = 0;

  // Calculate the probability based on the given parameters
  // For example, we can use a combination of credit score, tenure, balance, and estimated salary to compute the probability

  probability = (CreditScore / 1000) * (Tenure / 10) * (Balance / 100000) * (EstimatedSalary / 200000);

  // Return the calculated probability
  return probability;
}

function competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some complex calculations based on the input parameters to determine the probability
  let probability = 0.5; // Placeholder value, replace this with actual calculated probability
  // Your complex calculations here...

  return probability;
}

function customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with lower CreditScore and higher Age are more likely to have lower satisfaction scores
    let creditScoreImpact = 1 - (CreditScore / 1000);
    let ageImpact = Age / 100;

    // Assume that customers with higher Balance and higher EstimatedSalary are more likely to have higher satisfaction scores
    let balanceImpact = Balance / 100000;
    let salaryImpact = EstimatedSalary / 200000;

    // Calculate the overall impact based on the assumptions
    let overallImpact = creditScoreImpact + ageImpact - balanceImpact - salaryImpact;

    // Normalize the overall impact to be between 0 and 1
    let normalizedImpact = (overallImpact + 2) / 4;

    // Return the probability of lower customer satisfaction scores
    return normalizedImpact;
}

function usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the input parameters
  let probability = 0;

  // Age and Tenure - Younger age and shorter tenure might indicate irregular or declining usage
  if (Age < 30 && Tenure < 3) {
    probability += 0.3;
  }

  // CreditScore and Balance - Lower credit score and higher balance might indicate waning interest
  if (CreditScore < 600 && Balance > 100000) {
    probability += 0.4;
  }

  // IsActiveMember - Inactive members may have higher probability of churning
  if (IsActiveMember === 0) {
    probability += 0.2;
  }

  // NumOfProducts - Higher number of products may indicate more engagement
  if (NumOfProducts === 1) {
    probability += 0.1;
  }

  // HasCrCard - Having a credit card might indicate some level of commitment
  if (HasCrCard === 1) {
    probability -= 0.1;
  }

  // EstimatedSalary - Lower estimated salary might indicate waning interest
  if (EstimatedSalary < 50000) {
    probability += 0.3;
  }

  return probability;
}

function product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer engagement with product updates
    // You can use a combination of the provided parameters to calculate the probability

    // For example, you can consider IsActiveMember and EstimatedSalary as indicators of customer engagement
    let engagementProbability = 0;

    if (IsActiveMember === 1.0) {
        // If the customer is an active member, increase the engagement probability
        engagementProbability += 0.2;
    }

    if (EstimatedSalary > 100000) {
        // If the estimated salary is high, increase the engagement probability
        engagementProbability += 0.1;
    }

    // You can also consider other factors such as age, tenure, and credit score to adjust the probability

    // Finally, return the calculated probability
    return engagementProbability;
}

function customer_relationship_duration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer churn based on the customer relationship duration
  // Use the provided parameters to compute the probability
  
  // For example, you can consider the tenure of the customer as a key factor in determining the probability of churn
  // Customers with longer tenure may be less likely to churn
  // You can calculate the probability based on the tenure and other parameters
  
  // Sample calculation (this is just an example and not based on any specific model or research)
  let probability = 1 - (0.05 * Tenure); // Assuming a linear relationship between tenure and churn probability
  
  // Return the computed probability
  return probability;
}

function payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the parameters provided, compute the probability of payment_method influencing churn
  // You may consider factors such as frequency of changes in payment method, customer's demographics, credit score, account balance, and other relevant variables to compute the probability
  // Implement your computation here

  // Example: random computation for demonstration purposes
  let probability = (CreditScore * Age) / (Balance + 1); // This is a simplified random computation

  return probability;
}

function number_of_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define a formula to calculate the probability of customer churn based on the given parameters
    // This can be based on historical data or domain knowledge
    let churnProbability = 0;
    
    // Example: If the customer has submitted a high number of complaints and has a low credit score, the probability of churn may increase
    if (NumOfProducts > 1 && CreditScore < 600) {
        churnProbability = 0.8;
    } else {
        // If none of the specific conditions are met, the default churn probability can be set
        churnProbability = 0.2;
    }
    
    // Return the calculated churn probability
    return churnProbability;
}

function household_income(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that higher CreditScore, Age, and EstimatedSalary indicate higher household income
    // and lower sensitivity to price changes or competitive offers
    let probability = 0;

    if (CreditScore > 700 && Age > 40 && EstimatedSalary > 100000) {
        probability = 0.8; // High probability of lower churn rates
    } else if (CreditScore > 600 && Age > 30 && EstimatedSalary > 80000) {
        probability = 0.6; // Moderate probability of lower churn rates
    } else {
        probability = 0.4; // Lower probability of lower churn rates
    }

    return probability;
}

function subscription_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0;
    
    // Higher credit score may indicate a higher likelihood of commitment to a subscription plan
    if (CreditScore > 700) {
        probability += 0.3;
    }
    
    // Being an active member may indicate commitment to the additional features and benefits
    if (IsActiveMember === 1) {
        probability += 0.2;
    }
    
    // Number of products may also influence commitment to the plan
    if (NumOfProducts > 1) {
        probability += 0.1;
    }
    
    // Gender, age, tenure, balance, geography, and other parameters can also contribute to the probability
    // Perform calculations based on specific patterns or assumptions
    
    // Return the calculated probability
    return probability;
}

function service_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given input parameters
  let probability = 0;
  
  // You can implement a complex algorithm here to calculate the probability based on the input parameters
  
  // For example, you can use a decision tree or mathematical model to determine the probability
  
  // Return the calculated probability
  return probability;
}

function customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  // ... (Your creative and calculation-based solution here)

  // Return the computed probability
  return 0.35; // Placeholder value, replace with actual calculated probability
}

function contract_renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of Customers who receive and engage with contract renewal reminders may be less likely to churn
    let probability = 0.0;

    // Use the given parameters to perform calculations
    // You can consider factors like CreditScore, Age, Geography, and IsActiveMember to calculate the probability

    // Example: 
    // If the customer has a higher CreditScore, the probability of engaging with contract renewal reminders may increase

    // Example:
    // If the customer is an active member, the probability of engaging with contract renewal reminders may increase

    // Combine multiple factors to calculate the overall probability

    return probability;
}

function marketing_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters

  // Example calculation: if the customer is an active member and has a credit score above 700, the probability could be higher
  let probability = 0.5; // placeholder value
  
  if (IsActiveMember === 1 && CreditScore > 700) {
    probability = 0.8;
  }

  return probability;
}

function peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that positive reviews from the customer's social circle influence the likelihood of churn positively
  // We can compute the probability based on various factors
  let probability = 0.5; // Initialize probability

  // Gender and Age could influence peer reviews
  if (Gender === 'Female' && Age < 40) {
    probability += 0.1; // Increase probability for positive reviews
  }

  // Active members are more likely to receive positive reviews
  if (IsActiveMember === 1) {
    probability += 0.2; // Increase probability for positive reviews
  }

  // Higher CreditScore increases the chance for positive peer reviews
  if (CreditScore > 600) {
    probability += 0.15; // Increase probability for positive reviews
  }

  // Consider other factors and adjust the probability accordingly

  return probability; // Return the computed probability
}

function loyalty_program_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // I will use a combination of CreditScore, Age, and IsActiveMember to compute the probability

  // Assuming that higher CreditScore signifies a more responsible customer, and hence more likely to participate in loyalty programs
  let creditScoreFactor = CreditScore / 1000;

  // Assuming that older customers are more likely to participate in loyalty programs
  let ageFactor = Age / 100;

  // Assuming that active members are more likely to be in a loyalty program
  let activeMemberFactor = IsActiveMember === 1 ? 0.2 : 0;

  // Combining all the factors to calculate the probability
  let probability = (creditScoreFactor + ageFactor + activeMemberFactor) / 3;

  return probability;
}

function average_usage_session_duration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering the average session duration of the customer
  // Customers with longer average session durations are deeply engaged with the service
  // Hence, they may be less likely to churn

  // The function may incorporate various customer behavior metrics to calculate the likelihood of churn based on average session duration
  // For example, it could analyze historical usage patterns, engagement levels, and customer interaction frequency

  // Since we do not have the actual session duration data in the input parameters, we can simulate a probability based on relevant factors
  // For simplicity, let's assume that customers with Age above 30 are more likely to have longer average session durations

  // Calculating probability based on age
  let ageFactor = 1 - (Age / 100); // Normalized age factor (0 to 1)

  // Considering other factors like IsActiveMember and NumOfProducts
  let engagementFactor = (IsActiveMember * 0.2) + (NumOfProducts * 0.1);

  // Combining factors to determine the probability
  let probability = ageFactor * 0.6 + engagementFactor * 0.4;

  return probability;
}

function customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let locationFactor = 0.5;

  // Performing calculations based on the parameters to estimate the location factor
  if (Geography === 'France') {
    locationFactor -= 0.1;
  } else if (Geography === 'Germany') {
    locationFactor += 0.2;
  } else if (Geography === 'Spain') {
    locationFactor += 0.1;
  }

  if (Age > 30 && Age < 50) {
    locationFactor -= 0.05;
  } else if (Age >= 50) {
    locationFactor += 0.1;
  }

  if (CreditScore > 700) {
    locationFactor -= 0.05;
  } else if (CreditScore < 600) {
    locationFactor += 0.1;
  }

  // Performing more calculations based on other parameters...

  return locationFactor;
}

function customer_onboarding_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your code to compute the probability based on the input parameters
  // ... (calculations, if-else statements, etc.)

  // Return the computed probability
  return computedProbability;
}

function social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate social media presence probability based on the provided parameters
  let probability = 0.5; // Default probability
  
  // Adjust probability based on relevant factors e.g. Age, IsActiveMember, EstimatedSalary, Geography, etc.
  
  if (EstimatedSalary > 100000 && IsActiveMember === 1 && Age > 25) {
    probability += 0.2; // Increase probability for higher estimated salary, active members, and older customers
  }
  
  if (Geography === 'France') {
    probability += 0.1; // Increase probability for customers in France
  }
  
  // Return the calculated probability
  return probability;
}

function website_app_performance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let performanceProbability = 0;

    // Checking if the customer has a poor credit score
    if (CreditScore < 650) {
        performanceProbability += 0.2;
    }

    // Checking if the customer's age is in a range with potential frustration
    if (Age >= 18 && Age <= 30) {
        performanceProbability += 0.1;
    } else if (Age > 30 && Age <= 40) {
        performanceProbability += 0.05;
    }

    // Checking if the customer has a high number of products
    if (NumOfProducts > 2) {
        performanceProbability += 0.1;
    }

    // Checking if the customer has a low balance, indicating potential financial stress
    if (Balance < 1000) {
        performanceProbability += 0.15;
    }

    // Checking if the customer is not an active member
    if (IsActiveMember === 0) {
        performanceProbability += 0.2;
    }

    // Checking if the estimated salary is high, which might indicate higher expectations
    if (EstimatedSalary > 100000) {
        performanceProbability += 0.1;
    }

    return performanceProbability;
}

function family_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of family_status based on the given parameters
  
  // For simplicity, let's assume that:
  // - Single customers may have higher probability of churning due to greater flexibility in making decisions without considering family priorities
  // - Married customers may have lower probability of churning as they may prioritize stability for their family
  // - Customers with children may have the lowest probability of churning as they would prioritize financial stability for their family

  // We can consider Age, NumOfProducts, and Balance as factors that may correlate with family status and influence churn

  // Example calculation - This is a simplified prediction based on the given parameters
  let probability = 0.3; // Default probability
  
  if (Age > 30 && NumOfProducts >= 2) {
    probability -= 0.1; // Adjust probability based on age and number of products
  }

  if (Balance > 10000) {
    probability += 0.2; // Adjust probability based on balance
  }

  return probability;
}

function environmental_factors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 0.5; // Assigning a default probability for demonstration

    // Perform calculations and analysis based on the parameters to adjust the probability

    return probability;
}

function customer_skill_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters provided
    let probability = 0.5; // default probability

    // Consider factors like CreditScore, Age, NumOfProducts, IsActiveMember, and EstimatedSalary to determine customer's tech-savviness and its influence on churn probability
    // Perform some calculations to determine the influence of customer's skill level on churn probability

    return probability; // return the calculated probability
}

function marketing_communication_tone(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters
    let probability = 0.5; // Placeholder value, replace with actual calculation
    
    // Perform some calculations based on the input parameters to determine the probability
    
    return probability;
}

function cross_selling_up_selling_effectiveness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability based on the given parameters
  let probability = 0.5; // Placeholder value, actual computation needed
  
  // CreditScore and Balance may indicate the customer's financial stability
  // Customers with higher CreditScore and Balance might be more open to cross-selling or up-selling
  if (CreditScore > 650 && Balance > 50000) {
    probability += 0.3;
  }

  // IsActiveMember indicates if the customer is actively using the products/services
  // Active members might be more receptive to additional offerings
  if (IsActiveMember === 1) {
    probability += 0.2;
  }

  // Gender and Age may also play a role in predicting the customer's response
  // Younger customers or a particular gender might be more open to new products/services
  // Creating specific rules for age and gender for demonstration purpose
  if (Age < 35) {
    probability += 0.1;
  }

  if (Gender === 'Female') {
    probability += 0.15;
  }

  // Considering other parameters like Geography, Tenure, NumOfProducts, etc. to further adjust the probability

  // Return the computed probability
  return probability;
}

function customer_s_purchase_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that the probability of a customer making frequent purchases is inversely proportional to their Age
    let ageFactor = 1 - (Age / 100);

    // Also, let's consider the customer's activity with the bank where having a credit card and being an active member could be indicators of frequent purchases
    let activityFactor = HasCrCard * IsActiveMember;

    // Lastly, geography may play a role as well, assuming that customers from specific regions tend to engage more
    let geographyFactor = (Geography === "France") ? 1.1 : 1;

    // We can combine these factors to compute the probability of the customer making frequent purchases
    let probability = ageFactor * activityFactor * geographyFactor;

    return probability;
}

function response_time_to_customer_queries(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with lower credit score are more likely to churn
    let creditScoreFactor = 1 - (CreditScore / 1000);
    
    // Assuming that older customers are more likely to churn
    let ageFactor = Age / 100;

    // Assuming that customers with higher tenure are less likely to churn
    let tenureFactor = 1 - (Tenure / 10);
    
    // Assuming that customers with higher balance are less likely to churn
    let balanceFactor = 1 - (Balance / 10000);

    // Combining the factors to calculate the probability of churn
    let probabilityOfChurn = (creditScoreFactor + ageFactor + tenureFactor + balanceFactor) / 4;

    // Returning the probability of churn
    return probabilityOfChurn;
}

function customer_s_preferred_communication_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering various factors to predict the probability of customer's preferred communication channel impacting churn
    let probability = 0.5; // Placeholder probability calculation

    // Implement actual calculation of probability based on the given parameters
    if (Geography === 'France' && Age > 40 && IsActiveMember === 1 && EstimatedSalary > 100000) {
        probability = 0.8;
    } else if (CreditScore > 700 && NumOfProducts === 1 && HasCrCard === 1) {
        probability = 0.6;
    } else if (Balance > 150000 && NumOfProducts > 1) {
        probability = 0.7;
    } else {
        probability = 0.4;
    }

    return probability;
}

function availability_of_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's consider different parameters to compute the probability
  // CreditScore: Lower credit score might indicate higher dependency on self-service options
  // NumOfProducts: Customers with more products might be more likely to use self-service options
  // IsActiveMember: Active members might be more inclined to use self-service options

  // Let's assume a simple linear regression model to compute the probability
  let probability = 0.2 * (CreditScore / 850) - 0.1 * NumOfProducts + 0.15 * IsActiveMember;

  // Return the computed probability
  return probability;
}

function customer_loyalty_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with VIP memberships are less likely to churn
  // Calculate the probability based on the provided parameters
  let probability = 0;

  if (CreditScore > 700 && NumOfProducts > 1 && IsActiveMember === 1 && EstimatedSalary > 150000) {
    probability = 0.8; // High probability for customers with higher loyalty status
  } else {
    probability = 0.3; // Lower probability for customers without higher loyalty status
  }

  return probability;
}

function customer_s_lifestyle_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of significant lifestyle changes impacting churn based on the input parameters
    // For example, younger customers may be more likely to relocate for job opportunities, while older customers may be more likely to retire
    
    let probability = 0;

    // Use the input parameters to calculate the probability
    if (Age < 40 && Geography === 'France' && (Balance > 100000 || EstimatedSalary > 150000)) {
        probability = 0.7; // Younger customers in France with high balance or salary are more likely to relocate for job opportunities
    } else if (Age >= 40 && Geography === 'France' && (NumOfProducts > 1 || IsActiveMember === 0)) {
        probability = 0.6; // Older customers in France with multiple products or inactive membership are more likely to consider retirement
    } else {
        probability = 0.3; // Default probability if no specific conditions are met
    }

    return probability;
}

function compliance_with_service_terms_and_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of compliance based on the given parameters
  let probability = 0.5; // Default probability

  // Adjust the default probability based on the given parameters
  if (CreditScore > 700 && Age < 40 && Tenure > 2 && NumOfProducts === 1 && HasCrCard === 1 && IsActiveMember === 1) {
    probability = 0.8; // Higher probability for customers with good credit score, young age, long tenure, and active membership
  } else if (Geography === "France" && Gender === "Female") {
    probability = 0.7; // Higher probability for female customers in France
  } else if (Balance === 0 && EstimatedSalary > 50000) {
    probability = 0.6; // Medium probability for customers with zero balance and higher estimated salary
  }

  return probability;
}

function product_customization_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of Customers who have personalized or customized their products/services may be less likely to churn
    // Baseline probability
    let probability = 0.5;
    
    // Adjust probability based on the provided parameters
    // For example, we can consider higher credit score, longer tenure, and higher balance to increase the probability
    probability += (CreditScore - 500) / 1000; // Assuming the credit score ranges from 300 to 850
    probability += Tenure / 100;
    probability += Balance / 10000;
    
    // Age might indicate different levels of interest in customized products, so we can adjust probability based on age
    if (Age >= 30 && Age <= 50) {
        probability += 0.1;
    } else if (Age > 50) {
        probability += 0.2;
    }

    // Geography might also play a role in product customization, so we can adjust probability based on geography
    if (Geography === 'Spain') {
        probability += 0.1;
    } else if (Geography === 'France') {
        probability += 0.05;
    } else {
        probability += 0.02;
    }
    
    // Other parameters such as NumOfProducts, HasCrCard, IsActiveMember, and EstimatedSalary can also be considered to adjust the probability

    // Finally, return the calculated probability
    return probability;
}

function presence_of_customer_advocates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters and any other relevant data
    // For example, look at historical data to see if customers with higher CreditScore are more likely to have relationships with customer advocates
    
    let probability = 0.0; // Placeholder value, replace with actual calculation
    
    // Perform calculations and logic to determine the probability

    return probability;
}

function customer_s_past_purchase_behavior(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some arbitrary calculations based on the given parameters to determine the probability
  let probability = 0.5; // Default probability

  if (CreditScore < 500) {
    probability += 0.2; // Credit score below 500 increases probability
  }

  if (Age > 60) {
    probability += 0.1; // Customers over 60 years old have a slightly higher probability
  }

  if (NumOfProducts > 2) {
    probability += 0.3; // Customers with more than 2 products have an increased probability
  }

  if (Balance === 0) {
    probability -= 0.2; // Customers with no balance have a slightly reduced probability
  }

  // Other conditions and calculations can be added based on the scenario

  return probability;
}

function customer_s_digital_footprint(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Sample calculations
    let probability = 0.5; // Default probability
    if (CreditScore < 600) {
        probability += 0.2; // Adjust probability based on CreditScore
    }
    if (Age > 60) {
        probability += 0.1; // Adjust probability based on Age
    }
    if (Balance === 0) {
        probability -= 0.1; // Adjust probability based on Balance
    }
    if (IsActiveMember === 0) {
        probability -= 0.15; // Adjust probability based on IsActiveMember
    }

    return probability; // Return the calculated probability
}

function community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of community involvement based on the input parameters
    // For example, you can consider factors such as customer age, gender, tenure, and active membership
    
    let probability = 0.0;

    // Age: younger customers may be more likely to be involved in the brand's community events
    if (Age < 30) {
        probability += 0.2;
    } else if (Age >= 30 && Age < 50) {
        probability += 0.1;
    }

    // Gender: female customers may be more likely to be involved in community events
    if (Gender === 'Female') {
        probability += 0.1;
    }

    // Tenure: longer tenure may indicate stronger connection to the brand community
    if (Tenure > 5) {
        probability += 0.15;
    }

    // Active membership: active members are more likely to be involved in community events
    if (IsActiveMember === 1) {
        probability += 0.25;
    }

    // Other factors such as credit score, geography, balance, etc. can also be considered

    return probability;
}

function customer_s_preferred_device(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 0.5; // Placeholder value, replace with actual calculation

    // Replace the placeholder probability value with actual calculation based on the input parameters

    return probability;
}

function health_of_the_customer_relationship(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters
  let probability = 0;

  // Use sentiment analysis, feedback, and interactions to determine the health of the customer relationship
  // ... perform some calculations based on the given parameters to derive a measure of customer sentiment, feedback, and interactions

  // Calculate the probability based on the derived measure
  // ... apply weights and thresholds to determine the probability

  return probability;
}

function customer_s_subscription_renewal_behavior(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0;

  // Sample calculation (for demonstration purposes only, not accurate)
  if (CreditScore > 600 && Age > 25 && Tenure > 1 && IsActiveMember === 1) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }

  return probability;
}

function trends_in_customer_service_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the provided parameters
    // For example, you can analyze the customer's credit score, age, and tenure to determine the likelihood of negative interactions
    
    let probability = 0.0; // Placeholder, replace with actual calculated probability
    
    // Your calculation for probability goes here
    
    return probability; // Return the calculated probability
}

function customer_s_sentiment_towards_competitors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some code to calculate the probability based on the given input parameters
  let probability = 0.0;

  // Age and Gender might influence sentiment towards competitors
  if (Gender === 'Female' && Age > 30) {
    probability += 0.2;
  } else {
    probability += 0.1;
  }

  // Higher CreditScore might indicate higher satisfaction and loyalty
  if (CreditScore > 700) {
    probability += 0.3;
  }

  // Active members might have a higher sentiment towards competitors
  if (IsActiveMember == 1) {
    probability += 0.1;
  }

  // Balance and EstimatedSalary might influence comparative satisfaction
  if (Balance > 10000 || EstimatedSalary > 100000) {
    probability += 0.2;
  }

  // Geographical location might also play a role
  if (Geography === 'Spain') {
    probability += 0.1;
  }

  return probability;
}

function availability_of_referral_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let referralProgramProbability = 0;
  
  // Considering CreditScore, Age, and EstimatedSalary as factors for referral program availability
  // Calculating probability based on the given parameters
  referralProgramProbability = (CreditScore / 1000) * (Age / 100) * (EstimatedSalary / 100000);
  
  return referralProgramProbability;
}

function accessibility_of_account_information(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's compute the probability based on the given parameters
    let probability = 0.5; // Placeholder value for probability

    // We can factor in Credit Score, Age, Tenure, Balance, NumOfProducts, and IsActiveMember to compute probability
    if (CreditScore > 700) {
        probability += 0.1; // CreditScore above 700 increases probability
    }
    if (Age > 30 && Age < 50) {
        probability += 0.15; // Customers aged between 30 and 50 may be more proactive in managing account info
    }
    if (Tenure > 5) {
        probability += 0.1; // Customers with tenure more than 5 years may have likelihood of accessing account information easily
    }
    if (Balance === 0) {
        probability -= 0.1; // Customers with zero balance may not be as active in managing their account
    }
    if (NumOfProducts === 1) {
        probability -= 0.1; // Customers with only one product might have lower engagement
    }
    if (IsActiveMember === 1) {
        probability += 0.15; // Active members tend to have higher engagement with account information
    }

    // Return the computed probability
    return probability;
}

function compatibility_with_new_technologies(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Initialize the probability
    let probability = 0;

    // CreditScore contributes to the probability of compatibility
    if (CreditScore > 650) {
        probability += 0.2;
    }

    // Geography can impact compatibility, assuming higher probability for Germany
    if (Geography === "Germany") {
        probability += 0.1;
    }

    // Age can impact compatibility, assuming younger age group have higher probability
    if (Age < 40) {
        probability += 0.15;
    }

    // Number of products can imply engagement with technology
    if (NumOfProducts > 1) {
        probability += 0.1;
    }

    // Active members are more likely to perceive compatibility
    if (IsActiveMember == 1) {
        probability += 0.1;
    }

    // EstimatedSalary contributes to the probability
    if (EstimatedSalary > 100000) {
        probability += 0.1;
    }

    // Finally, return the calculated probability
    return probability;
}

function customer_s_social_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer's social influence affecting churn
    let probability = 0;

    if (Geography === 'Spain' && NumOfProducts >= 2 && IsActiveMember === 0) {
        probability = 0.3; // Those in Spain with more than 2 products and not active members have lower churn probability
    } else if (Age >= 30 && Age <= 40 && Balance === 0) {
        probability = 0.2; // Customers aged 30-40 with zero balance may be more likely to stay due to social influence
    } else if (CreditScore > 600 && EstimatedSalary > 50000) {
        probability = 0.4; // Higher credit score and estimated salary may indicate social influence
    } else {
        probability = 0.1; // Default probability
    }

    return probability;
}

function availability_of_customer_retention_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the parameters provided, let's make a simple calculation to determine the probability of availability of customer retention offers.
    let probability = 0.5; // Default probability

    // You can use more advanced calculations based on the input parameters to refine the probability.

    if (Geography === 'Germany' && CreditScore > 650 && Age > 30 && Balance > 100000 && NumOfProducts >= 2) {
        probability = 0.8;  // If the customer is from Germany, has good credit score, age over 30, high balance and has multiple products, probability increases
    }

    if (IsActiveMember === 1) {
        probability *= 1.2;  // If the customer is an active member, probability increases
    }

    // Return the computed probability
    return probability;
}

function customer_s_engagement_with_loyalty_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers who have a high Credit Score and a long Tenure are more likely to actively engage with loyalty programs
  // Customers with a high Estimated Salary are also more likely to engage with loyalty programs
  // Similarly, customers with multiple products and a high Balance are more likely to utilize the benefits of loyalty programs
  // Based on these assumptions, we can calculate the probability using these parameters
  
  let probability = 0;
  
  // Example calculation (you may need to adjust and fine-tune based on actual data and analysis):
  probability = (CreditScore / 850) * (Tenure / 10) * (EstimatedSalary / 200000) * (NumOfProducts / 4) * (Balance / 150000);
  
  return probability;
}

function usage_of_customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the provided parameters
  let probability = 0.5; // Placeholder value

  // Perform calculations and logic based on the parameters to determine the probability
  
  // Return the final probability
  return probability;
}

function customer_s_preferred_contact_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some complex calculations based on the given parameters to estimate the probability of customer_s_preferred_contact_frequency
    let probability = (CreditScore * 0.1 + Age * 0.05 + Tenure * 0.08 + NumOfProducts * 0.03 + IsActiveMember * 0.12) / 1000;

    return probability;
}

function customer_s_credit_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the credit score
    // The probability can be calculated by considering the credit score as a factor in the likelihood of churning
    // Higher credit score implies more financial stability, which can lead to a lower probability of churning

    // Normalize the credit score to be between 0 and 1
    var normalizedCreditScore = CreditScore / 850; // Assuming the maximum possible credit score is 850

    // Use the normalized credit score to compute the probability
    var probability = 1 - normalizedCreditScore; // Higher credit score leads to lower probability
    
    // Return the computed probability
    return probability;
}

function participation_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the given parameters
    let probability = 0.5;  // Placeholder value for probability

    // Apply logic and calculations based on the parameters to compute the probability

    return probability;
}

function awareness_of_upcoming_product_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's make some assumptions and calculations to estimate the probability

  let awarenessProbability = 0.5; // Initial probability assuming equal chance

  // Adjust probability based on certain factors
  if (Age < 30) {
    awarenessProbability += 0.1; // Younger customers might be more interested in new features
  }
  if (Tenure > 5) {
    awarenessProbability += 0.15; // Customers with longer tenure might have a higher chance of being aware of upcoming features
  }
  if (IsActiveMember === 1) {
    awarenessProbability += 0.1; // Active members might actively seek out information on new features
  }

  // Apply some adjustments based on other factors
  if (CreditScore < 600) {
    awarenessProbability -= 0.1; // Lower credit score might indicate less focus on upcoming features
  }
  if (Geography === 'France') {
    awarenessProbability += 0.05; // Customers from certain geographies might be more attentive to new features
  }

  // Normalize probability to range between 0 and 1
  if (awarenessProbability < 0) {
    awarenessProbability = 0;
  } else if (awarenessProbability > 1) {
    awarenessProbability = 1;
  }

  return awarenessProbability; // Return the computed probability
}

function past_churn_behavior(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the given input parameters, we can calculate the probability of past churn behavior
    // Creating a deterministic calculation for the probability based on the input parameters

    // Sample deterministic calculation - this is just a placeholder, the actual calculation would be based on real analysis
    let probability = ((CreditScore * Age) / (Tenure + 1)) * ((NumOfProducts + Balance) / (EstimatedSalary + 1)) * (HasCrCard + IsActiveMember);

    // Return the calculated probability
    return probability;
}

function customer_s_openness_to_change(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer's openness to change based on the given parameters
    
    // Use CreditScore, Age, NumOfProducts, IsActiveMember to assess the customer's openness to change
    let opennessProbability = (CreditScore / 1000) * (Age / 100) * (NumOfProducts / 4) * IsActiveMember;
    
    // Return the calculated probability
    return opennessProbability;
}

function customer_s_utilization_of_premium_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer actively using premium features
    let probability = 0.3; // Placeholder probability
    
    // Adjust probability based on customer's attributes
    if (Balance > 100000 && IsActiveMember === 1) {
        probability += 0.2;
    }
    if (NumOfProducts > 2 && CreditScore > 700) {
        probability += 0.15;
    }
    if (Geography === 'Germany') {
        probability += 0.1;
    }
    if (Age > 30 && Age < 50 && Gender === 'Male') {
        probability += 0.1;
    }

    return probability;
}

function proactive_communication_from_the_service_provider(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that proactive communication is more likely for customers with higher credit scores
    let creditScoreImpact = CreditScore >= 700 ? 0.8 : 0.2;

    // Assume that proactive communication is more likely for customers in certain geographies
    let geographyImpact = Geography === 'Spain' ? 0.7 : 0.3;

    // Assume that proactive communication is more likely for active members
    let activeMemberImpact = IsActiveMember === 1 ? 0.9 : 0.1;

    // Assume that proactive communication is more likely for customers with higher estimated salary
    let salaryImpact = EstimatedSalary >= 100000 ? 0.8 : 0.2;

    // Combine the impacts to calculate the probability
    let probability = (creditScoreImpact + geographyImpact + activeMemberImpact + salaryImpact) / 4;

    return probability;
}

function sustainability_and_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by assigning weights to different factors based on their potential impact
  const weightCreditScore = 0.3;
  const weightGeography = 0.1;
  const weightAge = 0.2;
  const weightTenure = 0.1;
  const weightBalance = 0.1;
  const weightNumOfProducts = 0.05;
  const weightIsActiveMember = 0.05;
  const weightEstimatedSalary = 0.1;
  
  // Next, let's normalize the values of the parameters to a range between 0 and 1
  const normalizedCreditScore = CreditScore / 1000;
  const normalizedAge = Age / 100;
  const normalizedTenure = Tenure / 10;
  const normalizedBalance = Balance / 100000;
  const normalizedNumOfProducts = NumOfProducts / 4;
  const normalizedEstimatedSalary = EstimatedSalary / 200000;
  
  // Now, let's calculate the weighted sum of the normalized parameters
  const weightedSum = (weightCreditScore * normalizedCreditScore) + (weightAge * normalizedAge) + (weightTenure * normalizedTenure) + (weightBalance * normalizedBalance) + (weightNumOfProducts * normalizedNumOfProducts) + (weightIsActiveMember * IsActiveMember) + (weightEstimatedSalary * normalizedEstimatedSalary);
  
  // Finally, let's map the weighted sum to a probability range (0.1 to 0.9)
  const probability = (weightedSum * (0.8 - 0.1)) + 0.1;

  return probability;
}

function customer_s_interaction_with_educational_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering the following factors:
  // 1. Age: Younger customers might be more open to using educational resources
  // 2. IsActiveMember: Active members might be more likely to engage with educational resources
  // 3. CreditScore: Higher credit scores might indicate a more responsible approach, including using educational resources
  // 4. EstimatedSalary: Higher estimated salaries might indicate more investment in the service

  // Let's calculate a probability based on these parameters
  let probability = 0.5; // default probability

  // Adjust probability based on parameters
  if (Age < 25) {
    probability += 0.1;
  }

  if (IsActiveMember === 1) {
    probability += 0.2;
  }

  if (CreditScore > 700) {
    probability += 0.15;
  }

  if (EstimatedSalary > 100000) {
    probability += 0.1;
  }

  // Return the final probability
  return probability;
}

function customer_s_response_to_targeted_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability based on the given parameters
    // We can use CreditScore, Age, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability

    let probability = ((CreditScore / 1000) + (Age / 100) + (Balance / 100000) + (NumOfProducts * 0.2) + (IsActiveMember * 0.3) + (EstimatedSalary / 100000)) / 3.5;

    // Return the calculated probability
    return probability;
}

function perception_of_data_privacy_and_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform some calculations based on the input parameters to estimate the probability

  // Example: If the customer is from a country with strict data protection laws, increase the probability
  let countryFactor = 0;
  if (Geography === 'Germany' || Geography === 'France') {
    countryFactor = 0.1;
  }

  // Example: If the customer has a high credit score, decrease the probability
  let creditScoreFactor = Math.max((0.9 - (CreditScore / 1000)), 0);

  // Example: If the customer is an active member, decrease the probability
  let activeMemberFactor = IsActiveMember === 1 ? -0.05 : 0;

  // Combine the factors to get the overall probability
  let probability = 0.5 + countryFactor + creditScoreFactor + activeMemberFactor;

  // Ensure the probability is within the range of 0 to 1
  probability = Math.max(0, Math.min(1, probability));

  // Return the calculated probability
  return probability;
}

function usage_of_multi_device_or_multi_platform_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers are more likely to use multiple devices or platforms
  let ageProbability = 1 - (Age / 100); 

  // Assuming that customers with higher credit scores are more likely to use multiple devices or platforms
  let creditScoreProbability = CreditScore / 1000;

  // Assuming that customers with higher balances are more likely to use multiple devices or platforms
  let balanceProbability = Balance / 100000;

  // Assuming that active members are more likely to use multiple devices or platforms
  let memberProbability = IsActiveMember * 0.5;

  // Calculating the overall probability based on the individual probabilities
  let overallProbability = (ageProbability + creditScoreProbability + balanceProbability + memberProbability) / 4;

  return overallProbability;
}

function alignment_with_the_brand_s_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on different factors such as geography, gender, credit score, age, and tenure
  // For example, customers from a specific geography may have a higher chance of aligning with the brand's core values
  // Customers with a higher credit score may also have a higher probability of aligning with the brand's core values
  // Older customers may have a stronger connection to the brand compared to younger customers
  // Tenured customers may have a higher probability of aligning with the brand's core values

  let probability = 0.5; // placeholder probability, replace with actual calculation based on input parameters

  // Perform actual calculation based on the input parameters to determine the probability of alignment with the brand's core values

  return probability; // return the calculated probability
}

function engagement_with_user_community(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of engagement_with_user_community based on the given parameters
  // You can use the parameters creatively to compute the probability
  // For example, you can consider Age, Tenure, IsActiveMember, and other relevant factors to determine the probability

  // Sample calculation (not an actual prediction)
  let probability = 1.0;

  // Return the computed probability
  return probability;
}

function customer_s_network_switching_cost(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Just a simple example for demonstration purposes
    let switchingCost = 0;
    
    // Calculating switching cost based on different parameters
    switchingCost += CreditScore > 700 ? 10 : 0;
    switchingCost += Tenure > 5 ? 10 : 0;
    switchingCost += IsActiveMember === 1 ? 10 : 0;

    // Calculating the probability based on switching cost
    let probability = Math.min(switchingCost / 30, 1); // Assuming maximum switching cost is 30
    
    return probability;
}

function customer_s_feedback_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some initial score calculation based on the parameters
    let score = CreditScore * 0.2 + Age * 0.1 + Tenure * 0.15 + NumOfProducts * 0.1 - HasCrCard * 0.05 + IsActiveMember * 0.2;

    // Adjust score based on specific conditions
    if (Geography === 'Spain') {
        score += 10;
    }
    if (Gender === 'Female') {
        score += 5;
    }
    if (Balance === 0) {
        score -= 5;
    }

    // Calculating probability based on the final score
    let probability = 1 / (1 + Math.exp(-score));

    return probability;
}

function duration_of_customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Assuming that the probability of customer complaints impacting churn increases with longer tenure
    let tenureFactor = 0.2 * Tenure;

    // Assuming that the probability of customer complaints impacting churn is higher for inactive members
    let activityFactor = IsActiveMember === 0 ? 0.3 : 0;

    // Assuming that the probability of customer complaints impacting churn is higher if the customer has a lower credit score
    let creditScoreFactor = 0.0005 * CreditScore;

    // Assuming that the probability of customer complaints impacting churn is higher for customers with higher estimated salary
    let salaryFactor = 0.0000001 * EstimatedSalary;

    // Combining the factors to calculate the overall probability
    let probability = (tenureFactor + activityFactor + creditScoreFactor + salaryFactor) / 4;

    return probability;
}

function customer_s_knowledge_of_service_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on multiple parameters, calculate the probability of customer's knowledge of service features impacting churn rate
    let probability = 0.5; // Placeholder value for probability calculation

    // Perform calculations based on the provided parameters to compute the probability

    // Example: If the customer has a high CreditScore and a long Tenure, then increase the probability
    if (CreditScore > 700 && Tenure > 5) {
        probability += 0.2;
    }

    // Example: If the customer has a low NumOfProducts and a high EstimatedSalary, then decrease the probability
    if (NumOfProducts === 1 && EstimatedSalary > 150000) {
        probability -= 0.1;
    }

    // Example: If the customer is an active member and has a high Balance, then increase the probability
    if (IsActiveMember === 1 && Balance > 100000) {
        probability += 0.15;
    }

    // Return the computed probability
    return probability;
}

function perception_of_customer_service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.5; // default probability
    
    // Feel free to add your own creative computation based on the input parameters
    
    return probability;
}

function customer_s_preferred_payment_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on input parameters
  let probability = 0;

  // Example calculation (not based on real data)
  probability = (CreditScore / 800) * (Age / 100) * (Tenure / 10) * (NumOfProducts / 4) * (EstimatedSalary / 200000);

  // Return the calculated probability
  return probability;
}

function awareness_of_future_service_improvements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Some effective calculations to determine the probability of awareness of future service improvements
  let probability = 0;

  // Apply some logic based on the input parameters to calculate the probability
  if (CreditScore > 600 && Age > 30 && IsActiveMember === 1 && EstimatedSalary > 40000) {
    probability = 0.7; // 70% probability
  } else if (CreditScore > 550 && Age > 25 && IsActiveMember === 1) {
    probability = 0.5; // 50% probability
  } else {
    probability = 0.3; // 30% probability
  }

  return probability;
}

function customer_s_active_involvement_in_service_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // The function can compute the probability of customer's active involvement in service promotions
  // based on various factors like credit score, age, tenure, and customer activity.
  // Combining these factors, we can make an estimate of the likelihood of active involvement.
  
  // Example calculations to be used to compute the probability
  let probability = 0.5; // Placeholder value, replace with actual calculations

  // Actual probability calculation based on the given parameters
  probability = (CreditScore / 850) * (Age / 100) * (Tenure / 10) * IsActiveMember;

  return probability;
}

function perceived_level_of_service_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some hypothetical calculations based on the input parameters
    let probability = 0.5; // Placeholder value, to be calculated based on the actual parameters

    if (Geography === 'Spain' && Gender === 'Male' && Age > 40 && Age < 50 && IsActiveMember === 0) {
        probability = 0.7; // Adjust the probability based on certain conditions
    } else if (NumOfProducts > 1 && Balance === 0) {
        probability = 0.3; // Adjust the probability based on other conditions
    } else {
        probability = 0.5; // Default probability if no specific condition is met
    }

    return probability;
}

function sensitivity_to_pricing_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the input parameters, we can calculate the probability of sensitivity to pricing changes
  // For example, we can consider factors such as CreditScore, Age, and EstimatedSalary

  // Higher credit score may indicate a customer's ability to find better alternatives, hence indicating higher sensitivity
  // Younger age may imply higher affinity to seeking better deals, leading to higher sensitivity
  // Lower estimated salary may also indicate higher sensitivity due to financial constraints

  let sensitivityProbability = 0;

  // Include calculations based on CreditScore, Age, EstimatedSalary, and any other relevant factors to determine sensitivityProbability

  // Return the calculated sensitivity probability
  return sensitivityProbability;
}

function impact_of_social_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers in France are more likely to be influenced by social endorsements
  let regionFactor = (Geography === 'France') ? 1.2 : 1.0;

  // Assume that older customers are more likely to be influenced by social endorsements
  let ageFactor = 1 + (Age / 100);

  // Combine the factors to calculate the probability
  let probability = regionFactor * ageFactor;

  // Normalize the probability to be between 0 and 1
  probability = Math.min(Math.max(probability, 0), 1);

  return probability;
}

function customer_s_awareness_of_service_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by defining a base probability for engaged customers
  let baseProbability = 0.5;

  // Adjust the probability based on the available parameters
  if (CreditScore > 600) {
    baseProbability += 0.1;
  }

  if (Geography === 'France') {
    baseProbability += 0.05;
  }

  if (Age > 25 && Age < 40) {
    baseProbability += 0.1;
  }

  if (Tenure > 2) {
    baseProbability += 0.05;
  }

  if (NumOfProducts === 1) {
    baseProbability -= 0.1;
  }

  // Account for the impact of the customer being well-informed about updates
  let awarenessImpact = 0.1; // Assuming a 10% increase in probability for well-informed customers
  let finalProbability = baseProbability + (IsActiveMember * awarenessImpact);

  // Return the final probability
  return finalProbability;
}

function experience_with_third_party_integrations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that customers with a higher CreditScore are more likely to have positive experiences with third-party integrations
  let creditScoreProbability = CreditScore / 1000;

  // Customers from certain geographies may have better access to third-party integrations, let's say France
  let geographyProbability = (Geography === 'France') ? 0.8 : 0.5;

  // Age might also play a role, with younger customers being more tech-savvy and thus more likely to have positive experiences with third-party integrations
  let ageProbability = (Age < 40) ? 0.7 : 0.4;

  // Active members may be more likely to engage with third-party integrations
  let activeMemberProbability = (IsActiveMember === 1) ? 0.9 : 0.5;

  // Let's consider the product count as well, where customers with more products are more engaged and thus more likely to have positive experiences
  let productCountProbability = NumOfProducts * 0.1;

  // After considering all the factors, we can calculate the overall probability
  let overallProbability = creditScoreProbability * geographyProbability * ageProbability * activeMemberProbability * productCountProbability;

  return overallProbability;
}

function perception_of_account_management_tools(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on CreditScore, Age, NumOfProducts, and IsActiveMember
  let probability = 0.5; // Placeholder value for probability

  // CreditScore may impact the perception of account management tools
  if (CreditScore < 600) {
    probability -= 0.2; // Lower credit score decreases the probability
  } else if (CreditScore > 800) {
    probability += 0.2; // Higher credit score increases the probability
  }

  // Age may impact the perception of account management tools
  if (Age < 30) {
    probability -= 0.1; // Younger age decreases the probability
  } else if (Age > 50) {
    probability += 0.1; // Older age increases the probability
  }

  // Number of products and active membership may impact the perception of account management tools
  if (NumOfProducts === 1 && IsActiveMember === 1) {
    probability += 0.1; // Having one product and being an active member increases the probability
  } else {
    probability -= 0.1; // Other cases decrease the probability
  }

  return probability; // Return the calculated probability
}

function customer_s_involvement_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers who actively participate in beta testing and provide feedback are more engaged and less likely to churn
    let probability = 0.7; // Set a base probability
    
    // Adjust the probability based on customer's attributes
    if (CreditScore >= 700) {
        probability += 0.1; // Credit score above 700 increases the probability
    }
    if (IsActiveMember === 1) {
        probability += 0.1; // Active members are more engaged, increasing the probability
    }
    if (EstimatedSalary >= 80000) {
        probability += 0.05; // Higher estimated salary suggests more engagement, increasing the probability
    }
    if (Geography === 'Spain') {
        probability += 0.05; // Customer from Spain might have higher likelihood to participate in beta testing, increasing the probability
    }
    
    return probability; // Return the computed probability
}

function alignment_of_service_with_customer_s_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers who share similar values and beliefs with the company are more likely to perceive the service as aligned with their personal values and beliefs
  // Creating a hypothetical algorithm to compute the probability based on parameters
  let probability = 0.5; // Default probability

  // Check if the customer has a good credit score
  if (CreditScore > 700) {
    probability += 0.1; // Credit score adds to the probability
  }

  // Check if the customer has been with the company for a longer tenure
  if (Tenure > 5) {
    probability += 0.15; // Longer tenure adds to the probability
  }

  // Check if the customer has a high balance in the account
  if (Balance > 50000) {
    probability += 0.1; // High balance adds to the probability
  }

  // Check if the customer is an active member
  if (IsActiveMember === 1) {
    probability += 0.1; // Active membership adds to the probability
  }

  // Check if the customer's estimated salary is above average
  if (EstimatedSalary > 50000) {
    probability += 0.1; // Above average salary adds to the probability
  }

  // Considering that certain geographical regions may have specific values and beliefs, incorporate Geography into probability calculation

  // Gender, Age, NumOfProducts, HasCrCard, and other parameters can also be used in the calculation in a similar manner

  // Return the computed probability
  return probability;
}

function satisfaction_with_user_interface_and_design(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers are more likely to value user interface and design, we can calculate the probability based on age
  let ageFactor = Age < 30 ? 0.8 : Age < 50 ? 0.6 : 0.4;

  // Customers with a higher credit score are generally more financially stable and may be more likely to appreciate good user interface and design
  let creditScoreFactor = CreditScore / 1000;

  // Assuming that active members are more engaged and therefore more appreciative of good user interface and design
  let memberFactor = IsActiveMember === 1 ? 0.9 : 0.5;

  // Combine all the factors to calculate the probability
  let probability = ageFactor * creditScoreFactor * memberFactor;

  return probability;
}

function depth_of_service_integration_into_customer_s_routine(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the probability based on customer's activity level and tenure
  let activityLevel = (NumOfProducts + HasCrCard + IsActiveMember) / 3; // Average of NumOfProducts, HasCrCard, and IsActiveMember
  let probability = 1 - (activityLevel * (1 - (1 / (1 + Tenure))));

  return probability;
}

function perception_of_the_service_s_future_roadmap(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    // Since the perception of the service's future roadmap can be influenced by various factors such as credit score, age, tenure, and customer activity, a multidimensional approach can be taken
    // For example, optimistic customers with higher credit score, longer tenure, and higher balance might have a lower probability of churning

    // Implement the calculation using the input parameters to return the probability

    return calculatedProbability;
}

function frequency_and_timeliness_of_service_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value, actual computation based on input parameters needed

  // Implement actual computation based on the input parameters to calculate the probability

  return probability;
}

function availability_of_customer_appreciation_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of availability of customer appreciation events based on the given parameters

    let probability = 0.5; // Placeholder value, replace with actual calculation based on the parameters

    // Perform calculations based on the input parameters to determine the probability

    return probability;
}

function Ease_of_reaching_a_customer_support_representative(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // I will consider the following factors to evaluate the probability:
  // Tenure, IsActiveMember, EstimatedSalary

  // Calculate probability based on the given factors
  let probability = 0.5; // default probability

  if (Tenure > 2 && IsActiveMember === 1 && EstimatedSalary > 50000) {
    probability = 0.8; // higher probability if customer has been with the company for a while, is an active member, and has a high estimated salary
  } else if (Tenure > 0 && IsActiveMember === 1 && EstimatedSalary > 30000) {
    probability = 0.6; // moderate probability for decent tenure, active member, and reasonable estimated salary
  } else {
    probability = 0.3; // lower probability for other cases
  }

  return probability;
}

function Utilization_of_in_app_messaging(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the parameters provided
    let probability = 0.5; // Placeholder probability value

    // Add your creative computation here based on the given input parameters to calculate the probability

    return probability;
}

function Preferred_customer_service_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with higher CreditScore are more likely to prefer digital customer service channel
    let creditScoreFactor = CreditScore / 1000;

    // Assuming that older customers are more likely to prefer traditional customer service channel
    let ageFactor = 1 - (Age / 100);

    // Assuming that customers with higher balance are more likely to prefer traditional customer service channel
    let balanceFactor = Balance / 100000;

    // Assuming that active members are more likely to prefer digital customer service channel
    let activeMemberFactor = IsActiveMember ? 0.8 : 0.2;

    // Assuming that customers with higher estimated salary are more likely to prefer digital customer service channel
    let salaryFactor = EstimatedSalary < 50000 ? 0.2 : 0.8;

    // Calculate the overall probability based on the factors
    let probability = (creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + salaryFactor) / 5;

    return probability;
}

function Relationship_with_assigned_customer_success_manager(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.5; // Placeholder, replace with actual calculation
    
    // Perform calculations to determine the probability
    
    // For example, we can consider CreditScore, Age, and IsActiveMember to influence the probability
    if (CreditScore > 700 && Age < 40 && IsActiveMember === 1) {
        probability = 0.8; // High probability for positive relationship
    } else if (CreditScore < 600 || Age > 50 || IsActiveMember === 0) {
        probability = 0.3; // Low probability for positive relationship
    }
    
    return probability;
}

function Utilization_of_self_service_knowledge_base(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by calculating a score based on the given parameters
  let score = CreditScore * 0.2 + Age * 0.15 + Tenure * 0.1 + Balance * 0.1 + NumOfProducts * 0.1 + IsActiveMember * 0.15;
  
  // Now, we define a threshold for the score to determine the probability
  let threshold = 500;
  
  // If the score is higher than the threshold, the probability is high, otherwise it's low
  if (score > threshold) {
    return 0.8; // High probability of Actively using the self-service knowledge base
  } else {
    return 0.3; // Low probability of Actively using the self-service knowledge base
  }
}

function Integration_with_personal_productivity_tools(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Placeholder value

  // Use the parameters to compute the probability of integration with personal productivity tools
  // For example, we can consider factors such as Age, CreditScore, IsActiveMember, Tenure, and EstimatedSalary

  if (Age < 30 && CreditScore > 600 && IsActiveMember === 1 && Tenure > 5 && EstimatedSalary > 150000) {
    probability = 0.8; // Higher probability for younger age, higher creditscore, active member, longer tenure, and higher salary
  } else {
    probability = 0.3; // Lower probability for other cases
  }

  // Return the computed probability
  return probability;
}

function Awareness_and_usage_of_new_integrations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on various parameters provided
  // For example, we can consider CreditScore, Age, IsActiveMember, Geography, and Gender to calculate the probability
  let probability = 0.5; // Placeholder probability calculation

  // Perform probability calculation based on the parameters

  return probability;
}

function Perception_of_customer_appreciation_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform some calculations and analysis based on the input parameters
  // For example, we can check the CreditScore of the customer to assess the probability
  
  let probability = 0.5; // Placeholder probability value
  
  // Your creative probability calculation based on the input parameters goes here
  // This could involve using CreditScore, Age, Tenure, Geography, Gender, etc.
  // The calculation should involve the impact of customer perception of appreciation on retention

  return probability;
}

function Experience_with_service_outage_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the probability of positive experiences with service outage resolution
  // based on different factors such as CreditScore, Age, Tenure, IsActiveMember, and EstimatedSalary
  
  // Calculate the probability based on the given factors
  let probability = 0.5; // Starting with a neutral probability
  
  if (CreditScore > 700) {
    probability += 0.1; // Increase probability for higher credit score
  }
  
  if (Age > 30 && Age < 50) {
    probability += 0.2; // Increase probability for customers in the age range of 30-50
  }
  
  if (Tenure > 3 && Tenure < 8) {
    probability += 0.15; // Increase probability for customers with moderate tenure
  }
  
  if (IsActiveMember === 1) {
    probability += 0.1; // Increase probability for active members
  }
  
  if (EstimatedSalary > 80000 && EstimatedSalary < 100000) {
    probability += 0.15; // Increase probability for customers with moderate estimated salary
  }
  
  // Return the calculated probability
  return probability; 
}

function Understanding_of_service_s_unique_selling_propositions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using the given parameters to compute the probability of understanding and appreciating the service's unique selling propositions
  // Here we can use a simple formula to compute the probability by considering various factors
  
  let probability = 0.5; // initialize probability
  
  // Adjust probability based on various factors such as CreditScore, Age, IsActiveMember, etc.
  if (CreditScore > 700) {
    probability += 0.1;
  } else {
    probability -= 0.1;
  }

  if (Age < 30) {
    probability += 0.2;
  } else if (Age >= 30 && Age < 40) {
    probability += 0.1;
  } else {
    probability -= 0.1;
  }

  if (IsActiveMember === 1) {
    probability += 0.15;
  } else {
    probability -= 0.1;
  }
  
  // Adjust probability based on other factors like Geography, Gender, etc.
  // ...

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_relationship_duration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + number_of_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + household_income(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + subscription_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + service_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + marketing_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + loyalty_program_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + average_usage_session_duration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_onboarding_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + website_app_performance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + family_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + environmental_factors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_skill_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + marketing_communication_tone(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + cross_selling_up_selling_effectiveness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_purchase_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + response_time_to_customer_queries(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_preferred_communication_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + availability_of_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_loyalty_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_lifestyle_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + compliance_with_service_terms_and_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_customization_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + presence_of_customer_advocates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_past_purchase_behavior(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_digital_footprint(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_preferred_device(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + health_of_the_customer_relationship(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_subscription_renewal_behavior(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trends_in_customer_service_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_sentiment_towards_competitors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + availability_of_referral_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + accessibility_of_account_information(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + compatibility_with_new_technologies(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_social_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + availability_of_customer_retention_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_engagement_with_loyalty_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_of_customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_preferred_contact_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_credit_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + participation_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + awareness_of_upcoming_product_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + past_churn_behavior(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_openness_to_change(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_utilization_of_premium_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + proactive_communication_from_the_service_provider(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sustainability_and_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_interaction_with_educational_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_response_to_targeted_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perception_of_data_privacy_and_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_of_multi_device_or_multi_platform_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + alignment_with_the_brand_s_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + engagement_with_user_community(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_network_switching_cost(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_feedback_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + duration_of_customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_knowledge_of_service_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perception_of_customer_service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_preferred_payment_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + awareness_of_future_service_improvements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_active_involvement_in_service_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_level_of_service_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sensitivity_to_pricing_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + impact_of_social_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_awareness_of_service_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + experience_with_third_party_integrations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perception_of_account_management_tools(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_involvement_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + alignment_of_service_with_customer_s_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + satisfaction_with_user_interface_and_design(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + depth_of_service_integration_into_customer_s_routine(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perception_of_the_service_s_future_roadmap(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + frequency_and_timeliness_of_service_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + availability_of_customer_appreciation_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Ease_of_reaching_a_customer_support_representative(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Utilization_of_in_app_messaging(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Preferred_customer_service_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Relationship_with_assigned_customer_success_manager(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Utilization_of_self_service_knowledge_base(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Integration_with_personal_productivity_tools(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Awareness_and_usage_of_new_integrations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Perception_of_customer_appreciation_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Experience_with_service_outage_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + Understanding_of_service_s_unique_selling_propositions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    