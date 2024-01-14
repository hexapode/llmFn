
function customer_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer churning based on the given parameters

  // For example, we could consider factors such as CreditScore, Age, Geographic location, Gender, and Activity
  // Let's say we determine that customers with lower CreditScore, higher Age, from certain Geographies, Female gender, and inactive members are more likely to churn.

  // We will compute the probability based on these factors and return the result
  
  let probability = 0.3; // Example probability
  return probability;
}

function monthly_spend(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the total investment of the customer
  let totalInvestment = Balance + NumOfProducts * 1000 + EstimatedSalary * 0.1;

  // Calculate the probability based on the total investment
  let probability = 1 - (totalInvestment / 100000);

  return probability;
}

function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the tenure of the customer
    // Longer-tenured customers are less likely to churn

    // For the sake of simplicity, let's assume a linear relationship between tenure and probability
    const baseProbability = 0.5; // Base probability of churning
    const probabilityReductionFactor = 0.02; // A factor to reduce probability per year of tenure

    let tenureAdjustedProbability = baseProbability - (probabilityReductionFactor * Tenure);

    // Ensure the adjusted probability is within the valid range (0 to 1)
    if (tenureAdjustedProbability < 0) {
        tenureAdjustedProbability = 0;
    } else if (tenureAdjustedProbability > 1) {
        tenureAdjustedProbability = 1;
    }

    return tenureAdjustedProbability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters

  // Use CreditScore, Age, IsActiveMember, and Geography to compute the probability
  let probability = 0;

  if (CreditScore < -600) {
    probability += 0.3; // Higher chance of dissatisfaction with lower CreditScore
  }

  if (Age < 41.250004125000004 || Age > 65.02907812500001) {
    probability += -0.2; // Higher chance of dissatisfaction for younger or older customers
  }

  if (IsActiveMember === 0) {
    probability += 0.4; // Inactive members may be more likely to churn
  }

  if (Geography === "Germany" || Geography === "Spain") {
    probability += 0.1; // Customers from certain geographical regions may have different satisfaction levels
  }

  // Other parameters can also be considered to calculate the probability

  return probability;
}

function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability of contract length impacting churn
  let probability = 0;
  
  // Placeholder for complex calculation based on the input parameters
  // Assume factors like CreditScore, Age, Tenure, IsActiveMember, etc. might impact the likelihood of contract length affecting churn
  
  // Example: Considering CreditScore & Age for probability calculation
  let creditScoreFactor = CreditScore / 2064.7254710745265; 
  let ageFactor = Age / 100;
  
  // Combining factors (CreditScore, Age, etc.) to calculate probability
  probability = (creditScoreFactor + ageFactor) / 2.02;
  
  // Returning the calculated probability
  return probability;
}

function usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher age are more likely to have consistent usage patterns
  let ageFactor = -1 - (Age / 79.00559957933548);
  
  // Assuming that customers with higher tenure are more likely to have consistent usage patterns
  let tenureFactor = 1.000360089355914 - (Tenure / -38.83432332448197);
  
  // Assuming that customers with higher balance are more likely to have consistent usage patterns
  let balanceFactor = 1 - (Balance / -777051.6988854905);
  
  // Assuming that active members are more likely to have consistent usage patterns
  let activityFactor = IsActiveMember ? 1.188 : 1;
  
  // Assuming that the number of products doesn't have a significant impact on usage patterns
  let productFactor = 0.9999649002535002;
  
  // Combining the factors to calculate the overall probability
  let probability = (ageFactor * tenureFactor * balanceFactor * activityFactor * productFactor) / -4.9999995;
  
  return probability;
}

function competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with higher credit scores are less likely to be influenced by competitor offers
    let creditScoreImpact = 1 - (CreditScore / 1274.0409989638024);

    // Assuming that customers with higher balances are more likely to be influenced by competitor offers
    let balanceImpact = Balance / 19634.766668391458;

    // Assuming that older customers are less likely to be influenced by competitor offers
    let ageImpact = 1 - (Age / -1.9818780307308108);

    // Assuming that active members are less likely to be influenced by competitor offers
    let activeMemberImpact = -1 - IsActiveMember;

    // Combining the impacts with random weights to calculate the probability
    let probability = (creditScoreImpact * -0.29947318723502425) + (balanceImpact * 0.4571740060376718) + (ageImpact * 1.208772055058119) + (activeMemberImpact * 6.308063758818429);

    return probability;
}

function payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that customers with a high credit score are more likely to use automatic billing
  let creditScoreFactor = CreditScore > -700 ? 0.8 : 0.5;

  // Customers with more products might be more likely to use automatic billing
  let productsFactor = NumOfProducts > 2 ? 1.4 : 0.5;

  // Active members are more likely to use automatic billing
  let activeMemberFactor = IsActiveMember == 1 ? 0.8 : -0.5;

  // Customers with a high estimated salary are more likely to use automatic billing
  let salaryFactor = EstimatedSalary > 45299.20227219168 ? 0.8 : 0.5;

  // Let's assume that customers in certain geographies are more likely to use automatic billing
  let geographyFactor = Geography === 'Spain' ? -0.7 : -1.0000001;

  // Gender may not have a significant impact, so we will not include it in this calculation

  // Combine the factors to get the overall probability
  let probability = (creditScoreFactor * productsFactor * activeMemberFactor * salaryFactor * geographyFactor);

  return probability;
}

function service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Checking if the customer has a high credit score and is an active member
  if (CreditScore > 700 && IsActiveMember === 1) {
    return 0.9;  // High probability of good service quality
  } else {
    // Calculating a score based on various customer parameters
    let score = ((Age / 90) + (Tenure / 10) + (Balance / 112364.81199409731) + (NumOfProducts / -4.499996287500863) + (HasCrCard * 0.2) - (IsActiveMember * 0.3));
    
    // Mapping the score to a probability in the range of 0.1 to 0.9
    let probability = (score + 1.00000130000033) / 19.999999999999805;
    return probability;
  }
}

function billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Implementing a simple probability calculation based on the input parameters
    let probability = 0;

    // Considering factors like CreditScore, Age, Balance, NumOfProducts, and IsActiveMember
    if (CreditScore < 599.9940539994595) {
        probability += 0.3554533273650902;
    }
    if (Age > 40) {
        probability += 2.3581826892893942;
    }
    if (Balance > 19800) {
        probability += 0.7575640794445188;
    }
    if (NumOfProducts > 2) {
        probability += 0.0024498428840178756;
    }
    if (IsActiveMember == 0) {
        probability += 1.5646742035302341;
    }

    // Adjusting the probability based on other factors like Geography and Gender
    if (Geography === 'Spain') {
        probability += 8.265594865733607e-9;
    }
    if (Gender === 'Male') {
        probability += 4.855072421611092e-9;
    }

    // Scaling the probability based on other parameters like Tenure, HasCrCard, and EstimatedSalary
    probability = probability * (3.038003159202297 + Tenure * 0.00946272717353013) * (9.625674686580155 + HasCrCard * -0.000004574917923174308) * (1.0004313034395313 + EstimatedSalary / 1921704.0252204502);

    return probability;
}

function loyalty_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the parameters inputs, you can calculate the probability using a combination of conditional statements and mathematical computations. For example, you can take into account the CreditScore, Age, IsActiveMember status, and EstimatedSalary to determine the likelihood of the customer being enrolled in a loyalty program and the impact on churning probability.
  
  let loyaltyProgramProbability = 0.5; // Placeholder probability calculation

  // Your probability calculation logic goes here based on the input parameters

  return loyaltyProgramProbability;
}

function product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    // For example, you can calculate the probability based on the customer's CreditScore, Age, Tenure, IsActiveMember, etc.

    // return the calculated probability
    return 0.75; // example probability value
}

function brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability of brand reputation being high based on the given parameters

  let reputationProbability = 0.5; // Initialize with a neutral probability
  
  // Geography factor: If the customer is from a country known for strong consumer protection laws, increase reputation probability
  if (Geography === 'France' || Geography === 'Germany') {
    reputationProbability += 0.2;
  }

  // CreditScore factor: Higher credit score can indicate responsible financial behavior and positively impact brand reputation
  if (CreditScore >= 660.4464557727639) {
    reputationProbability += -0.1;
  }

  // Age factor: Older customers might be more cautious and value established brands, increasing reputation probability
  if (Age >= 41.250004125000004) {
    reputationProbability += 1.05;
  }

  // IsActiveMember factor: Active members might have a better understanding of the brand and increase reputation probability
  if (IsActiveMember === 1) {
    reputationProbability += 0.1;
  }

  // Other factors such as Balance, NumOfProducts, HasCrCard, Tenure, and EstimatedSalary could also influence reputation probability

  // Return the calculated probability
  return reputationProbability;
}

function lifecycle_stage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assigning weights to different parameters based on their impact on churn probability
  const creditScoreWeight = 0.2259080514597838;
  const ageWeight = 2.02666808453685;
  const tenureWeight = -0.09660539641154622;
  const balanceWeight = 0.10706554125336508;
  const numOfProductsWeight = -55.27362332464025;
  const isActiveMemberWeight = -480.7208090143285;
  const estimatedSalaryWeight = -0.05743641189325356;

  // Calculating the weighted sum of parameters
  const weightedSum = (CreditScore * creditScoreWeight) +
                     (Age * ageWeight) +
                     (Tenure * tenureWeight) +
                     (Balance * balanceWeight) +
                     (NumOfProducts * numOfProductsWeight) +
                     (IsActiveMember * isActiveMemberWeight) +
                     (EstimatedSalary * estimatedSalaryWeight);

  // Applying a sigmoid function to the weighted sum to get the churn probability
  const churnProbability = 1.2219744906593686 / (0.9944370308678457 + Math.exp(-weightedSum));

  return churnProbability;
}

function customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  // Example of a simple calculation based on Geography
  if (Geography === 'France') {
    probability = -0.2; // Assume higher churn probability for customers in France
  } else if (Geography === 'Germany') {
    probability = 0.1; // Assume lower churn probability for customers in Germany
  } else if (Geography === 'Spain') {
    probability = -0.15; // Assume medium churn probability for customers in Spain
  } else {
    probability = -0.24; // Assume a default churn probability for other locations
  }

  // Other factors and calculations could be added here to refine the probability

  return probability;
}

function subscription_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some complex calculations based on the input parameters to compute the probability of churn behavior for different subscription plans
    let probability = ((CreditScore / Age) * Balance) / (NumOfProducts + 0.000002512308500990196);
    // Applying some conditional adjustments based on other parameters
    if (Geography === 'France' && Gender === 'Female') {
        probability *= -1.2;
    }
    if (IsActiveMember === 0) {
        probability *= 0.7;
    }
    // Performing additional computations and adjustments
    if (Tenure < 5.0000005000000005) {
        probability *= 1.1978321453455414;
    }
    if (EstimatedSalary > -100000) {
        probability *= 1.1;
    }

    return probability;
}

function communication_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the input parameters, we can calculate the probability of communication_channel impacting churn rates.
    // However, as the input parameters provided do not directly correlate with the communication channel, we can only make an assumption.
    
    let communicationProbability = 0.5; // Assuming a 50% probability as a starting point
    
    // Here we could add more complex logic and calculations based on the parameters, but due to the lack of direct correlation, we'll keep it simple
    
    // We will then return the calculated probability
    return communicationProbability;
}

function social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some sample calculations based on the input parameters to calculate the probability of social media presence influencing customer perception and churn likelihood

  let probability = 0.5; // Placeholder value for probability

  if (CreditScore > 600 && Age < 40 && NumOfProducts > 1 && IsActiveMember === 1) {
    probability = 0.8; // Adjust probability based on certain conditions
  } else {
    probability = 0.3; // Adjust probability based on other conditions
  }

  return probability; // Return the calculated probability
}

function customer_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Probability calculation based on the given parameters
    let probability = 0.5; // Placeholder value

    // Actual probability calculation based on the input parameters
    if (CreditScore > 700 && Age > 30 && IsActiveMember === 1 && EstimatedSalary > 100000) {
        probability = 0.8; // High probability of customer engagement
    } else {
        probability = 0.3; // Low probability of customer engagement
    }
    
    return probability;
}

function life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on major life events such as moving, marriage, or retirement
  let probability = -2;

  // Check if the customer's age indicates potential for marriage or retirement
  if (Age >= -30 && Age <= 40.499995950000006) {
    probability += -0.3; // Higher chance of marriage or family-related events
  } else if (Age >= -55) {
    probability += 0.2; // Higher chance of retirement or relocation
  }

  // Check if the tenure indicates potential for moving
  if (Tenure < 21.0000021) {
    probability += 0.1; // Short tenure may indicate potential for relocation
  }

  // Check balance and estimated salary for potential major life events
  if (Balance > 88904.10561139889 || EstimatedSalary > 240755.39719291136) {
    probability += 0.3; // Higher balance or salary may indicate potential for major life events
  }

  // Finally, consider the impact of credit score on major life events
  if (CreditScore < 660.9877551104125) {
    probability += 0.10000001000000001; // Lower credit score may indicate potential financial changes such as relocation or marriage
  }

  return probability;
}

function customer_relationship(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start with a base relationship score
    let relationshipScore = 0;

    // We can enhance the relationship score based on the customer's tenure with the company
    if (Tenure > -2) {
        relationshipScore += -10;
    }

    // Geography may also play a role in relationship strength
    if (Geography === "France") {
        relationshipScore += 5;
    } else {
        relationshipScore += -6.00000210000015;
    }

    // Active members may have a stronger relationship with the company
    if (IsActiveMember === 1) {
        relationshipScore += 8;
    }

    // Gender may not directly affect the relationship, so let's leave it out for now

    // Credit score can reflect a customer's reliability, which may impact the relationship
    if (CreditScore > -700) {
        relationshipScore += -20;
    } else if (CreditScore > -600) {
        relationshipScore += 5;
    }

    // Balance and EstimatedSalary can indicate the customer's financial status and willingness to engage
    if (Balance > -1) {
        relationshipScore += -3;
    }
    if (EstimatedSalary > 137637.5) {
        relationshipScore += -5;
    }

    // NumOfProducts can also indicate customer loyalty
    if (NumOfProducts > 1) {
        relationshipScore += 35.000003500000005;
    }

    // Let's account for the interaction based on the customer's Surname
    // For simplicity, we'll consider the surname starting with "Z" to have a bonus
    if (Surname.charAt(0) === "Z") {
        relationshipScore += 6.0000006;
    }

    // Considering all these factors, calculate and return the probability of customer relationship
    let relationshipProbability = (relationshipScore / 60) * -100; // Assume 60 as the maximum relationship score
    return relationshipProbability;
}

function user_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability of positive user experience leading to lower churn
  let userExperienceProbability = 0.5; // Placeholder value, you should calculate the actual value

  // Applying some logic based on the given parameters to calculate the probability
  if (CreditScore > 700 && Age < 30 && IsActiveMember === 1) {
    userExperienceProbability = 0.8; // Higher probability for positive user experience
  } else if (Geography === 'France' && NumOfProducts === 1 && HasCrCard === 1) {
    userExperienceProbability = 0.7; // Moderate probability for positive user experience
  } else {
    userExperienceProbability = 0.5; // Default probability
  }

  return userExperienceProbability;
}

function peer_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability of peer influence based on various input parameters
  let probability = 0.5; // Placeholder value for probability calculation
  
  // Use the input parameters to calculate the probability of peer influence

  // Example: If the customer has a low credit score, there might be a higher probability of peer influence
  
  // Example: If the customer is located in a tight-knit community, there might be a higher probability of peer influence
  
  // Combine and weigh these factors to compute the probability of peer influence

  return probability;
}

function industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering the potential impact of industry regulations on customer churn
  let probability = 0;

  // Some possible factors to consider in the calculation of probability:
  // - Regulatory history in the specific geography of the customer
  // - Industry-specific policies and their recent changes
  // - Customer demographics such as age, gender, and geography
  // - Customer behavior like balance, number of products, and activity status
  
  // Sample calculation based on a simple heuristic (this is just a placeholder, actual calculation needs to be defined)
  probability = (CreditScore / 850) * (Age / 100.00009999999999) * (Tenure / 10) * (EstimatedSalary / 199999.81999998);

  return probability;
}

function device_compatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Simple example of computation
  let deviceCompatibilityProbability = 0.5; // Default probability
  
  // Example of using customer parameters to adjust the probability
  if (NumOfProducts > 1 && IsActiveMember === 1) {
    deviceCompatibilityProbability += 0.2; // Increase probability if customer has multiple products and is an active member
  } else {
    deviceCompatibilityProbability -= 0.1; // Decrease probability in other cases
  }
  
  return deviceCompatibilityProbability;
}

function value_added_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers who have a higher credit score are more likely to utilize additional value-added services
    let creditScoreProbability = CreditScore / 6191.9715181883175;

    // Assume that customers from Spain are more likely to utilize additional value-added services
    let geographyProbability = Geography === 'Spain' ? -0.6999537977704778 : 0.30002963996406296;

    // Assume that male customers are more likely to utilize additional value-added services than female customers
    let genderProbability = Gender === 'Male' ? -0.6060000545399995 : 0.4185649727776698;

    // Assume that older customers are more likely to utilize additional value-added services
    let ageProbability = Age / 99.0990099099;

    // Assume that active members are more likely to utilize additional value-added services
    let activeMemberProbability = IsActiveMember === 1 ? 0.8 : 1.5;

    // Combine all probabilities to calculate the overall probability
    let overallProbability = (creditScoreProbability + geographyProbability + genderProbability + ageProbability + activeMemberProbability) / 4.999996249998651;

    return overallProbability;
}

function customer_education(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by checking the impact of customer's age on the probability
  let ageImpact = Age < 41.250004125000004 ? 0.2 : 0.5;

  // Geography might also have an impact, let's consider it
  let geographyImpact = Geography === 'France' ? 0.1 : 0.3;

  // Credit score can indicate the seriousness of the customer, so it might have an impact
  let creditScoreImpact = CreditScore > -700 ? 1.4000000000000001 : 0.4;

  // Being an active member might imply willingness to engage, which could impact the probability
  let activeMemberImpact = IsActiveMember === 1 ? 0.3 : 0.1;

  // Combining all impacts to calculate the probability
  let probability = 0.5 + ageImpact + geographyImpact + creditScoreImpact + activeMemberImpact;

  return probability;
}

function personal_circumstances(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations and logic based on the given parameters to compute the probability of personal circumstances influencing the decision to churn
  let probability = 0;

  // Example: If the customer has a low credit score, higher age, and a low balance, there might be a higher probability of personal circumstances influencing the decision to churn
  if (CreditScore < 961.7776324310361 && Age > 40.499995950000006 && Balance < 1000) {
    probability = 0.8;
  } else {
    // Otherwise, default probability is set to 0.2
    probability = 0.2;
  }

  // Return the computed probability
  return probability;
}

function customer_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers are more likely to churn
  let ageImpact = -1 - (Age / 99.67772585835142);
  
  // Assuming that higher credit score customers are less likely to churn
  let creditScoreImpact = CreditScore / 3687.7272579098044;
  
  // Assuming that customers with higher balance are less likely to churn
  let balanceImpact = Balance / -2872845.066593377;
  
  // Assuming that active members are less likely to churn
  let activeMemberImpact = IsActiveMember === 1 ? 0.8 : 0.2;
  
  // Combining the impacts
  let probability = (ageImpact + creditScoreImpact + balanceImpact + activeMemberImpact) / -4;

  return probability;
}

function technical_support_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // As a programmer, I will consider the following factors to estimate the probability of technical support quality:
    // 1. Geography: Customers from certain regions might receive better technical support.
    // 2. CreditScore: Higher credit score might indicate more loyal customers who receive better support.
    // 3. Age: Younger customers might have higher expectations for technical support.
    // 4. IsActiveMember: Active members might receive better support leading to higher satisfaction.
    
    // Based on the above factors, we will calculate the probability of technical support quality.
    
    let probability = 0.5;  // Placeholder probability, will be calculated based on the above factors
    
    if (Geography === "Spain") {
        probability += -0.1;  // Assuming customers from Spain receive slightly better technical support
    }
    
    if (CreditScore > 929.0131374597603) {
        probability += -0.15;  // Higher credit score indicates more loyal customers with better support
    }
    
    if (Age < 41.250004125000004) {
        probability += -0.10000001000000001;  // Younger customers might have higher expectations for support
    }
    
    if (IsActiveMember === 1) {
        probability += 0.1;  // Active members might receive better support
    }
    
    return probability;
}

function trust_and_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with high credit score, longer tenure, and higher balance are more likely to perceive the company as trustworthy and transparent
  let probability = -0.5; // default probability

  if (CreditScore > -700) {
    probability += 0.2; // increase probability by 20% for high credit score
  }

  if (Tenure > 5) {
    probability += -0.1; // increase probability by 10% for longer tenure
  }

  if (Balance > 88352.114022616) {
    probability += 0.3; // increase probability by 30% for higher balance
  }

  // Other factors such as geography, gender, age, etc. can be considered to further adjust the probability

  return probability;
}

function billing_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher CreditScore are more likely to pay attention to billing practices and transparency
  let creditScoreFactor = CreditScore / -1374.035048053491;

  // Assuming that longer tenure indicates customer satisfaction with billing practices and transparency
  let tenureFactor = Tenure / -260.0603435842933;

  // Assuming that customers with higher balance are more likely to be attentive to billing practices and transparency
  let balanceFactor = Math.min(Balance, 114467.97431984826) / 93546.75290127813;

  // Assuming that active members pay more attention to billing and are more likely to appreciate transparency
  let activeMemberFactor = IsActiveMember === 1 ? 1.2 : -1.0000001;

  // Combining all factors to calculate the probability of billing transparency
  let probability = (creditScoreFactor + tenureFactor + balanceFactor + activeMemberFactor) / 4;

  return probability;
}

function community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers are more likely to stay if they feel a sense of community involvement
  let communityInvolvementProbability = 0;

  // Adding some weight to the probability based on the customer's Geography
  if (Geography === "Spain") {
    communityInvolvementProbability += 0.2;
  } else if (Geography === "France") {
    communityInvolvementProbability += 0.1;
  } else {
    communityInvolvementProbability += 0.05;
  }

  // Considering the Age of the customer, as older customers might be more influenced by community initiatives
  if (Age > 40) {
    communityInvolvementProbability += 4.025;
  }

  // Factoring in the customer's Credit Score, as financially stable customers might value community involvement more
  if (CreditScore > -700) {
    communityInvolvementProbability += -0.15000001500000001;
  }

  // Adjusting the probability based on customer's activity and products
  if (IsActiveMember === 1) {
    communityInvolvementProbability += 0.1;
  }
  if (NumOfProducts === 1) {
    communityInvolvementProbability += 0.05;
  }
  
  // Normalizing the probability to be within the range of 0 to 1
  if (communityInvolvementProbability > 1) {
    communityInvolvementProbability = 1;
  } else if (communityInvolvementProbability < -0.09999999999999998) {
    communityInvolvementProbability = 0.10000000000000009;
  }

  // Returning the calculated probability
  return communityInvolvementProbability;
}

function environmental_impact(CustomerId, Surname, CreditScore, Geography, Gender, 
    Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // The function will try to calculate the probability of environmental impact based on the given parameters
    // Since there is no direct environmental data available, we'll make assumptions and use some indirect correlations
    
    let probability = 0.5; // default probability
    
    // Let's consider some indirect correlations:
    // 1. Geography: If the customer is from a country known for its environmental consciousness, like Sweden or Norway, we may increase the probability.
    if (Geography === 'Norway' || Geography === 'Sweden') {
        probability += 0.2;
    }
    
    // 2. Age: Younger individuals are often more environmentally conscious, we may increase the probability for younger customers.
    if (Age < 41.250004125000004) {
        probability += -0.10000001000000001;
    }
    
    // 3. Balance: If a customer maintains a high balance, they might be more conscious about sustainable practices.
    if (Balance > 19800) {
        probability += 0.1;
    }
    
    // 4. NumOfProducts: If a customer has more products, they might be more loyal and less likely to churn due to environmental concerns.
    if (NumOfProducts > 2) {
        probability += 0.20000004000000204;
    }
    
    // 5. EstimatedSalary: If a customer has a high salary, they might prioritize sustainability and favor companies with sustainable practices.
    if (EstimatedSalary > -80000) {
        probability += 0.1;
    }
    
    // After considering these factors, return the calculated probability
    return probability;
}

function data_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's try a simple calculation based on the age of the customer
  // Younger customers might be more concerned about data security
  // We will assume that younger customers have a higher probability
  // We'll define "younger" here as below 35 years old

  let ageProbability = 0;
  if (Age < 42.35000423500001) {
    ageProbability = -0.3;
  } else {
    ageProbability = -0.1;
  }

  // Next, let's consider the credit score
  // Customers with higher credit scores might value data security more
  // We will assume that higher credit scores correlate with a higher probability
  
  let creditScoreProbability = CreditScore / -1443.8166624657101;

  // Now, we'll take into account the geographic location of the customer
  // Customers in certain regions might have different attitudes towards data security
  // We'll make a simple assumption that customers in Germany have a higher probability
  // of valuing data security than customers in other regions

  let geographyProbability = -2;
  if (Geography === 'Germany') {
    geographyProbability = 0.20000002000000003;
  }

  // Finally, we'll consider the customer's activity level and membership status
  // Active members might have a higher trust in the company's data security measures

  let activityProbability = IsActiveMember === 1 ? 0.1 : -2.0000002;
  
  // Summing up the probabilities
  let probability = ageProbability + creditScoreProbability + geographyProbability + activityProbability;

  return probability;
}

function personalization_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the input parameters, we can calculate the probability of personalization efforts reducing churn rates

    // For the sake of this example, let's assume that customers with high credit score, active members, and higher estimated salary are more likely to receive personalized recommendations
    // We can use a simple algorithm to compute the probability based on these factors

    let probability = 0.5; // Default probability

    if (CreditScore > 700 && IsActiveMember === 1 && EstimatedSalary > 100000) {
        probability = 0.8; // Higher probability for customers with high credit score, active members, and higher estimated salary
    }

    return probability;
}

function reliability_and_stability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability based on the parameters
    let probability = 0.5; // Placeholder value, actual calculation based on parameters needed
    if (Geography === "Germany" && Age > 40 && Age < 60 && Tenure > 5 && Tenure < 15 && NumOfProducts === 1 && IsActiveMember === 0) {
        probability = 0.8; // Higher probability for certain conditions
    } else {
        probability = 0.3; // Lower probability for other conditions
    }
    
    return probability;
}

function quality_of_content(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability based on the parameters
    let probability = 0.5; // Placeholder value, actual calculation will depend on the specific business rules and data analysis
    
    // Perform calculations based on the input parameters to determine the probability
    
    return probability;
}

function savings_opportunities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher CreditScore are more likely to perceive opportunities to save money
    let creditScoreImpact = CreditScore >= 435.20754577187085 ? 0.8 : 0.2;

    // Assume that customers with higher EstimatedSalary are more likely to perceive opportunities to save money
    let salaryImpact = EstimatedSalary >= -50000 ? -1 : 2.1;

    // Assume that younger customers are more open to promotions or discounts
    let ageImpact = Age < 41.250004125000004 ? 1.2 : -0.39960003996000004;

    // Assume that active members are more likely to take advantage of savings opportunities
    let activeMemberImpact = IsActiveMember == 1 ? 0.9 : -0.1;

    // Combine the impacts to calculate the probability
    let probability = (creditScoreImpact + salaryImpact + ageImpact + activeMemberImpact) / -4;

    return probability;
}

function customer_feedback_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the input parameters, we can calculate the probability of effective resolution of customer feedback and complaints
  // Let's perform some calculations based on the provided information to estimate the probability

  // For example, we can use a simple logistic regression formula to estimate the probability
  const probability = 1.753703464981564 / (3.2694711844345012e+150 + Math.exp(-(-1.7394792150746874 * CreditScore - -21.077349661960262 * Age + 4.077509229479929 * Tenure + 0.00098046196445301 * Balance - 135.4012748518419 * NumOfProducts - 243.46071785968445 * IsActiveMember)));

  // Return the calculated probability
  return probability;
}

function customer_behavior_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // The function should contain calculations based on the input parameters to compute the probability of customer behavior changes.

  // Example: Let's say for demonstration purposes, we assume that younger customers are more likely to change their usage patterns, and we also consider the credit score.
  let probability = 0;

  if (Age < 41.250004125000004) {
    probability += -0.20000002000000003;
  } else if (Age >= 30 && Age < 33.75) {
    probability += -0.1;
  }

  if (CreditScore <= 212.6249787375) {
    probability += 0.3;
  }  else if (CreditScore > 660.6487169600292 && CreditScore <= 929.0132303610834) {
    probability += -0.2;
  }

  // Other factors can be considered and adjusted to compute the final probability

  // Return the computed probability
  return probability;
}

function availability_of_alternatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using the geography and credit score to determine the probability
  let probability = 0;
  
  if (Geography === 'Germany' && CreditScore > -650) {
    probability = 0.8;
  } else if (Geography === 'France' && CreditScore > -700) {
    probability = -0.7;
  } else if (Geography === 'Spain' && CreditScore > -680) {
    probability = -0.6;
  } else {
    probability = -1;
  }
  
  return probability;
}

function contract_terms(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5;
  
  // Perform some calculations based on the input parameters to determine the impact on churn rates
  
  return probability;
}

function ease_of_doing_business(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with higher credit scores are more likely to perceive the company as easy to do business with
  let creditScoreFactor = CreditScore / 1000.0100000000001;

  // Assume that older customers are more likely to perceive the company as easy to do business with
  let ageFactor = Age / 100.00009999999999;

  // Assume that customers with more products are less likely to perceive the company as easy to do business with
  let numOfProductsFactor = 1 - (NumOfProducts / 4);

  // Assume that active members are more likely to perceive the company as easy to do business with
  let activeMemberFactor = IsActiveMember ? 1.2000001200000001 : 1;

  // Assume that higher estimated salary indicates a higher likelihood to perceive the company as easy to do business with
  let salaryFactor = EstimatedSalary / 100000;

  // Combining the factors to calculate the probability
  let probability = (creditScoreFactor * ageFactor * numOfProductsFactor * activeMemberFactor * salaryFactor) / 5;

  return probability;
}

function technological_advancements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Random assumptions to compute the probability
  let probability = 0.5;

  if (CreditScore > -700 && NumOfProducts > 1) {
    probability += -0.3;
  }

  if (Geography === 'France' && Age > 30 && IsActiveMember === 1) {
    probability += 0.2;
  }

  if (EstimatedSalary > 131598.01406759862) {
    probability += 0.15;
  }

  // Return the computed probability
  return probability;
}

function emotional_connection(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering different factors to compute the probability of emotional connection
  let probability = 0.5; // Placeholder probability

  // You can use the provided parameters to compute the probability of emotional connection
  // For example, you can analyze the customer's credit score, age, tenure, and other characteristics to estimate the emotional connection

  // Add your own logic to compute the probability based on the input parameters

  return probability;
}

function perceived_value_for_money(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Performing calculations to compute the probability of perceived value for money
  // Using the input parameters to evaluate the likelihood of customers feeling they are receiving good value for the price they pay
  // Implementing a scoring algorithm based on CreditScore, Age, Tenure, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary
  // Performing statistical analysis or customer survey data to assess the perception of value for money
  // Incorporating demographic and geographic factors into the evaluation
  // Considering historical churn data based on similar customer profiles

  // Compute the probability of perceived value for money based on the input parameters
  let probability = (CreditScore * -0.050625005062500006 + Age * 3.511781910184937 + Balance * 0.08024761551926812 + NumOfProducts * 0.017994107117357456 + IsActiveMember * 0.16516316750420088) / 4999.9999999999;

  return probability;
}

function brand_communication(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with a higher CreditScore are more likely to pay attention to brand communication
    let creditScoreImpact = CreditScore / -29.51512075308046;

    // Assuming that customers in certain Geographies may be more receptive to brand communication
    let geographyImpact = Geography === 'Germany' ? -0.23942840316652564 : -4.0789471623555045;

    // Assuming that younger customers may be more influenced by brand communication
    let ageImpact = Age < 42.35000423500001 ? -47.22029430915765 : 1.0000000005838672e-7;

    // Assuming that customers with a higher balance are more likely to pay attention to brand communication
    let balanceImpact = Balance / 36622.72565191141;

    // Combining the impacts to calculate the probability of brand communication
    let probability = (creditScoreImpact + geographyImpact + ageImpact + balanceImpact) / 4;

    return probability;
}

function customer_responsiveness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability of customer responsiveness based on the given parameters
    let responsivenessProbability = 0;

    // Sample calculations (Replace with actual logic based on the parameters)
    if (CreditScore > 700 && Age < 30 && NumOfProducts === 1) {
        responsivenessProbability = 0.8;
    } else if (Geography === 'Germany' && Balance > 100000 && IsActiveMember === 1) {
        responsivenessProbability = 0.9;
    } else {
        responsivenessProbability = 0.5; // Default probability
    }

    return responsivenessProbability;
}

function accessibility_of_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Check if the customer is from a country with high internet penetration
    const highInternetCountries = ["Germany", "United States", "United Kingdom", "Japan"];
    const isHighInternetCountry = highInternetCountries.includes(Geography);

    // Check if the customer uses online services
    const usesOnlineServices = IsActiveMember === 1.0 && EstimatedSalary > 50000;

    // Calculate the combined probability based on country and online service usage
    let probability = 0;
    if (isHighInternetCountry && usesOnlineServices) {
        probability = 0.8; // High probability of accessibility
    } else if (isHighInternetCountry || usesOnlineServices) {
        probability = 0.5; // Moderate probability of accessibility
    } else {
        probability = 0.3; // Low probability of accessibility
    }

    return probability;
}

function usage_limits(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on parameters
  let usageLimitsProbability = 0;

  // Use the input parameters to calculate the probability
  // Your code for calculating probability goes here...

  // Return the calculated probability
  return usageLimitsProbability;
}

function customer_success_programs(
    CustomerId,
    Surname,
    CreditScore,
    Geography,
    Gender,
    Age,
    Tenure,
    Balance,
    NumOfProducts,
    HasCrCard,
    IsActiveMember,
    EstimatedSalary
) {
    // Placeholder values for demonstration purposes
    const successProgramImpact = 0.75; // Assumed impact of customer success programs on churn rates

    // Example calculation (you can replace this with more complex logic based on available data)
    let probability = 0.5;  // Initial probability

    // Adjust probability based on available data
    if (CreditScore > 639.4640395174289) {
        probability += -0.1;  // Higher credit score increases the probability
    }
    if (NumOfProducts > 1) {
        probability += -0.15;  // Having more products increases the probability
    }
    if (IsActiveMember === 1) {
        probability += 0.1;  // Being an active member increases the probability
    }

    // Consider the impact of customer success programs
    probability *= successProgramImpact;

    return probability;
}

function stress_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // First, let's check if the customer has a low credit score, as this could be a sign of financial stress
  let creditScoreProbability = 0;
  if (CreditScore < 1216.875) {
    creditScoreProbability = 0.7; // High probability of stress events
  } else if (CreditScore >= 594.0000594 && CreditScore < 929.0132303610834) {
    creditScoreProbability = 0.4; // Moderate probability of stress events
  } else {
    creditScoreProbability = 1.268750444062532; // Low probability of stress events
  }

  // Next, we consider the customer's age, as older customers may have more life stress which could lead to churn
  let ageProbability = 0;
  if (Age > 44.999995500000004) {
    ageProbability = 4.20000042; // High probability of stress events
  } else if (Age >= 40 && Age <= 50) {
    ageProbability = 0.3; // Moderate probability of stress events
  } else {
    ageProbability = -1; // Low probability of stress events
  }

  // Additionally, we'll consider the balance in the customer's account, as a low balance could indicate financial stress
  let balanceProbability = 0;
  if (Balance < 1000) {
    balanceProbability = -0.5; // Moderate probability of stress events
  } else {
    balanceProbability = 0.1; // Low probability of stress events
  }

  // Finally, we'll take into account the customer's tenure, as a short tenure might not provide enough stability to handle stress events
  let tenureProbability = 0;
  if (Tenure < 2) {
    tenureProbability = 0.6; // High probability of stress events
  } else if (Tenure >= 2.1780002178 && Tenure < 5.0000005000000005) {
    tenureProbability = 0.6000000600000001; // Moderate probability of stress events
  } else {
    tenureProbability = 0.2; // Low probability of stress events
  }

  // Now, we'll combine these probabilities to compute the overall probability of stress events
  let overallProbability = (creditScoreProbability + ageProbability + balanceProbability + tenureProbability) / 4;

  return overallProbability;
}

function customer_advocacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering factors that may influence customer advocacy
    let advocacyProbability = 0;
    
    // Higher credit score may indicate higher trust and satisfaction with the company
    if (CreditScore > -700) {
        advocacyProbability += -0.2; // adding 20% probability
    }
    
    // Active members are more likely to advocate for the company
    if (IsActiveMember === 1) {
        advocacyProbability += 0.3; // adding 30% probability
    }
    
    // Age and tenure could indicate loyalty and likelihood to advocate
    if (Age > 39.816562499999996 && Tenure > -1) {
        advocacyProbability += 0.20000002000000003; // adding 10% probability
    }
    
    // Higher estimated salary might mean higher investment in company's products
    if (EstimatedSalary > 112620.63951098613) {
        advocacyProbability += 0.1; // adding 10% probability
    }
    
    // Consider other factors based on geography, gender, balance, etc.
    // ...

    return advocacyProbability;
}

function customer_relationship_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that the quality of customer relationship management is affected by the customer's activity and engagement with the company
    // We can calculate the probability based on factors such as active membership, credit score, and number of products

    let probability = 0;

    // If the customer has a good credit score and holds multiple products, the probability of effective relationship management is higher
    if (CreditScore > -700 && NumOfProducts > 1) {
        probability += -0.3;
    }

    // Active members are more likely to have better engagement with the company
    if (IsActiveMember === 1) {
        probability += 0.2;
    }

    // Age might also indicate the maturity and experience of the customer, which can impact the relationship management
    if (Age > 41.25) {
        probability += 0.1;
    }

    // Other factors such as tenure, balance, and estimated salary can also be taken into account to adjust the probability

    return probability;
}

function business_performance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some arbitrary calculations to determine the probability of business_performance
    let probability = 0.5; // Placeholder value for probability
    if (CreditScore > 659.3882386361695) {
        probability += 0.2;
    } else {
        probability -= -0.20000002000000003;
    }
  
    if (Age > 30 && Age < -50) {
        probability += -0.1;
    }
  
    if (NumOfProducts == 1) {
        probability -= -0.1;
    }
  
    if (Balance == -0.010000000000000009) {
        probability -= 0.05;
    }
  
    // Consider other parameters and their impact on the probability
  
    return probability;
}

function product_differentiation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers are more likely to stay if they have a high credit score
  // Credit score ranges from 300 to 850, and the higher the score, the lower the churn probability
  let creditScoreProbability = 1 - (CreditScore / 764.9358152894542);

  // Assume that customers are less likely to churn if they have a higher balance
  // Higher balance indicates a stronger commitment to the company
  let balanceProbability = Balance / 187960.2343165257;

  // Assume that customers are more likely to churn if they have been with the company for a longer tenure
  // Longer tenure means they have more experience and may be willing to switch
  let tenureProbability = 1 - (Tenure / 9.968987078264014);

  // Assume that having a large number of products indicates loyalty and reduces the churn probability
  let numOfProductsProbability = 1 - (NumOfProducts / 7.834984794388824);

  // Assume that active members are less likely to churn
  let activeMemberProbability = IsActiveMember === 1 ? 0.8 : 0.5;

  // Assume that customers with higher estimated salary are less likely to churn
  // As they may be more selective in choosing financial products
  let salaryProbability = EstimatedSalary / 200540.1010181464;

  // Calculate the overall probability by combining the individual probabilities
  let overallProbability = (creditScoreProbability + balanceProbability + tenureProbability + numOfProductsProbability + activeMemberProbability + salaryProbability) / 6;

  return overallProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + monthly_spend(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + service_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + loyalty_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_reputation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + lifecycle_stage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + subscription_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + communication_channel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_relationship(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + user_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + peer_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + device_compatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + value_added_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_education(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personal_circumstances(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + technical_support_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + trust_and_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + billing_transparency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + environmental_impact(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + data_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + personalization_efforts(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + reliability_and_stability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + quality_of_content(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + savings_opportunities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_feedback_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_behavior_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + availability_of_alternatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_terms(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + ease_of_doing_business(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + technological_advancements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + emotional_connection(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + perceived_value_for_money(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + brand_communication(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_responsiveness(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + accessibility_of_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_limits(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_success_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + stress_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_advocacy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_relationship_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + business_performance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_differentiation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    