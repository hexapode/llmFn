
function accountAge(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with a longer tenure are more likely to be long-term customers
    // We will calculate the probability of being a long-term customer based on the tenure
    let probability = 1 - (Tenure / 10); // Assuming that after 10 years tenure, the probability of being a long-term customer is 0
    
    return probability;
}

function monthlyUsage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that higher credit score, higher balance, and more products indicate higher monthly usage
  // Geography, gender, tenure, and credit card status are not directly related to monthly usage
  
  let usageProbability = 0;
  
  // Considering credit score, balance, and number of products to compute usage probability
  usageProbability = (CreditScore / 850) * (Balance / 200000) * (NumOfProducts / 4);
  
  // Normalizing the probability to be between 0 and 1
  usageProbability = Math.min(Math.max(usageProbability, 0), 1);
  
  return usageProbability;
}

function customerSupportInteractions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the input parameters
  let probability = 0;

  // Example of a simple calculation based on Age and CreditScore
  if (Age > 30 && CreditScore < 600) {
    probability += 0.2;
  }

  // Use other parameters to further adjust the probability

  // Return the calculated probability
  return probability;
}

function contractLength(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of contract length based on the given parameters
  let probability = 0.5; // Starting with a 50% probability

  // Adjust the probability based on the input parameters
  if (Geography === 'France') {
    probability -= 0.1; // Adjust based on Geography
  } else {
    probability += 0.1; // Adjust based on Geography
  }

  if (Age < 30) {
    probability -= 0.2; // Younger customers may have shorter contracts
  } else if (Age > 50) {
    probability += 0.2; // Older customers may have longer contracts
  }

  if (IsActiveMember === 1.0) {
    probability -= 0.1; // Active members may have longer contracts
  } else {
    probability += 0.1; // Inactive members may have shorter contracts
  }

  if (CreditScore < 600) {
    probability += 0.2; // Lower credit score may lead to shorter contracts
  } else if (CreditScore > 800) {
    probability -= 0.2; // Higher credit score may lead to longer contracts
  }

  // Consider other parameters and adjust the probability accordingly

  return probability;
}

function billingIssues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start with a base probability of billing issues
    let probability = 0.05;

    // Adjust the probability based on the credit score
    probability += (1 - CreditScore / 1000);

    // Geography might also play a role, with certain regions experiencing more billing issues
    if (Geography === "France") {
        probability -= 0.02;
    } else if (Geography === "Germany") {
        probability += 0.03;
    } else {
        probability += 0.05;
    }

    // Gender could influence the probability as well
    if (Gender === "Male") {
        probability += 0.01;
    }

    // Age might impact the probability, with younger or older customers having different tendencies for billing issues
    if (Age < 25 || Age > 60) {
        probability += 0.04;
    }

    // Tenure might provide some stability, so adjust probability accordingly
    probability -= Tenure * 0.002;

    // Balance might also be a factor, with higher balances potentially leading to more billing issues
    probability += (Balance / 10000);

    // Number of products might indicate complexity, thus affecting the probability
    probability += (NumOfProducts - 1) * 0.02;

    // Having a credit card might offer some protection, reduce probability slightly
    if (HasCrCard === 1) {
        probability -= 0.015;
    }

    // Active members might spot issues early, so decrease probability for them
    if (IsActiveMember === 1) {
        probability -= 0.03;
    }

    // Estimated salary may also play a role, with higher salaries potentially indicating more complex accounts
    probability += (EstimatedSalary / 1000000);

    // Ensure probability is within 0 to 1 range
    probability = Math.max(0, Math.min(1, probability));

    return probability;
}

function competitorOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // As a programmer, I can take into account the following parameters to calculate the probability of competitor offers:
    // 1. CreditScore: A lower credit score might make the customer more likely to consider competitive offers.
    // 2. Age: Younger customers might be more likely to churn for better offers.
    // 3. Balance: Higher balance customers might be less likely to churn for better offers.
    // 4. Geography: Different regions might have varying levels of competitiveness in offers.

    // Now, I will compute the probability based on the parameters
    let probability = 0;

    if (CreditScore < 600) {
        probability += 0.3; // Higher chance to consider competitive offers with lower credit score
    }

    if (Age < 30) {
        probability += 0.2; // Younger customers more likely to churn for better offers
    }

    if (Balance > 100000) {
        probability -= 0.1; // Higher balance customers less likely to churn for better offers
    }

    if (Geography === 'Germany') {
        probability += 0.1; // Germany might have more competitive offers
    }

    // Normalize the probability to be within 0 and 1
    probability = Math.min(1, Math.max(0, probability));

    return probability;
}

function productUpgrades(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // calculate the probability of product upgrades based on the given parameters
    let probability = 0.5; // default probability

    // Gender: If female, increase the probability
    if (Gender.toLowerCase() === 'female') {
        probability += 0.1;
    }

    // Age: Younger customers may be more likely to upgrade
    if (Age < 30) {
        probability += 0.2;
    }

    // CreditScore: Higher credit scores may indicate a higher likelihood of upgrades
    if (CreditScore > 700) {
        probability += 0.15;
    }

    // IsActiveMember: Active members are more likely to upgrade
    if (IsActiveMember === 1) {
        probability += 0.1;
    }

    // Balance: Customers with higher balances may be more inclined to upgrade
    if (Balance > 100000) {
        probability += 0.1;
    }

    // Geography: Customers from certain regions may be more likely to upgrade
    if (Geography.toLowerCase() === 'germany') {
        probability += 0.05;
    }

    // NumOfProducts: Customers with more products are less likely to churn, thus more likely to upgrade
    if (NumOfProducts > 1) {
        probability += 0.1;
    }

    return probability;
}

function surveyFeedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Placeholder for the probability calculation
    let probability = 0;
    
    // Example of a simple calculation based on Age and CreditScore
    if (Age > 30 && CreditScore < 650) {
        probability += 0.2;  // Adjusting probability based on Age and CreditScore
    }

    // Example of another calculation based on Geography
    if (Geography === "Spain") {
        probability += 0.1;  // Adjusting probability for customers from Spain
    }

    // You can add more complex calculations based on the parameters to refine the probability

    return probability;
}

function paymentMethods(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.5; // Placeholder value, replace with actual calculation

    // Your creative computation based on the input parameters to determine the probability

    return probability;
}

function usagePatterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0;
  
  // Check if the age is within a certain range, indicating potential churn risk
  if (Age >= 30 && Age <= 40) {
    probability += 0.2;
  }

  // Check if the credit score is below a certain threshold, indicating potential churn risk
  if (CreditScore < 600) {
    probability += 0.3;
  }

  // Check if the estimated salary is low, potentially indicating declining usage
  if (EstimatedSalary < 70000) {
    probability += 0.1;
  }

  // Check if the customer has only one product, potentially indicating consistent usage
  if (NumOfProducts === 1) {
    probability -= 0.1;
  }

  return probability;
}

function loyaltyProgramParticipation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of participation in a loyalty program based on the input parameters
  // It could be based on historical data showing that customers with higher CreditScore are more likely to participate
  // Also, customers with longer Tenure, higher Balance and higher EstimatedSalary might be more inclined to participate
  // Additionally, customers with more than 1 product might be more likely to join the loyalty program
  // The probability might also be influenced by the Geography, with certain regions having higher participation rates
  
  let probability = 0.5; // Placeholder value, should be replaced with actual calculation based on the parameters
  
  return probability;
}

function userInterfaceSatisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of user interface satisfaction based on the given parameters
  // This is a simplified example, and the actual calculation can be much more complex based on real data and business logic
  let probability = 0.5; // Placeholder value

  // Example of some simple logic based on parameters
  if (CreditScore > 700 && Age > 30 && IsActiveMember === 1 && Geography === 'France') {
    probability = 0.8;
  } else if (NumOfProducts === 1 && HasCrCard === 0) {
    probability = 0.3;
  } else {
    probability = 0.5;
  }

  return probability;
}

function promotionalOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    // For example, we can calculate the probability based on CreditScore, Age, Balance, and EstimatedSalary
    let probability = 0;
    
    if (CreditScore > 700 && Age > 30 && Balance > 0 && EstimatedSalary > 100000) {
        probability = 0.8;
    } else if (CreditScore > 600 && Age > 25 && Balance > 0) {
        probability = 0.5;
    } else {
        probability = 0.3;
    }
    
    // Return the calculated probability
    return probability;
}

function accountManagerInteraction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by assuming that the probability of account manager interaction increases with a higher credit score
  let probability = 0.1 * (CreditScore / 850);

  // Additionally, we can consider the impact of tenure on the probability
  probability += (0.05 * Tenure);

  // Active members might have a higher chance of interaction with account managers
  probability += (0.15 * IsActiveMember);

  // Balance in the account can also play a role in determining the probability
  probability += (0.1 * (Balance / EstimatedSalary));

  // Let's adjust the probability based on the number of products the customer has
  probability -= (0.05 * NumOfProducts);

  // Gender and Geography could also have some influence on the probability
  if (Gender === 'Male' && Geography === 'France') {
    probability += 0.03;
  }

  return probability;
}

function serviceOutages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of service outages based on the given parameters
  let probability = 0;

  // Example of a basic probability calculation based on CreditScore
  if (CreditScore < 600) {
    probability += 0.2;
  } else if (CreditScore >= 600 && CreditScore < 700) {
    probability += 0.1;
  } else {
    probability += 0.05;
  }

  // Example of incorporating other parameters into the probability calculation
  if (Age > 60) {
    probability += 0.1;
  }

  if (Geography === 'France') {
    probability += 0.05;
  } else if (Geography === 'Germany') {
    probability += 0.1;
  } else {
    probability += 0.15;
  }

  // Return the computed probability
  return probability;
}

function communityEngagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that younger age indicates higher probability of community engagement
  let ageProbability = 1 - (Age / 100);

  // Assume that a higher credit score indicates higher probability of community engagement
  let creditScoreProbability = CreditScore / 1000;

  // Assume that active members are more likely to engage in communities
  let activeMemberProbability = IsActiveMember === 1 ? 0.8 : 0.2;

  // Assume that estimated salary may indicate likelihood of community engagement
  let salaryProbability = EstimatedSalary > 100000 ? 0.7 : 0.3;

  // Combine the probabilities
  let engagementProbability = (ageProbability + creditScoreProbability + activeMemberProbability + salaryProbability) / 4;

  return engagementProbability;
}

function subscriptionPlanFlexibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that limited options in subscription plans may lead to dissatisfaction among customers
    
    // Calculate probability based on credit score, age, and tenure
    let creditScoreProbability = CreditScore / 1000; // Normalize credit score to a probability between 0 and 1
    let ageProbability = Age / 100; // Normalize age to a probability between 0 and 1
    let tenureProbability = Tenure / 10; // Normalize tenure to a probability between 0 and 1
    
    // Probability of subscription plan flexibility based on the combination of factors
    let flexibilityProbability = (creditScoreProbability + ageProbability + tenureProbability) / 3;
    
    // Return the calculated probability
    return flexibilityProbability;
}

function rewardsProgramAccess(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // For the purpose of this example, let's say the probability of access to rewards programs is influenced by the CreditScore and IsActiveMember status
  
  // Calculate the probability based on CreditScore
  let creditScoreProbability = CreditScore > 700 ? 0.8 : 0.4;
  
  // Calculate the probability based on IsActiveMember status
  let isActiveMemberProbability = IsActiveMember === 1 ? 0.7 : 0.3;
  
  // Combine the probabilities with some weighting
  let combinedProbability = (creditScoreProbability * 0.6) + (isActiveMemberProbability * 0.4);
  
  return combinedProbability; // Return the combined probability
}

function customerReferralProgram(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some calculations based on the input parameters to predict the probability of customer referral program participation
    let probability = 0.0;

    // Example of simple calculations based on input parameters
    if (NumOfProducts > 1 && IsActiveMember === 1 && CreditScore > 600) {
        probability = 0.8;
    } else if (NumOfProducts === 1 && Balance === 0 && EstimatedSalary > 100000) {
        probability = 0.4;
    } else {
        probability = 0.2;
    }

    return probability;
}

function appUsageFrequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of app usage frequency based on the input parameters
  let probability = 0.0;

  // Some sample calculations based on the input parameters (not actual probability calculation)
  if (IsActiveMember == 1 && NumOfProducts > 1) {
    probability = 0.8;  // High probability of active and frequent app usage
  } else {
    probability = 0.3;  // Lower probability of active and frequent app usage
  }

  return probability;
}

function customerFeedbackResponseTime(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer feedback response time based on the input parameters
  let probability = 0;

  // Apply custom logic based on the input parameters
  // For example, you can calculate the probability based on CreditScore, Age, Balance, NumOfProducts, IsActiveMember, etc.

  // Sample calculation
  probability = (CreditScore / 1000) * (Age / 100) * (Balance > 0 ? 0.5 : 0.3) * (NumOfProducts === 2 ? 0.8 : 0.5) * (IsActiveMember === 1 ? 0.9 : 0.7);

  // Return the probability
  return probability;
}

function personalizedRecommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Compute the probability based on the input parameters
  let probability = 0.5;

  // Example: If the customer has a high CreditScore, the probability of personalized recommendations could increase
  if (CreditScore > 700) {
    probability += 0.2;
  }

  // Example: If the customer is an active member, the probability of personalized recommendations could increase
  if (IsActiveMember === 1) {
    probability += 0.1;
  }

  // Example: If the customer's EstimatedSalary is high, the probability of personalized recommendations could increase
  if (EstimatedSalary > 150000) {
    probability += 0.15;
  }

  return probability;
}

function websitePerformance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of website performance based on the input parameters
  let probability = 0;

  // Use the input parameters to make a deterministic calculation for website performance probability
  // You can use a combination of conditional statements, arithmetic operations, and statistical analysis to compute the probability

  // For demonstration purposes, let's arbitrarily calculate the probability
  if (EstimatedSalary > 100000 && Age > 30 && CreditScore > 650) {
    probability = 0.8; // High probability of good website performance
  } else {
    probability = 0.3; // Low probability of good website performance
  }

  return probability;
}

function loyaltyProgramRewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of loyalty program rewards based on various parameters
  let probability = 0;

  // Example calculation based on some parameters
  probability = (CreditScore / 1000) * (Age / 100) * (Balance / 100000);

  // Return the calculated probability
  return probability;
}

function omnichannelExperience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.5; // Placeholder probability calculation

    // Perform calculations based on the input parameters to determine the omnichannel experience probability

    return probability;
}

function customerEducationMaterials(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assumption: The availability of educational materials may depend on the customer's location
    // Let's calculate the probability of educational materials availability based on Geography and EstimatedSalary

    let probability = 0;

    if (Geography === 'France' && EstimatedSalary > 25000) {
        probability = 0.8; // Higher probability of educational materials availability
    } else if (Geography === 'Germany' && EstimatedSalary > 30000) {
        probability = 0.7; // Slightly lower probability in Germany based on salary
    } else if (Geography === 'Spain' && EstimatedSalary > 20000) {
        probability = 0.6; // Lower probability in Spain based on salary
    } else {
        probability = 0.5; // Default probability
    }

    return probability;
}

function cybersecurityMeasures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming higher credit score indicates a more responsible and security-conscious customer
  let creditScoreImpact = CreditScore / 1000;

  // Considering higher age as a factor for a more security-aware customer
  let ageImpact = Age / 100;

  // Geography might play a role in cybersecurity concerns, let's assign weight based on the country
  let geographyImpact = 1;
  if (Geography === "France") {
    geographyImpact = 0.9;
  } else if (Geography === "Germany") {
    geographyImpact = 1.1;
  } else if (Geography === "Spain") {
    geographyImpact = 1;
  }

  // Activeness of the customer member might indicate their concern for security, let's assign impact accordingly
  let activityImpact = IsActiveMember === 1 ? 1.2 : 1;

  // Combining all impacts to calculate the probability
  let probability = creditScoreImpact * ageImpact * geographyImpact * activityImpact;
  
  return probability;
}

function supplierReliability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by defining a base reliability score
  let reliabilityScore = 0.5;
  
  // Credit score may affect the reliability of suppliers and partners
  if (CreditScore > 600) {
    reliabilityScore += 0.1;
  }
  
  // Geography can also play a role in supplier reliability
  if (Geography === 'Germany') {
    reliabilityScore += 0.2;
  }
  
  // Age can indicate experience and stability
  if (Age > 25 && Age < 45) {
    reliabilityScore += 0.1;
  }
  
  // Tenure can reflect long-standing relationships
  if (Tenure > 5) {
    reliabilityScore += 0.15;
  }
  
  // Active members may have more reliable connections
  if (IsActiveMember === 1.0) {
    reliabilityScore += 0.1;
  }
  
  // More products and higher balance may indicate stronger partnerships
  reliabilityScore += (NumOfProducts * 0.05) + (Balance / 1000000);
  
  // Based on the parameters, compute and return the probability of supplier reliability
  return reliabilityScore;
}

function personalizedCommunication(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the inputs
  let personalizedCommProbability = 0.5;

  if (Geography === 'Germany' && CreditScore > 600 && Age > 30 && IsActiveMember === 1) {
    personalizedCommProbability = 0.8;
  } else if (Geography === 'France' && NumOfProducts === 1 && HasCrCard === 1) {
    personalizedCommProbability = 0.6;
  } else if (Geography === 'Spain' && Balance > 0 && Tenure > 5) {
    personalizedCommProbability = 0.7;
  }

  return personalizedCommProbability;
}

function customerLocation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let locationProbability = 0.5; // Default probability

    // Some custom logic to calculate probability based on the given parameters
    if (Geography === "Germany") {
        locationProbability = 0.7; // Germany has higher probability
    } else if (Geography === "France") {
        locationProbability = 0.6; // France has moderate probability
    } else if (Geography === "Spain") {
        locationProbability = 0.4; // Spain has lower probability
    }

    // More complex calculations based on other parameters can be added here

    return locationProbability;
}

function familyDiscounts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a higher CreditScore are more likely to be eligible for family discounts
  let creditScoreFactor = CreditScore / 1000;

  // Customers with a longer tenure at the company are more likely to be offered family discounts
  let tenureFactor = Tenure / 10;
  
  // Customers with a higher estimated salary may be more likely to afford family plans, so there's a higher probability of discounts
  let salaryFactor = EstimatedSalary / 150000;
  
  // The number of products a customer has may indicate their commitment to the company. More products may lead to a higher chance of family discounts
  let productFactor = NumOfProducts / 4;

  // Combine the factors and return the probability of family discounts
  let probability = (creditScoreFactor + tenureFactor + salaryFactor + productFactor) / 4;
  
  return probability;
}

function productRange(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;
  
  // Example of some calculations based on the input parameters
  if (CreditScore > 650 && Age > 30 && NumOfProducts > 1 && IsActiveMember === 1) {
    probability = 0.8; // High probability for diverse range of products
  } else {
    probability = 0.3; // Low probability for diverse range of products
  }
  
  return probability;
}

function marketCompetition(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of market competition based on the parameters
  let probability = 0.5; // Placeholder value, actual calculation based on the parameters needed

  // Example of a simple calculation based on some parameters
  if (CreditScore < 600) {
    probability += 0.1;
  }
  if (Age > 30 && Age < 50) {
    probability += 0.2;
  }
  
  // Return the computed probability
  return probability;
}

function customerEngagementEvents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of Participation in customer engagement events based on the input parameters
  let probability = 0;

  // Use CreditScore, Age, IsActiveMember, and EstimatedSalary to calculate the probability
  if (CreditScore > 700 && Age < 40 && IsActiveMember === 1 && EstimatedSalary > 100000) {
    probability = 0.8; // High probability of participation
  } else if (CreditScore > 650 && Age < 45 && IsActiveMember === 1 && EstimatedSalary > 80000) {
    probability = 0.6; // Moderate probability of participation
  } else {
    probability = 0.3; // Low probability of participation
  }

  return probability;
}

function annualPriceIncreases(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability of annual price increases based on the given parameters

  // Dummy calculation for demonstration purposes
  let probability = 0.5;

  // Returning the calculated probability
  return probability;
}

function customerSatisfactionScores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some businesses lose customer satisfaction scores are X where X is the below 500
  // Other factors may also contribute negatively to customer satisfaction scores, such as high Age, low Tenure, and low CreditScore
  // Let's assume a simplistic model to predict the probability of low customer satisfaction scores
  
  let probability = 0;
  
  if (CreditScore < 500 || Age > 60 || Tenure < 2) {
    probability = 0.8;
  } else {
    probability = 0.2;
  }
  
  return probability;
}

function corporateSocialResponsibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of corporateSocialResponsibility based on the input parameters
    let probability = 0.5; // Placeholder probability calculation
    
    // Example of simple calculation: If the Geography is "France", increase the probability
    if (Geography === "France") {
        probability += 0.1;
    }

    // Example of more complex calculation: If the CreditScore is above 700, increase the probability
    if (CreditScore > 700) {
        probability += 0.2;
    }

    // Other various calculations based on different parameters
    
    // Return the calculated probability
    return probability;
}

function self_serviceOptions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder, replace with actual calculation

  // Perform calculations based on the input parameters to determine the probability

  return probability;
}

function customerEmpowermentInitiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some parameters are not used in the calculation but are included for completeness

  // Calculate the probability based on the Age and IsActiveMember parameters
  let probability = 0;

  if (Age >= 18 && Age <= 30) {
    probability += 0.2; // Younger customers may be more responsive to feedback mechanisms
  } else if (Age > 30 && Age <= 50) {
    probability += 0.1; // Middle-aged customers may still value feedback mechanisms
  } else if (Age > 50) {
    probability += 0.05; // Older customers may have mixed responses to feedback mechanisms
  }

  if (IsActiveMember === 1) {
    probability += 0.15; // Active members are more likely to engage with feedback mechanisms
  }

  // Other factors such as CreditScore, Geography, and Gender can also be considered in the calculation

  return probability;
}

function brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on various customer parameters
  let reputationProbability = 0.5; // Default probability

  // Increase or decrease probability based on credit score
  if (CreditScore > 700) {
    reputationProbability += 0.2;
  } else if (CreditScore < 500) {
    reputationProbability -= 0.1;
  }

  // Adjust probability based on customer's age
  if (Age < 25) {
    reputationProbability -= 0.1;
  } else if (Age > 50) {
    reputationProbability += 0.1;
  }

  // Adjust based on geography (assuming certain regions have stronger brand perception)
  if (Geography === 'France') {
    reputationProbability += 0.05;
  } else if (Geography === 'Germany') {
    reputationProbability += 0.1;
  } else {
    reputationProbability += 0.03;
  }
  
  // Adjust based on customer activity
  if (IsActiveMember === 1) {
    reputationProbability += 0.15;
  } else {
    reputationProbability -= 0.1;
  }

  return reputationProbability;
}

function customer_onboarding_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some hypothetical calculations based on the input parameters to determine the probability
    let probability = (CreditScore / 850) * (1 / (1 + Math.exp(-Age))) * (1 - (NumOfProducts / 4)) * (1 - (IsActiveMember / 2));

    return probability;
}

function product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations and logic based on the input parameters to compute the probability of product quality
    let probability = 0.0;

    // Example calculation based on Age and CreditScore
    if (Age > 30 && CreditScore > 600) {
        probability += 0.2; // Adjust probability based on Age and CreditScore
    }

    // Another example calculation based on Geography
    if (Geography === 'France') {
        probability += 0.1; // Adjust probability for customers from France
    }

    // More complex calculations can be added based on other parameters

    return probability; // Return the computed probability
}

function customer_service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // I will consider IsActiveMember as a key indicator of customer service quality, 
  // assuming that an active member is more likely to have positive customer service experiences
  // I will also consider Age, as older customers might expect higher quality customer service

  let probability = 0;

  if (IsActiveMember === 1.0) {
    probability += 0.2; // Assuming active members have a higher chance of positive customer service experience
  }

  if (Age > 40) {
    probability += 0.1; // Assuming older customers may have higher expectations for customer service
  }

  // Other parameters such as CreditScore, Geography, Balance, etc. could also be factored in to affect the probability

  return probability;
}

function customer_relationship_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer relationship management effectiveness based on the provided parameters
  let probability = 0;

  // Your creative calculations go here to compute the probability based on the input parameters
  
  // Example: Considering CreditScore, Age, IsActiveMember, and EstimatedSalary for simple calculation
  probability = (CreditScore / 1000) * (Age / 100) * (IsActiveMember + 1) * (EstimatedSalary / 200000);

  // Return the calculated probability
  return probability;
}

function customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Create a scoring system based on the input parameters
  let score = 0;
  
  // Increase score based on higher CreditScore
  if (CreditScore > 700) {
    score += 20;
  } else if (CreditScore > 600) {
    score += 10;
  }
  
  // Increase score for active members
  if (IsActiveMember === 1.0) {
    score += 15;
  }
  
  // Increase score for customers with more products
  if (NumOfProducts >= 2) {
    score += 10;
  }
  
  // Increase score for customers with higher estimated salary
  if (EstimatedSalary > 80000) {
    score += 10;
  }
  
  // Decrease score for older customers
  if (Age > 40) {
    score -= 10;
  }
  
  // Decrease score for customers with lower tenure
  if (Tenure < 5) {
    score -= 10;
  }
  
  // Calculate probability based on the score
  let probability = (1 / (1 + Math.exp(-score)));
  
  return probability;
}

function customer_preferences_tracking(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 0.5; // Placeholder value

    // Implement your creative calculation to compute the probability based on the input parameters

    return probability;
}

function customer_feedback_utilization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating probability based on parameters
  let probability = 0.5; // Placeholder value, actual computation based on parameters should be done here

  // Your computation for probability based on the parameters goes here

  // Return the computed probability
  return probability;
}

function customer_success_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that participation in customer success programs is more likely for customers with higher credit score
  // Normalize credit score to be between 0 and 1
  const normalizedCreditScore = CreditScore / 1000;

  // Assuming that older customers are more likely to participate in customer success programs
  // Normalize age to be between 0 and 1
  const normalizedAge = Age / 100;

  // Assuming that customers with higher estimated salary are more likely to participate in customer success programs
  // Normalize estimated salary to be between 0 and 1
  const normalizedSalary = EstimatedSalary / 100000;

  // Assuming that active members are more likely to participate in customer success programs
  const participationProbability = 0.3 * normalizedCreditScore + 0.3 * normalizedAge + 0.2 * normalizedSalary + 0.2 * IsActiveMember;

  return participationProbability;
}

function customer_retention_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Extracting relevant information from the input parameters
  // Performing calculations and analysis based on the input parameters
  // Using logic and domain knowledge to determine the probability of customer retention initiatives
  
  // Sample logic to calculate the probability
  let probability = 0.0;
  if (CreditScore > 600 && Age > 25 && IsActiveMember === 1 && EstimatedSalary > 50000) {
    probability = 0.8; // High probability for customer retention initiatives
  } else {
    probability = 0.3; // Low probability for customer retention initiatives
  }
  
  // Returning the calculated probability
  return probability;
}

function customer_loyalty(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer loyalty based on the given parameters

    // One way to compute probability could be to use the CreditScore, Age, and IsActiveMember as key factors for customer loyalty
    let loyaltyProbability = 0.0;

    // Adjust the probability based on CreditScore
    if (CreditScore >= 650) {
        loyaltyProbability += 0.3;
    } else {
        loyaltyProbability += 0.1;
    }

    // Adjust the probability based on Age
    if (Age > 40 && Age < 60) {
        loyaltyProbability += 0.2;
    } else {
        loyaltyProbability += 0.1;
    }

    // Adjust the probability based on IsActiveMember status
    if (IsActiveMember === 1) {
        loyaltyProbability += 0.2;
    } else {
        loyaltyProbability += 0.1;
    }

    return loyaltyProbability;
}

function customer_satisfaction_with_previous_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with higher credit score and balance are more likely to be satisfied
  let creditScoreFactor = CreditScore / 1000;
  let balanceFactor = Balance / 100000;

  // Assume that older customers are more likely to be satisfied
  let ageFactor = Age / 100;

  // Assume that active members are more likely to be satisfied
  let activeMemberFactor = IsActiveMember * 0.2;

  // Assume that customers with higher estimated salary are more likely to be satisfied
  let estimatedSalaryFactor = EstimatedSalary / 100000;

  // Combining the factors to calculate the probability
  let probability = creditScoreFactor + balanceFactor + ageFactor + activeMemberFactor + estimatedSalaryFactor;

  return probability;
}

function customer_trust_in_the_company(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some complex calculations based on the input parameters to determine the probability of customer trust in the company
  let trustProbability = ((Age * 0.1) + (CreditScore * 0.3) + (Balance * 0.2) + (IsActiveMember * 0.1) + (EstimatedSalary * 0.2)) / 1000;

  // Returning the computed trust probability
  return trustProbability;
}

function customer_emotional_connection(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of emotional connection based on the input parameters
  let probability = 0.5; // Placeholder value

  // Add logic to compute the probability based on the input parameters
  // For example, you can consider factors such as Age, Tenure, NumOfProducts, IsActiveMember, etc. to determine emotional connection

  return probability;
}

function customer_openness_to_communication(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that younger customers are more likely to be open to communication and feedback
  let ageFactor = Age < 30 ? 0.8 : 0.5;

  // Customers with higher credit scores may be more financially responsible and thus more open to communication
  let creditScoreFactor = CreditScore / 800;

  // Customers with more products may have a stronger relationship with the company and be more open to communication
  let productFactor = NumOfProducts > 1 ? 0.7 : 0.9;

  // Active members may be more engaged with the company and thus more open to communication
  let activeMemberFactor = IsActiveMember === 1 ? 0.9 : 0.6;

  // Assuming that customers with higher estimated salary may value their relationship with the company and be more open to communication
  let salaryFactor = EstimatedSalary / 200000;

  // Combine all factors to calculate the probability of customer openness to communication and feedback
  let probability = ageFactor * creditScoreFactor * productFactor * activeMemberFactor * salaryFactor;

  return probability;
}

function customer_empowerment_and_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the given parameters
  let probability = 0.5; // Default probability
  
  // Example of calculation: Empowered if the customer has a high credit score and is an active member
  if (CreditScore > 700 && IsActiveMember === 1) {
    probability = 0.8; // High probability of empowerment and autonomy
  } else {
    probability = 0.3; // Low probability of empowerment and autonomy
  }
  
  // Other conditions and parameters can be used to adjust the probability
  
  return probability;
}

function customer_fear_of_missing_out__FOMO_(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters given
    let probability = 0.5; // Default probability

    // Adjust the probability based on the presence of exclusive offers or experiences
    if (NumOfProducts > 1) {
        probability += 0.1; // Increase probability if the customer has multiple products
    }
    if (HasCrCard === 1 && IsActiveMember === 1) {
        probability += 0.2; // Increase probability if the customer has a credit card and is an active member
    }
    if (Geography === 'Germany') {
        probability += 0.15; // Increase probability if the customer is from Germany
    }
    if (Balance > 100000) {
        probability += 0.1; // Increase probability if the customer balance is high
    }
    if (CreditScore > 700) {
        probability += 0.1; // Increase probability if the customer credit score is high
    }
    // Other factors like Age, Gender, Tenure, and EstimatedSalary can also be considered to adjust the probability

    // Return the final probability
    return probability;
}

function customer_satisfaction_with_company_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the given parameters to compute the probability of customer satisfaction with company values
  
  // Example of basic probability calculation based on some parameters
  let probability = (CreditScore / 1000) * (Balance / EstimatedSalary) * (NumOfProducts / 2);
  
  // Other potential computations based on specific business logic and data analysis
  
  return probability;
}

function customer_emotional_needs_fulfillment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer emotional needs fulfillment based on various parameters
  let probability = 0.5; // Default probability
  
  // Perform calculations based on the input parameters to determine the probability
  // Your custom calculations based on the parameters to determine the probability here

  return probability; // Return the calculated probability
}

function customer_trust_in_the_company_s_leadership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Using CreditScore, Age, Tenure, NumOfProducts, and EstimatedSalary as factors for trust in leadership
    let trustFactor = (CreditScore * 0.3 + Age * 0.2 + Tenure * 0.1 + NumOfProducts * 0.15 + EstimatedSalary * 0.25) / 100000;
    
    // Normalizing trust factor to fall between 0 and 1
    let trustProbability = Math.min(Math.max(trustFactor, 0), 1);
    
    return trustProbability;
}

function customer_satisfaction_with_pricing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher credit scores are more likely to be satisfied with pricing
    let creditScoreFactor = CreditScore / 1000;

    // Assume Geographical location can affect customer satisfaction with pricing
    let geographyFactor = (Geography === 'France') ? 0.1 : 0.05;

    // Assume that younger customers are generally less price-sensitive
    let ageFactor = 1 - (Age / 100);

    // Assume that customers with more products are less sensitive to pricing changes
    let productsFactor = 1 - (NumOfProducts * 0.1);

    // Assume that active members are more likely to be satisfied with pricing
    let activeMemberFactor = (IsActiveMember === 1) ? 0.2 : 0;

    // Assume that customers with higher estimated salary are less price-sensitive
    let salaryFactor = 1 - (EstimatedSalary / 200000);

    // Combine all factors to compute the probability of customer satisfaction with pricing
    let probability = 0.5 + creditScoreFactor + geographyFactor + ageFactor + productsFactor + activeMemberFactor + salaryFactor;

    return probability;
}

function customer_perception_of_fairness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer perception of fairness based on the parameters

  // A simple probability example
  let probability = 0.5;

  // Return the calculated probability
  return probability;
}

function customer_feelings_of_appreciation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let appreciationProbability = 0.5;

  // Adjust probability based on factors such as CreditScore, Age, Geography, and IsActiveMember
  if (CreditScore > 700) {
    appreciationProbability += 0.1;
  }
  if (Age > 30 && Age < 50) {
    appreciationProbability += 0.15;
  }
  if (Geography === 'Spain') {
    appreciationProbability += 0.05;
  }
  if (IsActiveMember === 1.0) {
    appreciationProbability += 0.1;
  }

  // Adjust probability based on other factors like Balance, NumOfProducts, and HasCrCard
  if (Balance > 0) {
    appreciationProbability += 0.05;
  }
  if (NumOfProducts === 2) {
    appreciationProbability += 0.08;
  }
  if (HasCrCard === 1.0) {
    appreciationProbability += 0.05;
  }

  // Adjust probability based on Tenure and EstimatedSalary
  if (Tenure > 5 && Tenure < 10) {
    appreciationProbability += 0.1;
  }
  if (EstimatedSalary > 100000) {
    appreciationProbability += 0.1;
  }

  return appreciationProbability;
}

function customer_identification_with_the_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // let's start by calculating the probability based on the given parameters
  let probability = 0.5; // default probability
  
  // Now, let's make some calculations based on the input parameters to adjust the probability
  
  // Increase probability based on higher CreditScore
  if (CreditScore > 800) {
    probability += 0.2;
  }
  
  // Decrease probability if the customer has a low balance
  if (Balance < 10000) {
    probability -= 0.1;
  }
  
  // Increase probability for active members
  if (IsActiveMember === 1) {
    probability += 0.3;
  }
  
  // Decrease probability for customers with more than 1 product
  if (NumOfProducts > 1) {
    probability -= 0.2;
  }
  
  // Adjust probability based on other parameters like Age, Gender, Tenure, etc.
  // ...

  // return the final calculated probability
  return probability;
}

function customer_feeling_of_being_heard(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Convert input parameters into numeric values and perform some data manipulation
  let creditScoreFactor = CreditScore / 1000; // Normalize credit score to a factor between 0 and 1
  let ageFactor = Math.min(1, Age / 100); // Normalize Age to a factor between 0 and 1
  let tenureFactor = Tenure / 10; // Normalize tenure to a factor between 0 and 1
  let balanceFactor = Balance / (100000); // Normalize balance to a factor between 0 and 1
  let numOfProductsFactor = (NumOfProducts - 1) / 3; // Normalize number of products to a factor between 0 and 1

  // Calculate a weighted average based on the factors
  let weightedAverage = (creditScoreFactor * 0.1) + (ageFactor * 0.3) + (tenureFactor * 0.2) + (balanceFactor * 0.1) + (numOfProductsFactor * 0.3);

  // Calculate the probability of feeling heard and understood
  let probability = weightedAverage * 100; // Convert the weighted average to a percentage probability

  return probability;
}

function customer_emotional_response_to_marketing_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the input parameters
  let probability = 0.5; // Assuming a default probability

  // You can add your own logic here to compute the probability based on the input parameters

  // Return the computed probability
  return probability;
}

function customer_willingness_to_advocate_for_the_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your implementation goes here
  // It's important to utilize the input parameters to calculate the probability
  // Example: Credit Score, Age, Tenure, IsActiveMember can be used to calculate the probability
  
  // Calculating the probability based on the given input parameters
  let probability = 0.5; // Placeholder value, actual computation based on parameters needed
  
  // Placeholder: Use the input parameters to compute the probability
  
  return probability;
}

function customer_brand_evangelism(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let baseProbability = 0.5;

  if (Geography === "Spain" && IsActiveMember === 1 && NumOfProducts > 1) {
    baseProbability += 0.3;
  }

  if (CreditScore > 700 && Age > 30 && Age < 50) {
    baseProbability += 0.2;
  }

  if (HasCrCard === 1 && EstimatedSalary > 70000) {
    baseProbability += 0.15;
  }

  if (Gender === "Female") {
    baseProbability += 0.1;
  }

  return baseProbability;
}

function customer_satisfaction_with_past_resolutions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability based on input parameters
    let probability = 0.5; // Placeholder value, replace with actual calculation
    
    // Example of calculation based on Age and IsActiveMember
    if (Age > 30 && IsActiveMember === 1) {
        probability += 0.2;
    }

    // Example of calculation based on CreditScore
    if (CreditScore > 600) {
        probability += 0.1;
    }

    // Example of calculation based on Geography
    if (Geography === 'France') {
        probability += 0.05;
    }

    // Return the calculated probability
    return probability;
}

function customer_feelings_of_belonging(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer's feelings of belonging based on the given input parameters
  let probability = 0.0;

  // Use a combination of CreditScore, Geography, Age, IsActiveMember, and other parameters to compute the probability
  probability = (CreditScore * 0.3) + (Age * 0.25) + (IsActiveMember * 0.2) - (NumOfProducts * 0.1) + (Balance/100000) + ((EstimatedSalary/100000) * 0.15);
  
  // Return the calculated probability
  return probability;
}

function customer_opinion_on_company_ethics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Here we can calculate the probability of positive customer opinion on company ethics based on various factors such as CreditScore, Geography, Gender, Age, etc.
  // Let's use a simple calculation for demonstration purposes

  let probability = 0.5; // Default probability

  if (CreditScore > 600) {
    probability += 0.1; // Increase probability for good credit score
  }

  if (Geography === 'Spain') {
    probability += 0.2; // Increase probability for customers from Spain
  }

  if (Gender === 'Female') {
    probability += 0.15; // Increase probability for female customers
  }

  if (Age < 35) {
    probability += 0.1; // Increase probability for younger customers
  }

  // Other factors such as Tenure, Balance, NumOfProducts, etc. can also be used to adjust the probability

  // Finally, return the calculated probability
  return probability;
}

function customer_experience_consistency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use CreditScore, Tenure, NumOfProducts, HasCrCard, and IsActiveMember to calculate the probability
  let probability = ((CreditScore / 850) + (Tenure / 10) + (NumOfProducts / 4) + HasCrCard + IsActiveMember) / 5;

  return probability;
}

function customer_involvement_in_product_development(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Check if the customer has a high CreditScore, high Balance, and high EstimatedSalary
  // High CreditScore, Balance, and EstimatedSalary might indicate a higher likelihood of customer involvement in product development
  let creditScoreFactor = (CreditScore > 700) ? 0.3 : 0;
  let balanceFactor = (Balance > 100000) ? 0.2 : 0;
  let salaryFactor = (EstimatedSalary > 120000) ? 0.1 : 0;

  // Check if the customer is an active member and has a credit card
  // Active members with a credit card might be more involved in the product development process
  let activityFactor = (HasCrCard === 1 && IsActiveMember === 1) ? 0.2 : 0;

  // Check if the customer has more than 1 product with the bank
  // Having more products might indicate a higher level of involvement and commitment
  let productFactor = (NumOfProducts > 1) ? 0.1 : 0;

  // Combine all factors to compute the probability of customer involvement in product development
  let involvementProbability = creditScoreFactor + balanceFactor + salaryFactor + activityFactor + productFactor;

  return involvementProbability;
}

function customer_social_responsibility_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating probability based on various parameters
  let probability = 0.5; // Placeholder value, actual computation needed

  // Sample computation based on parameters
  if (Geography === 'France' && NumOfProducts > 1) {
    probability += 0.1;
  }
  if (CreditScore > 700 && IsActiveMember === 1) {
    probability += 0.2;
  }

  // Returning the computed probability
  return probability;
}

function customer_perception_of_company_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Using Credit Score, Geography, Age, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability
    let probability = 0.5; // Placeholder probability calculation
    
    // Perform actual calculation based on the input parameters

    return probability;
}

function customer_satisfaction_with_delivery_logistics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher credit score are more likely to be satisfied with delivery logistics
  let creditScoreFactor = CreditScore / 1000;

  // Assuming that customers with higher balance are more likely to be satisfied with delivery logistics
  let balanceFactor = Balance / 200000;

  // Assuming that young customers are more likely to be satisfied with delivery logistics
  let ageFactor = (1 - (Age / 100));

  // Assuming that active members are more likely to be satisfied with delivery logistics
  let activeMemberFactor = IsActiveMember === 1 ? 0.2 : 0;

  // Assuming that customers with more than 1 product are less likely to be satisfied with delivery logistics
  let numOfProductsFactor = NumOfProducts > 1 ? -0.3 : 0;

  // Combining all factors to calculate the probability of satisfaction with delivery logistics
  let probability = 0.5 + creditScoreFactor + balanceFactor + ageFactor + activeMemberFactor + numOfProductsFactor;

  return probability;
}

function customer_emotional_attachment_to_employees(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use a combination of CreditScore, Age, Tenure, IsActiveMember, and EstimatedSalary to calculate the probability of emotional attachment
  // For example, we can use CreditScore, Age, and EstimatedSalary to calculate overall satisfaction with the bank, which could be a proxy for emotional attachment
  let satisfactionScore = (CreditScore * 0.3) + (Age * 0.5) + (EstimatedSalary * 0.2);

  // Incorporate Tenure and IsActiveMember to adjust the satisfaction score
  if (Tenure > 3) {
    satisfactionScore *= 1.1; // Increase satisfaction score for longer tenure
  }
  if (IsActiveMember === 1) {
    satisfactionScore *= 1.2; // Increase satisfaction score for active members
  }

  // Normalize the satisfaction score to a probability value between 0 and 1
  let probability = Math.min(1, Math.max(0, satisfactionScore / 1000));

  return probability;
}

function customer_resistance_to_change(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer resistance to change based on the given parameters
  
  let resistanceProbability = 0.5; // default probability
  
  // Adjust probability based on different customer parameters
  if (Geography === 'Spain') {
    resistanceProbability += 0.1; // Customers from Spain may have higher resistance
  }
  if (NumOfProducts > 1) {
    resistanceProbability -= 0.2; // Customers with multiple products may have lower resistance
  }
  if (Balance === 0) {
    resistanceProbability += 0.15; // Customers with zero balance may have higher resistance
  }
  if (IsActiveMember === 1) {
    resistanceProbability -= 0.1; // Active members may have lower resistance
  }
  
  // Normalize the final probability
  resistanceProbability = Math.min(1, Math.max(0, resistanceProbability));
  
  return resistanceProbability;
}

function customer_satisfaction_with_customer_engagement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start with a base satisfaction probability of 0.5
  let satisfactionProbability = 0.5;

  // Adjust satisfaction probability based on customer attributes
  if (CreditScore > 700) {
    satisfactionProbability += 0.1;
  }

  if (Geography === 'France') {
    satisfactionProbability += 0.05;
  }

  if (Gender === 'Female') {
    satisfactionProbability += 0.03;
  }

  if (Age > 30 && Age < 50) {
    satisfactionProbability += 0.08;
  }

  if (NumOfProducts === 1) {
    satisfactionProbability += 0.05;
  }

  if (IsActiveMember === 1) {
    satisfactionProbability += 0.1;
  }

  // Normalize satisfaction probability to be between 0 and 1
  satisfactionProbability = Math.min(1, Math.max(0, satisfactionProbability));

  return satisfactionProbability;
}

function customer_perception_of_innovation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // A simple, hypothetical probability calculation based on the given parameters
    let probability = (CreditScore / 1000) * (Age / 100) * (NumOfProducts / 4) * (EstimatedSalary / 100000);
    
    return probability;
}

function customer_satisfaction_with_billing_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // CreditScore, Balance, NumOfProducts, HasCrCard, IsActiveMember could influence the satisfaction with the billing process
  // Let's create a formula based on these parameters to calculate the probability

  let probability = ((CreditScore / 1000) + (Balance / 10000) + (NumOfProducts * 0.05) + (HasCrCard * 0.1) + (IsActiveMember * 0.15)) / 2;

  // Gender, Age, Tenure, EstimatedSalary, and Geography could also influence customer satisfaction in complex ways
  // This is a simplified calculation and may not capture all the nuances of customer satisfaction

  return probability;
}

function customer_satisfaction_with_loyalty_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with a higher credit score are more likely to be satisfied with the loyalty program
  let creditScoreFactor = CreditScore / 1000;

  // Assuming that older customers are more likely to be satisfied with the loyalty program
  let ageFactor = Age / 100;

  // Assuming that customers with a higher balance in their accounts are more likely to be satisfied with the loyalty program
  let balanceFactor = Balance / 10000;

  // Assuming that active members are more likely to be satisfied with the loyalty program
  let isActiveMemberFactor = IsActiveMember ? 0.2 : 0;

  // Combining the factors to calculate the probability
  let probability = (creditScoreFactor + ageFactor + balanceFactor + isActiveMemberFactor) / 4;

  return probability;
}

function customer_trust_in_data_privacy_protection(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the probability based on various factors such as CreditScore, Age, Geography, and Gender
  let probability = 0.5; // Default probability
  
  // Adjust probability based on CreditScore
  if (CreditScore >= 700) {
    probability += 0.1;
  } else if (CreditScore < 500) {
    probability -= 0.1;
  }
  
  // Adjust probability based on Age
  if (Age > 30 && Age < 50) {
    probability += 0.05;
  } else if (Age >= 50) {
    probability -= 0.05;
  }
  
  // Adjust probability based on Geography
  if (Geography === 'Spain') {
    probability += 0.05;
  } else if (Geography === 'Germany') {
    probability += 0.1;
  } else {
    probability += 0.15;
  }
  
  // Adjust probability based on Gender
  if (Gender === 'Female') {
    probability += 0.05;
  }
  
  // Considering other factors, adjust the probability
  
  // Return the calculated probability
  return probability;
}

function customer_satisfaction_with_community_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher credit score are more likely to be satisfied with community engagement efforts
  let creditScoreFactor = CreditScore / 1000;

  // Assuming that older customers are more likely to be satisfied with community engagement efforts
  let ageFactor = 1 - (Age / 100);

  // Assuming that customers with higher balance are more likely to be satisfied with community engagement efforts
  let balanceFactor = Balance / 100000;

  // Assuming that active members are more likely to be satisfied with community engagement efforts
  let activeMemberFactor = IsActiveMember === 1 ? 1.2 : 1;

  // Assuming that customers with higher estimated salary are more likely to be satisfied with community engagement efforts
  let salaryFactor = EstimatedSalary / 10000;

  // Calculate the overall probability of satisfaction with community engagement efforts
  let satisfactionProbability = (creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + salaryFactor) / 5;

  return satisfactionProbability;
}

function customer_perception_of_personalized_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Gender and geography have an impact on perception

    let genderImpact = Gender === 'Male' ? 0.1 : -0.1;

    let geographyImpact = Geography === 'France' ? 0.05 : -0.05;

    // Age also plays a role
    let ageImpact = Age < 30 ? 0.2 : Age < 40 ? 0.15 : 0.1;

    // Credit score influences the perception
    let creditScoreImpact = Math.max(Math.min((CreditScore - 600) / 300, 1), 0) * 0.15;

    // Balance and Estimated Salary also contribute
    let financialImpact = (Balance + EstimatedSalary) / 200000;

    // Combining all impacts
    let totalImpact = genderImpact + geographyImpact + ageImpact + creditScoreImpact + financialImpact;

    // Sigmoid function to map total impact to a probability between 0 and 1
    let probability = 1 / (1 + Math.exp(-totalImpact));

    return probability;
}

function customer_participation_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the input parameters to compute the probability of customer participation in customer satisfaction surveys
  // This could involve analyzing historical data, identifying patterns, and making assumptions based on the provided information

  // For example, one could consider factors such as age, credit score, tenure, and activity level to estimate the likelihood of survey participation

  // After performing the necessary calculations, return the probability as a value between 0 and 1
  return 0.75; // Placeholder value, actual computation should be performed as described above
}

function customer_emotional_response_to_customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on customer information
  let probability = 0.5; // Placeholder probability

  // Use CreditScore, Age, IsActiveMember, and other parameters to adjust the probability
  probability += (CreditScore / 850) * 0.2; // Adjust based on CreditScore
  probability += (Age / 100) * 0.3; // Adjust based on Age
  probability += IsActiveMember * 0.1; // Adjust based on IsActiveMember

  // Use other parameters to further adjust the probability
  if (Geography === 'France') {
    probability += 0.1; // Adjust based on Geography
  } else {
    probability -= 0.1; // Adjust based on Geography
  }

  if (NumOfProducts === 2 || NumOfProducts === 3) {
    probability += 0.1; // Adjust based on NumOfProducts
  } else {
    probability -= 0.1; // Adjust based on NumOfProducts
  }

  // Return the calculated probability
  return probability;
}

function customer_perception_of_future_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Basic calculations based on the input parameters
  let perceptionScore = 0;

  // Adjust perceptionScore based on CreditScore, Geography, Gender, Age, and other factors
  if (CreditScore > 600) {
    perceptionScore += 0.2;
  }

  if (Geography === 'France') {
    perceptionScore += 0.1;
  } else {
    perceptionScore += 0.15;
  }

  if (Gender === 'Female') {
    perceptionScore += 0.05;
  }

  if (Age > 40 && Age < 60) {
    perceptionScore += 0.1;
  }

  // Using IsActiveMember and HasCrCard to adjust perceptionScore
  if (IsActiveMember === 1 && HasCrCard === 1) {
    perceptionScore += 0.1;
  } else {
    perceptionScore -= 0.05;
  }

  // Impact of EstimatedSalary and Balance on perceptionScore
  if (EstimatedSalary > 50000) {
    perceptionScore += 0.1;
  }

  if (Balance > 0) {
    perceptionScore += 0.05;
  }

  // Final probability calculation based on perceptionScore
  let probability = 1 / (1 + Math.exp(-perceptionScore));

  return probability;
}

function customer_satisfaction_with_product_reliability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Calculate the probability based on the given parameters
    // It's hard to accurately predict customer satisfaction with product reliability without more specific data or feedback, but we can make an estimate based on general trends and assumptions
    // For demonstration purposes, let's assume that younger customers, customers with higher credit scores, and customers with higher account balances are generally more satisfied with product reliability
    // Based on these assumptions, we can calculate a rough estimate of the probability of customer satisfaction with product reliability
    
    let probability = 0.5; // Default probability
    
    // Adjust the probability based on the given parameters
    if (Age < 30) {
        probability += 0.1; // Younger customers are more likely to be satisfied
    } else if (Age > 50) {
        probability -= 0.1; // Older customers are less likely to be satisfied
    }
    
    if (CreditScore > 700) {
        probability += 0.2; // Higher credit score indicates higher satisfaction
    } else if (CreditScore < 500) {
        probability -= 0.2; // Lower credit score indicates lower satisfaction
    }
    
    if (Balance > 100000) {
        probability += 0.15; // Higher account balance indicates higher satisfaction
    } else if (Balance < 10000) {
        probability -= 0.15; // Lower account balance indicates lower satisfaction
    }
    
    // Other factors can also be considered for a more accurate estimation
    
    return probability;
}

function customer_preference_for_communication_channels(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that older customers are more likely to prefer traditional communication channels
  let ageFactor = Age > 50 ? 0.7 : 0.3;

  // Customers with higher credit scores may prefer digital communication channels
  let creditScoreFactor = CreditScore > 700 ? 0.6 : 0.4;

  // Customers with higher balances may prefer premium communication channels
  let balanceFactor = Balance > 10000 ? 0.8 : 0.2;

  // Female customers may have a preference for certain communication channels
  let genderFactor = Gender === 'Female' ? 0.5 : 0.5;

  // Active members are more likely to respond to communication, so they might have a different preference
  let isActiveMemberFactor = IsActiveMember === 1.0 ? 0.7 : 0.3;

  // Here we combine all the factors and calculate the overall probability
  let probability = (ageFactor * creditScoreFactor * balanceFactor * genderFactor * isActiveMemberFactor) / 5;

  return probability;
}

function customer_satisfaction_with_online_account_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability of customer satisfaction with the online account management system based on the input parameters
  let probability = 0.5; // Default probability

  // Perform some calculations based on the input parameters to estimate the probability
  
  // Example: If the customer has a high credit score and a long tenure, the probability of satisfaction might be higher
  if (CreditScore > 700 && Tenure > 5) {
    probability += 0.2;
  }

  // Example: If the customer has a low balance and is not an active member, the probability of satisfaction might be lower
  if (Balance === 0 && IsActiveMember === 0) {
    probability -= 0.3;
  }

  // Example: If the customer is from France, the probability of satisfaction might be slightly higher
  if (Geography === 'France') {
    probability += 0.1;
  }

  // Ensure the probability is within the valid range of 0 to 1
  probability = Math.max(0, Math.min(1, probability));
  
  return probability;
}

function customer_trust_in_customer_feedback_implementation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Default probability

  // Adjust the probability based on the input parameters
  // For example, higher credit score, active member, and longer tenure may increase trust
  // While higher estimated salary, higher number of products, and higher balance may decrease trust

  // Performing some calculations and adjustments based on the input parameters to modify the probability
  
  return probability; // Return the final probability
}

function customer_satisfaction_with_product_variety(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the input parameters, we can calculate the probability of customer satisfaction with product variety
  // Here we might consider factors such as customer's age, credit score, number of products, balance, and activity level
  
  // Let's calculate the probability based on a simple scoring model using the input parameters
  // We'll assign weights to each parameter and calculate the probability based on the weighted sum

  let probability = 0.5; // default probability

  // Calculate probability based on the input parameters

  // Weight for Age
  let ageWeight = 0.1;
  probability += Age * ageWeight;

  // Weight for Credit Score
  let creditScoreWeight = 0.15;
  probability += CreditScore * creditScoreWeight;

  // Weight for Number of Products
  let numOfProductsWeight = 0.1;
  probability += NumOfProducts * numOfProductsWeight;

  // Weight for Balance
  let balanceWeight = 0.1;
  probability += Balance * balanceWeight / 100000; // Normalize balance by dividing by 100000

  // Weight for Active Membership
  let isActiveMemberWeight = 0.2;
  probability += IsActiveMember * isActiveMemberWeight;

  // Weight for Estimated Salary
  let estimatedSalaryWeight = 0.1;
  probability += EstimatedSalary * estimatedSalaryWeight / 100000; // Normalize estimated salary by dividing by 100000

  // Other parameters can also be considered and weighted accordingly

  return probability;
}

function customer_perception_of_customer_appreciation_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize the probability
    let probability = 0.5;

    // Adjust the probability based on different parameters
    if (Geography === 'Germany') {
        probability += 0.1; // Increment probability if customer is from Germany
    }

    if (IsActiveMember === 1) {
        probability += 0.15; // Increment probability if the customer is an active member
    }

    if (Balance > 100000) {
        probability += 0.05; // Increment probability if the customer's balance is high
    }

    if (NumOfProducts >= 2) {
        probability += 0.1; // Increment probability if the customer has multiple products
    }

    // Age factor
    if (Age < 30) {
        probability += 0.05; // Increment probability if the customer is young
    } else if (Age < 50) {
        probability += 0.1; // Increment probability if the customer is middle-aged
    } else if (Age >= 50) {
        probability += 0.05; // Increment probability if the customer is older
    }

    // Credit Score factor
    if (CreditScore > 700) {
        probability += 0.1; // Increment probability if the customer's credit score is high
    }

    // Return the calculated probability
    return probability;
}

function customer_satisfaction_with_after_sales_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer satisfaction with after-sales service based on the given parameters
  let probability = 0.5; // Placeholder value

  // Considering various factors such as CreditScore, Age, Geography, Gender, etc. 
  // and their potential impact on customer satisfaction with after-sales service

  // Perform complex calculations, and analyze the impact of each parameter on customer satisfaction

  // Return the computed probability
  return probability;
}

function customer_emotional_response_to_brand_communications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on customer information
  let probability = 0.5; // Default probability

  // Some sample calculations (you can modify these based on your domain knowledge)
  if (CreditScore > 700) {
    probability += 0.1; // Increase the probability if Credit Score is high
  }
  if (NumOfProducts === 1) {
    probability -= 0.1; // Decrease the probability if customer has only one product
  }
  if (IsActiveMember === 1) {
    probability += 0.15; // Increase the probability if customer is an active member
  }
  if (Geography === 'France') {
    probability += 0.05; // Increase the probability if customer is from France
  }

  // Return the calculated probability
  return probability;
}

function customer_perception_of_corporate_social_responsibility_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's make a simple calculation based on some of the given parameters to calculate the probability
  
  let probability = 0.5; // initial probability

  if (Geography === "Spain" && Age > 30) {
    probability += 0.1; // Increase probability if customer is from Spain and above 30 years old
  }
  
  if (NumOfProducts > 1 && IsActiveMember === 1) {
    probability += 0.15; // Increase probability if the customer has more than 1 product and is an active member
  }

  if (CreditScore > 700 && EstimatedSalary > 100000) {
    probability += 0.2; // Increase probability if the credit score is high and estimated salary is high
  }

  // Ensure probability doesn't exceed 1
  probability = Math.min(probability, 1);

  return probability;
}

function customer_satisfaction_with_product_affordability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Check if the customer has a good credit score, more likely to afford products
    let creditScoreProbability = CreditScore > 650 ? 0.8 : 0.2;

    // Check if the customer has a high estimated salary, more likely to afford products
    let salaryProbability = EstimatedSalary > 100000 ? 0.7 : 0.3;

    // Check if the customer is an active member, more likely to have satisfaction with the affordability
    let activeMemberProbability = IsActiveMember ? 0.9 : 0.4;

    // Combine the probabilities with weights to compute the overall satisfaction probability
    let overallProbability = (creditScoreProbability * 0.4) + (salaryProbability * 0.3) + (activeMemberProbability * 0.3);

    return overallProbability;
}

function customer_trust_in_pricing_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers from Spain have a higher trust in pricing transparency
  let countryTrustFactor = (Geography === 'Spain') ? 0.2 : 0;
  
  // Assume that younger customers have a higher trust in pricing transparency
  let ageTrustFactor = -0.02 * Age;
  
  // Assume that having more products and a credit card increase trust in pricing transparency
  let productTrustFactor = 0.1 * NumOfProducts * HasCrCard;
  
  // Assume that active members of the company have a higher trust in pricing transparency
  let activeMemberFactor = 0.15 * IsActiveMember;
  
  // Assume that higher estimated salary increases trust in pricing transparency
  let salaryTrustFactor = 0.000002 * EstimatedSalary;
  
  // Assume that higher credit score increases trust in pricing transparency
  let creditScoreFactor = 0.001 * CreditScore;
  
  // Calculate the combined factors
  let combinedTrustFactor = countryTrustFactor + ageTrustFactor + productTrustFactor + activeMemberFactor + salaryTrustFactor + creditScoreFactor;

  // Bound the combined trust factor between 0 and 1
  let trustProbability = Math.min(1, Math.max(0, combinedTrustFactor));

  return trustProbability;
}

function customer_emotional_response_to_company_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that positive emotional response is more likely for customers with higher credit score
    let creditScoreImpact = CreditScore > 700 ? 0.8 : 0.2;

    // Assume that positive emotional response is more likely for younger customers
    let ageImpact = Age < 40 ? 0.7 : 0.3;

    // Assume that customers with more products are more likely to have positive emotional response
    let productsImpact = NumOfProducts > 1 ? 0.6 : 0.4;

    // Assume that active members are more likely to have positive emotional response
    let activeMemberImpact = IsActiveMember === 1 ? 0.75 : 0.25;

    // Combine the impacts to calculate the overall probability
    let probability = (creditScoreImpact + ageImpact + productsImpact + activeMemberImpact) / 4;

    return probability;
}



function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return accountAge(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + monthlyUsage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerSupportInteractions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contractLength(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + billingIssues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitorOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + productUpgrades(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + surveyFeedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + paymentMethods(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usagePatterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + loyaltyProgramParticipation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + userInterfaceSatisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + promotionalOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + accountManagerInteraction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + serviceOutages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + communityEngagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + subscriptionPlanFlexibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + rewardsProgramAccess(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerReferralProgram(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + appUsageFrequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerFeedbackResponseTime(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personalizedRecommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + websitePerformance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + loyaltyProgramRewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + omnichannelExperience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerEducationMaterials(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + cybersecurityMeasures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + supplierReliability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personalizedCommunication(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerLocation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + familyDiscounts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + productRange(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + marketCompetition(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerEngagementEvents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + annualPriceIncreases(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerSatisfactionScores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + corporateSocialResponsibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + self_serviceOptions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customerEmpowermentInitiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_onboarding_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_relationship_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_preferences_tracking(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feedback_utilization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_success_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_retention_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_loyalty(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_previous_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_trust_in_the_company(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_emotional_connection(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_openness_to_communication(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_empowerment_and_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_fear_of_missing_out__FOMO_(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_company_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_emotional_needs_fulfillment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_trust_in_the_company_s_leadership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_pricing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_perception_of_fairness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feelings_of_appreciation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_identification_with_the_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feeling_of_being_heard(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_emotional_response_to_marketing_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_willingness_to_advocate_for_the_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_brand_evangelism(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_past_resolutions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feelings_of_belonging(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_opinion_on_company_ethics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_experience_consistency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_involvement_in_product_development(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_social_responsibility_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_perception_of_company_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_delivery_logistics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_emotional_attachment_to_employees(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_resistance_to_change(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_customer_engagement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_perception_of_innovation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_billing_process(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_loyalty_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_trust_in_data_privacy_protection(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_community_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_perception_of_personalized_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_participation_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_emotional_response_to_customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_perception_of_future_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_product_reliability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_preference_for_communication_channels(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_online_account_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_trust_in_customer_feedback_implementation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_product_variety(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_perception_of_customer_appreciation_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_after_sales_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_emotional_response_to_brand_communications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_perception_of_corporate_social_responsibility_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_with_product_affordability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_trust_in_pricing_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_emotional_response_to_company_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    