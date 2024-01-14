
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the customer's age
  let probability = 0;

  if (Age < 30) {
    probability = 0.7; // Younger customers are more likely to close their accounts
  } else if (Age >= 30 && Age < 50) {
    probability = 0.4; // Middle-aged customers have moderate likelihood to close their accounts
  } else {
    probability = 0.2; // Older customers are less likely to close their accounts
  }

  return probability;
}

function monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using the parameters to calculate the probability of monthly usage affecting customer churn.
  // One possible approach could be to use the Age, NumOfProducts, and IsActiveMember parameters to estimate the probability.
  // Sample calculation: 
  let probability = 0.5 * (Age / 100) + 0.3 * NumOfProducts + 0.2 * IsActiveMember;
  
  // Return the calculated probability
  return probability;
}

function customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Define some initial weights for different parameters
  const creditScoreWeight = 0.2;
  const ageWeight = 0.15;
  const balanceWeight = 0.1;
  const tenureWeight = 0.1;
  const numOfProductsWeight = 0.1;
  const isActiveMemberWeight = 0.1;
  const otherFactorsWeight = 0.25;

  // Perform some calculations based on the input parameters to compute the customer satisfaction score
  let score = CreditScore * creditScoreWeight +
              Age * ageWeight +
              Balance * balanceWeight +
              Tenure * tenureWeight +
              NumOfProducts * numOfProductsWeight +
              IsActiveMember * isActiveMemberWeight +
              Math.random() * otherFactorsWeight;

  // Normalize the score to a probability between 0 and 1
  const probability = 1 / (1 + Math.exp(-score));

  return probability;
}

function price_sensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize probability
  let probability = 0;

  // Apply logic to compute probability based on the given parameters
  // For example, we can consider CreditScore, Age, Balance, and EstimatedSalary to determine price sensitivity

  // Sample calculation - just an example
  if (CreditScore < 650 && Age < 35 && Balance > 100000 && EstimatedSalary < 50000) {
    probability = 0.7; // High price sensitivity
  } else {
    probability = 0.3; // Low price sensitivity
  }

  // Return the computed probability
  return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer support interactions based on various parameters such as CreditScore, Age, Balance, IsActiveMember, etc.
    
    // Assuming higher CreditScore generally indicates lower frustration level and lower probability of customer support interactions
    let creditScoreProbability = 1 - (CreditScore / 1000);

    // As Age increases, the probability of interactions might increase due to higher expectations or experience with similar situations
    let ageProbability = Age / 100;

    // Balance could be an indicator of financial stress which might lead to higher probability of customer support interactions
    let balanceProbability = Balance / 50000;

    // Assuming active members are more engaged and hence less likely to have customer support interactions
    let activeMemberProbability = 1 - IsActiveMember;

    // The probability of customer support interactions could also vary based on other parameters like Gender, Geography, NumOfProducts, etc. 
    // These parameters could be considered for additional calculations to further improve the accuracy.

    // Combining the probabilities and normalizing to get final probability
    let finalProbability = (creditScoreProbability + ageProbability + balanceProbability + activeMemberProbability) / 4;
    
    return finalProbability;
}

function length_of_relationship(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of length_of_relationship based on the given parameters

  // For the purpose of this demonstration, let's assume a simple calculation based on Age and Tenure
  // We'll consider customers with higher Age and Tenure to have a higher probability of long-standing relationship
  // We'll use a linear scale to combine Age and Tenure into a single factor

  const ageFactor = Age / 100; // Normalize Age to a scale of 0 to 1
  const tenureFactor = Tenure / 10; // Normalize Tenure to a scale of 0 to 1

  // Combine the factors - giving more weight to Age than Tenure
  const combinedFactor = (0.7 * ageFactor) + (0.3 * tenureFactor);

  // Assume that higher combinedFactor indicates a higher probability of longer relationship
  const probability = combinedFactor;

  return probability;
}

function competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the parameters
    let probability = 0.5;

    if (Geography === 'Spain' && Age > 30 && IsActiveMember === 0) {
        probability += 0.2;
    }

    if (CreditScore < 700 && Balance > 100000) {
        probability += 0.3;
    }

    if (NumOfProducts > 1 || HasCrCard === 0) {
        probability += 0.1;
    }

    return probability;
}

function product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.5;
    
    if (CreditScore > 650 && Age > 30 && IsActiveMember === 1 && EstimatedSalary > 100000) {
        probability = 0.8;
    } else if (CreditScore > 600 && Age > 25 && IsActiveMember === 1 && EstimatedSalary > 80000) {
        probability = 0.7;
    } else if (CreditScore > 550 && Age > 20 && IsActiveMember === 1) {
        probability = 0.6;
    } else if (CreditScore < 500) {
        probability = 0.3;
    }

    // Return the probability
    return probability;
}

function life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating probability based on Age, Marital status, and Geography
  let probability = 0;
  
  // Considering age as a factor
  if (Age > 25 && Age < 40) {
    probability += 0.3; // Higher probability for age group 26-39
  } else if (Age >= 40 && Age <= 50) {
    probability += 0.2; // Lower probability for age group 40-50
  }
  
  // Considering marital status as a factor
  if (Surname.length < 6) {
    probability += 0.1; // Higher probability for customers with shorter surnames (assumed younger customers or unmarried)
  }
  
  // Considering geography as a factor
  if (Geography === "France") {
    probability += 0.05; // Slightly higher probability for customers from France
  }
  
  // Normalizing the probability to be between 0 and 1
  probability = Math.min(1, Math.max(0, probability));
  
  return probability;
}

function communication_effectiveness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the input parameters
  let communicationProbability = 0.5; // Default probability
  
  // Adjust the probability based on the input parameters
  if (Geography === 'France') {
    communicationProbability += 0.1;
  } else if (Geography === 'Germany') {
    communicationProbability += 0.2;
  } else if (Geography === 'Spain') {
    communicationProbability += 0.15;
  }

  if (CreditScore > 700) {
    communicationProbability += 0.1;
  }

  if (Age < 30) {
    communicationProbability -= 0.05;
  } else if (Age > 50) {
    communicationProbability += 0.05;
  }

  if (NumOfProducts === 1) {
    communicationProbability -= 0.1;
  } else if (NumOfProducts === 3) {
    communicationProbability += 0.1;
  }

  if (HasCrCard === 1) {
    communicationProbability += 0.05;
  }

  if (IsActiveMember === 1) {
    communicationProbability += 0.1;
  }

  // Making sure the probability is within the range 0 to 1
  communicationProbability = Math.max(0, Math.min(1, communicationProbability));

  return communicationProbability;
}

function social_media_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using CreditScore, Age, NumOfProducts, and EstimatedSalary as indicators of customer's interest and loyalty
  let interestAndLoyaltyScore = (CreditScore * 0.3) + (Age * 0.4) + (NumOfProducts * 0.1) + (EstimatedSalary * 0.2);

  // Calculating the probability based on the interestAndLoyaltyScore
  let probability = interestAndLoyaltyScore / 1000; // Normalizing the score to a probability between 0 and 1

  return probability;
}

function loyalty_program_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 0.5;

    // Some creative calculations and logic based on the input parameters to determine loyalty program participation
    if (CreditScore > 600 && Age > 25 && IsActiveMember === 1) {
        probability = 0.8;
    } else {
        probability = 0.3;
    }

    // Returning the calculated probability
    return probability;
}

function economic_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the CreditScore and EstimatedSalary, calculate the likelihood of economic conditions impacting the decision
  let creditScoreImpact = CreditScore / 1000; 
  let salaryImpact = EstimatedSalary / 200000;
  
  // Based on Geography, calculate the likelihood of economic conditions impacting the decision
  let geographyImpact = Geography === 'Spain' ? 0.2 : 0.1;
  
  // Based on the Age, calculate the likelihood of economic conditions impacting the decision
  let ageImpact = Age > 40 ? 0.3 : 0.1;
  
  // Calculate the overall impact considering all the factors
  let overallImpact = (creditScoreImpact + salaryImpact + geographyImpact + ageImpact) / 4;
  
  return overallImpact;
}

function peer_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of peer recommendations influencing customer's decision
    let probability = 0.0;

    if (NumOfProducts > 1 && IsActiveMember === 1 && Age >= 30 && Age <= 50 && Balance > 100000) {
        probability = 0.8; // High probability if customer has multiple products, is an active member, the age is between 30 and 50, and has a high balance
    } else if (Geography === 'Germany' && CreditScore > 700) {
        probability = 0.7; // Moderate probability if customer is from Germany and has a credit score over 700
    } else if (HasCrCard === 1 && Tenure > 2) {
        probability = 0.5; // Moderate probability if customer has a credit card and has been with the service for more than 2 years
    } else {
        probability = 0.3; // Default probability
    }

    return probability;
}

function technological_advancements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Given the inputs, we can compute a probability based on certain parameters
    // For example, we could consider the customer's Age, CreditScore, and EstimatedSalary
    // We could also consider the Geography to see if there are any technological trends in that region

    // Let's do a simple calculation, for demonstration purposes
    let probability = 0.5; // Base probability

    // Adjust probability based on Age, CreditScore, and EstimatedSalary
    if (Age > 30 && CreditScore > 600 && EstimatedSalary > 50000) {
        probability += 0.2; // Increase probability
    }

    // Adjust probability based on Geography
    if (Geography === 'USA') {
        probability += 0.1; // Increase probability for technological advancements in the USA
    }

    return probability;
}

function billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the probability of billing issues based on various factors such as credit score, tenure, balance, and customer's activity
  let probability = 0.3; // base probability

  // Adjust probability based on credit score
  probability += (850 - CreditScore) * 0.002;

  // Adjust probability based on tenure
  probability += Tenure * 0.05;

  // Adjust probability based on balance
  probability += Balance * 0.0001;

  // Adjust probability based on customer activity
  probability += (1 - IsActiveMember) * 0.2;

  return probability;
}

function personalization_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some code to calculate the probability of personalization_level based on the given parameters
    let probability = 0.5; // Placeholder value, calculate the actual probability based on the parameters

    // Example of using parameters to calculate the probability
    if (CreditScore > 700) {
        probability += 0.1;
    }
    if (Age < 25) {
        probability -= 0.2;
    }
    if (Geography === 'France') {
        probability += 0.05;
    }
    if (IsActiveMember === 1) {
        probability += 0.15;
    }

    // Return the computed probability
    return probability;
}

function trust_in_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize probability
    let probability = 0.5;

    // Adjust probability based on credit score
    if (CreditScore > 700) {
        probability += 0.1;
    } else if (CreditScore < 600) {
        probability -= 0.1;
    }

    // Adjust probability based on age
    if (Age < 30) {
        probability += 0.05;
    } else if (Age > 50) {
        probability -= 0.05;
    }

    // Adjust probability based on geography
    if (Geography === "France") {
        // France might have higher trust in the brand
        probability += 0.05;
    } else {
        // Other countries might have different trust levels
        probability -= 0.05;
    }

    // Adjust probability based on tenure
    if (Tenure > 5) {
        probability += 0.05;
    } else {
        probability -= 0.05;
    }

    // Adjust probability based on balance
    if (Balance > 100000) {
        probability += 0.1;
    } else if (Balance < 50000) {
        probability -= 0.1;
    }

    // Adjust probability based on customer activity
    if (IsActiveMember) {
        probability += 0.05;
    } else {
        probability -= 0.05;
    }

    // Adjust probability based on estimated salary
    if (EstimatedSalary > 120000) {
        probability += 0.05;
    } else if (EstimatedSalary < 80000) {
        probability -= 0.05;
    }

    // Ensure probability is within 0 to 1 range
    probability = Math.min(1, Math.max(0, probability));

    // Return the calculated probability
    return probability;
}

function perceived_value_for_money(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the perceived value for money is higher if the CreditScore is higher
    let probability = CreditScore / 1000;
    
    // Adjust the probability based on the Geography
    if (Geography === 'France') {
        probability += 0.1; // Assuming customers in France perceive higher value for money
    } else {
        probability -= 0.1; // Assuming customers outside of France perceive lower value for money
    }
    
    // Probability decreases with higher Age
    probability -= Age / 100;
    
    // Adjust the probability based on the IsActiveMember status
    if (IsActiveMember === 1) {
        probability += 0.05; // Assuming active members perceive higher value for money
    } else {
        probability -= 0.05; // Assuming inactive members perceive lower value for money
    }
    
    // Probability increases with lower NumOfProducts indicating better value for money
    probability += (4 - NumOfProducts) * 0.05;
    
    return probability;
}

function convenience_of_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Since convenience of service is subjective, we can use a weighted sum of different factors to estimate the probability
  let convenienceFactor = 0.3 * (1 - NumOfProducts/4) + 0.2 * IsActiveMember + 0.1 * (1 - HasCrCard) + 0.4 * (1 - Tenure/10);

  // Normalize the convenience factor to be between 0 and 1
  let probability = Math.max(0, Math.min(1, convenienceFactor));

  return probability;
}

function contract_terms(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability based on some of the input parameters
  let probability = 0.5; // Default probability

  // Adjust the probability based on specific criteria
  if (CreditScore > 700) {
    probability += 0.2;
  }

  if (Age > 30 && Age < 50) {
    probability += 0.1;
  }

  if (Tenure > 2) {
    probability += 0.15;
  }

  if (EstimatedSalary > 100000) {
    probability += 0.1;
  }

  // Other factors can be considered and added to the probability calculation

  // Return the calculated probability
  return probability;
}

function response_time_to_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // A simple calculation based on the given parameters
  let probability = 0.5; // Default probability
  
  if (Geography === 'France' && Age < 40 && CreditScore > 700) {
    probability = 0.8; // Higher probability for certain conditions
  } else if (Geography === 'Germany' && NumOfProducts > 1) {
    probability = 0.6; // Moderate probability for other conditions
  } else if (Age > 60 || Balance > 100000) {
    probability = 0.3; // Lower probability for some conditions
  }

  return probability;
}

function access_to_competitor_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0;

  // Example calculation (not based on any real data or model)
  if (CreditScore > 700 && Age > 30 && EstimatedSalary > 100000) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }

  // Return the calculated probability
  return probability;
}

function cultural_relevance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of cultural relevance based on the provided parameters
    let probability = 0.5; // Default probability
    
    // Use geography to determine cultural background
    if (Geography === 'France') {
        probability += 0.2; // Increase probability for customers from France
    } else if (Geography === 'Germany') {
        probability += 0.1; // Increase probability for customers from Germany
    }

    // Use gender to adjust probability
    if (Gender === 'Female') {
        probability += 0.1; // Increase probability for female customers
    }

    // Use customer's age to adjust probability
    if (Age <= 30) {
        probability += 0.1; // Increase probability for younger customers
    } else if (Age >= 50) {
        probability -= 0.1; // Decrease probability for older customers
    }

    // Use credit score to adjust probability
    if (CreditScore >= 700) {
        probability += 0.2; // Increase probability for customers with high credit score
    }

    // Use other parameters to adjust probability

    // Return the calculated probability
    return probability;
}

function community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher CreditScore are more likely to be involved in the community and social causes
    // Assuming CreditScore greater than 700 indicates higher involvement
    let creditScoreInvolvementProbability = CreditScore > 700 ? 0.8 : 0.2;

    // Assume that customers who are active members are more likely to be involved in the community and social causes
    let isActiveMemberInvolvementProbability = IsActiveMember === 1 ? 0.7 : 0.3;

    // Assume that customers with higher EstimatedSalary are more likely to be involved in the community and social causes
    // Assuming EstimatedSalary greater than 60000 indicates higher involvement
    let salaryInvolvementProbability = EstimatedSalary > 60000 ? 0.75 : 0.25;

    // Assuming all the probabilities are independent factors
    let communityInvolvementProbability = creditScoreInvolvementProbability * isActiveMemberInvolvementProbability * salaryInvolvementProbability;

    return communityInvolvementProbability;
}

function perceived_risk_of_switching(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of perceived risk of switching based on various factors

  // For example, you could use CreditScore, Age, and Tenure to calculate the probability
  let probability = ((CreditScore / 1000) * (Age / 100) + (Tenure / 10)) / 3;

  // You can add more complex calculations based on Geography, Gender, and other factors

  return probability;
}

function family_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of family influence based on the given parameters
  // Start by initializing a base probability
  let baseProbability = 0.1;

  // Adjust the base probability based on the provided information
  if (Geography === 'France' && NumOfProducts > 1) {
    baseProbability += 0.2;
  }
  if (Age < 30) {
    baseProbability += 0.1;
  }
  if (HasCrCard === 1 && IsActiveMember === 1) {
    baseProbability += 0.15;
  }

  // Return the calculated probability
  return baseProbability;
}

function trust_in_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Given the parameters, it's difficult to directly calculate the probability of trust_in_management. However, we can make an assumption that the probability of trust_in_management may be influenced by the level of customer satisfaction, the company's reputation, and the overall customer experience.
  // We can use the available parameters to perform some basic calculations to estimate the influence on trust_in_management.
  
  let satisfactionScore = (IsActiveMember * 0.5) + (NumOfProducts * 0.3) + (HasCrCard * 0.2); // Assuming satisfaction is influenced by being an active member, number of products, and having a credit card.
  
  let ageFactor = Age / 100; // Normalize the age to a factor between 0 and 1.
  
  let churnProbability = (Balance + EstimatedSalary) / (CreditScore + 1); // Using the ratio of balance and estimated salary to credit score as an indicator of likelihood to churn.
  
  let trustProbability = (satisfactionScore * 0.4) + (churnProbability * 0.3) + (ageFactor * 0.2) + (Tenure / 10 * 0.1); // Combining the factors to estimate the trust probability.
  
  return trustProbability;
}

function media_coverage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Default probability

  // Adjust the probability based on the input parameters
  if (CreditScore < 600) {
    probability -= 0.2; // If CreditScore is < 600, decrease probability
  } else if (CreditScore > 800) {
    probability += 0.2; // If CreditScore is > 800, increase probability
  }

  if (Geography === 'France') {
    probability += 0.1; // If the customer is from France, increase probability
  } else if (Geography === 'Germany') {
    probability -= 0.1; // If the customer is from Germany, decrease probability
  }

  if (Age < 25 || Age > 65) {
    probability -= 0.15; // If Age is < 25 or > 65, decrease probability
  }

  // Other factors can also be considered to adjust the probability

  return probability;
}

function emotional_attachment_to_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that emotional attachment to the brand is influenced by the length of tenure and the number of products the customer has
  let tenureFactor = 1 / (1 + Math.exp(-(0.1 * Tenure - 2))); // Sigmoid function to normalize tenure
  let productsFactor = 1 / (1 + Math.exp(-(0.2 * NumOfProducts - 4))); // Sigmoid function to normalize number of products
  // Combine the factors with weights and calculate the overall emotional attachment probability
  let emotionalAttachmentProbability = 0.6 * tenureFactor + 0.4 * productsFactor;
  return emotionalAttachmentProbability;
}

function user_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of user engagement based on the given parameters
  let probability = 0.5; // Placeholder value, actual calculation based on the parameters goes here

  // Use the parameters to compute the probability of user engagement
  // You can implement complex logic to calculate the probability based on the input parameters

  return probability;
}

function subscription_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on CreditScore, Age, NumOfProducts, IsActiveMember, EstimatedSalary, and other relevant parameters
  let probability = 0.5; // Placeholder value, replace with actual calculation

  // Example of probability calculation (not necessarily accurate)
  probability = (CreditScore / 1000) * (Age / 100) * (NumOfProducts / 4) * (1 - IsActiveMember) * (EstimatedSalary / 100000);

  return probability;
}

function trust_in_security_measures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a high CreditScore are more likely to trust in the company's security measures
  let creditScoreFactor = CreditScore / 850; // Normalize the credit score to a value between 0 and 1
  
  // Assume that customers who have been with the company for a longer time (higher tenure) are more likely to trust in the security measures
  let tenureFactor = Tenure / 10; // Normalize the tenure to a value between 0 and 1
  
  // Assume that older customers are more likely to trust in the company's security measures
  let ageFactor = Age / 100; // Normalize the age to a value between 0 and 1
  
  // Assume that the number of products a customer has could impact their trust in security measures
  let productFactor = 1 - (NumOfProducts / 4); // Normalize the number of products to a value between 0 and 1
  
  // Assume that active members are more likely to trust in the security measures
  let activeMemberFactor = IsActiveMember === 1 ? 1 : 0.5; // Assign a higher weight to active members
  
  // Combine all the factors to calculate the overall probability
  let overallProbability = (creditScoreFactor + tenureFactor + ageFactor + productFactor + activeMemberFactor) / 5;
  
  return overallProbability;
}

function availability_of_alternatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize probability
  let probability = 0;

  // Calculate probability based on CreditScore and EstimatedSalary
  if (CreditScore > 600 && EstimatedSalary > 100000) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }

  // Modify probability based on Geography
  if (Geography === 'Spain') {
    probability *= 0.9;
  } else {
    probability *= 1.1;
  }

  // Adjust probability based on NumOfProducts and IsActiveMember
  if (NumOfProducts === 1 && IsActiveMember === 1.0) {
    probability *= 1.2;
  } else {
    probability *= 0.8;
  }

  // Return the calculated probability
  return probability;
}

function perceived_convenience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of perceived convenience based on the input parameters
    let convenienceProbability = 0.5; // Placeholder probability, to be calculated based on the input parameters

    // Use the input parameters to adjust the convenienceProbability
    if (CreditScore > 700) {
        convenienceProbability += 0.2; // Higher credit score positively impacts perceived convenience
    }
    if (Geography === "Germany") {
        convenienceProbability += 0.1; // Customers in Germany may have higher perceived convenience
    }
    if (Age < 35) {
        convenienceProbability += 0.15; // Younger customers may perceive higher convenience
    }
    if (Balance > 100000) {
        convenienceProbability += 0.2; // Higher balance could indicate higher perceived convenience
    }
    if (IsActiveMember === 1) {
        convenienceProbability += 0.1; // Active members may perceive higher convenience
    }
    
    // Adjust probability based on other factors...

    return convenienceProbability; // Return the calculated probability of perceived convenience
}

function changes_in_family_structure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability based on the Age and Gender of the customer
    let probability = 0;

    // If the customer is young (under 35) and female, there might be a higher probability of changes in family structure
    if (Age < 35 && Gender === 'Female') {
        probability += 0.3;
    } else {
        probability += 0.1;
    }

    // If the customer has a high CreditScore, they might be more stable and less likely to have changes in family structure
    if (CreditScore > 700) {
        probability -= 0.1;
    }

    return probability;
}

function brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some imaginary logic to calculate probability based on the inputs
  let probability = 0.5; // Assume a base probability
  
  if (CreditScore > 700) {
    probability += 0.2; // Credit score above 700 positively affects brand reputation
  }
  
  if (Geography === 'Spain') {
    probability += 0.1; // Brand reputation might be higher in Spain
  }
  
  if (Age > 60) {
    probability += 0.15; // Older customers might care more about brand reputation
  }
  
  if (NumOfProducts === 1) {
    probability -= 0.1; // Customers with fewer products might be less affected by brand reputation
  }
  
  // Other conditions and adjustments based on input parameters
  
  return probability;
}

function educational_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's make some arbitrary assumptions and calculations for the probability of educational level affecting decision-making process and likelihood to churn
  let probability = 0.5; // Default probability

  // We can use Age as a factor, assuming that older customers with more education are less likely to churn
  // A simple assumption would be that customers above 30 years old with higher education might have lower churn probability
  if (Age > 30) {
    probability += 0.2; // Increase probability
  }

  // We can also consider Geography, assuming that educational level might vary by region
  // For example, customers in certain countries may give more importance to education
  if (Geography === 'France') {
    probability += 0.1; // Increase probability for France
  } else if (Geography === 'Germany') {
    probability += 0.05; // Increase probability for Germany
  }

  // Additionally, we can consider CreditScore and EstimatedSalary as indicators of education level
  // Customers with higher credit score or salary might have higher education and thus lower churn probability
  if (CreditScore > 700) {
    probability += 0.1; // Increase probability for higher credit score
  }
  if (EstimatedSalary > 50000) {
    probability += 0.1; // Increase probability for higher estimated salary
  }

  // Finally, let's return the calculated probability
  return probability;
}

function reviews_and_ratings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that the influence of reviews and ratings on customer's perception is relatively small compared to other factors
    // Using a linear combination of the input parameters to calculate the probability

    let probability = (CreditScore * 0.2) + (Age * 0.15) + (Tenure * 0.1) + (Balance * 0.05) + (NumOfProducts * 0.1) + 
                      (HasCrCard * 0.05) + (IsActiveMember * 0.1) + (EstimatedSalary * 0.15);
    
    // Assuming that geography and gender do not significantly affect the probability
    
    return probability;
}

function environmental_impact(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the environmental impact based on the given parameters
  let environmentalImpact = 0.5; // default value

  // Example: If the geography is not in a country known for environmental initiatives, decrease the impact
  if (Geography !== 'Germany' && Geography !== 'Netherlands' && Geography !== 'Sweden') {
    environmentalImpact -= 0.2;
  }

  // Example: If the customer has a high credit score, increase the impact
  if (CreditScore > 700) {
    environmentalImpact += 0.3;
  }

  // Example: If the customer is an active member, increase the impact
  if (IsActiveMember === 1) {
    environmentalImpact += 0.2;
  }

  // Return the calculated environmental impact probability
  return environmentalImpact;
}

function customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that different regions have different preferences, we can calculate the probability based on the Geography parameter
  let probability = 0;

  if (Geography === "Spain") {
    probability = 0.7; // Higher probability for customers from Spain
  } else if (Geography === "Germany") {
    probability = 0.5; // Moderate probability for customers from Germany
  } else if (Geography === "France") {
    probability = 0.4; // Lower probability for customers from France
  } else {
    probability = 0.3; // Default probability for other regions
  }

  return probability;
}

function service_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of service outages based on the given parameters
  let probability = 0;

  // Example calculation (this is a simplified example, actual calculation could be more complex)
  if (CreditScore < 600 && Balance > 100000 && Age > 40 && IsActiveMember === 0) {
    probability = 0.8;
  } else {
    probability = 0.2;
  }

  return probability;
}

function life_stage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of life stage based on the given parameters
  let probability = 0.5; // Placeholder value, replace with actual calculation

  // Use the input parameters to infer the life stage probability
  // You can use conditional statements, equations, or any relevant logic based on the input parameters to compute the probability

  // Returning the computed probability
  return probability;
}

function perceived_social_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability of perceived social status influencing decision based on various factors

  let probability = 0.5; // Placeholder value for probability calculation

  // Example of using CreditScore to influence the probability
  if (CreditScore > 700) {
    probability += 0.2;
  } else if (CreditScore > 600) {
    probability += 0.1;
  } else {
    probability -= 0.1;
  }

  // Example of using Age to influence the probability
  if (Age > 30 && Age < 50) {
    probability += 0.15;
  } else if (Age >= 50) {
    probability -= 0.1;
  }

  // Example of using IsActiveMember to influence the probability
  if (IsActiveMember === 1) {
    probability += 0.1;
  } else {
    probability -= 0.1;
  }

  // Other factors and their influence on the probability can be added here

  return probability; // Returning the final calculated probability
}

function trust_in_data_privacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering various factors to calculate the probability of trust in data privacy
  let probability = 0.5; // Default probability

  // Adjust the probability based on different parameters
  if (CreditScore < 600) {
    probability -= 0.2; // Lower credit score decreases trust
  }
  if (NumOfProducts > 2) {
    probability -= 0.1; // More products may lead to lower trust
  }
  if (HasCrCard === 0) {
    probability -= 0.15; // No credit card can affect trust
  }
  if (IsActiveMember === 0) {
    probability -= 0.1; // Inactive members may have lower trust
  }
  if (Geography === 'France') {
    probability += 0.1; // Customers from France may have higher trust
  }

  // Other factors and adjustments can also be considered to calculate the final probability

  return probability;
}

function regulatory_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Utilizing CreditScore to assess financial stability impact of regulatory changes
  let probability = 0;
  if (CreditScore < 600) {
    probability += 0.3;
  } else if (CreditScore < 700) {
    probability += 0.2;
  } else if (CreditScore < 800) {
    probability += 0.1;
  }
  
  // Considering the influence of Age on the likelihood of being impacted by regulatory changes. Younger customers might be more sensitive.
  if (Age < 30) {
    probability += 0.1;
  }
  
  // Looking at the impact of Tenure, customers with longer tenure may be more resilient to changes.
  if (Tenure > 5) {
    probability -= 0.1;
  }
  
  // Taking into account the balance in the account. Higher balance might imply more stake in the industry, making the customer more sensitive to regulation changes.
  if (Balance > 100000) {
    probability += 0.15;
  }
  
  // Considering if the customer is an active member as they might be more engaged and thus more influenced by changes.
  if (IsActiveMember === 1) {
    probability += 0.1;
  }
  
  // Taking Geography into account, as regulations often differ by region.
  if (Geography === 'UK') {
    probability += 0.05;
  } else if (Geography === 'Germany') {
    probability += 0.1;
  }
  
  // Finally, factoring in the gender of the customer, with the assumption that gender might have some influence on the customer's response to regulatory changes.
  if (Gender === 'Female') {
    probability += 0.05;
  }
  
  return probability;
}

function personal_crisis(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Calculate the probability of personal crisis based on the input parameters
    let probability = 0;

    // Consider the age of the customer
    if (Age > 60 || Age < 18) {
        probability += 0.3;
    }

    // Analyze the credit score and balance
    if (CreditScore < 600 && Balance < 1000) {
        probability += 0.2;
    }

    // Check for active membership and number of products
    if (IsActiveMember === 0 && NumOfProducts < 2) {
        probability += 0.1;
    }

    // Consider gender and geography
    if (Gender === 'Female' && Geography === 'France') {
        probability += 0.1;
    }

    // Handle other specific conditions based on the input parameters

    return probability;
}

function reliability_of_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculations based on the input parameters to compute the probability of reliability_of_support
  // A simple example could be using CreditScore, Age, and IsActiveMember to calculate the probability

  let probability = ((CreditScore / 850) + (Age / 100) - (IsActiveMember * 0.2)) / 3;

  // Return the computed probability
  return probability;
}

function impact_of_advertising(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Check if the customer is from a specific high-impact advertising region
    let regionFactor = 0;
    if (Geography === 'France') {
        regionFactor = 0.2;
    } else if (Geography === 'Germany') {
        regionFactor = 0.3;
    } else if (Geography === 'Spain') {
        regionFactor = 0.25;
    }

    // Analyze the customer's behavior based on credit score, age, tenure, balance, and estimated salary
    // Use a weighted average to combine these factors
    let behaviorFactor = (CreditScore * 0.2 + Age * 0.3 + Tenure * 0.1 + Balance * 0.15 + EstimatedSalary * 0.25) / 100000;

    // Consider the customer's activity level and products they use
    let activityFactor = (NumOfProducts * 0.15 + HasCrCard * 0.1 + IsActiveMember * 0.2) / 4;

    // Combine all the factors to calculate the probability of impact of advertising
    let probability = (regionFactor + behaviorFactor + activityFactor) / 3;

    return probability;
}

function perceived_ethical_practices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use the CreditScore to gauge the financial health of the customer and its potential impact on their perception of the company's ethical practices
  let creditScoreImpact = CreditScore / 1000; // Normalize the credit score to a value between 0 and 1
  
  // Analyze the Geography to consider the cultural and societal influence on ethical practices perception
  let geographyImpact = (Geography === "France") ? 0.3 : 0.1; // Higher impact if from France
  
  // Consider the Gender and Age, as different demographics may have varying expectations of ethical practices
  let genderImpact = (Gender === "Male") ? 0.2 : 0.3; // Higher impact if male
  let ageImpact = (Age / 100) * 0.4; // Normalize the age to a value between 0 and 1 and assign impact
  
  // Analyze the Balance, NumOfProducts, and Tenure to gauge the customer's engagement with the company and its likely impact on their perception of ethical practices
  let engagementImpact = (Balance + NumOfProducts + Tenure) / 30000; // Normalize and calculate combined impact
  
  // Evaluate the customer's use of HasCrCard and IsActiveMember to consider their level of involvement with the company
  let cardMembershipImpact = (HasCrCard + IsActiveMember) / 2 * 0.1; // Combine and assign impact
  
  // Consider the EstimatedSalary to understand the customer's financial position and potentially its impact on ethical practices perception
  let salaryImpact = EstimatedSalary / 200000; // Normalize the salary to a value between 0 and 1
  
  // Aggregate all impacts and calculate the probability of perceived ethical practices influence on account closure
  let probability = (0.3 * creditScoreImpact) + (0.2 * geographyImpact) + (0.1 * genderImpact) + (0.2 * ageImpact) + (0.2 * engagementImpact) + (0.1 * cardMembershipImpact) + (0.1 * salaryImpact);
  
  return probability; // Return the calculated probability
}

function brand_loyalty(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let loyaltyProbability = 0.5; // Placeholder value, replace with actual calculation based on the parameters

  // Perform calculations to determine the probability of brand loyalty impacting the decision

  return loyaltyProbability;
}

function trust_in_leadership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability based on some assumptions and parameters
    let probability = 0.5; // Default probability

    // You could add more complex calculations based on the input parameters to make a more accurate prediction.
    // For example, you could analyze the correlation between CreditScore, Age, Gender, and IsActiveMember to trust in leadership.

    return probability;
}

function product_diversification(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that a higher number of products/services offered by the company indicates better product diversification
  // We will calculate the probability based on the number of products offered and the credit score of the customer

  // Normalizing the credit score to be between 0 and 1
  const normalizedCreditScore = CreditScore / 1000;

  // Calculating the probability based on the number of products and the credit score
  // The probability increases as the number of products increases and the credit score improves
  let probability = (NumOfProducts / 4) * (1 - normalizedCreditScore);

  // Applying some additional factors such as member activity and balance
  if (IsActiveMember === 1) {
    // If the customer is an active member, we increase the probability
    probability += 0.2;
  }

  if (Balance > 50000) {
    // If the customer's balance is high, we increase the probability
    probability += 0.1;
  }

  // We will assume that the other factors like age, tenure, geography, and gender do not directly impact product diversification

  return probability;
}

function access_to_customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Convert input parameters into a numeric representation
  let features = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
  
  // Generate a weighted sum of the input parameters to represent the likelihood of access to customer feedback impacting the decision
  let weightedSum = features.reduce((acc, val) => acc + val, 0);
  
  // Normalize the weighted sum to be between 0 and 1
  let probability = weightedSum / (features.length * 1000);

  return probability;
}

function job_stability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0;

  // Use the parameters to make a deterministic calculation for job stability probability
  // For example, you can consider factors such as Age, CreditScore, IsActiveMember, Tenure, and others to estimate the probability

  return probability;
}

function influence_of_opinion_leaders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on customer's attributes
  let probability = 0.5;  // Placeholder probability

  // Use CreditScore, Age, NumOfProducts, IsActiveMember, EstimatedSalary, and other attributes to compute the probability
  if (CreditScore > 700 && Age > 30 && NumOfProducts === 2 && IsActiveMember === 0 && EstimatedSalary > 100000) {
    probability = 0.7;
  } else {
    probability = 0.3;
  }

  return probability;
}

function personal_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Placeholder value, you should implement the actual calculation
  
  // Example of using parameters to calculate probability:
  if (Geography === 'Spain' && Age > 50 && EstimatedSalary > 100000) {
    probability = 0.8; // Higher probability based on certain conditions
  } else {
    probability = 0.3; // Lower probability for other conditions
  }

  // Return the calculated probability
  return probability;
}

function perceived_company_stability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Start by calculating a base probability based on CreditScore, Age, and Geography
  let baseProbability = 0.5;
  if (CreditScore > 700) {
    baseProbability += 0.1;
  }
  if (Age > 30 && Age < 50) {
    baseProbability += 0.15;
  }
  if (Geography === "Germany") {
    baseProbability += 0.05;
  }

  // Adjust the base probability based on other factors
  if (Tenure < 5) {
    baseProbability -= 0.1;
  }
  if (Balance === 0) {
    baseProbability -= 0.05;
  }
  if (NumOfProducts > 2) {
    baseProbability -= 0.1;
  }
  if (HasCrCard === 0) {
    baseProbability -= 0.05;
  }
  if (IsActiveMember === 1) {
    baseProbability += 0.1;
  }
  if (EstimatedSalary > 150000) {
    baseProbability += 0.05;
  }

  // Make sure the probability is within 0 to 1 range
  baseProbability = Math.max(0, Math.min(1, baseProbability));

  return baseProbability;
}

function accessibility_of_information(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // A set of rules to calculate the probability of accessibility_of_information
  let probability = 0.5; // Default probability

  // Example rule: If the customer is from France, increase the probability
  if (Geography === 'France') {
    probability += 0.1;
  }

  // Example rule: If the customer's credit score is above 700, increase the probability
  if (CreditScore > 700) {
    probability += 0.2;
  }

  // Example rule: If the customer has more than 2 products, increase the probability
  if (NumOfProducts > 2) {
    probability += 0.15;
  }

  // Example rule: If the customer is an active member, increase the probability
  if (IsActiveMember === 1) {
    probability += 0.1;
  }

  // You can add more rules based on the input parameters to calculate the probability

  return probability;
}

function impact_of_word_of_mouth(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  // Use CreditScore, Age, NumOfProducts, IsActiveMember, and EstimatedSalary to estimate the impact of word-of-mouth

  let probability = ((CreditScore / 1000) + (Age / 100) + (NumOfProducts * 0.1) + (IsActiveMember * 0.2) + (EstimatedSalary / 100000)) / 5;
  
  return probability;
}

function customer_s_tech_savviness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating probability based on the customer's attributes
    let probability = 0.5; // Default probability

    // Adjust probability based on customer's Age
    if (Age < 30) {
        probability += 0.1;
    } else if (Age > 40) {
        probability -= 0.1;
    }

    // Adjust probability based on customer's EstimatedSalary
    if (EstimatedSalary > 100000) {
        probability += 0.2;
    }

    // Adjust probability based on customer's IsActiveMember status
    if (IsActiveMember === 1) {
        probability += 0.1;
    } else {
        probability -= 0.1;
    }

    // Return the calculated probability
    return probability;
}

function perceived_level_of_innovation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of perceived level of innovation impact
  let probability = 0.5; // Default probability

  // Use the parameters to make assumptions and calculate the probability
  if (CreditScore > 700 && Age < 30 && NumOfProducts > 1) {
    probability = 0.8; // Higher probability for younger customers with good credit score and multiple products
  } else if (Geography === 'France' && IsActiveMember === 1) {
    probability = 0.6; // Moderate probability for active members from France
  } else if (Balance === 0 && EstimatedSalary > 100000) {
    probability = 0.4; // Lower probability for customers with zero balance and high salary
  }

  return probability;
}

function cultural_trends_and_shifts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value, actual calculation needed based on the parameters

  // Return the computed probability
  return probability;
}

function trust_in_third_party_partnerships(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Dummy calculation of the probability based on the input parameters
  let probability = 0.5;

  if (CreditScore > 600) {
    probability += 0.1;
  } else if (CreditScore < 400) {
    probability -= 0.1;
  }

  if (Geography === 'Germany') {
    probability += 0.2;
  } else if (Geography === 'France') {
    probability += 0.1;
  }

  if (Age > 35 && Age < 50) {
    probability += 0.15;
  } else if (Age > 50) {
    probability -= 0.1;
  }

  if (Balance > 100000) {
    probability += 0.1;
  }

  // Do more calculations based on other parameters if needed

  return probability;
}

function perceived_brand_exclusivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Define a base probability
  let baseProbability = 0.5;

  // Calculate a score based on credit score and age
  let creditScoreAgeScore = (CreditScore / 850) + (Age / 100);

  // Adjust the base probability based on credit score and age
  if (creditScoreAgeScore > 1) {
    baseProbability += 0.2; // Increase probability
  } else if (creditScoreAgeScore < 0.5) {
    baseProbability -= 0.1; // Decrease probability
  }

  // Adjust the base probability based on the geography
  if (Geography === "Germany") {
    baseProbability += 0.1; // Increase probability
  } else if (Geography === "France") {
    baseProbability += 0.05; // Increase probability
  }

  // Adjust the base probability based on the number of products
  if (NumOfProducts === 1) {
    baseProbability += 0.1; // Increase probability
  } else if (NumOfProducts === 2) {
    baseProbability += 0.05; // Increase probability
  }

  // Adjust the base probability based on the customer's activity
  if (HasCrCard === 1 && IsActiveMember === 1) {
    baseProbability += 0.1; // Increase probability
  } else {
    baseProbability -= 0.05; // Decrease probability
  }

  // Calculate the final probability by taking into account all factors
  let finalProbability = baseProbability * 100; // Convert to percentage

  // Return the final probability
  return finalProbability;
}

function political_factors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that political instability in the customer's country of residence may impact their satisfaction and likelihood to churn
  let politicalInstabilityImpact = 0;
  
  if (Geography === "France") {
    politicalInstabilityImpact = 0.1; // 10% chance of impact due to political instability in France
  } else if (Geography === "Germany") {
    politicalInstabilityImpact = 0.05; // 5% chance of impact due to political instability in Germany
  } else if (Geography === "Spain") {
    politicalInstabilityImpact = 0.07; // 7% chance of impact due to political instability in Spain
  }

  // Considering the customer's age, younger customers may be more sensitive to political events
  let ageImpact = 0;

  if (Age <= 30) {
    ageImpact = 0.1; // 10% chance of impact for younger customers
  } else if (Age > 30 && Age <= 50) {
    ageImpact = 0.05; // 5% chance of impact for middle-aged customers
  }

  // Combining the impacts to calculate the overall probability of political factors impacting customer satisfaction and likelihood to churn
  let overallImpactProbability = politicalInstabilityImpact + ageImpact;

  return overallImpactProbability;
}

function convenience_of_customer_service_channels(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the input parameters to determine the probability
  let probability = 0.5; // Placeholder value, replace with actual calculated probability

  // Your calculations here to compute the probability

  return probability;
}

function perceived_emotional_connection_with_the_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Example calculation, you would need to tailor these calculations based on your domain knowledge
  let probability = 0.5;  // Initial probability
  
  if (Geography === "Germany") {
    probability += 0.2;  // Increase probability for customers from Germany
  }
  
  if (Age > 30 && Age < 50) {
    probability += 0.1;  // Increase probability for customers in the age range of 30-50
  }
  
  if (NumOfProducts > 1) {
    probability += 0.15;  // Increase probability for customers with more than 1 product
  }

  // You can continue adding more conditions and adjustments to the probability based on the input parameters

  return probability;  // Return the computed probability
}

function sensitivity_to_social_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters
  let probability = 0.5; // Placeholder value, actual calculation based on the parameters is needed

  // Implement custom logic to calculate the probability based on the given parameters
  if (CreditScore > 700) {
    probability += 0.1;
  }
  if (Geography === 'France') {
    probability -= 0.2;
  }
  if (Gender === 'Female') {
    probability += 0.05;
  }
  if (Age < 30) {
    probability += 0.15;
  }
  if (Tenure > 5) {
    probability -= 0.1;
  }
  if (Balance < 50000) {
    probability += 0.05;
  }
  if (NumOfProducts === 1) {
    probability -= 0.1;
  }
  if (HasCrCard === 1) {
    probability += 0.05;
  }
  if (IsActiveMember === 1) {
    probability += 0.1;
  }
  if (EstimatedSalary > 100000) {
    probability -= 0.05;
  }

  // Return the computed probability
  return probability;
}

function perceived_opportunity_cost(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of perceived opportunity cost based on the parameters

  // Example: Calculate the probability based on CreditScore, Age, and Tenure
  let probability = ((CreditScore / 800) + (Age / 100) + (Tenure / 10)) / 3;

  // Other potential factors such as Geography, Gender, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary can also be considered to adjust the probability

  // Return the calculated probability
  return probability;
}

function word_of_mouth_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering CreditScore, Age, Balance, NumOfProducts, and IsActiveMember as factors influencing word of mouth recommendations
    let probability = 0;
    
    // CreditScore could influence word of mouth recommendations
    if (CreditScore > 700) {
        probability += 0.3;
    }
    
    // Age could influence word of mouth recommendations
    if (Age > 30 && Age < 50) {
        probability += 0.2;
    }
    
    // Balance could influence word of mouth recommendations
    if (Balance > 50000) {
        probability += 0.15;
    }
    
    // NumOfProducts could influence word of mouth recommendations
    if (NumOfProducts === 2) {
        probability += 0.1;
    }
    
    // IsActiveMember could influence word of mouth recommendations
    if (IsActiveMember === 1) {
        probability += 0.1;
    }
    
    return probability;
}

function importance_of_corporate_social_responsibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters

    // For the sake of example, let's assume that the probability increases if the customer is from a country with strong sustainability practices
    let probability = 0.5;

    // Adjust the probability based on other factors such as credit score, age, tenure, and balance
    if (CreditScore > 600) {
        probability += 0.1;
    }

    if (Age > 35 && Age < 55) {
        probability += 0.05;
    }

    if (Tenure > 5) {
        probability += 0.05;
    }

    if (Balance > 50000) {
        probability += 0.1;
    }

    // Adjust the probability based on customer's activity and products
    if (IsActiveMember == 1) {
        probability += 0.1;
    }

    if (NumOfProducts > 1) {
        probability += 0.05;
    }

    // Finally, adjust the probability based on estimated salary and card ownership
    if (EstimatedSalary > 100000) {
        probability += 0.05;
    }

    if (HasCrCard == 1) {
        probability += 0.05;
    }

    return probability;
}

function alignment_with_personal_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that the alignment of company's values with customer's personal values has a higher influence if the customer is a long-time member
  // We will consider Tenure and IsActiveMember for this calculation

  // Normalize Tenure and IsActiveMember values to the range [0, 1]
  const normalizedTenure = Tenure / 10;
  const normalizedIsActiveMember = IsActiveMember;

  // Combine the effects of Tenure and IsActiveMember
  const influenceFactor = (normalizedTenure + normalizedIsActiveMember) / 2;

  // Let's consider NumOfProducts as well. If the customer has more products, they might be more involved with the company's values
  // Normalize NumOfProducts to the range [0, 1]
  const normalizedNumOfProducts = NumOfProducts / 4;

  // Consider Age as a factor. Older customers might have stronger personal values and beliefs
  // Normalize Age to the range [0, 1]
  const normalizedAge = Age / 100;

  // Calculate the overall probability of alignment_with_personal_values
  const probability = (influenceFactor + normalizedNumOfProducts + normalizedAge) / 3;

  return probability;
}

function perceived_loyalty_programs_benefits(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability of perceived benefits of loyalty programs impacting customer's decision
    
    let loyaltyProgramsProbability = 0.5; // Base probability
    
    // Adjust probability based on customer's credit score
    if (CreditScore > 700) {
        loyaltyProgramsProbability += 0.1;
    } else if (CreditScore < 600) {
        loyaltyProgramsProbability -= 0.1;
    }
    
    // Adjust probability based on customer's age
    if (Age < 25) {
        loyaltyProgramsProbability -= 0.05;
    } else if (Age > 50) {
        loyaltyProgramsProbability += 0.05;
    }

    // Adjust probability based on customer's tenure
    if (Tenure > 5) {
        loyaltyProgramsProbability += 0.1;
    }
    
    // Adjust probability based on customer's balance
    if (Balance > 100000) {
        loyaltyProgramsProbability += 0.1;
    }

    // Adjust probability based on customer's activity
    if (IsActiveMember === 1) {
        loyaltyProgramsProbability += 0.1;
    }

    // Adjust probability based on customer's estimated salary
    if (EstimatedSalary > 75000) {
        loyaltyProgramsProbability += 0.05;
    }
    
    return loyaltyProgramsProbability;
}

function perceived_impact_of_service_on_well_being(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Placeholder value, replace with actual calculation

  // Use CreditScore, Age, Balance, and IsActiveMember to influence the probability
  if (CreditScore > 600 && Age >= 30 && Balance > 0 && IsActiveMember === 1) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }

  return probability;
}

function sensitivity_to_promotional_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with a higher credit score are less sensitive to promotional offers
    let creditScoreImpact = 1 - (CreditScore / 1000);

    // Assume that younger customers are more sensitive to promotional offers
    let ageImpact = Age / 100;

    // Assume that customers with a higher estimated salary are less sensitive to promotional offers
    let salaryImpact = 1 - (EstimatedSalary / 100000);

    // Assume that customers with more products are less sensitive to promotional offers
    let productsImpact = 1 - (NumOfProducts / 4);

    // Assume that inactive members are more sensitive to promotional offers
    let activityImpact = IsActiveMember === 1 ? -0.1 : 0.1;

    // Calculate the combined impact of the factors
    let combinedImpact = creditScoreImpact + ageImpact + salaryImpact + productsImpact + activityImpact;

    // Limit the combined impact to be between 0 and 1
    combinedImpact = Math.max(0, Math.min(combinedImpact, 1));

    // Return the probability of sensitivity to promotional offers
    return combinedImpact;
}

function perceived_impact_on_lifestyle(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Suppose we consider the following factors to compute the probability:
  // 1. Age - Younger customers might be more adaptable to changes in lifestyle, so we will give a higher weightage to age < 40.
  // 2. Balance - Customers with higher balance might have more at stake and thus be less likely to churn. 
  // 3. Tenure - Customers with longer tenure might have integrated the service better into their routine and are less likely to churn.
  // 4. IsActiveMember - Active members might have already made the service part of their lifestyle and are less likely to churn.

  let probability = 0;

  if (Age < 40) {
    probability += 0.3;
  }

  if (Balance > 50000) {
    probability -= 0.2;
  }

  if (Tenure > 5) {
    probability -= 0.1;
  }

  if (IsActiveMember === 1) {
    probability -= 0.15;
  }

  // Adjust probability based on other factors like CreditScore, Geography, Gender, NumOfProducts, HasCrCard, EstimatedSalary, etc.

  return probability;
}

function perceived_corporate_culture(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the corporate culture and values are perceived more positively in certain geographies
    let geographyFactor = 1.0;
    if (Geography === "France") {
        geographyFactor = 1.2;
    } else if (Geography === "Germany") {
        geographyFactor = 1.1;
    } else if (Geography === "Spain") {
        geographyFactor = 1.05;
    }

    // Assume that older customers are more influenced by corporate culture and values
    let ageFactor = 1.0;
    if (Age > 30) {
        ageFactor = 1.1;
    }

    // Assume that the balance in the account may affect the perception of corporate culture
    let balanceFactor = 1.0;
    if (Balance > 10000) {
        balanceFactor = 1.15;
    }

    // Assume that active members are more influenced by corporate culture and values
    let activityFactor = 1.0;
    if (IsActiveMember === 1.0) {
        activityFactor = 1.2;
    }

    // Combining the factors to calculate the probability of perceived corporate culture impact
    let probability = (CreditScore / 1000) * geographyFactor * ageFactor * balanceFactor * activityFactor;

    return probability;
}

function perceived_impact_on_social_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of perceived impact on social status based on customer information
  let probability = 0.5; // Placeholder value, actual probability calculation based on the input parameters needs to be implemented

  // Use a combination of customer attributes such as CreditScore, Gender, Age, etc. to influence the probability calculation

  // For example, higher CreditScore, being a female and having a higher balance might positively influence social status
  // However, lower Tenure, fewer NumOfProducts, and being an inactive member might negatively influence social status 

  // Perform some custom logic to evaluate the probability based on the input parameters

  return probability;
}

function perceived_impact_on_social_life(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that younger customers are more likely to be socially active and impacted by changes in social life
    let ageImpact = 1 - (Age / 100); 

    // Assuming that the number of products the customer has could influence their social interactions
    let productImpact = NumOfProducts * 0.1; 

    // Male customers are less likely to be impacted by changes in social life (just an assumption for this example)
    let genderImpact = Gender === 'Male' ? -0.2 : 0.2; 

    // Active members are more likely to be engaged in social activities related to the service
    let activityImpact = IsActiveMember === 1 ? 0.3 : -0.3; 

    // Combine the impacts and calculate the probability
    let probability = 0.5 + ageImpact + productImpact + genderImpact + activityImpact;

    return probability;
}

function sensitivity_to_product_reliability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Convert input data into numerical values and perform calculations
    let probability = 0;

    // Example calculation - you can replace this with your own logic
    if (CreditScore > 700 && Age > 35 && IsActiveMember === 1) {
        probability = 0.8;
    } else if (CreditScore > 650 && Age > 30) {
        probability = 0.6;
    } else {
        probability = 0.3;
    }

    return probability;
}

function trust_in_product_safety_measures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 0.5; // Placeholder value

    // Example: Adjust probability based on CreditScore
    if (CreditScore > 700) {
        probability += 0.1;
    } else if (CreditScore < 600) {
        probability -= 0.1;
    }

    // Example: Adjust probability based on Age
    if (Age > 30 && Age < 50) {
        probability += 0.05;
    }

    // ... other parameter-based adjustments

    return probability;
}

function perceived_impact_on_convenience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of perceived impact on convenience based on the given parameters
  let probability = 0.5; // Placeholder value

  // You can use the input parameters to come up with a probability calculation
  // For example, you can consider factors such as Geography, Age, CreditScore, and more to influence the probability

  // Your probability calculation logic goes here

  return probability;
}

function sensitivity_to_data_usage_and_storage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Default probability
  
  // Use CreditScore, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary to adjust the probability
  if (CreditScore > 650) {
    probability += 0.1;
  }
  if (Balance > 100000) {
    probability += 0.2;
  }
  if (NumOfProducts === 1) {
    probability -= 0.1;
  }
  if (IsActiveMember === 1) {
    probability += 0.1;
  }
  if (EstimatedSalary > 150000) {
    probability += 0.1;
  }

  // Adjust the probability based on other parameters such as Geography, Age, and Gender
  if (Geography === "Germany") {
    probability += 0.1;
  }
  if (Age > 30 && Age < 50) {
    probability += 0.1;
  }
  if (Gender === "Female") {
    probability -= 0.1;
  }

  return probability;
}

function trust_in_data_transparency_and_control(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming different geographical regions have different regulations on data transparency
  // Germany may have stricter regulations, which could lead to higher trust
  let trustBasedOnGeography = 0;
  if (Geography === 'Germany') {
    trustBasedOnGeography = 0.3;
  } else {
    trustBasedOnGeography = 0.1;
  }

  // Assuming customers with higher credit scores are more likely to trust company's transparency and control over user data
  let trustBasedOnCreditScore = CreditScore / 1000;

  // Assuming that older customers may place more value on data privacy
  let trustBasedOnAge = (1 - (Age / 100)) * 0.5;

  // Combining all factors to calculate the probability
  let probability = (trustBasedOnGeography + trustBasedOnCreditScore + trustBasedOnAge) / 3;

  return probability;
}

function perceived_impact_on_work_life_balance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by checking if the customer has a high balance, which could indicate a focus on work
  let balanceImpact = Balance > 100000 ? 0.7 : 0.3;

  // We'll also consider the age, as younger customers might be more sensitive to work-life balance
  let ageImpact = Age < 30 ? 0.6 : 0.4;

  // Next, we factor in the customer's tenure with the bank, as long-term relationships may prioritize work-life balance
  let tenureImpact = Tenure > 5 ? 0.5 : 0.5;

  // Additionally, we consider whether the customer is an active member, as engagement might indicate a better work-life balance
  let activityImpact = IsActiveMember === 1 ? 0.4 : 0.6;

  // Finally, let's combine all the impacts and calculate the overall probability
  let probability = (balanceImpact + ageImpact + tenureImpact + activityImpact) / 4;

  return probability;
}

function sensitivity_to_product_customization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some complex calculations here based on the given parameters to compute the probability
  let probability = 0.5; // Placeholder value
  
  // Example: Adjust probability based on customer's age
  if (Age < 30) {
    probability -= 0.1;
  } else if (Age >= 30 && Age < 50) {
    probability += 0.1;
  } else {
    probability += 0.2;
  }
  
  // Example: Adjust probability based on customer's credit score
  if (CreditScore < 600) {
    probability -= 0.2;
  } else if (CreditScore >= 600 && CreditScore < 700) {
    probability += 0.05;
  } else {
    probability += 0.1;
  }

  // Other calculations based on the given parameters to adjust the probability

  return probability;
}

function trust_in_ongoing_product_support_and_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the input parameters to determine the probability
  let probability = 0.5; // Placeholder value, actual computation based on the parameters should be implemented here
  if (CreditScore > 700 && IsActiveMember === 1) {
    probability = 0.8;
  } else if (Age > 50 && NumOfProducts > 2) {
    probability = 0.7;
  } else {
    probability = 0.4;
  }
  return probability;
}

function sensitivity_to_product_pricing_and_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Use CreditScore, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability
    let probability = 0;

    // Some arbitrary calculations based on the input parameters
    probability = (CreditScore * 0.3 + Balance * 0.2 + NumOfProducts * 0.1 + IsActiveMember * 0.2 + EstimatedSalary * 0.2) / 1000;

    return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + price_sensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + length_of_relationship(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + communication_effectiveness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + social_media_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + loyalty_program_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + economic_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + peer_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + technological_advancements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personalization_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_value_for_money(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + convenience_of_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_terms(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + response_time_to_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + access_to_competitor_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + cultural_relevance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_risk_of_switching(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + family_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + media_coverage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + emotional_attachment_to_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + user_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + subscription_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_security_measures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + availability_of_alternatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_convenience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + changes_in_family_structure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + educational_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + reviews_and_ratings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + environmental_impact(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + service_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + life_stage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_social_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_data_privacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + regulatory_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personal_crisis(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + reliability_of_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + impact_of_advertising(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_ethical_practices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_loyalty(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_leadership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_diversification(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + access_to_customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + job_stability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + influence_of_opinion_leaders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personal_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_company_stability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + accessibility_of_information(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + impact_of_word_of_mouth(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_s_tech_savviness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_level_of_innovation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + cultural_trends_and_shifts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_third_party_partnerships(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_brand_exclusivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + political_factors(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + convenience_of_customer_service_channels(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_emotional_connection_with_the_brand(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sensitivity_to_social_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_opportunity_cost(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + word_of_mouth_recommendations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + importance_of_corporate_social_responsibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + alignment_with_personal_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_loyalty_programs_benefits(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_impact_of_service_on_well_being(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sensitivity_to_promotional_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_impact_on_lifestyle(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_corporate_culture(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_impact_on_social_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_impact_on_social_life(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sensitivity_to_product_reliability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_product_safety_measures(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_impact_on_convenience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sensitivity_to_data_usage_and_storage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_data_transparency_and_control(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_impact_on_work_life_balance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sensitivity_to_product_customization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_in_ongoing_product_support_and_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + sensitivity_to_product_pricing_and_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    