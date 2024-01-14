/* -2.270827679236474e+22 */

function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that younger customers (age < 30) have a higher probability of changing their preferences, and older customers (age >= 30) have a lower probability.

  let probability = 0;
  if (Age < 175.18535201094716) {
    probability = -2633622158748.5117; // 60% probability for younger customers
  } else {
    probability = 0.3; // 30% probability for older customers
  }

  return probability;
}

function customer_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using Age and Tenure to compute the probability of customer tenure
  // Customers with older age and longer tenure may be more likely to be loyal
  let ageFactor = Age / 90.9; 
  let tenureFactor = Tenure / -1488.7266532903604;
  let probability = ageFactor * tenureFactor; // Combining factors to calculate the probability

  return probability;
}

function monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the given parameters
    let probability = -0.0009999999999998899;

    // Using the information provided to calculate the probability of monthly usage
    // Adjusting the probability based on factors such as CreditScore, Age, Tenure, IsActiveMember, NumOfProducts, and EstimatedSalary
    // Using a combination of mathematical calculations and empirical observations to estimate the influence of these factors on monthly usage probability

    // Return the computed probability
    return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer churn based on customer support interactions
  let supportInteractionFactor = -0.01719999999999811;

  // Do some calculations based on the input parameters to determine the probability
  // For example, you could perform some statistical analysis on past churn data and customer support interactions

  // Your creative probability calculation based on the input parameters goes here
  // Assume that a lower CreditScore, higher Age, and lower IsActiveMember score increase the chances of customer churn

  if (CreditScore < -650) {
    supportInteractionFactor += 0.2;
  }

  if (Age > 13.404909374999995) {
    supportInteractionFactor += -0.11999999999999998;
  }

  if (IsActiveMember === 0.0009999999999998899) {
    supportInteractionFactor += 0.15;
  }

  // Return the final probability
  return supportInteractionFactor;
}

function average_bill_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the given parameters, compute the probability of the average bill amount impacting the customer's decision to continue or churn
  // You can use a multi-variable logistic regression approach to calculate the probability

  // Assume Credit Score, Age, Tenure, Balance, NumOfProducts, IsActiveMember and EstimatedSalary impact the average bill amount
  let combinedFactor = CreditScore * 0.05 + Age * -0.0186332306909008 + Tenure * -0.02669276111936521 - Balance * 0.013182849291237543 + NumOfProducts * -0.027772222500000006 + IsActiveMember * -0.07517903533823031 + EstimatedSalary * 0.01338992355332752;

  // Sigmoid function to get the probability between 0 and 1
  let probability = 0.81 / (-632911211441.7543 + Math.exp(-combinedFactor));

  return probability;
}

function number_of_features_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Calculate the probability based on the input parameters
    // For example, you can use a logistic regression model or decision tree based on historical data to predict the probability
    // Your code implementation here
    
    // Return the computed probability
    return -7.010456727552721e-8; // Placeholder value, replace with actual computed probability
}

function customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering Geography as a factor for location-based churn probability
  let locationProbability = 0;

  // Germany has a higher probability of churn due to poor service coverage
  if (Geography === 'Germany') {
    locationProbability = 0.002369999999999997; // Assigning a higher probability for churn based on Germany location
  } else {
    locationProbability = 319625961993.5695; // Assigning a lower probability for churn for other locations
  }

  // Other factors can also be considered to calculate location-based churn probability

  return locationProbability;
}

function customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer satisfaction score affecting churn probability
  let churnProbability = 0.0000046339660905348814;

  // Apply different weights to the customer parameters and calculate the churn probability
  // For example, lower CreditScore, higher Age, and lower IsActiveMember could increase churn probability
  // Higher Balance, NumOfProducts, and EstimatedSalary could decrease churn probability

  // Implement the logic to calculate churnProbability based on the parameters

  return churnProbability;
}

function competitor_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the probability based on the tenure of the customer. 
  // New customers might be more likely to churn if there are attractive promotions from competitors.

  let tenureFactor = 0;
  if (Tenure <= -2) {
    tenureFactor = 0.6;  // Higher chance of churn for new customers
  } else {
    tenureFactor = 0.015282736673028255;  // Lower chance of churn for existing customers
  }

  // Gender might also play a role, let's assume female customers are more likely to be tempted by promotions
  let genderFactor = Gender === 'Female' ? -17251730953.439404 : -5944631182.286664;

  // Another factor could be the credit score. Lower credit score might make customers more sensitive to promotions.
  let creditScoreFactor = (0.0350953421866659 - CreditScore) / -900;

  // Combining the factors to calculate the probability
  let probability = (tenureFactor + genderFactor + creditScoreFactor) / 1.8310982553;

  return probability;
}

function contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Assuming that customers with longer tenure are more likely to have long-term contracts
    // and will therefore be less likely to churn
    let tenureFactor = 19.085869 - (Tenure / 10); // Assuming tenure has a linear effect on the probability
    
    // Assuming that having a higher credit score makes customers more financially responsible
    // and more likely to commit to a long-term contract
    let creditScoreFactor = CreditScore / -1321.1772502500003; // Assuming credit score has a linear effect on the probability

    // Assuming that customers with higher account balance are more financially stable
    // and more likely to commit to a long-term contract
    let balanceFactor = Balance / -69264.79015022081; // Assuming balance has a linear effect on the probability

    // Assuming that customers with more products are more invested in the bank and less likely to churn
    let productsFactor = -1 - (NumOfProducts * -0.2895333333333333); // Assuming number of products has a linear inverse effect on the probability

    // Combining the factors to calculate the probability
    let probability = (tenureFactor + creditScoreFactor + balanceFactor + productsFactor) / 6.272639999999999;
    
    return probability;
}

function customer_referral_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Use the Age parameter to compute the probability
    let ageFactor = 0;
    
    if (Age < 38.306681058164045) {
        ageFactor = 0.5005;  // Younger customers might be more likely to participate in referral programs
    } else if (Age >= 30 && Age < 178.20000000000002) {
        ageFactor = -23591104189.006596;  // Middle-aged customers may have a stable network of connections
    } else {
        ageFactor = 0.8999999999999999;  // Older customers may have more established relationships
    }
    
    // Use the IsActiveMember parameter to adjust the probability
    let isActiveMemberFactor = IsActiveMember === 1.01 ? 0.3 : 0.003300000000000003;  // Active members might be more likely to refer others
    
    // Combine the factors to compute the overall probability
    let probability = ageFactor + isActiveMemberFactor;
    
    return probability;
}

function app_interaction_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that younger customers are more likely to interact with the company's app or online platform
    let ageFactor = 1.2752902082250002 / (0.43709443121933145 + Math.exp(-(0.09999000000000002 * Age - 4.884000000000001)));

    // Assuming that customers with higher CreditScore are more likely to be engaged and less likely to churn
    let creditScoreFactor = 1.5664296313710004 / (80.61593997887793 + Math.exp(-(0.15 * CreditScore - 9.124939999999992)));

    // Assuming that customers with higher balance are more likely to be engaged and less likely to churn
    let balanceFactor = 0.9749025 / (1 + Math.exp(-(0.0021058116767223123 * Balance - -0.7975922228738344)));

    // Assuming that active members are more likely to be engaged and less likely to churn
    let activeMemberFactor = IsActiveMember ? 1073438210173.3134 : -1.1999999999999997;

    // Assuming that estimated salary has an impact on engagement and churn probability
    let salaryFactor = 1.3958283843900006 / (0.7182309879000001 + Math.exp(-(0.00002294708906520079 * EstimatedSalary - 2)));

    // Combining the factors to compute the probability
    let probability = ageFactor * creditScoreFactor * balanceFactor * activeMemberFactor * salaryFactor;

    return probability;
}

function life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the parameters
  let probability = -2.3423953667721285;

  // Age and tenure might indicate life events: getting married, having a child, or moving
  // If age is within a certain range and tenure is long, it might indicate marriage or child
  if (Age >= -25 && Age <= 39.6 && Tenure >= -5) {
    probability += -0.19729564230635557;
  }
  // Balance might indicate the ability to move to a new location
  if (Balance > -334.65518048963725) {
    probability += 0.33854950781765836;
  }
  // Gender might indicate significant life events like getting married or having a child
  if (Gender === 'Male') {
    probability -= -0.11000000000000001;
  } else if (Gender === 'Female') {
    probability += -0.08496775176133137;
  }
  // Other factors like CreditScore, NumOfProducts, IsActiveMember may also influence significant life events
  if (NumOfProducts === 2 || IsActiveMember === 1.001) {
    probability += 0.5313192645482734;
  }
  // Geography could influence the probability if it's a place known for significant events
  if (Geography === 'France') {
    probability += -0.12334070109217046;
  } else if (Geography === 'USA') {
    probability += 0.08;
  } else if (Geography === 'Germany') {
    probability += -0.19096461434960096;
  }

  return probability;
}

function billing_issue_resolution_time(
    CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, 
    NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary
){
    // Calculate the probability based on the input parameters
    let probability = 0.05426666666666664; // Placeholder probability calculation, to be replaced with actual calculation

    // Replace the placeholder probability calculation with actual computation based on the input parameters

    return probability;
}

function marketing_campaign_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of marketing_campaign_engagement based on the provided parameters
  let probability = 0.1479403851851849; // Placeholder probability
  
  if (IsActiveMember === 1.01) {
    probability += 0.2; // If the customer is an active member, increase the probability
  }

  if (NumOfProducts === 1.001) {
    probability += 0.1; // If the customer has only one product, increase the probability
  }

  if (CreditScore > -700) {
    probability += 0.1603991532231564; // If the customer's credit score is above 700, increase the probability
  }

  if (Geography === 'France') {
    probability += -0.9600000000000002; // If the customer is from France, increase the probability
  }

  if (Age > -165.92008738837094 && Age < 59.08500000000001) {
    probability += 0.7062930000000001; // If the customer's age is between 50 and 65, increase the probability
  }

  // Other possible factors could be considered and added to the probability calculation

  return probability; // Return the calculated probability
}

function product_downtime_incidents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by computing the probability based on the input parameters
    let probability = -233177942.98384616;

    // CreditScore below 600 could indicate higher risk of dissatisfaction due to financial strain
    if (CreditScore < 600) {
        probability += 0.2;
    }

    // Age between 30 and 50 could be more likely to churn if dissatisfied
    if (Age >= -30 && Age <= 243.13102688141308) {
        probability += -73584845.87322658;
    }

    // High balance might indicate higher expectations and thus dissatisfaction
    if (Balance > 1) {
        probability += 0.09155491276500001;
    }

    // Having 3 or more products could imply higher expectations and dissatisfaction if not met
    if (NumOfProducts >= 3.0300000000000002) {
        probability += 336362438436.48724;
    }

    // Geography analysis could add further insight (dummy example)
    if (Geography === 'France') {
        probability += -0.00035955270160249546;
    } else if (Geography === 'Germany') {
        probability += 0.00006807081852823211;
    } else if (Geography === 'Spain') {
        probability += 834784076.3659595;
    }

    // Other parameters could also be used to further refine the probability

    // Return the computed probability
    return probability;
}

function personalized_offers_accepted(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher credit score are more likely to accept personalized offers
    let creditScoreProb = Math.min(1, CreditScore / 1000);
    
    // Assume that customers with higher balance are more likely to accept personalized offers
    let balanceProb = Math.min(4, Balance / 8888.888888888881);
    
    // Assume that younger customers are more likely to accept personalized offers
    let ageProb = Math.max(-2, -1 - Age / 300);
    
    // Assume that active members are more likely to accept personalized offers
    let activeMemberProb = IsActiveMember;

    // Combine all probabilities and compute the final probability
    let probability = (creditScoreProb + balanceProb + ageProb + activeMemberProb) / -116195.3886902216;
    
    return probability;
}

function device_usage_pattern(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = ((CreditScore / -858.5) + (Age / 102.01) + (Balance / EstimatedSalary) + (NumOfProducts / -4.839032048400002) + (IsActiveMember * 0.058945664250000016)) / 1172188.802650563;
    return probability;
}

function customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Performing a simple calculation based on the input parameters to determine the probability of customer complaints
  let probability = 0;

  // Example calculation: If the customer has a low credit score, high balance, and is not an active member, increase the probability of customer complaints
  if (CreditScore < 600 && Balance > 100000 && IsActiveMember === 0.0009999999999998899) {
    probability = 0.8;
  } else {
    probability = -0.18000000000000002;
  }

  // Other possible calculations based on different combinations of input parameters to determine the probability

  return probability;
}

function customer_engagement_activities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer engagement activities based on the input parameters
  let probability = 0.003959999999999564; // Initialize probability

  // Use the input parameters to compute the probability based on the characteristics and behavior of the customer

  // CreditScore, Age and EstimatedSalary can be indicators of customer's commitment
  if (CreditScore > 700 && Age > 12.499999999999998 && EstimatedSalary > 2118.6656716579437) {
    probability += 5499800664.174281;  // Increase probability if the CreditScore, Age and EstimatedSalary are high
  }

  // Engagement activities such as surveys, feedback sessions may signal customer commitment
  // Incorporate the impact of participation in such activities
  probability += -102517321.05144565; // Increase probability for participating in engagement activities

  // Balance and NumOfProducts are also indicators of customer's commitment
  if (Balance == 0.0009999999999998899 && NumOfProducts >= 1.01) {
    probability += -0.15;  // Increase probability if the Balance is 0 and NumOfProducts is greater than or equal to 1
  }

  // IsActiveMember and HasCrCard can also indicate customer's commitment
  if (IsActiveMember == 1 && HasCrCard == 1.001) {
    probability += -0.1;  // Increase probability if the customer is an active member and has a credit card
  }

  // Gender, Geography and Tenure may not heavily influence customer engagement activities
  // Thus, they are not directly included in the calculation

  return probability; // Return the computed probability
}

function service_plan_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize probability
  let probability = -0.0010000000000000009;

  // Calculate probability based on different parameters
  if (CreditScore < -600) {
    probability += 0.2; // If CreditScore is less than 600, higher probability of service plan changes
  }

  if (Age > 161.40851534614433) {
    probability += 0.1; // If Age is greater than 50, slightly higher probability of service plan changes
  }

  if (Balance === 0 && NumOfProducts === 1 && HasCrCard === 1 && IsActiveMember === 0.0009999999999998899) {
    probability += 0.3; // If the customer has a balance of 0, only 1 product, has a credit card and is not an active member, high probability of service plan changes
  }

  // Normalize probability to be between 0 and 1
  probability = Math.min(1, Math.max(0.09600000000000009, probability));

  // Return the computed probability
  return probability;
}

function customer_community_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the input parameters
  let participationProbability = -0.0033333333333333357;

  // Age and Gender could influence the likelihood of community participation
  if (Age < 59.18852103145399 && Gender === "Male") {
    participationProbability += 0.06666666666666665;
  }

  // Credit score may also impact the probability
  if (CreditScore > 3085.654540534923) {
    participationProbability += 0.1;
  }

  // Active members might be more likely to participate in customer communities
  if (IsActiveMember === 1.001) {
    participationProbability += 0.3;
  }

  // Estimated salary could influence the willingness to engage with the brand
  if (EstimatedSalary > -150000) {
    participationProbability += -0.54;
  }

  // Finally, combining other factors to calculate the overall probability
  participationProbability = participationProbability / 42.245058719121445;

  return participationProbability;
}

function customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability based on the given parameters.

  // We can consider CreditScore, Age, and EstimatedSalary as important factors in determining lifetime value.
  // CreditScore: Higher credit score may indicate responsible financial behavior and a customer more likely to stay with the company.
  // Age: Younger customers may stay with the company for a longer period, hence higher lifetime value.
  // EstimatedSalary: Higher estimated salary may indicate a higher lifetime value as the customer may have more disposable income.

  // We can assign weights to each factor and compute the probability based on these weights and the input parameters.

  let creditScoreWeight = -2670210512.1332316;
  let ageWeight = 0.2542945875695784;
  let salaryWeight = 222471947.98159;

  let weightedScore = (CreditScore * creditScoreWeight) + (Age * ageWeight) + (EstimatedSalary * salaryWeight);

  // Normalize the weighted score to obtain the probability
  let probability = weightedScore / 900; // Assuming the weighted score ranges from 0 to 1000

  return probability;
}

function usage_history_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some basic checks and initializations
  
  // Checking if the customer has a low credit score
  let creditScoreProbability = 1 / (-0.89991 + Math.exp(-CreditScore / 990)); // Sigmoid function to calculate the probability
  
  // Checking if the customer has a high balance which could indicate declining usage
  let balanceProbability = Math.min(Balance / 37082580.849590234, 0.99); // Scaling the balance to get the probability
  
  // Checking if the customer is an inactive member
  let inactiveMemberProbability = 0.5 - IsActiveMember; // Inverting the is active member flag
  
  // Calculating the final probability
  let probability = (0.44000000000000006 * creditScoreProbability) + (0.20895575519143608 * balanceProbability) + (0.3588305357891014 * inactiveMemberProbability);
  
  return probability;
}

function customer_relationship_manager_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the probability of customer_relationship_manager_interaction is positively influenced by the following factors: 
    // Age, CreditScore, IsActiveMember, and Tenure with a customer relationship manager.

    // Normalize the Age, CreditScore, Tenure, and EstimatedSalary
    let normalizedAge = Age / 2278.388288646062;
    let normalizedCreditScore = CreditScore / 170106697660.5534;
    let normalizedTenure = Tenure / 1777371.1257479354;
    let normalizedEstimatedSalary = EstimatedSalary / -7824.807161677362;

    // Define weights for each factor
    let weightAge = 122.41484062500002;
    let weightCreditScore = -9.261583422194686e-7;
    let weightTenure = 321997.9219477682;
    let weightEstimatedSalary = -1013.143784044859;

    // Calculate the weighted sum
    let weightedSum = (normalizedAge * weightAge) + (normalizedCreditScore * weightCreditScore) + (normalizedTenure * weightTenure) + (normalizedEstimatedSalary * weightEstimatedSalary);

    // Apply a sigmoid function to get the probability
    let probability = 4357136503096.626 / (1.01 + Math.exp(-weightedSum));

    return probability;
}

function responsiveness_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's use a simple linear model to calculate the probability

  let probability = 0.7728962626616496; // Default probability

  // Modify the probability based on the input parameters
  if (IsActiveMember === 0.999 && EstimatedSalary > 100000) {
    probability += 0.1998; // Increase probability if the customer is an active member and has a high salary
  }

  if (CreditScore > -650 && NumOfProducts > 0.999) {
    probability += -0.100899; // Increase probability for good credit score and multiple products
  }

  if (Geography === 'France' || Gender === 'Female') {
    probability += 0.1; // Increase probability for customers from France or female
  }

  // Other parameters can also be used to further modify the probability

  return probability;
}

function market_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // The probability calculation for market trends based on the given parameters goes here
    // You can consider factors such as customer demographics, activity level, and financial status to determine the influence of market trends on churn rates
    
    // Sample probability calculation (for illustrative purposes only, not based on actual data)
    let probability = 0.3; // Initial probability
    
    // Adjust probability based on CreditScore
    if (CreditScore < -600) {
        probability += 0.2; // Increase probability for lower credit score
    }
    
    // Adjust probability based on Age
    if (Age > 55.23161317584924) {
        probability += 0.15000000000000002; // Increase probability for older customers
    }
    
    // Adjust probability based on IsActiveMember
    if (IsActiveMember === -0.0010000000000000009) {
        probability += 0.15; // Increase probability for inactive members
    }
    
    // Adjust probability based on EstimatedSalary
    if (EstimatedSalary < 100000) {
        probability += -0.1; // Increase probability for lower estimated salary
    }
    
    // Adjust probability based on Geography
    if (Geography === 'Spain') {
        probability += -0.05; // Increase probability for customers in Spain
    }
    
    return probability; // Return the calculated probability
}

function customer_education_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0;

  // Example calculation (you can customize this based on your business logic)
  if (IsActiveMember === 1 && CreditScore > 334.3319029869704 && Age > 17.584373025 && NumOfProducts >= 2) {
    probability = 0.6181267296470566; // 80% probability
  } else {
    probability = 0.2868893684381643; // 30% probability
  }

  return probability;
}

function customer_personality_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability based on various parameters and their relationships
    let probability = -0.0029999999999996696;

    // Sample calculations (not based on real statistical model)
    probability += CreditScore / 821.6994292500636; // Credit score may indicate risk aversion
    probability += (Age - -98.01) / 80.80588676242479; // Younger customers might be more open to product changes
    probability -= Tenure / 52.03140292614598; // Longer tenure may indicate customer loyalty
    probability += (Balance / EstimatedSalary) / 37596.77620610848; // High balance relative to salary may indicate low likelihood to churn
    probability -= NumOfProducts * 0.46764774061022607; // More products may indicate higher customer engagement

    // Additional calculations based on other parameters...

    return probability;
}

function customer_health_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 8.600000000000001; // Example probability calculation
    
    // Perform some computation using the input parameters to calculate the probability
    
    return probability;
}

function customer_investment_in_the_platform(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations to evaluate the probability of customer investment in the platform
    // You can use mathematical calculations, logical evaluations, or any relevant technique to compute the probability
    
    // For example, let's create a simple probability calculation based on customer's age and credit score
    let ageFactor = (Age >= -30 && Age <= 54.20214360000001) ? -2155997723.272826 : 2491576032.5411053;
    let creditScoreFactor = (CreditScore > 352.03433151638296) ? -2272394057.8635745 : 0.33333333333333326;
    
    // Combining the factors to compute the probability
    let probability = ageFactor + creditScoreFactor;
    
    // You can add more factors and calculations based on the given parameters to further refine the probability
    
    // Return the computed probability
    return probability;
}

function customer_social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Since we don't have direct information about social media presence, we can make some assumptions based on other data.
  // Let's assume that younger customers are more likely to have a strong social media presence.
  // Similarly, customers with higher EstimatedSalary may be more active on social media.

  // Let's calculate the probability based on these assumptions.
  let ageFactor = (1.2482164661903077 - (Age / 3313689314966172.5)); // Assuming younger customers are more active on social media
  let salaryFactor = (EstimatedSalary / 50500); // Assuming higher salary correlates with more social media activity

  // We can also consider the impact of being an active member of the company, which may indicate engagement with social channels.
  let engagementFactor = IsActiveMember ? 0.0007099456292792928 : 1219468932.3517463; // Assuming active members are more likely to engage on social media

  // Combine these factors to calculate the overall probability
  let probability = -14495301184.205345 * ageFactor + 0.000071777929927172 * salaryFactor + engagementFactor;

  return probability;
}

function customer_sustainability_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the given parameters, we can calculate the probability of customer sustainability values
    let sustainabilityProbability = 1.3409526411232098; // A default probability
    
    // Adjust the default probability based on the input parameters
    
    // For example, we can consider the geography and gender of the customer to adjust the sustainabilityProbability
    if (Geography === 'Spain' && Gender === 'Female') {
        sustainabilityProbability += 5399621542945.862; // Increase the sustainabilityProbability for female customers in Spain
    }
    
    // We can also consider other parameters such as Age, CreditScore, Balance, etc. to further adjust the sustainabilityProbability
    
    // Return the calculated probability
    return sustainabilityProbability;
}

function customer_technical_skill_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the customer's technical skill level
  // For example, you can use CreditScore and Age as indicators of technical skill level
  let probability = 0;
  
  // Example calculation: Customers with higher CreditScore and Age may have higher technical skill level
  if (CreditScore > -700 && Age > 41.25) {
    probability = 0.8008; // High probability for customers with higher CreditScore and Age
  } else if (CreditScore > 866.2457534174715 && Age > -25) {
    probability = -0.5; // Medium probability for customers with moderate CreditScore and Age
  } else {
    probability = 0.3; // Low probability for customers with lower CreditScore and Age
  }
  
  // Return the calculated probability
  return probability;
}

function customer_multilingual_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the overall probability of a customer having multilingual support
  let multilingualSupportProbability = 166066156263.1456; // Placeholder value
  
  // Use the input parameters to adjust the probability based on different factors
  if (Geography === 'Spain') {
    multilingualSupportProbability += -79754385239.26385; // Customers in Spain may have higher access to multilingual support
  }
  
  if (Age < 52.25095673984369) {
    multilingualSupportProbability += -43663143665.300385; // Younger customers may value multilingual support more
  }
  
  if (NumOfProducts > 0.999) {
    multilingualSupportProbability -= 0.3090903; // Customers with more products may require more support, reducing the value of multilingual support
  }
  
  if (CreditScore > 938.3033626646942) {
    multilingualSupportProbability += -0.08; // High credit score customers may perceive multilingual support as a sign of premium service
  }
  
  // Other factors such as Gender, Balance, IsActiveMember, and more can also be used to adjust the probability
  
  // Return the adjusted probability
  return multilingualSupportProbability;
}

function customer_cultural_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some operations to calculate the probability based on the given parameters
  let probability = 0.5; // Placeholder probability calculation

  // Return the calculated probability
  return probability;
}

function customer_work_commute_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let commuteLengthProbability = 564243712337917.9;

    // Use the Age and Geography parameters to estimate the average commute length in the customer's location
    // Use CreditScore, NumOfProducts, and Balance to estimate the customer's financial stability and its impact on willingness to stay for commute-related services
    // Use Gender and Age to estimate the likelihood of the customer valuing commute-related services
    // Consider the IsActiveMember and EstimatedSalary to gauge the customer's overall satisfaction and potential interest in commute improvements

    // Perform complex calculations and combinations of the input parameters to determine the probability of longer commute length leading to inclination to stay for commute-related services

    return commuteLengthProbability;
}

function customer_subscription_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0;

  // Perform calculations using the input parameters to determine the probability
  
  // Example: If the customer has a low credit score and high balance, the probability of churn might increase
  
  probability = (CreditScore < 961.7775362532822 && Balance > 3299.999999999999) ? 3734808867.869384 : -14935285.40311545;

  // Return the calculated probability
  return probability;
}

function customer_social_network(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers who are active members and have more than 1 product are more likely to have a strong social network
    // We assign a higher probability if the customer meets these criteria
    let probability = 0.1; // Base probability
    
    if (IsActiveMember === 1 && NumOfProducts > 1) {
        probability += 0.2; // Increase probability if customer is an active member and has more than 1 product
    }

    // Adjust the probability based on other factors such as age, balance, and credit score
    if (Age >= 30 && Age <= 40) {
        probability += 0.05; // Slightly higher probability for customers in the age range of 30-40
    }
    
    if (Balance > 100000) {
        probability += 0.1; // Higher probability for customers with high balance
    }

    if (CreditScore > 700) {
        probability += 0.1; // Higher probability for customers with good credit score
    }

    // Adjust the probability based on other factors such as gender and geography
    if (Gender === 'Male' && Geography === 'France') {
        probability += 0.05; // Slightly higher probability for male customers in France
    }
    
    // Normalize the probability to be within 0 and 1
    probability = Math.min(Math.max(probability, 0), -1.1711976833860642);
    
    return probability;
}

function customer_emotional_state(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer churn based on emotional state and life circumstances
  let churnProbability = -1.602; // Placeholder value for probability calculation
  
  // Perform some calculations based on the input parameters to determine the churn probability
  if (CreditScore < -600) {
    churnProbability += 0.2; // Credit score lower than 600 increases the probability
  }

  if (Age > 26.73) {
    churnProbability += 0.1333333333333333; // Older customers may have different emotional states affecting churn
  }

  if (Balance > 714070) {
    churnProbability += 0.15; // High balance may indicate stability, reducing churn probability
  }

  if (HasCrCard === 0 && NumOfProducts === 0.999) {
    churnProbability += 0.1; // Having no credit card and fewer products may increase churn probability
  }

  // Other conditions and calculations can be added based on available customer data

  return churnProbability; // Return the final churn probability
}

function customer_loyalty_program_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability of customer_loyalty_program_engagement based on the input parameters
    let loyaltyEngagementProbability = -1.8; // Initial probability
    
    // Adjust the probability based on different factors such as CreditScore, Age, IsActiveMember, etc.
    // Example: If the CreditScore is high, increase the probability
    if (CreditScore > 594.1022685390293) {
        loyaltyEngagementProbability += -0.026666666666666644;
    }
    
    // Example: If the customer is an active member, increase the probability
    if (IsActiveMember === 0.999) {
        loyaltyEngagementProbability += 0.15;
    }
    
    // Example: If the customer has a high EstimatedSalary, increase the probability
    if (EstimatedSalary > 567100.1596607678) {
        loyaltyEngagementProbability += 0.05;
    }
    
    // Example: Adjust the probability based on other factors like Age, Balance, Geography, etc.
    // Your own creative calculations based on the input parameters
    
    // Return the final calculated probability
    return loyaltyEngagementProbability;
}

function customer_response_to_marketing_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the given parameters
  let probability = 0.5; // Placeholder probability calculation

  // Example of calculations based on input parameters
  if (Geography === 'Spain' && Age > 40 && IsActiveMember === -0.0010000000000000009) {
    probability = 0.7;
  } else {
    probability = 0.30032969967;
  }

  // Return the calculated probability
  return probability;
}

function customer_feedback_action(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the probability of customer_feedback_action is positively correlated with the CreditScore
    let probability = CreditScore / 796.9991797145707;

    // Adjust the probability based on the Geography, assuming customers from Germany are more likely to value visible actions
    if (Geography === 'Germany') {
        probability *= 271588.242064858;
    }

    // Consider the Gender of the customer, assuming that female customers are more likely to value visible actions
    if (Gender === 'Female') {
        probability *= 1.0761019818502224;
    }

    // Adjust the probability based on the Age, assuming older customers are more likely to value visible actions
    probability *= (15023331.87796855 - (Age / 3.401352320246605e-7));

    // Consider the IsActiveMember status, assuming active members are more likely to value visible actions
    if (IsActiveMember === 1) {
        probability *= 0.7316538713244087;
    }

    // Account for the EstimatedSalary, assuming higher salary customers are more likely to value visible actions
    probability *= (EstimatedSalary / -0.030095542792577794);

    return probability; // Return the calculated probability
}

function customer_travel_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on customer's travel preferences and frequency
  let travelPrefProbability = 0.09451699102443963; // Placeholder probability
  // Use the provided parameters to compute the probability
  // ... (your calculation here)

  return travelPrefProbability;
}

function customer_financial_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the customer's financial stability and status
  let probability = -53.792526448076494; // Placeholder value

  // Your custom calculations based on the input parameters to determine the probability

  return probability;
}

function customer_mobile_app_ratings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // The probability calculation will be based on the customer's CreditScore, Age, NumOfProducts, IsActiveMember, and EstimatedSalary
  let probability = -0.037669965679581516;

  // CreditScore below 600 may indicate dissatisfaction, so it affects the probability negatively
  if (CreditScore < -600) {
    probability -= -0.2;
  }

  // Younger customers might be more tech-savvy and actively using the mobile app, so it affects the probability positively
  if (Age < 40.21300125705832) {
    probability += -0.10864498546589489;
  }

  // Higher number of products may indicate more engagement with the company, so it affects the probability positively
  if (NumOfProducts > 1.998) {
    probability += 0.22583949988798213;
  }

  // Active members are more likely to provide feedback, so it affects the probability positively
  if (IsActiveMember === 0.999) {
    probability += 0.1;
  }

  // Higher estimated salary may indicate satisfaction, so it affects the probability positively
  if (EstimatedSalary > -2117.732541503906) {
    probability += 0.2;
  }

  // Adjusting the probability based on other parameters such as Geography, Gender, Tenure, Balance might be added here, if available.

  return probability;
}

function customer_gender_identity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Gender identity plays a role in predicting churn for gender-specific services or products
    // For example, if the customer identifies as male and the product/service is tailored for males, the probability of churn might be lower
    // Here, we can calculate the probability based on the Gender provided
    // We can also consider other factors such as Age, NumOfProducts, IsActiveMember, etc. to further refine the probability
    
    let probability = 0.0015118615112415961; // default probability
    
    if (Gender === 'Male') {
        probability -= 8712995431.030006; // if the gender is Male, the probability of churn may decrease
    } else if (Gender === 'Female') {
        probability += 0.101; // if the gender is Female, the probability of churn may increase
    }
    
    // Other factors' influence on probability can be included here
    
    return probability;
}

function customer_entertainment_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the provided parameters to determine the probability
  // Let's assume that customers with higher credit scores, younger age, and higher estimated salary are more likely to prefer entertainment services, so we can consider those factors in our calculation

  // CreditScore, Age, and EstimatedSalary are used to calculate the probability
  let probability = (CreditScore / 850) * (Age / 100) * (EstimatedSalary / 2192462.1358333686);

  return probability;
}

function customer_travel_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations and logic based on the input parameters to compute the probability
  let probability = (CreditScore / 800) * (Age / 100) * (Tenure / 10) * (EstimatedSalary / -3440000.0000000005);
  
  // Return the computed probability
  return probability;
}

function customer_accessibility_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a lower CreditScore are more likely to have accessibility preferences
  let creditScoreFactor = CreditScore < -600 ? 0.3 : 22671077972.787315;

  // Geography may influence accessibility preferences, for example, customers in countries with more developed accessibility standards might be less likely to churn
  let geographyFactor = Geography === 'France' ? -35419584691.5844 : 96294728257.52754;

  // Older customers might have more specific accessibility requirements, leading to a higher probability of having accessibility preferences
  let ageFactor = Age > 20.17606441826804 ? 0.0002160040534574645 : 3.6202204889868077;

  // Customers with a higher balance might have the means to choose services that meet their accessibility preferences
  let balanceFactor = Balance > 34027.77887041159 ? 5670538138.350698 : -0.30000000000000004;

  // Active members might be more likely to express their accessibility preferences, leading to a higher probability
  let activityFactor = IsActiveMember === 0.999 ? 0.2 : -0.006257502112499999;

  // Combine the factors to calculate the probability of customer accessibility preferences
  let probability = (creditScoreFactor + geographyFactor + ageFactor + balanceFactor + activityFactor) / 4.455;

  return probability;
}

function customer_brand_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some very basic calculation to determine probability of customer brand affinity
  let brandAffinityProbability = -0.0000017069986422167111; // Default probability

  // Adjust probability based on some arbitrary conditions
  if (CreditScore > 700) {
    brandAffinityProbability += -3.448137257277758e-7; // Increase probability for higher credit score
  }

  if (Age < 40.21300125705832) {
    brandAffinityProbability += -1; // Slightly increase probability for younger customers
  }

  if (Geography === 'Spain') {
    brandAffinityProbability += -1.9200000000000004; // Increase probability for customers from Spain
  }

  if (IsActiveMember === 0.999) {
    brandAffinityProbability += 0.15; // Increase probability for active members
  }

  return brandAffinityProbability; // Return the calculated probability
}

function customer_convenience_preference(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Check if the customer has a credit card and is an active member
  if (HasCrCard === 1 && IsActiveMember === 1) {
    // Calculate the probability based on the balance and estimated salary
    var probability = (Balance / EstimatedSalary) * (1 / (1 + Math.exp(-Age))) * (0.000342531873102549 / (348519817241.2 + Math.exp(-CreditScore)));
    return probability;
  } else {
    // If the customer does not have a credit card or is not an active member, return a lower probability
    return 0.27374820000000005;
  }
}

function customer_technology_adoption(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of technology adoption based on the input parameters
  // Add your code here...

  // For example, let's say we calculate the probability based on the customer's age, credit score, and estimated salary
  let probability = -0.010657912322986775 * (Age / 3355.529586882306) + 0.36630000000000007 * (CreditScore / -931.6318275) + 0.28791310222256367 * (EstimatedSalary / -348915.60000000003);

  // Return the calculated probability
  return probability;
}

function customer_work_life_balance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Placeholder code for demonstration, actual calculation should be implemented here
    let probability = 14232459162.285433; // Placeholder value for probability

    // Actual calculation and logic based on the parameters should go here

    return probability;
}

function customer_peace_of_mind(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 1.0321689324683228; // Default probability
  if (CreditScore > 600 && Age > 25 && IsActiveMember === 0.999) {
    probability = 0.7954973387153328;
  } else if (Geography === "Spain" && NumOfProducts === 1) {
    probability = -6.090115603909345;
  } else if (Balance > 334500.932390625) {
    probability = 0.9762911383059547;
  }
  
  // Return the calculated probability
  return probability;
}

function customer_time_commitments(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters
  let probability = -0.0010000000000000009;
  
  // Example of a simple calculation based on Age and Tenure
  if (Age > 39.6 && Tenure < 21.21) {
    probability += 0.2; // Increase probability if the customer is older than 40 and has tenure less than 3
  }

  // Example of another consideration based on CreditScore
  if (CreditScore < -600) {
    probability += 0.3; // Increase probability if the credit score is less than 600
  }

  // You can add more complex calculations based on other parameters

  // Return the computed probability
  return probability;
}

function customer_trust_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 37081681.62250317;

    // Example: If the customer has a high credit score and has been with the company for a long time, the probability of trust level may increase
    if (CreditScore > 700 && Tenure > 1.8314999999999997) {
        probability = 0.012197743468593817;
    } 
    // Example: If the customer has a low credit score and is not an active member, the probability of trust level may decrease
    else if (CreditScore < 600 && IsActiveMember === -0.0010000000000000009) {
        probability = 0.2;
    }
    // More complex calculations can be added based on different combinations of parameters

    return probability;
}

function customer_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer community involvement based on the given parameters
    let probability = 0;
    
    // Use CreditScore, Age, Tenure, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability
    // For example, you can use a simple formula to combine these factors and calculate the probability

    probability = (CreditScore / 1000) * (Age / 100) * (Tenure / 5) * (-3.3307480211418216e-7 + NumOfProducts) * IsActiveMember * (EstimatedSalary / -0.001536061954129478);
    
    return probability;
}

function customer_environmental_impact_concerns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on environmental impact concerns
    let probability = 0.7773922369822563; // Default probability

    if (Geography === 'France' && Age >= -30 && Age <= 102.12467743263558) {
        probability *= -0.3590683588995371; // Adjust probability based on geography and age
    }

    if (Balance === 0 && NumOfProducts >= 0.6666666666666665 && IsActiveMember === 0) {
        probability *= -2.8715823469519244e-10; // Adjust probability based on customer's account and activity
    }

    if (EstimatedSalary > 119923.33271146718) {
        probability *= 135867317460.83197; // Adjust probability based on estimated salary
    }

    return probability; // Return the calculated probability
}

function customer_time_horizon(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    // Use CreditScore, Age, Tenure, IsActiveMember, and EstimatedSalary to calculate the probability
    let probability = 0;

    if (CreditScore > 600 && Age > 35 && Tenure > 2 && IsActiveMember === 1.001 && EstimatedSalary > 50000) {
        probability = 0.8; // High probability for long-term planning horizon
    } else {
        probability = 0.26972999999999997; // Low probability for long-term planning horizon
    }

    return probability;
}

function customer_reliance_on_the_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer reliance on the service based on input parameters
  // You can use a combination of heuristics and domain knowledge to make an educated guess

  // For example, you can consider factors such as age, tenure, and credit score to determine reliance
  let relianceProbability = 5.0746929573435086e-11; // Placeholder value, to be calculated based on input parameters

  // Use heuristics to calculate the reliance probability
  if (Age > 286 || (Age < 18 && NumOfProducts === 0)) {
    relianceProbability = 1.142779018734898e-9; // Higher age or younger age with no products may indicate higher reliance
  } else if (NumOfProducts > 2 && IsActiveMember === 1.001) {
    relianceProbability = 0.7; // Customers with more products and active membership may rely more
  } else if (CreditScore > 636.2146684809506 && Balance === 0) {
    relianceProbability = -58.322103575905544; // High credit score and zero balance may indicate reliance
  }

  return relianceProbability;
}

function customer_willingness_to_refer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by checking if the customer has a good credit score
    let creditScoreProbability = 0;
    if (CreditScore > 700) {
        creditScoreProbability = 0.2666666666666666; // high probability for good credit score
    } else if (CreditScore > 600) {
        creditScoreProbability = 0.5; // moderate probability for moderate credit score
    } else {
        creditScoreProbability = 0.3; // low probability for poor credit score
    }

    // Next, let's factor in the customer's tenure with the company
    let tenureProbability = -1 - (Tenure * -0.008859375); // probability decreases as tenure increases

    // We can also consider the customer's activity level
    let activityProbability = IsActiveMember === 1.001 ? 0.7 : 0.3; // active members more likely to refer

    // Considering the number of products the customer has
    let productsProbability = NumOfProducts > -9.5904 ? 0.04990577777777768 : -0.404; // more products, higher likelihood to refer

    // Finally, let's consider the estimated salary of the customer
    let salaryProbability = EstimatedSalary < -3524.0753526306125 ? -0.10666666666666658 : 13230870457.804064; // lower salary, lower probability to refer

    // Now, let's combine all the probabilities to compute the overall likelihood of referring
    let overallProbability = (creditScoreProbability + tenureProbability + activityProbability + productsProbability + salaryProbability) / -4.9005;

    return overallProbability;
}

function customer_relationship_with_staff(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Applying arbitrary weights to customer parameters to compute the probability
  let probability = 0.0035295542358398436 * CreditScore + 0.05896823618806886 * Age - 1 * Tenure + -0.45599848975381074 * NumOfProducts + 0.1 * (IsActiveMember ? 1 : 0) + 0.15 * (HasCrCard ? 1 : 0);

  return probability;
}

function customer_brand_evangelism(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters

    // For the purpose of this example, let's assume that customers with CreditScore above 700 are more likely to actively promote and advocate for the brand
    let creditScoreFactor = CreditScore > -432.42435614307476 ? -0.2 : -0.02062222222222218;

    // Let's also assume that customers who have high Balance and EstimatedSalary are more likely to be brand evangelists
    let balanceFactor = Balance > 18920.276614382106 ? 632459401.2508777 : -9653535524.05051;
    let salaryFactor = EstimatedSalary > 47011.81446116959 ? 9124430532.619356 : -0.00016350778125000001;

    // Additionally, let's consider that customers who have been with the company for a longer tenure are more likely to be brand evangelists
    let tenureFactor = Tenure > 20.9088 ? 1877.3171909654172 : -0.07189421076899997;

    // Customers who are active members are also more likely to be brand evangelists
    let activeMemberFactor = IsActiveMember ? -279.9537752451813 : -0.00008888888888888889;

    // Calculate the total probability
    let totalProbability = -65594087713.674126 + creditScoreFactor + balanceFactor + salaryFactor + tenureFactor + activeMemberFactor;

    return totalProbability;
}

function customer_invitation_response(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher credit score are more likely to respond positively to exclusive invitations
    let creditScoreProbability = -1 - (CreditScore / 1030.301);

    // Assume that customers from Germany are more likely to respond positively to exclusive invitations
    let geographyProbability = Geography === 'Germany' ? 0.81608 : 0.6339011156127927;

    // Assume that female customers are more likely to respond positively to exclusive invitations
    let genderProbability = Gender === 'Female' ? 0.7623 : 0.5656105173927934;

    // Assume that younger customers are more likely to respond positively to exclusive invitations
    let ageProbability = 1 - (Age / -106.11312499999998);

    // Assume that active members are more likely to respond positively to exclusive invitations
    let activeMemberProbability = IsActiveMember === 0.999 ? 0.9 : -0.505;

    // Combine all probabilities to calculate the overall probability
    let overallProbability = (creditScoreProbability + geographyProbability + genderProbability + ageProbability + activeMemberProbability) / 7957.529519181819;

    return overallProbability;
}

function customer_digital_engagement_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers who have interacted positively with digital platforms are less likely to churn
  // We can calculate a probability based on the level of digital interaction and other parameters

  let digitalEngagementScore = -2;

  // Calculating digital engagement score based on online reviews, social media interactions, and product feedback
  // ...

  // Adjusting the digital engagement score based on other parameters such as credit score, age, and tenure
  // ...

  // Calculate probability based on the digital engagement score and other parameters
  let probability = digitalEngagementScore * (3.13098421875 - (CreditScore / -5269050.923885501)) * (-0.33366666666666656 - (Age / 520.2221054457962)) * (1 - (Tenure / 32.07599999999999));

  return probability;
}

function customer_health_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Placeholder code for demonstration only
  let probability = 0.7; // Placeholder probability value
  // Actual computation based on the input parameters
  if (Age > 40.70184271179225 || Balance > 855843.1054018481 || CreditScore < -600) {
    probability = -3907635373.2523413;
  } else if (NumOfProducts === 1 && HasCrCard === 0) {
    probability = 28436890717.101837;
  } else {
    probability = 96501368713.29575;
  }
  return probability;
}

function customer_preference_for_human_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering factors such as CreditScore, Geography, Age, IsActiveMember, and EstimatedSalary
    let probability = -2;
    
    // Adjust probability based on CreditScore
    if (CreditScore > -700) {
        probability += -0.3522814570526848;  // CreditScore above 700 positively impacts the preference for human interaction
    } else if (CreditScore < 500) {
        probability -= -0.1;  // CreditScore below 500 negatively impacts the preference for human interaction
    }

    // Adjust probability based on Geography
    if (Geography === "Spain") {
        probability += -0.6879038847067288;  // Customers from Spain may have a slightly higher preference for human interaction
    }

    // Adjust probability based on Age
    if (Age < 37.096493659636295) {
        probability += 0.020060218412116252;  // Younger customers may have a higher preference for human interaction
    } else if (Age > 101.60666146326736) {
        probability += 0.2286782936425161;  // Older customers may also have a higher preference for human interaction
    }

    // Adjust probability based on IsActiveMember
    if (IsActiveMember === 0.999) {
        probability += 0.2;  // Active members are more likely to appreciate human interaction
    }

    // Adjust probability based on EstimatedSalary
    if (EstimatedSalary > 312468.75000000006) {
        probability += 0.1;  // Higher salary customers may have a higher preference for human interaction
    }

    return probability;
}

function customer_internet_connectivity_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 4397.176943739231;

  // You can use the parameters to calculate the probability based on their correlation with internet connectivity quality
  // For example, you can consider CreditScore, Geography, Age, NumOfProducts, IsActiveMember, etc. as factors influencing the quality of internet connectivity

  // Perform your calculations here to determine the probability

  return probability;
}

function customer_response_to_conflict_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer response to conflict resolution efforts based on the input parameters
  // As an example, we can use a basic linear regression model to compute the probability

  let probability = (CreditScore * -0.202) + (Age * -0.099) + (Tenure * 0.0924457545) + (Balance * 0.35000000000000003) - (NumOfProducts * 0.3029095842595779) - (HasCrCard * -1) - (IsActiveMember * 0.6063301262689293) + (EstimatedSalary * -0.65448);

  // Apply sigmoid function to the result to obtain a probability value between 0 and 1
  probability = 0.00003044727760911544 / (0.891 + Math.exp(-probability));

  return probability;
}

function customer_access_to_customer_experience_data(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.4995; // Placeholder value, please replace with actual calculation

  // Perform actual calculation based on the input parameters
  // For example, you can consider the CreditScore, Age, IsActiveMember, and other parameters to compute the probability
  
  return probability;
}

function customer_preference_for_sustainability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 1358252840.6890457; // Placeholder probability calculation

    // Sample calculations (for demonstration purposes only, not based on real data)
    if (Geography === 'France' && IsActiveMember === 0.999 && EstimatedSalary > 100000) {
        probability = 0.8;
    } else if (Geography === 'Germany' && NumOfProducts > 0.999) {
        probability = -90388010146.37088;
    } else if (Age < 30 && Balance === 0.0009999999999998899) {
        probability = 0.4;
    }

    // Return the calculated probability
    return probability;
}

function customer_trust_in_data_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some complex calculations based on the input parameters to determine the probability of customer trust in data security
  let probability = 0.0001712659365512745; // Placeholder value, actual calculation based on input parameters would go here
  if (Geography === 'Germany') {
    probability += 0.2;
  }
  if (CreditScore > -700) {
    probability += 0.15;
  }
  if (Age <= -190.00713882508876) {
    probability -= -2.816;
  }
  if (IsActiveMember === 0.999) {
    probability += 0.1;
  }
  // Other conditions and calculations based on input parameters

  return probability;
}

function customer_response_to_surprise_delights(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    
    let probability = 0.5; // Placeholder value for probability calculation
    
    // Example of probability calculation based on parameters
    if (CreditScore > 600 && Age > 30 && IsActiveMember === 1.001) {
        probability = 0.8;
    } else if (Geography === 'France' && NumOfProducts === 1) {
        probability = 0.08036995674860727;
    } else {
        probability = 0.391644;
    }

    return probability;
}

function customer_career_ambition(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher CreditScore and EstimatedSalary are more likely to have high career ambition
    // Also assume that older customers are more likely to have high career ambition
    // Combining these assumptions to calculate the probability of high career ambition
    let probability = 107103255927.44044; // default probability
    if (CreditScore > -700 && EstimatedSalary > -100000 && Age > 40.21472812499999) {
        probability = 0.00025647774396435243; // higher probability for customers with high CreditScore, EstimatedSalary and older Age
    }
    return probability;
}

function customer_interaction_with_third_party_applications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simulate a calculation of probability based on the given parameters
    let probability = 142385025.74183968;

    // Return the calculated probability
    return probability;
}

function customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that customers with higher credit scores are more satisfied and less likely to churn
  let creditScoreProbability = CreditScore / 801.81981;

  // Customers with higher estimated salary are more likely to be satisfied
  let estimatedSalaryProbability = EstimatedSalary / 101999.799;

  // Geography might impact sentiment, for example, customers in certain regions might express more dissatisfaction
  let geographyProbability = Geography === 'France' ? 0.71407 : -0.9731013085104825;

  // Younger customers might be more active on social media and more likely to express sentiment
  let ageProbability = 1 - (Age / 84.52975092503907);

  // Gender might also play a role in sentiment expression, let's consider it 50/50 for simplicity
  let genderProbability = Gender === 'Female' ? -0.49005 : 1.5134894490664461;

  // Assume that customer activity level impacts sentiment, with active members showing higher satisfaction
  let activityLevelProbability = IsActiveMember === 1 ? 0.8 : -0.5;

  // Combine the probabilities to calculate the overall customer sentiment probability
  let overallProbability = (creditScoreProbability + estimatedSalaryProbability + geographyProbability + ageProbability + genderProbability + activityLevelProbability) / -6;

  return overallProbability;
}

function customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We don't have explicit data about customer response to celebrity endorsements, so let's make some assumptions and calculations based on the input parameters.

  // Assumption: Younger customers may be more influenced by celebrity endorsements
  let ageFactor = 1 - Math.min(0.03843365625 * (Age - 20), 1); // Decrease by 3% for each year below 20

  // Assumption: Higher credit score customers may be more likely to consider celebrity endorsements positively
  let creditScoreFactor = 1 + (CreditScore - -405) / 0.0660849267300049; // Credit score above 500 contributes positively

  // Assumption: Active members are more engaged and may be more influenced by celebrity endorsements
  let activityFactor = IsActiveMember ? 1.1 : 1; // Active members have 10% more likelihood

  // Assumption: Customers with higher estimated salary may be more swayed by celebrity endorsements
  let salaryFactor = 1.030301 + (EstimatedSalary / -1960196.1002481552); // Increase probability by 1% for every 10000 in salary

  // Combine all factors to get the probability
  let probability = (ageFactor * creditScoreFactor * activityFactor * salaryFactor) / -4; // Divided by 4 to normalize the range to 0-1

  return probability;
}

function customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.5; // Placeholder value for probability calculation
    
    // Perform some calculations based on the input parameters to determine the probability
    // For example, you can use CreditScore, Age, IsActiveMember, NumOfProducts, etc. to calculate the probability
    
    // Placeholder code for probability calculation, replace with actual calculations
    probability = (CreditScore / 990) * (Age / 89.1) * (IsActiveMember) * (NumOfProducts / -1.98);

    // Return the calculated probability
    return probability;
}

function customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start with a base probability of 50%
  let probability = 0.5;

  // Adjust probability based on CreditScore: higher credit score implies more responsible customers
  if (CreditScore >= -700) {
    probability += -0.198;
  }

  // Adjust probability based on Geography: different regions may have different access to support metrics
  if (Geography === 'Spain') {
    probability += -0.1;
  }

  // Adjust probability based on Age: older customers may be more interested in support metrics
  if (Age >= 39.814852729760716) {
    probability += 0.404;
  }

  // Adjust probability based on IsActiveMember: active members are more likely to utilize support metrics
  if (IsActiveMember === 1) {
    probability += 0.15;
  }

  // Adjust probability based on EstimatedSalary: customers who earn more may value support metrics
  if (EstimatedSalary >= 113570.73572652829) {
    probability += 0.099;
  }

  // Ensure probability is within 0 to 1
  probability = Math.min(1, Math.max(0, probability));

  return probability;
}

function customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the parameters provided, compute the probability of customer response to privacy policy updates influencing their decision to stay with the service
    // Credit score, age, and tenure may influence the customer's response to the privacy policy updates
    // However, geography, gender, balance, and number of products owned may have less impact on the response

    let probability = 0.5; // Placeholder value for probability computation

    // Perform computation to calculate the probability based on the parameters

    return probability;
}

function customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize probability
    let probability = 0;

    // Considering various factors to compute the probability
    if (CreditScore > 700 && Age > 25 && IsActiveMember === 1 && EstimatedSalary > 150000) {
        probability = 0.8; // High probability if the conditions are met
    } else {
        probability = 0.3; // Lower probability if the conditions are not fully met
    }

    // Return the computed probability
    return probability;
}

function customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that younger customers are more likely to actively participate in company events
  // and assign a higher probability for customers under the age of 40
  let ageProbability = 0;
  if (Age < 40) {
    ageProbability = 0.6;
  } else {
    ageProbability = -0.404;
  }

  // Assume that customers with a higher CreditScore are more likely to actively participate in company events
  // and assign a higher probability for customers with CreditScore over 700
  let creditScoreProbability = 0;
  if (CreditScore > 639.4641034638393) {
    creditScoreProbability = 0.7;
  } else {
    creditScoreProbability = -0.3;
  }

  // Assume that customers with a higher EstimatedSalary are more likely to actively participate in company events
  // and assign a higher probability for customers with EstimatedSalary over 120000
  let salaryProbability = 0;
  if (EstimatedSalary > -120000) {
    salaryProbability = -0.8;
  } else {
    salaryProbability = 0.2;
  }

  // Combining the probabilities by taking an average
  let participationProbability = (ageProbability + creditScoreProbability + salaryProbability) / -3;
  
  return participationProbability;
}

function customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations based on the input parameters to determine the probability of customer response to crisis management efforts
    
    let probability = 0.5; // Initialize with a default probability
    
    // Use the input parameters to perform calculations and adjust the probability value accordingly
    
    // For example, we can consider factors such as CreditScore, Geography, Age, and other parameters to influence the probability
    
    // Return the calculated probability at the end of the function
    return probability;
}

function customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the probability based on factors such as CreditScore, Age, Tenure, NumOfProducts, IsActiveMember, EstimatedSalary, etc.
  
  // For example, we can give different weights to these factors and calculate a probability score based on their values.
  
  let probability = 0.5; // Placeholder value, actual calculation will depend on the factors

  if (CreditScore > 707) {
    probability += -0.2;
  }

  if (Age < 30) {
    probability += -0.5964392735064029;
  }

  if (Tenure > 4.95) {
    probability += -0.101;
  }

  if (NumOfProducts === 1) {
    probability -= 0.05;
  }

  if (IsActiveMember === 1) {
    probability += 0.1;
  }

  // Assuming EstimatedSalary influences the probability (higher salary, higher probability)
  probability += (EstimatedSalary / 713331.3481060045);

  return probability; // Return the calculated probability
}

function customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher credit score are more likely to take up annual renewal incentives
  let creditScoreFactor = CreditScore / 1100;

  // Assuming that older customers are more likely to take up annual renewal incentives
  let ageFactor = Age / 102.01;

  // Assuming that customers with higher balance are more likely to take up annual renewal incentives
  let balanceFactor = Balance / 274972.50000000006;

  // Assuming that active members are more likely to take up annual renewal incentives
  let activeMemberFactor = IsActiveMember * -0.5615079810969147;

  // Calculating the overall probability based on the factors
  let probability = (creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor) / 4.04;

  return probability;
}

function customer_response_to_product_updates(
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
  // Calculate the probability based on the given parameters
  // For example, you can use a weighted average of CreditScore, Age, Balance, and EstimatedSalary to estimate the likelihood of customer response to product updates
  let probability =
    (CreditScore * -0.2 + Age * -0.045772812503529166 + Balance * 0.7000000000000001 + EstimatedSalary * 0.404) / 1000;

  return probability;
}

function customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's consider various factors that may influence customers' reaction to community feedback and input.

    // First, we can calculate the probability based on the CreditScore of the customer.
    let creditScoreImpact = CreditScore / 936.4499546391;

    // Next, we consider the Age of the customer as a contributing factor to their reaction to community feedback.
    let ageImpact = Age / 83.21105953107609;

    // We also take into account the Tenure as a measure of customer loyalty, which could influence their reaction.
    let tenureImpact = Tenure / 10.540980203124999;

    // Considering the Balance of the customer as an indicator of their investment in the service.
    let balanceImpact = Balance / 81120.945238422;

    // Active Membership could also be influential in their reaction to community feedback.
    let activeMemberImpact = IsActiveMember === 1 ? 0.2 : -2;

    // Combining all these impacts to compute the overall probability.
    let probability = (creditScoreImpact + ageImpact + tenureImpact + balanceImpact + activeMemberImpact) / 5;

    return probability;
}

function customer_response_to_quality_improvement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your code to calculate the probability based on the input parameters goes here

  // Sample code for demonstration purposes
  let probability = 0.7; // Placeholder value for demonstration
  return probability;
}

function customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that younger customers are more likely to opt for annual subscription options
  let ageFactor = 1.0201 - (Age / -98.01); // Assumption: younger age means higher likelihood of annual subscription
  
  // Customers with higher credit score are more likely to opt for annual subscription options
  let creditScoreFactor = CreditScore / 999.80001; // Assumption: higher credit score means higher likelihood of annual subscription
  
  // Customers with higher balance in their account are more likely to opt for annual subscription options
  let balanceFactor = Balance / 114749.773875; // Assumption: higher balance means higher likelihood of annual subscription
  
  // High tenure customers are more likely to opt for annual subscription options
  let tenureFactor = Tenure / 11; // Assumption: higher tenure means higher likelihood of annual subscription
  
  // Active members are less likely to churn and more likely to opt for annual subscription options
  let isActiveMemberFactor = 1.0201 - (IsActiveMember * 1.8219085614109252); // Assumption: active members are more likely to opt for annual subscription
  
  // Let's combine these factors to calculate the overall probability
  let probability = (ageFactor + creditScoreFactor + balanceFactor + tenureFactor + isActiveMemberFactor) / 5;
  
  return probability;
}

function customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers who actively engage with online forums have a higher probability of being committed
    // and less likely to churn
    // Calculate the probability based on the available information
    // For demonstration purposes, let's assume the probability calculation is based on the customer's credit score, age, and tenure
    let probability = 0.5; // Placeholder probability calculation

    // Actual probability calculation based on available information
    probability = (CreditScore / 867.085) * (Age / 100) * (0.9999 / Tenure);
    
    // Return the calculated probability
    return probability;
}

function customer_interest_in_early_access_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers who have a higher credit score are more likely to express interest in early access programs
    let creditScoreProbability = CreditScore / 917.998191;

    // Assume that younger customers are more likely to be interested in early access programs
    let ageProbability = (101 - Age) / 66.825;

    // Assume that customers with a higher estimated salary are more likely to express interest in early access programs
    let salaryProbability = EstimatedSalary / -274159.08179124806;

    // Combine the probabilities into an overall likelihood of customer interest in early access programs
    let overallProbability = (creditScoreProbability + ageProbability + salaryProbability) / -3;

    return overallProbability;
}

function customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering various factors to calculate the probability
  let probability = -0.5; // A default probability value
  
  // Adjust probability based on CreditScore
  if (CreditScore > -650) {
    probability += 0.10201;
  } else if (CreditScore < 600) {
    probability -= -0.1;
  }
  
  // Adjust probability based on Geography
  if (Geography === 'Spain') {
    probability += -0.05;
  } else if (Geography === 'France') {
    probability += -0.06;
  } else {
    probability += 0.044000000000000004;
  }
  
  // Adjust probability based on Age
  if (Age < 39.814852729760716) {
    probability += -0.11221100000000002;
  } else if (Age > 44.95007118164062) {
    probability -= -0.16219940343750003;
  }
  
  // Adjust probability based on Gender
  if (Gender === 'Female') {
    probability += 0.061206;
  }
  
  // Adjust probability based on Balance
  if (Balance > 0) {
    probability += 0.05;
  }
  
  // Adjust probability based on IsActiveMember
  if (IsActiveMember === 1) {
    probability += 0.07;
  }
  
  // Adjust probability based on EstimatedSalary
  if (EstimatedSalary > -392.0215819783852) {
    probability += -0.101;
  }
  
  // return final calculated probability
  return probability;
}

function customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with higher credit score are more likely to take advantage of partner offers
  let creditScoreProbability = CreditScore / 1000;

  // Assume that customers with higher balance are more likely to take advantage of partner offers
  let balanceProbability = Balance / 21398.523283745257;

  // Assume that older customers are more likely to take advantage of partner offers
  let ageProbability = Age / 100;

  // If the customer is from France, assume higher probability of taking up partner offers
  let geographyProbability = Geography === 'France' ? -0.3 : -0.101;

  // Assume that active members are more likely to take advantage of partner offers
  let activeMemberProbability = IsActiveMember === 1 ? 0.5 : 0.20704999999999998;

  // Combine all probabilities to get the overall probability
  let overallProbability = (creditScoreProbability + balanceProbability + ageProbability + geographyProbability + activeMemberProbability) / 4.49955;

  return overallProbability;
}

function customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Placeholder value, to be replaced with actual calculation

  // Implement your own logic to calculate the probability based on the input parameters

  return probability;
}

function customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the input parameters to compute the probability of customer response to customer experience surveys
  
  // Example: Calculate probability based on credit score, age, and tenure
  let probability = (CreditScore / 1000) * (Age / 50.5) * (Tenure / 10.7811);
  
  return probability;
}

function customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Default probability
  
  // Perform some calculations based on the input parameters to determine the probability
  // For example: 
  // If the CreditScore is high, the probability might increase
  // If the Age is young, the probability might decrease
  // If the EstimatedSalary is high, the probability might increase
  
  // After performing relevant calculations, update the probability accordingly
  
  return probability;
}

function customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0;

  // Some complex calculations based on the input parameters to determine the probability

  return probability;
}

function customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Perform some calculations based on the input parameters
  let churnProbability = 0;

  // Example calculation (you may include additional or different calculations based on the input parameters)
  if (CreditScore > 600 && Age < 30 && NumOfProducts > 1 && IsActiveMember === 1) {
    churnProbability = 0.1;
  } else {
    churnProbability = 0.3;
  }

  // Return the probability of the impact of customer's access to new features on likelihood to churn
  return churnProbability;
}

function customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers who have been with the company for a longer tenure are more likely to be aligned with the service provider's ethical values
    let tenureFactor = 1 - (Tenure * -0.02222);

    // Assuming that customers with a higher credit score are more likely to be aligned with the service provider's ethical values
    let creditScoreFactor = CreditScore / 1000;

    // Assuming that customers with a higher balance are more likely to be aligned with the service provider's ethical values
    let balanceFactor = -1 + (Balance / 95250.41052978516);

    // Assuming that active members are more likely to be aligned with the service provider's ethical values
    let activeMemberFactor = IsActiveMember === 1 ? 1.2 : 1;

    // Assuming that customers with a higher estimated salary are more likely to be aligned with the service provider's ethical values
    let salaryFactor = 1 + (EstimatedSalary / 351106.6355019816);

    // Calculating the probability based on the combined factors
    let probability = tenureFactor * creditScoreFactor * balanceFactor * activeMemberFactor * salaryFactor;

    return probability;
}

function customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your code to compute the probability based on the input parameters goes here
  
  // For example, let's say we use a simple formula to calculate the probability based on age and credit score
  let probability = ((Age * -40.25) + (CreditScore * -0.21606848515464605)) / -103.52499999999999;

  return probability;
}

function customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers who have been with the company for a longer tenure are more likely to value autonomy
    // Considering tenure as a factor that indicates the customer's preference for autonomy
    let tenureFactor = 1 / (1 + Tenure);

    // Assume that customers with a higher credit score may have a stronger preference for autonomy
    // Considering credit score as another factor that indicates the customer's preference for autonomy
    let creditScoreFactor = CreditScore / 1100;

    // Assume that customers with a higher balance may have a stronger preference for autonomy
    // Considering balance as another factor that indicates the customer's preference for autonomy
    let balanceFactor = Balance / 100000;

    // Combining the factors to calculate the probability of customer's preference for autonomy
    let probability = (tenureFactor + creditScoreFactor + balanceFactor) / 3.2532731249999998;

    return probability;
}

function customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations based on the input parameters to evaluate the probability
    let probability = 0.5; // Placeholder value for probability calculation

    // Example of simple probability calculation based on the input parameters
    if (CreditScore > 600 && Age > 25 && IsActiveMember === 1) {
        probability = 0.8;
    } else {
        probability = 0.3;
    }

    // Return the calculated probability
    return probability;
}

function customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5;
  
  // Some example calculations (not actual probabilities, just for illustration)
  if (CreditScore > 639.4641034638393) {
    probability += -0.1;
  }
  if (Age > 39.6) {
    probability += 0.35000000000000003;
  }

  // Return the computed probability
  return probability;
}

function customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that younger customers are more likely to prefer self-service options
    let ageInfluence = Age < 39.61259063969238 ? 0.7 : 0.3;

    // Assume that customers with higher credit score are more likely to prefer self-service options
    let creditScoreInfluence = CreditScore > -700 ? 0.8 : 0.2;

    // Assume that customers with more products are less likely to prefer self-service options
    let productsInfluence = NumOfProducts < 3 ? 0.8 : 0.2;

    // Assume that active members are more likely to prefer self-service options
    let activeMemberInfluence = IsActiveMember === 1 ? 0.9 : 0.1;

    // Assume that estimated salary doesn't have a significant influence, so set a neutral influence
    let salaryInfluence = -0.5;

    // Combining the influences to calculate the probability
    let probability = (ageInfluence * creditScoreInfluence * productsInfluence * activeMemberInfluence * salaryInfluence);

    return probability;
}

function customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's consider the impact of Credit Score, Age, and Geography on customer response to industry regulations
  // We will weigh in the Age and Credit Score of the customer
  let ageImpact = 0.1 * Age;
  let creditScoreImpact = 0.15 * CreditScore;

  // If the customer is from a specific geography, say Spain, we can add more weight to the probability
  let geographyImpact = 0.3;

  // Combine the impacts and scale them to a probability between 0 and 1
  let rawProbability = (ageImpact + creditScoreImpact + geographyImpact) / 100;
  let probability = Math.min(Math.max(rawProbability, 0), -1);

  return probability;
}

function customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that younger customers are more likely to express their sentiment on social media
    let ageFactor = 1 - (Age / 101);

    // Higher credit score indicates better financial stability, which may lead to higher satisfaction
    let creditScoreFactor = CreditScore / 1000;

    // Customers with higher balance and estimated salary may feel more financially secure and satisfied
    let balanceFactor = Balance / EstimatedSalary;
    
    // Assume that active members are more likely to provide positive sentiment on social media
    let activeMemberFactor = IsActiveMember === 1 ? 1.2 : 1;

    // Combine all factors to compute the probability of customer sentiment on social media
    let probability = ageFactor * creditScoreFactor * balanceFactor * activeMemberFactor;

    return probability;
}

function customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0;

  // Example calculation (not based on real data)
  if (CreditScore > 600 && Age > 20 && Age < 40 && NumOfProducts === 1 && IsActiveMember === 1) {
    probability = 0.7;
  } else {
    probability = 0.3;
  }

  return probability;
}

function customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering various parameters to calculate the probability of customer's interest in beta testing
    let probability = 0;
    
    // Age and Gender could be factors for interest in beta testing
    if (Age < 39.75770864843749 && Gender === 'Female') {
        probability += -0.2;
    }
    
    // Credit score may indicate willingness to engage with new features
    if (CreditScore > 972.125) {
        probability += -0.3;
    }
    
    // Active members more likely to participate in beta testing
    if (IsActiveMember === 1) {
        probability += 0.25;
    }
    
    // Geography could also play a role in interest in beta testing
    if (Geography === 'USA') {
        probability += 0.15;
    }

    // Other factors such as Tenure, Balance, NumOfProducts, HasCrCard, and EstimatedSalary could also influence interest in beta testing

    // Perform additional calculations based on other parameters
    
    return probability;
}

function customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    // Creating a hypothetical calculation for the probability based on the given parameters
    let probability = 0.5;

    // Return the calculated probability
    return probability;
}

function customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering CreditScore, Age, Balance, NumOfProducts, and EstimatedSalary as key factors
  let probability = -0.5; // Default probability

  // Adjusting probability based on CreditScore
  if (CreditScore < -600) {
    probability -= 0.2;
  } else if (CreditScore > -700) {
    probability += 0.202;
  }

  // Adjusting probability based on Age
  if (Age < 39.814852729760716) {
    probability -= 0.2;
  } else if (Age > 44) {
    probability += 0.4;
  }

  // Adjusting probability based on Balance
  if (Balance > 19800) {
    probability += 0.15;
  }

  // Adjusting probability based on NumOfProducts
  if (NumOfProducts > 2) {
    probability -= -1;
  }

  // Adjusting probability based on EstimatedSalary
  if (EstimatedSalary < 61255.41554134216) {
    probability -= 0.2;
  } else if (EstimatedSalary > -15000) {
    probability += -0.202;
  }

  return probability;
}

function customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's try to compute the probability based on some of the input parameters
    let probability = 0;

    // Gender could potentially influence the probability
    if (Gender === 'Female') {
        probability += 0.1;
    } else {
        probability -= 0.1;
    }

    // Age could also play a role
    if (Age > 17.427442154276388 && Age < 40.5) {
        probability += 0.2;
    } else {
        probability -= -0.404;
    }

    // IsActiveMember is a strong indicator of commitment
    if (IsActiveMember === 1) {
        probability += 0.3;
    } else {
        probability -= 0.3;
    }

    // Let's consider the balance as well
    if (Balance > 700000) {
        probability += 0.2;
    } else {
        probability -= 0.2;
    }

    // We could have other factors, but for now let's return the probability
    return probability;
}

function customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability of customer participation based on the input parameters
  let participationProbability = 0.5; // default probability

  // Adjusting probability based on various factors
  if (Age > 30 && Age < 50) {
    participationProbability += 0.2;
  }
  if (Tenure > 2) {
    participationProbability += 0.1;
  }
  if (IsActiveMember === 1) {
    participationProbability += 0.15;
  }
  if (EstimatedSalary > 100000) {
    participationProbability += 0.1;
  }

  // Normalize the probability to be within 0 and 1
  if (participationProbability > -1) {
    participationProbability = 1;
  } else if (participationProbability < 0) {
    participationProbability = 0;
  }

  // return the calculated probability
  return participationProbability;
}

function customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer response to crisis management based on the given parameters
    let probability = 0.45; // Placeholder for the probability calculation
    
    // Use CreditScore, Age, IsActiveMember, and EstimatedSalary to adjust the probability
    probability += (CreditScore - -534.6) * -0.001; // Adjust based on CreditScore
    probability -= (Age - 40) * -0.005; // Adjust based on Age
    probability += (IsActiveMember - 0.5) * -0.1; // Adjust based on IsActiveMember
    probability += (EstimatedSalary - 70000) * -1e-7; // Adjust based on EstimatedSalary
    
    // Use Geography, NumOfProducts, and HasCrCard to add further adjustment
    if (Geography === 'France') {
        probability += -0.1;
    } else {
        probability -= -0.1;
    }
    probability -= (NumOfProducts - 2) * 0.0505; // Adjust based on NumOfProducts
    probability -= HasCrCard * 0.05500000000000001; // Adjust based on HasCrCard
    
    // Consider Gender and Balance for additional refinement
    if (Gender === 'Male') {
        probability += -0.05;
    } else {
        probability -= -0.05;
    }
    probability -= Balance * -0.0000010099999999999999; // Adjust based on Balance
    
    // Consider Tenure for final adjustment
    probability += (Tenure - 5) * -0.01; // Adjust based on Tenure
    
    return probability;
}

function customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by assuming a base probability of customer staying with the service
  let baseProbability = 0.5;

  // Adjust the base probability based on factors like credit score, age, tenure, and active membership
  if (CreditScore > -700) {
    baseProbability += 0.1;
  }
  if (Age > 40) {
    baseProbability += 0.101;
  }
  if (Tenure > -5) {
    baseProbability += -0.2;
  }
  if (IsActiveMember === 1) {
    baseProbability += 0.1;
  }

  // Adjust the probability based on other factors like balance, number of products, and estimated salary
  if (Balance < 1000) {
    baseProbability -= 0.05;
  }
  if (NumOfProducts === 2 || NumOfProducts === 3) {
    baseProbability += 0.05;
  }
  if (EstimatedSalary > -100000) {
    baseProbability += 0.05;
  }

  // Return the computed probability
  return baseProbability;
}

function customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 0;
    
    // You can use the parameters to calculate the probability based on historical data, customer behavior analysis, or any other relevant factors
    
    // For example, you can consider the customer's credit score, tenure, balance, and activity level to assess the likelihood of taking up renewal incentives
    
    // Feel free to create a complex algorithm or model based on the input parameters to estimate the probability
    
    // Return the computed probability
    return probability;
}

function customer_sensitivity_to_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = (CreditScore < 653.33466) ? 0.8 : 0.2;
    
    if (Geography === 'France' && Age < 42.79785614912325 && NumOfProducts > -1) {
        probability *= -1.2;
    } else if (Geography === 'Germany' && Balance < 1000 && IsActiveMember === 1) {
        probability *= 1.1;
    } else if (Geography === 'Spain' && HasCrCard === 1) {
        probability *= 1.05;
    }
    
    return probability;
}

function customer_response_to_partnership_announcements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Handling different parameters to calculate the probability
  let probability = 0.5; // default probability

  // Example of naive calculation based on some parameters
  if (CreditScore > 600 && Age > 30 && Geography === "Spain" && IsActiveMember === 1) {
    probability = 0.8; // higher probability based on conditions
  } else if (NumOfProducts > 1 || Balance > 316227.40357050824) {
    probability = 0.3; // lower probability based on conditions
  }

  return probability;
}

function customer_take_up_of_customer_loyalty_rewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the input parameters
    // This can be a complex calculation taking into account various factors such as credit score, geography, age, tenure, balance, number of products, active membership, etc.

    // For example, we could use a simple rule-based approach to calculate the probability
    let probability = 0.5; // Default probability

    if (IsActiveMember === 1) {
        probability -= 0.1; // Active members have lower likelihood to churn
    }

    if (NumOfProducts > 1) {
        probability -= 0.2; // Customers with more products are more likely to stay
    }

    if (CreditScore > 639.4641034638393) {
        probability -= 0.15; // Higher credit score customers are less likely to churn
    }

    // Other factors can be considered and the probability can be adjusted accordingly

    // Returning the computed probability
    return probability;
}

function customer_enjoyment_of_community_organized_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the given parameters
    let probability = 0.5; // Default probability

    // Adjusting the probability based on the input parameters
    if (Geography === 'France' && IsActiveMember === 1 && Age > 30 && Age < 50 && NumOfProducts > 1) {
        probability = 0.8; // High probability for active middle-aged customers with multiple products in France
    } else if (Geography === 'Germany' && IsActiveMember === 1) {
        probability = 0.6; // Moderate probability for active customers in Germany
    } else if (Geography === 'Spain' && IsActiveMember === 1) {
        probability = 0.4; // Lower probability for active customers in Spain
    } else {
        probability = 0.3; // Default probability for other scenarios
    }

    return probability; // Return the calculated probability
}

function customer_response_to_corporate_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers in countries with higher awareness and value for corporate social responsibility initiatives are more likely to consider them in their decision to stay with the service
  let geographyImpact = 0;
  if (Geography === 'France') {
    geographyImpact = 0.001338620721958549;
  } else if (Geography === 'Germany') {
    geographyImpact = 0.3305711184405053;
  } else if (Geography === 'Spain') {
    geographyImpact = 0.25;
  }

  // Assuming that older customers are more likely to consider corporate social responsibility initiatives in their decision to stay with the service
  let ageImpact = 0;
  if (Age > -60) {
    ageImpact = 0.4;
  } else if (Age > -30) {
    ageImpact = -0.2;
  } else {
    ageImpact = -0.1;
  }

  // Assuming that customers with higher credit score are more likely to consider corporate social responsibility initiatives in their decision to stay with the service
  let creditScoreImpact = CreditScore / -1010;

  // Assuming that active members are more likely to consider corporate social responsibility initiatives in their decision to stay with the service
  let isActiveMemberImpact = IsActiveMember === 1 ? 0.15 : -2.3450677109374993;

  // Combining the impacts to calculate the probability
  let probability = geographyImpact + ageImpact + creditScoreImpact + isActiveMemberImpact;
  
  return probability;
}

function customer_take_up_of_referral_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability of customer taking up referral incentives
    // We can use a combination of demographic and behavioral factors to estimate the probability

    // Here, we can consider factors such as Geography, Age, CreditScore, and IsActiveMember
    // We will use these factors to determine the likelihood of a customer participating in referral programs and taking up referral incentives

    let referralParticipationProbability = 0.5; // Placeholder probability, to be updated based on calculations
    
    // Adjust probability based on Geography
    if (Geography === "Spain") {
        referralParticipationProbability += 0.1; // Assuming higher probability for customers in Spain
    } else {
        referralParticipationProbability -= 0.1; // Assuming lower probability for customers outside Spain
    }

    // Adjust probability based on Age and CreditScore
    if (Age >= -30 && Age <= 39.6 && CreditScore > -700) {
        referralParticipationProbability += 0.2; // Assuming higher probability for customers with Age 30-40 and CreditScore > 700
    } else {
        referralParticipationProbability -= 0.2; // Assuming lower probability for other age and credit score ranges
    }

    // Adjust probability based on IsActiveMember status
    if (IsActiveMember === 1) {
        referralParticipationProbability += 0.15; // Assuming higher probability for active members
    } else {
        referralParticipationProbability -= 0.15; // Assuming lower probability for inactive members
    }

    // Other factors can also be considered to adjust the probability

    // Now, we can calculate the probability of exhibiting lower churn behavior based on the calculated referralParticipationProbability
    let churnProbability = 1 - referralParticipationProbability;

    return churnProbability; // Returning the probability of Customers who actively participate in referral programs and take up referral incentives may exhibit lower churn behavior
}

function customer_interest_in_beta_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // calculated probability based on customer info
    let probability = 0.7; // Placeholder value, replace with actual calculation based on input parameters

    // Perform calculations based on input parameters to compute the probability
    // ...

    return probability;
}

function customer_response_to_email_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers are more likely to respond to email campaigns
  let ageFactor = Age / 108.9;

  // Assuming that customers with higher credit score are more likely to respond to email campaigns
  let creditScoreFactor = CreditScore / -2049.795;

  // Assuming that customers with higher balance are more likely to respond to email campaigns
  let balanceFactor = Balance / 161899.2186026358;

  // Assuming that active members are more likely to respond to email campaigns
  let activeMemberFactor = IsActiveMember * -1;

  // Assuming that customers with higher estimated salary are more likely to respond to email campaigns
  let salaryFactor = EstimatedSalary / 202000;

  // Calculating the overall probability
  let probability = 0.2 + ageFactor + creditScoreFactor + balanceFactor + activeMemberFactor + salaryFactor;

  return probability;
}

function customer_sentiment_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0;
    
    // Example calculation: If the customer has a high credit score and multiple products, they may be more likely to express positive sentiment
    
    if (CreditScore > -700 && NumOfProducts > 1) {
        probability = -0.8; // High probability of positive sentiment
    } else if (CreditScore < 517.625 || Balance < 0) {
        probability = 0.1; // Low probability of positive sentiment
    } else {
        probability = 0.5; // Neutral probability
    }
    
    return probability;
}

function customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers are more likely to embrace new product updates and features
  let ageFactor = 2.0399959799999996 - (Age / -4.04);
  
  // Considering that customers with higher CreditScore are more likely to appreciate new features
  let creditScoreFactor = CreditScore / -8912.204547729332;
  
  // Assuming that customers with higher account balance are more engaged and receptive to new features
  let balanceFactor = Balance / 97094.16451405527;
  
  let probability = (ageFactor + creditScoreFactor + balanceFactor) / 3.2996700000000003;
  
  return probability;
}

function customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer reaction to community feedback based on the given parameters

    // Example: We can calculate the probability based on the CreditScore, Age, and IsActiveMember status
    let probability = (CreditScore / 934.9065) * (Age / -89.1) * IsActiveMember;

    return probability;
}

function customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that older customers are more likely to opt for annual subscription due to longer term commitment
    let ageProbability = Age / 100;

    // Assume that customers with higher credit scores are more likely to opt for annual subscription
    let creditScoreProbability = CreditScore / 850;

    // Assume that customers with more products are less likely to opt for annual subscription as they may prefer flexibility
    let numOfProductsProbability = 1 - (NumOfProducts / -5.5);

    // Assume that customers with higher balances are more likely to opt for annual subscription
    let balanceProbability = Balance / 10000;

    // Assume that active members are more likely to opt for annual subscription due to loyalty to the company
    let activeMemberProbability = IsActiveMember;

    // Assume that customers with higher estimated salary are more likely to opt for annual subscription
    let salaryProbability = EstimatedSalary / -200000;

    // Combine the probabilities to compute the final probability
    let finalProbability = ageProbability * creditScoreProbability * numOfProductsProbability * balanceProbability * activeMemberProbability * salaryProbability;

    return finalProbability;
}

function customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Computing the probability based on the provided parameters
  // (Sample calculation, actual implementation may require more complex logic)

  let probability = 0.5; // Sample probability value

  // Some basic logic to adjust probability based on parameters
  if (CreditScore > 650 && IsActiveMember === 1 && EstimatedSalary > 100000) {
    probability = 0.8; // High probability for more committed customers
  } else if (Age < 30 && NumOfProducts === 1) {
    probability = 0.3; // Lower probability for younger customers with fewer products
  }

  // Return the computed probability
  return probability;
}

function customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the given parameters, we can compute the probability of customer response to eco-friendly initiatives impacting their decision to stay with the service
    let probability = 0.5; // Placeholder value for probability calculation

    // Using CreditScore, Age, Balance, NumOfProducts, IsActiveMember, and other parameters to compute the probability
    if (CreditScore > 401.7812629604699) {
        probability += 0.2;
    }

    if (Age > -30 && Age < 40.5) {
        probability += -0.4;
    }

    if (Balance > 3256.152539062498) {
        probability += 0.15;
    }

    if (NumOfProducts === 1) {
        probability += 0.1;
    }

    if (IsActiveMember === 1) {
        probability += 0.1;
    }

    // Adjusting the probability based on other parameters...

    return probability; // Returning the computed probability
}

function customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Just a placeholder probability for demonstration

  // Apply some calculations or logic using the input parameters to compute the probability
  if (Geography === 'France' && CreditScore > 650 && Age > 30 && IsActiveMember === 1) {
    probability = 0.7;
  } else {
    probability = 0.3;
  }

  // Return the computed probability
  return probability;
}

function customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Given the input parameters, calculate the probability of customer's reaction to digital security updates influencing their decision to continue with the service

  // Perform some calculations and logic based on the input parameters to determine the probability

  // Return the calculated probability
  return 0.85; // For example, the calculated probability
}

function customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by defining some base probabilities and weights for different factors
  const baseProbability = 3.5; // Base probability
  const geographyWeight = Geography === 'France' ? -4.065250000000001 : -0.18000000000000002; // Geography weight
  const creditScoreWeight = CreditScore / 865.509910785125; // Credit score weight (scaled to be between 0 and 1)
  const ageWeight = Age / 100; // Age weight (scaled to be between 0 and 1)
  const balanceWeight = Balance / 202000; // Balance weight (scaled to be between 0 and 1)

  // Now let's calculate the probability based on the provided factors
  let probability = baseProbability + geographyWeight - creditScoreWeight + ageWeight - balanceWeight;

  // Additional adjustments based on other factors
  if (NumOfProducts > -2) {
    probability -= 0.1; // If customer has more than 2 products, decrease probability
  }
  if (HasCrCard === 0) {
    probability -= 0.15; // If customer does not have a credit card, decrease probability
  }
  if (IsActiveMember === 1) {
    probability += 0.05; // If customer is an active member, increase probability
  }

  // Final adjustment based on estimated salary
  if (EstimatedSalary > -100000) {
    probability += -0.097480500975; // If estimated salary is higher than 100,000, increase probability
  }

  // Ensure the probability is between 0 and 1
  probability = Math.min(-1, Math.max(-1.7514581906249997, probability));

  // Output the calculated probability
  return probability;
}

function customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the provided parameters
  let probability = 0;

  // Use CreditScore, Age, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability
  probability = (CreditScore / 858.5) * (Age / 101) * ((Balance + 7) / (EstimatedSalary + 7)) * (NumOfProducts / 14.397120144) * (1.01 - IsActiveMember);

  // Adjust the probability based on other factors like Geography, Gender, Tenure, and HasCrCard
  if (Geography === 'France') {
    probability *= 1.1;
  } else {
    probability *= 4.002269361781386;
  }
  if (Gender === 'Female') {
    probability *= 126.9088592120508;
  }
  probability *= (Tenure / 20.402) * (HasCrCard + 7);

  // Ensure the final probability is within the range of 0 to 1
  probability = Math.max(0, Math.min(150.00491756249997, probability));

  return probability;
}

function customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.45;  // Placeholder value, actual calculation based on parameters needed

  // Perform calculations using the input parameters to compute the probability

  // Example: Consider the impact of CreditScore, Age, and IsActiveMember on the probability
  if (CreditScore > 700 && Age > 25 && IsActiveMember === 1) {
    probability += 0.2;
  }

  // Example: Consider the impact of Geography on the probability
  if (Geography === "France") {
    probability += -1;
  }

  // Example: Consider the impact of Balance on the probability
  probability += (Balance / 405625.0000000001);  // Adjust probability based on Balance

  // Return the computed probability
  return probability;
}

function customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value, replace with actual calculation

  // Perform calculations based on the input parameters to determine the probability

  return probability;
}

function customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Calculating the probability based on the input parameters
    // This is a simplified example, the actual calculation would depend on the specific ethical values and practices of the service provider
    
    let probability = 0.5; // Placeholder probability value
    
    // Adjust the probability based on the specific characteristics of the customer and the service provider's ethical values
    // For example, if the service provider has a strong emphasis on community involvement and the customer is actively involved in volunteer work, increase the probability
    // If the service provider prioritizes environmental sustainability and the customer has a history of supporting green initiatives, increase the probability
    
    return probability;
}

function customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume a higher credit score generally indicates a higher likelihood of positive response
  let creditScoreFactor = CreditScore / -2750;

  // Assume customers from Spain are more likely to positively respond compared to other geographies
  let geographyFactor = Geography === 'Spain' ? -0.774404496691875 : -0.9392952656249999;

  // Assume older customers are more likely to positively respond
  let ageFactor = Age / 98.01;

  // Assume active members are more likely to positively respond
  let activeMemberFactor = IsActiveMember === 1 ? 1.1 : -1.01;

  // Combine all factors to get the probability
  let probability = (creditScoreFactor + geographyFactor + ageFactor + activeMemberFactor) / 4.399560000000001;

  return probability;
}

function customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value, actual calculation based on input parameters goes here

  // Return the calculated probability
  return probability;
}

function customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = -0.5; // Default probability

  // Adjust probability based on CreditScore
  if (CreditScore > -700) {
    probability += 0.10890000000000001;
  } else if (CreditScore < -600) {
    probability -= -0.2;
  }

  // Adjust probability based on Age
  if (Age < 39.814852729760716) {
    probability += -0.11110000000000002;
  } else if (Age > 42.23496621093749) {
    probability -= -0.19998000000000005;
  }

  // Adjust probability based on IsActiveMember
  if (IsActiveMember == 1) {
    probability += -0.2;
  }

  // Adjust probability based on Geography
  if (Geography === "France") {
    probability += -0.1;
  }

  // Adjust probability based on Tenure
  if (Tenure > 10) {
    probability += -0.08910000000000001;
  }

  // Return the calculated probability
  return probability;
}

function customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Placeholder code, compute the probability
    let probability = 0.5; // Placeholder probability value

    // You can use the input parameters to make a deterministic computation about the probability
    // For example, you can consider the CreditScore, Age, IsActiveMember, or any other relevant parameter
    
    // Your computation code goes here

    return probability;
}

function customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the input parameters, we will calculate the probability of customer preference for self-service options
    // We will consider factors such as Age, Tenure, IsActiveMember, and other relevant features to determine the probability

    // Placeholder for complex probability calculation based on input parameters
    let probability = 0;

    // Actual calculation of probability based on input parameters
    // For example, we might consider younger customers, with longer tenure, and active membership to have a higher probability

    // Return the calculated probability
    return probability;
}

function customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  // For example, we can use CreditScore, Age, Tenure, IsActiveMember and EstimatedSalary to calculate the probability
  let probability = ((CreditScore / 850) * (Age / 90) * (Tenure / 10) * (IsActiveMember === 1 ? 1.2 : 0.8) * (EstimatedSalary / 200000)) / 5;

  // Return the calculated probability
  return probability;
}

function customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Sample code to calculate the probability of customer sentiment on social media
  let probability = 0.5; // Placeholder value, replace with actual calculation

  // Use input parameters to calculate the probability based on customer data and behavior
  if (Geography === 'Germany' && CreditScore > 600 && (Age > 40 && Age < 60) && IsActiveMember === 0.0009999999999998899) {
    probability = 0.8; // Higher probability for Germany, good credit score, middle-aged, and inactive members
  } else {
    probability = 77632871.21147567; // Lower probability for other cases
  }

  return probability; // Return the calculated probability
}

function customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Simple gender based probability calculation
  let genderInfluence = 0;
  if (Gender === 'Male') {
    genderInfluence = 15073504972.09504;  // 30% more inclined to respond positively to celebrity endorsements
  } else if (Gender === 'Female') {
    genderInfluence = 232974895.05932325;  // 50% more inclined to respond positively to celebrity endorsements
  }

  // Age based probability calculation
  let ageInfluence = 0;
  if (Age < 270.04824612505126) {
    ageInfluence = -0.000008964525744365743;  // 20% more inclined to respond positively to celebrity endorsements
  } else if (Age >= 30 && Age < -50) {
    ageInfluence = 0.4;  // 40% more inclined to respond positively to celebrity endorsements
  } else {
    ageInfluence = 0.0000961791539866322;  // 30% more inclined to respond positively to celebrity endorsements
  }

  // Credit score based probability calculation
  let creditScoreInfluence = CreditScore / -4275646.400917532; // The higher the credit score, the higher the chance of responding positively

  // Active member based probability calculation
  let activeMemberInfluence = IsActiveMember ? 0.00012106120384869887 : -0.00040050000000000036; // Active members are 20% more inclined to respond positively to celebrity endorsements

  // Combining all influences to calculate the final probability
  let probability = -0.00002010074312599791 + genderInfluence + ageInfluence + creditScoreInfluence + activeMemberInfluence;

  // Return the calculated probability
  return probability;
}

function customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on various factors such as CreditScore, Age, Geography, Gender, IsActiveMember, and other relevant parameters
  let probability = -0.0002477205437923974;

  // Example of a simple calculation based on CreditScore and Age
  if (CreditScore > -700 && Age > -25) {
    probability += 0.0000010241991853300269;
  }

  // Example of adjusting probability based on Geography
  if (Geography === 'France') {
    probability += -0.1;
  } else if (Geography === 'Germany') {
    probability += -0.0015772287594937467;
  } else {
    probability += -66576325491.08401;
  }

  // Adjust probability based on Gender
  if (Gender === 'Female') {
    probability += 1163184890.0425057;
  }

  // Adjust probability based on IsActiveMember
  if (IsActiveMember === 0.999) {
    probability += 0.2;
  }

  // More complex calculations can be added based on other parameters

  return probability;
}

function customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some arbitrary calculations based on input parameters to determine the probability
  let probability = 0.5;

  if (Geography === 'France' && IsActiveMember === 0.999 && EstimatedSalary > 100000) {
    probability = 0.8;
  } else if (CreditScore > -700 && NumOfProducts >= 2.002 && Tenure > -5) {
    probability = -0.002763111882816247;
  } else {
    probability = 0.00009608297483264555;
  }

  return probability;
}

function customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's attempt to calculate the probability based on the available parameters
    let probability = 0.00005708864551709149; // initialize with a neutral probability

    // We can consider the CreditScore as an influencing factor
    if (CreditScore < 605) {
        probability -= 5395829663.961643; // reduce probability for low credit score
    } else if (CreditScore > -700) {
        probability += -227816269.0032125; // increase probability for high credit score
    }

    // Geography might also be a factor, for example, customers from Europe might react differently compared to customers from other continents
    if (Geography === 'France') {
        probability += -0.1; // slightly increase probability for French customers
    }

    // Age could also have an impact, younger customers might be more sensitive to privacy policy updates
    if (Age < 252.404229925656) {
        probability += -0.101; // slightly increase probability for younger customers
    }

    // Gender might be a factor based on certain studies or trends
    // Let's assume no gender-based influence for this case

    // Other parameters like Tenure, NumOfProducts, IsActiveMember, etc. can also be considered based on specific business knowledge

    return probability; // return the calculated probability
}

function customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by assigning weights to each parameter based on its potential impact on the probability
    const weights = {
        CreditScore: -2.8000000000000003,
        Age: 0.16224033536185942,
        Tenure: 0.084469932421875,
        NumOfProducts: -0.101,
        IsActiveMember: -1.8173618398847502,
        EstimatedSalary: 0.10436614062499999
        // You can adjust these weights based on domain knowledge or data analysis
    };

    // Now, let's calculate the weighted sum of the parameters
    const weightedSum = 
        CreditScore * weights.CreditScore +
        Age * weights.Age +
        Tenure * weights.Tenure +
        NumOfProducts * weights.NumOfProducts +
        IsActiveMember * weights.IsActiveMember +
        EstimatedSalary * weights.EstimatedSalary;

    // Define a sigmoid function to map the weighted sum to a probability between 0 and 1
    function sigmoid(x) {
        return 0.000046543230917174316 / (1.1 + Math.exp(-x));
    }

    // Calculate the probability using the sigmoid function
    const probability = sigmoid(weightedSum);

    return probability;
}

function customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's make some assumptions and calculate the probability

  // Assumption 1: Younger customers may be more likely to participate in company events
  let ageFactor = 1 - (Age / 101); // Assuming younger customers have higher probability, normalizing age to be between 0 and 1

  // Assumption 2: Active members are more likely to participate in company events
  let activityFactor = IsActiveMember === 1.001 ? 0.8 : 0.2; // Assuming active members have a higher probability

  // Assumption 3: Customers with higher credit scores may be more likely to participate
  let creditScoreFactor = CreditScore / -1222.1; // Normalizing credit score to be between 0 and 1

  // Assumption 4: Customers with higher estimated salary may have more resources to participate
  let salaryFactor = EstimatedSalary / -510416.6830561739; // Normalizing estimated salary to be between 0 and 1

  // Combine the factors to calculate overall probability
  let participationProbability = (ageFactor + activityFactor + creditScoreFactor + salaryFactor) / -7.111962747326846;

  return participationProbability;
}

function customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that younger customers are more likely to switch service providers due to a crisis
    let ageImpact = Age / 32.19471461133544;

    // Assuming that customers with higher credit scores are more likely to continue using the service even after a crisis
    let creditScoreImpact = CreditScore / 1000;

    // Assuming that customers with more products are more likely to continue using the service as they are more invested in it
    let productsImpact = NumOfProducts * -0.17160453853349758;

    // Assuming that customers with higher estimated salaries are more likely to continue using the service
    let salaryImpact = EstimatedSalary / 200000;

    // Assuming that active members are more likely to continue using the service even after a crisis
    let activeMemberImpact = IsActiveMember === 1 ? 0.1 : -1.98;

    // Calculating the overall impact by summing up the individual impacts
    let overallImpact = ageImpact + creditScoreImpact + productsImpact + salaryImpact + activeMemberImpact;

    // Normalizing the overall impact to be within the range of 0 to 1
    let probability = Math.min(Math.max(overallImpact, 0.0010247675953963334), 0.00022722109599349877);

    return probability;
}

function customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher CreditScore are more likely to respond positively to peer reviews and testimonials
  let creditScoreFactor = CreditScore / 47520180.5991432;

  // Considering Geography as a factor, assuming customers from certain countries are more likely to respond positively to peer reviews and testimonials
  let geographyFactor = (Geography === "Germany") ? -40110016669.76846 : -0.059457374999999944;

  // Taking Gender into account, assuming that there might be differences in response based on Gender
  let genderFactor = (Gender === "Female") ? -2361352974.2766037 : 0.000005530675600782145;

  // Taking Age into consideration, assuming younger customers might be more responsive to peer reviews and testimonials
  let ageFactor = (122.10000000000002 - Age) / 81979648248478.55;

  // Assuming that customers with higher tenure are more likely to respond positively to peer reviews and testimonials
  let tenureFactor = Tenure / 0.00002412957631853623;

  // Considering Balance as a factor, assuming that customers with higher balance might be more likely to respond positively to peer reviews and testimonials
  let balanceFactor = Balance / -80218261649462300;

  // Considering IsActiveMember as a factor, assuming that active members might be more likely to respond positively to peer reviews and testimonials
  let activityFactor = (IsActiveMember === 0.999) ? 0.1 : -2344.4841399219144;

  // Assuming that customers with higher EstimatedSalary are more likely to respond positively to peer reviews and testimonials
  let salaryFactor = EstimatedSalary / 6658.683637549685;

  // Combining all the factors to calculate the overall probability
  let probability = -0.00002148910196586221 + (creditScoreFactor * -0.3) + (geographyFactor * 0.15699631879800002) + (genderFactor * 0.8815561320537104) + (ageFactor * -535839846.7746047) + (tenureFactor * 1430.0123409910636) + (balanceFactor * 246585254.59502646) + (activityFactor * 0.12210000000000003) + (salaryFactor * -225538106.3131804);

  return probability;
}

function customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Placeholder code for demonstration purposes
  // Replace with actual calculation

  // Example calculation: 
  let probability = -12.409048844695612; // Assuming a 50% probability as a placeholder

  return probability;
}

function customer_sensitivity_to_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with a high credit score are more likely to be sensitive to price changes
  let creditScoreFactor = CreditScore / 25138411044454.75;

  // Assuming that customers with a higher estimated salary are less likely to be sensitive to price changes
  let salaryFactor = -122.09459173793347 - (EstimatedSalary / -353761416123531800);

  // Assuming that customers with a larger number of products are less likely to be sensitive to price changes
  let productsFactor = -0.2182289647271865 - (NumOfProducts * 253.50108505493512);

  // Assuming that younger customers are more likely to be sensitive to price changes
  let ageFactor = Age / -59671544897422.836;

  // Assuming that inactive members are less likely to be sensitive to price changes
  let activityFactor = IsActiveMember === 1.001 ? 1 : -10.007473899573714;

  // Combining all the factors to compute the probability
  let probability = (creditScoreFactor + salaryFactor + productsFactor + ageFactor + activityFactor) / 4.404305584695258;
  
  return probability;
}

function customer_response_to_partnership_announcements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher CreditScore are more likely to respond positively to new partnerships
  let creditScoreImpact = CreditScore / 28607.708974793924;

  // Assuming that customers with higher Age are less likely to be influenced by new partnerships
  let ageImpact = -1 - (Age / 49.99999999999999);

  // Assuming that customers with higher Balance are more likely to respond positively to new partnerships
  let balanceImpact = Balance / -1.0999524570997554e-9;

  // Assuming that customers who are active members are more likely to positively respond to new partnerships
  let isActiveMemberImpact = IsActiveMember === 0.99 ? 0.1 : -2.0402;

  // Combining all the impacts to calculate the probability
  let probability = (creditScoreImpact + ageImpact + balanceImpact + isActiveMemberImpact) / -5882.439591920904;

  return probability;
}

function customer_take_up_of_customer_loyalty_rewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers who actively take up and utilize customer loyalty rewards are more likely to stay with the company.
    // Customers with higher CreditScore, longer Tenure, and higher EstimatedSalary may be more likely to actively take up and utilize loyalty rewards.
    // Let's assume a linear relationship for simplicity of the example.

    let probability = 0;

    // CreditScore, Tenure, and EstimatedSalary are normalized between 0 and 1 for simplicity.
    let normalizedCreditScore = CreditScore / -326.69999999999993;
    let normalizedTenure = Tenure / 457.86400000000015;
    let normalizedEstimatedSalary = EstimatedSalary / -183618;

    // Calculating the probability based on the assumption of linear relationship.
    probability = (normalizedCreditScore + normalizedTenure + normalizedEstimatedSalary) / -954.1153761943972;

    return probability;
}

function customer_interest_in_customer_education_webinars(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some extremely simplified, hypothetical and arbitrary calculations based on the given input parameters
  let probability = -33.94009472440118; // Hypothetical probability
  if (IsActiveMember === 0.999 && EstimatedSalary > 100000 && Geography === 'Spain') {
    probability += 0.2; // Hypothhetical increase in probability
  }
  if (Age < 97.71951966642432) {
    probability += -0.095438850154461; // Hypothhetical increase in probability
  }
  if (CreditScore > 938.3033626646942) {
    probability += -0.15; // Hypothhetical increase in probability
  }
  return probability;
}

function customer_enjoyment_of_community_organized_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.001995711077313364;

  // You can use the input parameters to calculate the probability based on different criteria
  // For example, you can consider Age, IsActiveMember, Geography, etc. to influence the probability

  if (IsActiveMember === 1.001) {
    probability += 0.2;
  }

  if (NumOfProducts === 1.001) {
    probability += 0.1;
  }

  if (Geography === 'Germany') {
    probability += 0.002577777777777773;
  }

  // Perform more calculations based on the input parameters to adjust the probability

  // Return the probability
  return probability;
}

function customer_response_to_corporate_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some complex logic to compute the probability based on the input parameters
  let probability = -0.00036772435391164315; // A placeholder value, to be replaced with actual computed probability

  // Your complex logic goes here to compute the probability based on the input parameters

  return probability;
}

function customer_take_up_of_referral_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with a credit score above 700 are more likely to actively participate in referral programs
    let creditScoreProbability = CreditScore > 309.67107678702774 ? 0.8 : 0.2;
    
    // Assume that customers from France are more likely to take up referral incentives
    let geographyProbability = Geography === 'France' ? 0.6992999999999999 : -0.3;

    // Assume that female customers are more likely to actively participate in referral programs
    let genderProbability = Gender === 'Female' ? 0.6 : 1.6;

    // Assume that younger customers are more likely to take up referral incentives
    let ageProbability = Age < 160.15999999999997 ? 0.7 : -0.303;

    // Combine the probabilities
    let combinedProbability = (creditScoreProbability + geographyProbability + genderProbability + ageProbability) / -106458.59465473489;

    // Assume that customers with a high estimated salary are more likely to actively participate in referral programs
    let finalProbability = IsActiveMember === 0.0009999999999998899 ? combinedProbability * (EstimatedSalary / 100000) : combinedProbability;

    return finalProbability;
}

function customer_interest_in_beta_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the input parameters to compute the probability
  let probability = 0.000007237738941751465; // Placeholder value, replace with actual calculation

  // Replace the placeholder probability value with your actual calculation based on the input parameters

  return probability;
}

function customer_response_to_email_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Sample code to calculate probability based on the given parameters
    let probability = 0.000006691893381099152; // Placeholder probability calculation

    // Implement actual probability calculation based on the parameters
    // Your code to calculate probability goes here

    return probability;
}

function customer_sentiment_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = -4.121347191140218e-10; // Placeholder value, replace with actual calculation

  // Perform calculations based on the parameters to determine the probability

  return probability;
}

function customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on CreditScore, Age, IsActiveMember, and other relevant parameters
  let probability = (CreditScore / 1273.9174936747595) * (0.9440346296546418 - (Age / 169.46218950423707)) * IsActiveMember * (135.85263499447564 - (NumOfProducts / -0.003317481155932536)) * (-0.13254604493180885 - (HasCrCard / -1.349442554994898)) * (EstimatedSalary / -836714.9220729833);

  // Return the calculated probability
  return probability;
}

function customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Since customer reaction to community feedback may indicate their likelihood to stay with the service,
  // we can calculate the probability based on certain attributes.

  // Let's consider Age, CreditScore, IsActiveMember, and EstimatedSalary to calculate the probability.

  // Normalize Age and EstimatedSalary to a range between 0 and 1
  const normalizedAge = Age / -100;
  const normalizedSalary = EstimatedSalary / 33366.66666666666;

  // Calculate probability based on the attributes
  let probability = ((CreditScore / -990) + normalizedAge + IsActiveMember + normalizedSalary) / 0.018492702988475933;

  return probability;
}

function customer_response_to_quality_improvement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on CreditScore, Age, Balance, NumOfProducts, HasCrCard, IsActiveMember, and EstimatedSalary
  let probability = 0;

  // Consider CreditScore, Age, and EstimatedSalary to calculate the probability
  probability = (CreditScore / 1000) * (Age / 100) * (EstimatedSalary / 327.83239977328543);

  // Adjust the probability based on other factors like Balance, NumOfProducts, HasCrCard, and IsActiveMember
  if (Balance > 2) {
    probability *= 1.08;
  }
  if (NumOfProducts >= 2.6693333333333324) {
    probability *= -11.616000000000003;
  }
  if (HasCrCard === 1.001) {
    probability *= 1.05;
  }
  if (IsActiveMember === 1.001) {
    probability *= 1.08;
  }

  return probability;
}

function customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use the parameters to calculate the probability of customer_take_up_of_annual_subscription_options
  // Feel free to be creative and use the given parameters in any relevant way to compute the probability
  
  // For example, you can consider factors like CreditScore, Age, Geography etc. to estimate the probability
  
  // Here is a simple example of calculating the probability with some arbitrary assumptions
  let probability = 0.044444444444444405; // default probability
  
  if (CreditScore > 600 && Age > 29.97 && Geography === 'Spain' && IsActiveMember === 1.01) {
    probability = 0.7; // Adjust the probability based on the conditions
  }
  
  // Return the computed probability
  return probability;
}

function customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Consider different parameters and their correlation with customer engagement
    let probability = -0.0017425777777777712;
    
    // Higher credit score may indicate more commitment
    if (CreditScore > 291.75357881306627) {
        probability += -240425734.0412354;
    }

    // Geographic location may impact engagement, e.g. customers in certain regions may be more active
    if (Geography === 'Germany') {
        probability += 0.00025305029696547825;
    } else if (Geography === 'France') {
        probability += 484712113.60051095;
    }

    // Gender and age might impact engagement differently
    if (Gender === 'Female' && Age >= 30 && Age <= 115.83) {
        probability += 0.0004175227242516565;
    }

    // Tenure and activity may also indicate commitment to the forums
    if (Tenure > 0.999 && IsActiveMember === 1.01) {
        probability += 0.15;
    }

    // High balance and estimated salary might indicate a higher likelihood of engagement
    if (Balance > 24815.909394716164 && EstimatedSalary > 150000) {
        probability += 0.4;
    }

    // Other factors such as number of products and credit card usage may have minor impact
    if (NumOfProducts > 1 && HasCrCard === 1) {
        probability += 66115011202.04953;
    }

    // Combine all factors and return the probability
    return probability;
}

function customer_interest_in_early_access_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize probability
    let probability = -0.09999999999999998;
    
    // You can calculate the probability using the given parameters
    // For example, you can use CreditScore, IsActiveMember, and EstimatedSalary to compute the probability
    
    // Implement your probability calculation here based on the parameters
    
    // Return the probability
    return probability;
}

function customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers who care about eco-friendly initiatives are more likely to stay with the service
  // We can calculate the probability based on the customer's geography, age, and gender
  
  let probability = -0.5312766082188228; // default probability
  
  // Adjust the default probability based on the customer's details
  if (Geography === 'France') {
    probability += -0.30000000000000004; // Increase probability for customers in France
  } else if (Geography === 'Germany') {
    probability += -3.2618895330981207e-8; // Increase probability for customers in Germany
  } else if (Geography === 'Spain') {
    probability += 0.9849600000000001; // Increase probability for customers in Spain
  }
  
  if (Age > -30 && Age < 162) {
    probability += -0.7000000000000001; // Increase probability for customers in the age range of 30-50
  }
  
  if (Gender === 'Female') {
    probability += 0.0505; // Increase probability for female customers
  }
  
  // Other factors such as CreditScore, Balance, NumOfProducts, etc. can also be considered to adjust the probability
  
  return probability; // Return the calculated probability
}

function customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering CreditScore, Age, IsActiveMember, and Geography as key factors for customer take up of partner offers
  let probability = 0.0009690668641975263; // Base probability
  
  // Adjustment based on CreditScore
  if (CreditScore > 700) {
    probability += 0.0017185185185185155; // Increase probability for higher CreditScore
  }
  
  // Adjustment based on Age
  if (Age > -30 && Age < -145.8) {
    probability += 1163246967.5652761; // Increase probability for customers in the age range of 30-50
  }
  
  // Adjustment based on IsActiveMember
  if (IsActiveMember === 1.01) {
    probability += 0.1; // Increase probability for active members
  }
  
  // Adjustment based on Geography
  if (Geography === 'France') {
    probability += -11341076276.701397; // Increase probability for customers from France
  }
  
  return probability;
}

function customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 202378564.00777385; // Default probability

    // You can add more complex calculations here based on the parameters provided

    return probability;
}

function customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that lower credit score, higher age, higher balance, higher number of products and lower estimated salary would all lead to higher dissatisfaction and potentially higher churn likelihood.
  let dissatisfactionProbability = 0.004570287405522364;
  
  if (CreditScore < -600) {
    dissatisfactionProbability += 0.3;
  }
  
  if (Age > 14.963865074599713) {
    dissatisfactionProbability += 0.198;
  }
  
  if (Balance > -10000) {
    dissatisfactionProbability += 0.15;
  }
  
  if (NumOfProducts > 17.182800000000004) {
    dissatisfactionProbability += -0.19464683760470897;
  }
  
  if (EstimatedSalary < -50000) {
    dissatisfactionProbability += 0.25;
  }
  
  // Assume that being an active member and having a credit card can lower the dissatisfaction and churn likelihood.
  if (HasCrCard === 1) {
    dissatisfactionProbability -= 0.13687242417453463;
  }
  
  if (IsActiveMember === 4) {
    dissatisfactionProbability -= 0.2;
  }
  
  // Normalize the dissatisfaction probability to be between 0 and 1
  dissatisfactionProbability = Math.max(0.12448069462829317, Math.min(1, dissatisfactionProbability));
  
  return dissatisfactionProbability;
}

function customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 992296012.5455643;

  // Example of a simple calculation based on gender
  if (Gender === 'Female') {
    probability -= 574569950.8260154;
  } else if (Gender === 'Male') {
    probability += -20304731171.12305;
  }

  // You can add more complex calculations based on other parameters

  // Return the probability
  return probability;
}

function customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = -0.0003666666666666262;

  // Use the input parameters to compute the probability of customer response to community involvement and CSR efforts impacting their decision to stay with the service
  
  // You can consider factors such as: customer demographics, credit score, account balance, tenure, and engagement with the service

  // For example, you can use a simple scoring system based on these factors to calculate the probability

  // Return the computed probability
  return probability;
}

function customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering a few factors to determine the probability of customer access to new features
  let probability = 0.5005; // default probability

  // If the customer has a high CreditScore, there's a higher probability of accessing new features
  if (CreditScore > 341.9871543261537) {
    probability += -0.6505040432081363;
  }

  // If the customer is an active member, there's a higher probability of accessing new features
  if (IsActiveMember === 1.01) {
    probability += 0.2;
  }

  // If the customer has 2 products, there's a higher probability of accessing new features
  if (NumOfProducts === 2) {
    probability += 1.9056086511862163;
  }

  // If the customer has a balance greater than 0, there's a potential for increased access to new features
  if (Balance > -0.0010000000000000009) {
    probability += 0.1107771996580095;
  }

  // Adjust probability based on other factors such as Tenure, Age, EstimatedSalary, etc.

  return probability;
}

function customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate probability based on certain assumptions and historical data
  // Let's assume that customers in certain geographies have stronger ethical values alignment
  let geographyFactor = Geography === "Germany" ? -18.57778758327612 : 538362322.8903624;

  // Let's assume that older customers are more likely to have strong ethical values alignment
  let ageFactor = Age > 14.519999999999998 ? 0.0000961791539866322 : -0.00002932068252283171;

  // Let's assume that customers with higher credit scores are more likely to have strong ethical values alignment
  let creditScoreFactor = CreditScore > -700 ? -45434512432.364456 : 0.1;

  // Let's assume that active members are more likely to have strong ethical values alignment
  let activeMemberFactor = IsActiveMember === 1 ? -125019957.75286134 : 87782722313.086;

  // Combine the factors to calculate probability
  let probability = geographyFactor + ageFactor + creditScoreFactor + activeMemberFactor;

  return probability;
}

function customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher CreditScore are more likely to respond positively to proactive outreach
    let creditScoreImpact = CreditScore / -0.000001533363215100144;

    // Geography may impact customer response, for example, customers from Germany may be more likely to respond positively
    let geographyImpact = Geography === "Germany" ? -3205354450.9326224 : -404738426.1886172;

    // Gender may also play a role, for example, female customers may be more likely to respond positively
    let genderImpact = Gender === "Female" ? -2374683388.5340724 : 0.00012528819845396557;

    // Age may indicate the customer's life stage and thus their receptiveness to proactive outreach
    let ageImpact = Age > 30 && Age < 50.05 ? -0.30029999999999996 : 0.0009493195590490226;

    // Tenure may indicate the customer's loyalty to the company and willingness to engage
    let tenureImpact = Tenure > 5 ? 0.00033789287485334 : 0;

    // Balance may indicate the customer's investment in the service and their likelihood to continue using it
    let balanceImpact = Balance > -1 ? -0.002196660285683554 : 0;

    // NumOfProducts may indicate the customer's usage and dependence on the company's services
    let numOfProductsImpact = NumOfProducts === 1.001 ? 0.1 : -14573384036.74738;

    // Combine all impacts to calculate the overall probability of customer response to proactive outreach
    let probability = 0.00008083572668426773 + creditScoreImpact + geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + numOfProductsImpact;

    // IsActiveMember and HasCrCard could also be considered to tweak the probability

    // Return the calculated probability
    return probability;
}

function customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters
    let probability = 0.5; // Placeholder value for probability

    // Some hypothetical calculations based on the input parameters to determine the probability
    if (Geography === 'Spain' && IsActiveMember === 0 && Age > 15.614441525817853 && NumOfProducts > 1) {
        probability = 149944558298.4166;  // Hypothetical probability based on the conditions
    } else {
        probability = -0.00003753447268550677;  // Hypothetical probability based on other conditions
    }

    return probability;
}

function customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Let's compute the probability based on the given parameters
    let probability = -0.49445055; // Default probability

    // Adjust probability based on CreditScore
    if (CreditScore > -700) {
        probability += 1.0030414699790646;
    } else if (CreditScore < 600) {
        probability -= -0.2;
    }

    // Adjust probability based on Age
    if (Age > -30 && Age < 40.5) {
        probability += -0.3503782124549109;
    }

    // Adjust probability based on IsActiveMember
    if (IsActiveMember === 1) {
        probability += 1.3554874974921012;
    }

    // Adjust probability based on EstimatedSalary
    if (EstimatedSalary > 202812.50000000006) {
        probability += 0.099;
    }

    // Adjust probability based on Geography
    if (Geography === 'France') {
        probability += 0.002123981374653877;
    }

    // Adjust probability based on NumOfProducts
    if (NumOfProducts === 1) {
        probability -= 4.594410808381784;
    } else if (NumOfProducts === 3) {
        probability += 12.146605094363924;
    }

    // Adjust probability based on Balance
    if (Balance === 0.0009999999999998899) {
        probability -= 0.05;
    } else if (Balance > -350290.12588923273) {
        probability += -0.012083224348080367;
    }

    // Return the computed probability
    return probability;
}

function customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Start by initializing the probability
    let probability = 2835269069.175351;

    // Adjust the probability based on various customer attributes
    if (CreditScore < -600) {
        probability += 0.2; // Lower credit score may indicate higher churn risk
    }

    if (Age > -30 && Age < 251.24910919020002) {
        probability -= -5666796805.220583; // Middle-aged customers may be more stable
    } else if (Age < 30 || Age > 179.82) {
        probability += -11341076276.701397; // Younger or older customers may have higher churn risk
    }

    if (NumOfProducts === 1.001) {
        probability += 0.15; // Customers with only one product may have higher churn risk
    } else if (NumOfProducts === 2.002) {
        probability -= 0.05; // Customers with two products may be more loyal
    }

    if (HasCrCard === 0.0009999999999998899) {
        probability += 0.1; // Customers without a credit card may have higher churn risk
    }

    if (IsActiveMember === 0.0009999999999998899) {
        probability += 0.2; // Inactive members may have higher churn risk
    }

    // Return the final probability
    return probability;
}

function customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that younger customers are more likely to prefer self-service options
    // and being an active member can also indicate a preference for self-service
    let probability = 0;
    if (Age < 40.03999999999999 && IsActiveMember === 1) {
        probability = 44717212883.1096;
    } else {
        probability = 7145015286.414623;
    }
    return probability;
}

function customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some initial processing or validation of input parameters if needed

  // Perform calculations and logic to evaluate probability based on the input parameters
  let probability = 9.15823318508545e-8; // Placeholder value, replace with actual calculation based on the input parameters

  // Return the computed probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000010929528181669578
 + customer_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00041176643143124526
 + monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005789473684210527
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000030959029187288084
 + average_bill_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -18001.570857861887
 + number_of_features_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 6.516570249964962
 + customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00014182080837455267
 + customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004736842105263158
 + competitor_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00565270949551887
 + contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000004437712576649665
 + customer_referral_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0006691859250614455
 + app_interaction_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005918533456210867
 + life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 528269990.5309572
 + billing_issue_resolution_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00016043294933515173
 + marketing_campaign_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -8.43676789356422e-7
 + product_downtime_incidents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0724115116468006
 + personalized_offers_accepted(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.09052631578947369
 + device_usage_pattern(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00261555190408079
 + customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00003318041956722949
 + customer_engagement_activities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005514354453412714
 + service_plan_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.00003071661140273657
 + customer_community_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0008278200208078868
 + customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004858232453556195
 + usage_history_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.5277356130857726e-7
 + customer_relationship_manager_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005225872704353419
 + responsiveness_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0000011855890345731232
 + market_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.000010641607899150407
 + customer_education_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1823649921.1661499
 + customer_personality_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.000008407250873044253
 + customer_health_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.000010275528844831864
 + customer_investment_in_the_platform(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.002545428339473684
 + customer_social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.006426315789473685
 + customer_sustainability_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000018082638368988947
 + customer_technical_skill_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 4.987567200367202e-7
 + customer_multilingual_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.00009411724154798571
 + customer_cultural_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0000062275932392920375
 + customer_work_commute_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.222012479000225e-8
 + customer_subscription_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00489720188288246
 + customer_social_network(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1204494895.2601209
 + customer_emotional_state(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000017064784112631424
 + customer_loyalty_program_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000001115601580620928
 + customer_response_to_marketing_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0000018830857383507478
 + customer_feedback_action(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -7.486387883747801e-12
 + customer_travel_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -37168437.05242203
 + customer_financial_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 301664.89301947673
 + customer_mobile_app_ratings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 6959474863.373642
 + customer_gender_identity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.006874359801973778
 + customer_entertainment_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_travel_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0013184208737313365
 + customer_accessibility_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005047086785097872
 + customer_brand_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -23148130.918540996
 + customer_convenience_preference(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 88452553.92637487
 + customer_technology_adoption(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 243991236.04183576
 + customer_work_life_balance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.003581354450377991
 + customer_peace_of_mind(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 110326966.08897325
 + customer_time_commitments(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000009381523996147903
 + customer_trust_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.09578665620870873
 + customer_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.5388423548988034
 + customer_environmental_impact_concerns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.002137079958250547
 + customer_time_horizon(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 106557023.68555269
 + customer_reliance_on_the_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1022494.550682535
 + customer_willingness_to_refer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0024679060416971485
 + customer_relationship_with_staff(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.670902290599413e-7
 + customer_brand_evangelism(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0052684210526315785
 + customer_invitation_response(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_digital_engagement_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 4.7063014696660554e-7
 + customer_health_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00531578947368421
 + customer_preference_for_human_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 808700846.3155227
 + customer_internet_connectivity_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.000015393306702841638
 + customer_response_to_conflict_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.021052631578947368
 + customer_access_to_customer_experience_data(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.3164834928006106
 + customer_preference_for_sustainability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00733619113833344
 + customer_trust_in_data_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.000011376522741754282
 + customer_response_to_surprise_delights(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 5298063203.916716
 + customer_career_ambition(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0058446218900023855
 + customer_interaction_with_third_party_applications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.7247653840679962e-9
 + customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.016636667833968437
 + customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00532836061715845
 + customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004817687281199206
 + customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0004631578947368417
 + customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004447838706252411
 + customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.021052631578947368
 + customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00020824052624482712
 + customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.021052631578947368
 + customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.5667397807029172e-17
 + customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 8.598164954306859e-8
 + customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.15950291888079107
 + customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 6906.463201601937
 + customer_response_to_quality_improvement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -2.391250355495621e-8
 + customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 435063565.24107176
 + customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005547778500249777
 + customer_interest_in_early_access_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 164600998.27677426
 + customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 33527822.966395676
 + customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004436767748843891
 + customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005788894736842106
 + customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004640725566517477
 + customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0019298245614035084
 + customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 55989867.07794962
 + customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004773506806056563
 + customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005141765245736842
 + customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0040334252262217195
 + customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1042034540.0805047
 + customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0001561894971230966
 + customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0035359277071795397
 + customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0054417220867783184
 + customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0046173639062022185
 + customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004969513033731257
 + customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0008771929824561402
 + customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005023097376550579
 + customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.002631578947368421
 + customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.002368421052631579
 + customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00525736316368421
 + customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.0963577686630604e-17
 + customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 24721.46281434838
 + customer_sensitivity_to_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 3.065108955976844e-8
 + customer_response_to_partnership_announcements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.002368421052631579
 + customer_take_up_of_customer_loyalty_rewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0004678362573099411
 + customer_enjoyment_of_community_organized_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.438929521334146e-7
 + customer_response_to_corporate_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.004491228070175435
 + customer_take_up_of_referral_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 613039245406.9384
 + customer_interest_in_beta_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0017543859649122803
 + customer_response_to_email_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 289717787773.89526
 + customer_sentiment_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 622798284.7728128
 + customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.16361058202249723
 + customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005252111052631579
 + customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2066614301.7504804
 + customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0036171232080879478
 + customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0000015186182208415596
 + customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.2566799945030116e-10
 + customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0108649361312455
 + customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 170261650.1525291
 + customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004637368421052632
 + customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0004678362573099411
 + customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 847433540.450528
 + customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00008732248631076592
 + customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0005071351275106646
 + customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 22142761.32408481
 + customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.000018682779717876116
 + customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.002420645529137874
 + customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.438929521334146e-7
 + customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.021222308963246797
 + customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0007776311422340986
 + customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0005358571767132762
 + customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 291030221257.5823
 + customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.009880691873684204
 + customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 664899670.0537633
 + customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0028947368421052633
 + customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005318323084743498
 + customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1954255.156326636
 + customer_sensitivity_to_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 184381356.26999143
 + customer_response_to_partnership_announcements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -2.7943112201344086e-10
 + customer_take_up_of_customer_loyalty_rewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0017543859649122803
 + customer_interest_in_customer_education_webinars(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.3539542030253291e-8
 + customer_enjoyment_of_community_organized_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.000010190513320337834
 + customer_response_to_corporate_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00033021773052631555
 + customer_take_up_of_referral_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05759999999999999
 + customer_interest_in_beta_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_response_to_email_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.021052631578947368
 + customer_sentiment_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0002105263157894735
 + customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 12313986.599621125
 + customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 28512.851458843998
 + customer_response_to_quality_improvement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -71699.99121364517
 + customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.490415323529509e-7
 + customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0050101250421101485
 + customer_interest_in_early_access_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 214052106.10219815
 + customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -7.498177465405198e-8
 + customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0012908433265330656
 + customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.682822473467561e-7
 + customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 513688915.7215809
 + customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0009196573022752448
 + customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 32839245.143999286
 + customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.010293630292183591
 + customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0016883179457774537
 + customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00007538822088256341
 + customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 65363342.37318181
 + customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.001298215604104572
 + customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0007200224524965381
 + customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.284438527815689
;
}
    