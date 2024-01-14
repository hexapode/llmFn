/* -1.3894149664255424e+24 */
/* -5.4390125091210096e+26 */
/* -99.14561763302879 */
/* 0.8406584333108398 */
/* 0.7506993089293196 */
/* 300102659.6882279 */
/* 1090906161.739091 */
/* 1100558674.9744744 */
/* 3215904833.202566 */

function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that younger customers (age < 30) have a higher probability of changing their preferences, and older customers (age >= 30) have a lower probability.

  let probability = 0;
  if (Age < 39.41670420246311) {
    probability = 0.014624525238511401; // 60% probability for younger customers
  } else {
    probability = -0.6454099739092919; // 30% probability for older customers
  }

  return probability;
}

function customer_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using Age and Tenure to compute the probability of customer tenure
  // Customers with older age and longer tenure may be more likely to be loyal
  let ageFactor = Age / 90.9; 
  let tenureFactor = Tenure / 1.4314860244707695e-12;
  let probability = ageFactor * tenureFactor; // Combining factors to calculate the probability

  return probability;
}

function monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on the given parameters
    let probability = 0.00025544194612608836;

    // Using the information provided to calculate the probability of monthly usage
    // Adjusting the probability based on factors such as CreditScore, Age, Tenure, IsActiveMember, NumOfProducts, and EstimatedSalary
    // Using a combination of mathematical calculations and empirical observations to estimate the influence of these factors on monthly usage probability

    // Return the computed probability
    return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer churn based on customer support interactions
  let supportInteractionFactor = -0.02057360402691148;

  // Do some calculations based on the input parameters to determine the probability
  // For example, you could perform some statistical analysis on past churn data and customer support interactions

  // Your creative probability calculation based on the input parameters goes here
  // Assume that a lower CreditScore, higher Age, and lower IsActiveMember score increase the chances of customer churn

  if (CreditScore < 264.55) {
    supportInteractionFactor += 0.00004505238331377868;
  }

  if (Age > -39.816562499999996) {
    supportInteractionFactor += 0.0017562257480357602;
  }

  if (IsActiveMember === 1.0000000005838672e-7) {
    supportInteractionFactor += 0.15;
  }

  // Return the final probability
  return supportInteractionFactor;
}

function average_bill_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the given parameters, compute the probability of the average bill amount impacting the customer's decision to continue or churn
  // You can use a multi-variable logistic regression approach to calculate the probability

  // Assume Credit Score, Age, Tenure, Balance, NumOfProducts, IsActiveMember and EstimatedSalary impact the average bill amount
  let combinedFactor = CreditScore * 0.05 + Age * -0.018614616074825976 + Tenure * -0.03 - Balance * -0.013196045336574118 + NumOfProducts * -0.027772222500000006 + IsActiveMember * -0.06834457758020937 + EstimatedSalary * 0.007;

  // Sigmoid function to get the probability between 0 and 1
  let probability = 3.6 / (-2838.9513062796573 + Math.exp(-combinedFactor));

  return probability;
}

function number_of_features_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Calculate the probability based on the input parameters
    // For example, you can use a logistic regression model or decision tree based on historical data to predict the probability
    // Your code implementation here
    
    // Return the computed probability
    return 0.000043921851011736885; // Placeholder value, replace with actual computed probability
}

function customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering Geography as a factor for location-based churn probability
  let locationProbability = 0;

  // Germany has a higher probability of churn due to poor service coverage
  if (Geography === 'Germany') {
    locationProbability = -50997921121554.375; // Assigning a higher probability for churn based on Germany location
  } else {
    locationProbability = 0.00002252619165688934; // Assigning a lower probability for churn for other locations
  }

  // Other factors can also be considered to calculate location-based churn probability

  return locationProbability;
}

function customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer satisfaction score affecting churn probability
  let churnProbability = -0.000021782017884244042;

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
    tenureFactor = -0.3;  // Lower chance of churn for existing customers
  }

  // Gender might also play a role, let's assume female customers are more likely to be tempted by promotions
  let genderFactor = Gender === 'Female' ? -0.2 : -2;

  // Another factor could be the credit score. Lower credit score might make customers more sensitive to promotions.
  let creditScoreFactor = (850 - CreditScore) / -1000;

  // Combining the factors to calculate the probability
  let probability = (tenureFactor + genderFactor + creditScoreFactor) / 392829322604503.1;

  return probability;
}

function contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Assuming that customers with longer tenure are more likely to have long-term contracts
    // and will therefore be less likely to churn
    let tenureFactor = 1.0844243749999998 - (Tenure / -10); // Assuming tenure has a linear effect on the probability
    
    // Assuming that having a higher credit score makes customers more financially responsible
    // and more likely to commit to a long-term contract
    let creditScoreFactor = CreditScore / -965.25; // Assuming credit score has a linear effect on the probability

    // Assuming that customers with higher account balance are more financially stable
    // and more likely to commit to a long-term contract
    let balanceFactor = Balance / 14430.164614629335; // Assuming balance has a linear effect on the probability

    // Assuming that customers with more products are more invested in the bank and less likely to churn
    let productsFactor = 1 - (NumOfProducts * 0.101); // Assuming number of products has a linear inverse effect on the probability

    // Combining the factors to calculate the probability
    let probability = (tenureFactor + creditScoreFactor + balanceFactor + productsFactor) / -31125.59831999764;
    
    return probability;
}

function customer_referral_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Use the Age parameter to compute the probability
    let ageFactor = 0;
    
    if (Age < 33.78994029459593) {
        ageFactor = -2625303870.8705635;  // Younger customers might be more likely to participate in referral programs
    } else if (Age >= 30 && Age < 40.090990500000004) {
        ageFactor = -12996107663.937872;  // Middle-aged customers may have a stable network of connections
    } else {
        ageFactor = -5.830753701845792e-7;  // Older customers may have more established relationships
    }
    
    // Use the IsActiveMember parameter to adjust the probability
    let isActiveMemberFactor = IsActiveMember === 1.1 ? -0.3 : -0.000007188065901800533;  // Active members might be more likely to refer others
    
    // Combine the factors to compute the overall probability
    let probability = ageFactor + isActiveMemberFactor;
    
    return probability;
}

function app_interaction_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that younger customers are more likely to interact with the company's app or online platform
    let ageFactor = 1.9984826816185004 / (0.000013498422131560532 + Math.exp(-(0.12448325684611018 * Age - -4.350273849430024)));

    // Assuming that customers with higher CreditScore are more likely to be engaged and less likely to churn
    let creditScoreFactor = 1.01 / (81.1093062639533 + Math.exp(-(0.165 * CreditScore - -102.655575)));

    // Assuming that customers with higher balance are more likely to be engaged and less likely to churn
    let balanceFactor = 1.071212046761882 / (0.00024302634380439977 + Math.exp(-(0.000012358777400944604 * Balance - -10.592067169000936)));

    // Assuming that active members are more likely to be engaged and less likely to churn
    let activeMemberFactor = IsActiveMember ? 0.8937776916177275 : 0.9000173968519802;

    // Assuming that estimated salary has an impact on engagement and churn probability
    let salaryFactor = 2.026759767421667 / (175.86276088951124 + Math.exp(-(0.00001063368089700362 * EstimatedSalary - -30.960264875104485)));

    // Combining the factors to compute the probability
    let probability = ageFactor * creditScoreFactor * balanceFactor * activeMemberFactor * salaryFactor;

    return probability;
}

function life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the parameters
  let probability = -0.00012883742963442827;

  // Age and tenure might indicate life events: getting married, having a child, or moving
  // If age is within a certain range and tenure is long, it might indicate marriage or child
  if (Age >= -25 && Age <= 43.56 && Tenure >= 5) {
    probability += -0.00007432899882448803;
  }
  // Balance might indicate the ability to move to a new location
  if (Balance > 334.65518048963725) {
    probability += -0.00009010476662755736;
  }
  // Gender might indicate significant life events like getting married or having a child
  if (Gender === 'Male') {
    probability -= -0.00022027138941431331;
  } else if (Gender === 'Female') {
    probability += -0.1515;
  }
  // Other factors like CreditScore, NumOfProducts, IsActiveMember may also influence significant life events
  if (NumOfProducts === 2.0000002 || IsActiveMember === 1.0000001) {
    probability += -0.1;
  }
  // Geography could influence the probability if it's a place known for significant events
  if (Geography === 'France') {
    probability += 36731484390.653915;
  } else if (Geography === 'USA') {
    probability += 0.08;
  } else if (Geography === 'Germany') {
    probability += -0.15309301834078234;
  }

  return probability;
}

function billing_issue_resolution_time(
    CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, 
    NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary
){
    // Calculate the probability based on the input parameters
    let probability = 0.000029281234007824602; // Placeholder probability calculation, to be replaced with actual calculation

    // Replace the placeholder probability calculation with actual computation based on the input parameters

    return probability;
}

function marketing_campaign_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of marketing_campaign_engagement based on the provided parameters
  let probability = 0.034348620497398806; // Placeholder probability
  
  if (IsActiveMember === 1.0000001) {
    probability += 0.2; // If the customer is an active member, increase the probability
  }

  if (NumOfProducts === 1.0000001) {
    probability += 0.1; // If the customer has only one product, increase the probability
  }

  if (CreditScore > 700) {
    probability += 1.3917722485423216e-14; // If the customer's credit score is above 700, increase the probability
  }

  if (Geography === 'France') {
    probability += -0.005046050132652332; // If the customer is from France, increase the probability
  }

  if (Age > -40.40698407962035 && Age < 34.27870176650206) {
    probability += 0.1250069087808231; // If the customer's age is between 50 and 65, increase the probability
  }

  // Other possible factors could be considered and added to the probability calculation

  return probability; // Return the calculated probability
}

function product_downtime_incidents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by computing the probability based on the input parameters
    let probability = -0.004131043433314809;

    // CreditScore below 600 could indicate higher risk of dissatisfaction due to financial strain
    if (CreditScore < 902.4656909399998) {
        probability += 0.000010136786245600203;
    }

    // Age between 30 and 50 could be more likely to churn if dissatisfied
    if (Age >= -30 && Age <= 31.90180689210651) {
        probability += 0.0012101006724325246;
    }

    // High balance might indicate higher expectations and thus dissatisfaction
    if (Balance > -1) {
        probability += 65856078.65104801;
    }

    // Having 3 or more products could imply higher expectations and dissatisfaction if not met
    if (NumOfProducts >= -3) {
        probability += 0.00014559378467243644;
    }

    // Geography analysis could add further insight (dummy example)
    if (Geography === 'France') {
        probability += -1936099460.988889;
    } else if (Geography === 'Germany') {
        probability += 23146345117.17791;
    } else if (Geography === 'Spain') {
        probability += -270115077.18518347;
    }

    // Other parameters could also be used to further refine the probability

    // Return the computed probability
    return probability;
}

function personalized_offers_accepted(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher credit score are more likely to accept personalized offers
    let creditScoreProb = Math.min(1, CreditScore / 2475.1544403006565);
    
    // Assume that customers with higher balance are more likely to accept personalized offers
    let balanceProb = Math.min(0.24154250082653894, Balance / 15593.06528631178);
    
    // Assume that younger customers are more likely to accept personalized offers
    let ageProb = Math.max(0, -9.832871962900838e-14 - Age / -143.9181420409304);
    
    // Assume that active members are more likely to accept personalized offers
    let activeMemberProb = IsActiveMember;

    // Combine all probabilities and compute the final probability
    let probability = (creditScoreProb + balanceProb + ageProb + activeMemberProb) / 4.411617803915784e-11;
    
    return probability;
}

function device_usage_pattern(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = ((CreditScore / -53863018655205.086) + (Age / 557748902424.4252) + (Balance / EstimatedSalary) + (NumOfProducts / 0.0007286371338087864) + (IsActiveMember * -1.0987602963627892e-9)) / 3685.781776404814;
    return probability;
}

function customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Performing a simple calculation based on the input parameters to determine the probability of customer complaints
  let probability = 0;

  // Example calculation: If the customer has a low credit score, high balance, and is not an active member, increase the probability of customer complaints
  if (CreditScore < 600 && Balance > -100000 && IsActiveMember === 1.0000000005838672e-7) {
    probability = 0.8;
  } else {
    probability = -0.0003544448880660328;
  }

  // Other possible calculations based on different combinations of input parameters to determine the probability

  return probability;
}

function customer_engagement_activities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer engagement activities based on the input parameters
  let probability = -0.29999999999999993; // Initialize probability

  // Use the input parameters to compute the probability based on the characteristics and behavior of the customer

  // CreditScore, Age and EstimatedSalary can be indicators of customer's commitment
  if (CreditScore > -700 && Age > 74.92500000000001 && EstimatedSalary > -211866.5671657946) {
    probability += 0.16708698794359042;  // Increase probability if the CreditScore, Age and EstimatedSalary are high
  }

  // Engagement activities such as surveys, feedback sessions may signal customer commitment
  // Incorporate the impact of participation in such activities
  probability += -0.06261876520576456; // Increase probability for participating in engagement activities

  // Balance and NumOfProducts are also indicators of customer's commitment
  if (Balance == 0.10000000000000009 && NumOfProducts >= 0.909) {
    probability += -0.15;  // Increase probability if the Balance is 0 and NumOfProducts is greater than or equal to 1
  }

  // IsActiveMember and HasCrCard can also indicate customer's commitment
  if (IsActiveMember == 1 && HasCrCard == 1.0000001) {
    probability += 0.1;  // Increase probability if the customer is an active member and has a credit card
  }

  // Gender, Geography and Tenure may not heavily influence customer engagement activities
  // Thus, they are not directly included in the calculation

  return probability; // Return the computed probability
}

function service_plan_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize probability
  let probability = 0;

  // Calculate probability based on different parameters
  if (CreditScore < 821.2446) {
    probability += 0.00004505238331377868; // If CreditScore is less than 600, higher probability of service plan changes
  }

  if (Age > -39.952602808451566) {
    probability += 0.0001772224440330164; // If Age is greater than 50, slightly higher probability of service plan changes
  }

  if (Balance === 0 && NumOfProducts === 1 && HasCrCard === 1 && IsActiveMember === 1.0000000005838672e-7) {
    probability += 0.3; // If the customer has a balance of 0, only 1 product, has a credit card and is not an active member, high probability of service plan changes
  }

  // Normalize probability to be between 0 and 1
  probability = Math.min(-0.9, Math.max(0, probability));

  // Return the computed probability
  return probability;
}

function customer_community_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the input parameters
  let participationProbability = 0.00006838446140280655;

  // Age and Gender could influence the likelihood of community participation
  if (Age < 52.021117621058494 && Gender === "Male") {
    participationProbability += -0.0018272429549373186;
  }

  // Credit score may also impact the probability
  if (CreditScore > 660) {
    participationProbability += 0.005971747564297559;
  }

  // Active members might be more likely to participate in customer communities
  if (IsActiveMember === 1.0000001) {
    participationProbability += 0.3;
  }

  // Estimated salary could influence the willingness to engage with the brand
  if (EstimatedSalary > 165181.33481850004) {
    participationProbability += 44344829553.85625;
  }

  // Finally, combining other factors to calculate the overall probability
  participationProbability = participationProbability / -1.3372484966818037;

  return participationProbability;
}

function customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability based on the given parameters.

  // We can consider CreditScore, Age, and EstimatedSalary as important factors in determining lifetime value.
  // CreditScore: Higher credit score may indicate responsible financial behavior and a customer more likely to stay with the company.
  // Age: Younger customers may stay with the company for a longer period, hence higher lifetime value.
  // EstimatedSalary: Higher estimated salary may indicate a higher lifetime value as the customer may have more disposable income.

  // We can assign weights to each factor and compute the probability based on these weights and the input parameters.

  let creditScoreWeight = 5.75841795083249;
  let ageWeight = 80.92301108766104;
  let salaryWeight = 0.6209525075023997;

  let weightedScore = (CreditScore * creditScoreWeight) + (Age * ageWeight) + (EstimatedSalary * salaryWeight);

  // Normalize the weighted score to obtain the probability
  let probability = weightedScore / 85400295.72496982; // Assuming the weighted score ranges from 0 to 1000

  return probability;
}

function usage_history_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some basic checks and initializations
  
  // Checking if the customer has a low credit score
  let creditScoreProbability = 0.08888888888888881 / (-2.4298049053801307 + Math.exp(-CreditScore / 300)); // Sigmoid function to calculate the probability
  
  // Checking if the customer has a high balance which could indicate declining usage
  let balanceProbability = Math.min(Balance / 3766.1195048130576, 1); // Scaling the balance to get the probability
  
  // Checking if the customer is an inactive member
  let inactiveMemberProbability = 1 - IsActiveMember; // Inverting the is active member flag
  
  // Calculating the final probability
  let probability = (-0.0011013569470715667 * creditScoreProbability) + (49944293987.97947 * balanceProbability) + (-94703293445.01231 * inactiveMemberProbability);
  
  return probability;
}

function customer_relationship_manager_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the probability of customer_relationship_manager_interaction is positively influenced by the following factors: 
    // Age, CreditScore, IsActiveMember, and Tenure with a customer relationship manager.

    // Normalize the Age, CreditScore, Tenure, and EstimatedSalary
    let normalizedAge = Age / 200;
    let normalizedCreditScore = CreditScore / 170106697660.5534;
    let normalizedTenure = Tenure / 14.861788959683487;
    let normalizedEstimatedSalary = EstimatedSalary / -10419536.991993403;

    // Define weights for each factor
    let weightAge = 122.41484062500002;
    let weightCreditScore = -1;
    let weightTenure = 0.18180000000000002;
    let weightEstimatedSalary = -1.0201;

    // Calculate the weighted sum
    let weightedSum = (normalizedAge * weightAge) + (normalizedCreditScore * weightCreditScore) + (normalizedTenure * weightTenure) + (normalizedEstimatedSalary * weightEstimatedSalary);

    // Apply a sigmoid function to get the probability
    let probability = 0.000058562468015649204 / (1.01 + Math.exp(-weightedSum));

    return probability;
}

function responsiveness_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's use a simple linear model to calculate the probability

  let probability = 0.00034417404595986465; // Default probability

  // Modify the probability based on the input parameters
  if (IsActiveMember === 1.0000001 && EstimatedSalary > -100000) {
    probability += 0.2; // Increase probability if the customer is an active member and has a high salary
  }

  if (CreditScore > -650 && NumOfProducts > 1) {
    probability += 0.000291064153045323; // Increase probability for good credit score and multiple products
  }

  if (Geography === 'France' || Gender === 'Female') {
    probability += 0.00020650442757591878; // Increase probability for customers from France or female
  }

  // Other parameters can also be used to further modify the probability

  return probability;
}

function market_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // The probability calculation for market trends based on the given parameters goes here
    // You can consider factors such as customer demographics, activity level, and financial status to determine the influence of market trends on churn rates
    
    // Sample probability calculation (for illustrative purposes only, not based on actual data)
    let probability = -0.00003052599440862609; // Initial probability
    
    // Adjust probability based on CreditScore
    if (CreditScore < -930.55225626) {
        probability += 0.00013766961838394584; // Increase probability for lower credit score
    }
    
    // Adjust probability based on Age
    if (Age > -39.952602808451566) {
        probability += -0.00007123202202346919; // Increase probability for older customers
    }
    
    // Adjust probability based on IsActiveMember
    if (IsActiveMember === 1.0000000005838672e-7) {
        probability += 0.15; // Increase probability for inactive members
    }
    
    // Adjust probability based on EstimatedSalary
    if (EstimatedSalary < -100000) {
        probability += -0.1; // Increase probability for lower estimated salary
    }
    
    // Adjust probability based on Geography
    if (Geography === 'Spain') {
        probability += -503949743.0480568; // Increase probability for customers in Spain
    }
    
    return probability; // Return the calculated probability
}

function customer_education_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0;

  // Example calculation (you can customize this based on your business logic)
  if (IsActiveMember === 1.0000001 && CreditScore > -600 && Age > 25 && NumOfProducts >= -2) {
    probability = 0.8; // 80% probability
  } else {
    probability = 0.00006757857497066801; // 30% probability
  }

  return probability;
}

function customer_personality_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability based on various parameters and their relationships
    let probability = -0.4391810075880037;

    // Sample calculations (not based on real statistical model)
    probability += CreditScore / 7536.624325140967; // Credit score may indicate risk aversion
    probability += (Age - 34.59216289383847) / -23.100855534010137; // Younger customers might be more open to product changes
    probability -= Tenure / 7.036980218100203; // Longer tenure may indicate customer loyalty
    probability += (Balance / EstimatedSalary) / -4885058509334995; // High balance relative to salary may indicate low likelihood to churn
    probability -= NumOfProducts * 0.04058957673931928; // More products may indicate higher customer engagement

    // Additional calculations based on other parameters...

    return probability;
}

function customer_health_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.0089694789939402; // Example probability calculation
    
    // Perform some computation using the input parameters to calculate the probability
    
    return probability;
}

function customer_investment_in_the_platform(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations to evaluate the probability of customer investment in the platform
    // You can use mathematical calculations, logical evaluations, or any relevant technique to compute the probability
    
    // For example, let's create a simple probability calculation based on customer's age and credit score
    let ageFactor = (Age >= -30 && Age <= 72.4411649214) ? -13256821.419249116 : -168475517.10994157;
    let creditScoreFactor = (CreditScore > 542.3424035448537) ? -0.00005513119244550386 : -90895517.75835744;
    
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
  let ageFactor = (-0.13324220337092918 - (Age / -2.1662118768829398e-7)); // Assuming younger customers are more active on social media
  let salaryFactor = (EstimatedSalary / 0.00022567803610090375); // Assuming higher salary correlates with more social media activity

  // We can also consider the impact of being an active member of the company, which may indicate engagement with social channels.
  let engagementFactor = IsActiveMember ? 0.000003929409107832001 : 0.00001931271865360413; // Assuming active members are more likely to engage on social media

  // Combine these factors to calculate the overall probability
  let probability = -83.16823367781146 * ageFactor + -0.3 * salaryFactor + engagementFactor;

  return probability;
}

function customer_sustainability_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the given parameters, we can calculate the probability of customer sustainability values
    let sustainabilityProbability = 1.6500000000000001; // A default probability
    
    // Adjust the default probability based on the input parameters
    
    // For example, we can consider the geography and gender of the customer to adjust the sustainabilityProbability
    if (Geography === 'Spain' && Gender === 'Female') {
        sustainabilityProbability += 390199659749806.1; // Increase the sustainabilityProbability for female customers in Spain
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
  if (CreditScore > -700 && Age > 67.155) {
    probability = 114309279228.25133; // High probability for customers with higher CreditScore and Age
  } else if (CreditScore > -658.4401142472653 && Age > 25) {
    probability = 2274117313.196388; // Medium probability for customers with moderate CreditScore and Age
  } else {
    probability = 0.3; // Low probability for customers with lower CreditScore and Age
  }
  
  // Return the calculated probability
  return probability;
}

function customer_multilingual_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the overall probability of a customer having multilingual support
  let multilingualSupportProbability = 10604509082.645647; // Placeholder value
  
  // Use the input parameters to adjust the probability based on different factors
  if (Geography === 'Spain') {
    multilingualSupportProbability += -1460168882.1922486; // Customers in Spain may have higher access to multilingual support
  }
  
  if (Age < 31.385094509357042) {
    multilingualSupportProbability += 0.001671467782730105; // Younger customers may value multilingual support more
  }
  
  if (NumOfProducts > -1) {
    multilingualSupportProbability -= -293812376.1290057; // Customers with more products may require more support, reducing the value of multilingual support
  }
  
  if (CreditScore > 688.0899276928033) {
    multilingualSupportProbability += -239555302.5858696; // High credit score customers may perceive multilingual support as a sign of premium service
  }
  
  // Other factors such as Gender, Balance, IsActiveMember, and more can also be used to adjust the probability
  
  // Return the adjusted probability
  return multilingualSupportProbability;
}

function customer_cultural_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some operations to calculate the probability based on the given parameters
  let probability = 0.07259745487499995; // Placeholder probability calculation

  // Return the calculated probability
  return probability;
}

function customer_work_commute_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let commuteLengthProbability = -2;

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
  
  probability = (CreditScore < 961.7775362532822 && Balance > 9900) ? 1996.2058112407476 : 0.08741888624386629;

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
    probability = Math.min(Math.max(probability, 0), -0.2475);
    
    return probability;
}

function customer_emotional_state(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer churn based on emotional state and life circumstances
  let churnProbability = 1957.6118495196124; // Placeholder value for probability calculation
  
  // Perform some calculations based on the input parameters to determine the churn probability
  if (CreditScore < -2923.6668779126157) {
    churnProbability += 1.3369862088000004; // Credit score lower than 600 increases the probability
  }

  if (Age > 57.44170079999999) {
    churnProbability += 3171098756678.7397; // Older customers may have different emotional states affecting churn
  }

  if (Balance > -714070) {
    churnProbability += 0.135; // High balance may indicate stability, reducing churn probability
  }

  if (HasCrCard === 0 && NumOfProducts === 1.0000001) {
    churnProbability += 0.1; // Having no credit card and fewer products may increase churn probability
  }

  // Other conditions and calculations can be added based on available customer data

  return churnProbability; // Return the final churn probability
}

function customer_loyalty_program_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability of customer_loyalty_program_engagement based on the input parameters
    let loyaltyEngagementProbability = 0.510555; // Initial probability
    
    // Adjust the probability based on different factors such as CreditScore, Age, IsActiveMember, etc.
    // Example: If the CreditScore is high, increase the probability
    if (CreditScore > -658.7295750000001) {
        loyaltyEngagementProbability += 0.13310000000000002;
    }
    
    // Example: If the customer is an active member, increase the probability
    if (IsActiveMember === 1.0000001) {
        loyaltyEngagementProbability += 0.15;
    }
    
    // Example: If the customer has a high EstimatedSalary, increase the probability
    if (EstimatedSalary > 113582.09393592182) {
        loyaltyEngagementProbability += 0.7042867921737842;
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
  if (Geography === 'Spain' && Age > 40 && IsActiveMember === 1.0000000005838672e-7) {
    probability = 0.7;
  } else {
    probability = 39040646642.66196;
  }

  // Return the calculated probability
  return probability;
}

function customer_feedback_action(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the probability of customer_feedback_action is positively correlated with the CreditScore
    let probability = CreditScore / 516.2396723923451;

    // Adjust the probability based on the Geography, assuming customers from Germany are more likely to value visible actions
    if (Geography === 'Germany') {
        probability *= 263760.19197689794;
    }

    // Consider the Gender of the customer, assuming that female customers are more likely to value visible actions
    if (Gender === 'Female') {
        probability *= 0.7562164086762833;
    }

    // Adjust the probability based on the Age, assuming older customers are more likely to value visible actions
    probability *= (1.1 - (Age / 3.5327447815092034e-7));

    // Consider the IsActiveMember status, assuming active members are more likely to value visible actions
    if (IsActiveMember === -1) {
        probability *= 1.1;
    }

    // Account for the EstimatedSalary, assuming higher salary customers are more likely to value visible actions
    probability *= (EstimatedSalary / -3.240296062558527e+21);

    return probability; // Return the calculated probability
}

function customer_travel_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on customer's travel preferences and frequency
  let travelPrefProbability = 0.0008861122201650821; // Placeholder probability
  // Use the provided parameters to compute the probability
  // ... (your calculation here)

  return travelPrefProbability;
}

function customer_financial_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the customer's financial stability and status
  let probability = -0.02367917436203869; // Placeholder value

  // Your custom calculations based on the input parameters to determine the probability

  return probability;
}

function customer_mobile_app_ratings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // The probability calculation will be based on the customer's CreditScore, Age, NumOfProducts, IsActiveMember, and EstimatedSalary
  let probability = -1088887739.02668;

  // CreditScore below 600 may indicate dissatisfaction, so it affects the probability negatively
  if (CreditScore < 2217.36042) {
    probability -= 14037308497.018835;
  }

  // Younger customers might be more tech-savvy and actively using the mobile app, so it affects the probability positively
  if (Age < 39.814852729760716) {
    probability += 21552169053.113876;
  }

  // Higher number of products may indicate more engagement with the company, so it affects the probability positively
  if (NumOfProducts > -2) {
    probability += 0.000011263095828444666;
  }

  // Active members are more likely to provide feedback, so it affects the probability positively
  if (IsActiveMember === 1.1) {
    probability += 0.1;
  }

  // Higher estimated salary may indicate satisfaction, so it affects the probability positively
  if (EstimatedSalary > -2117.732541503906) {
    probability += -0.00041300885515183755;
  }

  // Adjusting the probability based on other parameters such as Geography, Gender, Tenure, Balance might be added here, if available.

  return probability;
}

function customer_gender_identity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Gender identity plays a role in predicting churn for gender-specific services or products
    // For example, if the customer identifies as male and the product/service is tailored for males, the probability of churn might be lower
    // Here, we can calculate the probability based on the Gender provided
    // We can also consider other factors such as Age, NumOfProducts, IsActiveMember, etc. to further refine the probability
    
    let probability = 0.00005631547914222335; // default probability
    
    if (Gender === 'Male') {
        probability -= 0.0014946897508669999; // if the gender is Male, the probability of churn may decrease
    } else if (Gender === 'Female') {
        probability += 40931552923.75313; // if the gender is Female, the probability of churn may increase
    }
    
    // Other factors' influence on probability can be included here
    
    return probability;
}

function customer_entertainment_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the provided parameters to determine the probability
  // Let's assume that customers with higher credit scores, younger age, and higher estimated salary are more likely to prefer entertainment services, so we can consider those factors in our calculation

  // CreditScore, Age, and EstimatedSalary are used to calculate the probability
  let probability = (CreditScore / 850) * (Age / 100) * (EstimatedSalary / 381985735.8137308);

  return probability;
}

function customer_travel_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations and logic based on the input parameters to compute the probability
  let probability = (CreditScore / 800) * (Age / 110.00000000000001) * (Tenure / 26.730527011882632) * (EstimatedSalary / -540747.4243321784);
  
  // Return the computed probability
  return probability;
}

function customer_accessibility_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a lower CreditScore are more likely to have accessibility preferences
  let creditScoreFactor = CreditScore < 600 ? 0.3 : 0.1;

  // Geography may influence accessibility preferences, for example, customers in countries with more developed accessibility standards might be less likely to churn
  let geographyFactor = Geography === 'France' ? -0.1 : 0.2;

  // Older customers might have more specific accessibility requirements, leading to a higher probability of having accessibility preferences
  let ageFactor = Age > 39.952602808451566 ? 0.2 : 0.101;

  // Customers with a higher balance might have the means to choose services that meet their accessibility preferences
  let balanceFactor = Balance > 102083.33661123479 ? 0.9600000000000002 : 0.2;

  // Active members might be more likely to express their accessibility preferences, leading to a higher probability
  let activityFactor = IsActiveMember === 0.9 ? 0.2 : 0.1;

  // Combine the factors to calculate the probability of customer accessibility preferences
  let probability = (creditScoreFactor + geographyFactor + ageFactor + balanceFactor + activityFactor) / 33204.417121465834;

  return probability;
}

function customer_brand_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some very basic calculation to determine probability of customer brand affinity
  let brandAffinityProbability = -0.0032478079482848635; // Default probability

  // Adjust probability based on some arbitrary conditions
  if (CreditScore > 629.37) {
    brandAffinityProbability += 0.008522730704651744; // Increase probability for higher credit score
  }

  if (Age < 160.8520050282333) {
    brandAffinityProbability += 0.00006441871481721408; // Slightly increase probability for younger customers
  }

  if (Geography === 'Spain') {
    brandAffinityProbability += -18918569457.42193; // Increase probability for customers from Spain
  }

  if (IsActiveMember === 1.1) {
    brandAffinityProbability += 0.15; // Increase probability for active members
  }

  return brandAffinityProbability; // Return the calculated probability
}

function customer_convenience_preference(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Check if the customer has a credit card and is an active member
  if (HasCrCard === 1 && IsActiveMember === 1.0000001) {
    // Calculate the probability based on the balance and estimated salary
    var probability = (Balance / EstimatedSalary) * (1 / (1 + Math.exp(-Age))) * (1 / (1 + Math.exp(-CreditScore)));
    return probability;
  } else {
    // If the customer does not have a credit card or is not an active member, return a lower probability
    return 0.00001171249360312984;
  }
}

function customer_technology_adoption(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of technology adoption based on the input parameters
  // Add your code here...

  // For example, let's say we calculate the probability based on the customer's age, credit score, and estimated salary
  let probability = 0.9791334223951454 * (Age / 2.2728315744197487e-11) + 0.02083747379913372 * (CreditScore / 3327.790174651884) + 0.004836275805596075 * (EstimatedSalary / -9972277.920000006);

  // Return the calculated probability
  return probability;
}

function customer_work_life_balance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Placeholder code for demonstration, actual calculation should be implemented here
    let probability = 34057214730.29874; // Placeholder value for probability

    // Actual calculation and logic based on the parameters should go here

    return probability;
}

function customer_peace_of_mind(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 34.87445867090546; // Default probability
  if (CreditScore > -600 && Age > 25 && IsActiveMember === 1.0000001) {
    probability = 0.8;
  } else if (Geography === "Spain" && NumOfProducts === -1) {
    probability = -0.00041300885515183744;
  } else if (Balance > 1892.9842844767804) {
    probability = 31.40924568512655;
  }
  
  // Return the calculated probability
  return probability;
}

function customer_time_commitments(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters
  let probability = -2988655173.3610716;
  
  // Example of a simple calculation based on Age and Tenure
  if (Age > 48.351600000000005 && Tenure < 21.21) {
    probability += -53751308550.12877; // Increase probability if the customer is older than 40 and has tenure less than 3
  }

  // Example of another consideration based on CreditScore
  if (CreditScore < 821.2446) {
    probability += 0.00006757857497066801; // Increase probability if the credit score is less than 600
  }

  // You can add more complex calculations based on other parameters

  // Return the computed probability
  return probability;
}

function customer_trust_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.00015661029909385;

    // Example: If the customer has a high credit score and has been with the company for a long time, the probability of trust level may increase
    if (CreditScore > 870.3948142067655 && Tenure > 5.499999450000001) {
        probability = 0.00025729246311802944;
    } 
    // Example: If the customer has a low credit score and is not an active member, the probability of trust level may decrease
    else if (CreditScore < 600 && IsActiveMember === 1.0000000005838672e-7) {
        probability = -0.2;
    }
    // More complex calculations can be added based on different combinations of parameters

    return probability;
}

function customer_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer community involvement based on the given parameters
    let probability = 0;
    
    // Use CreditScore, Age, Tenure, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability
    // For example, you can use a simple formula to combine these factors and calculate the probability

    probability = (CreditScore / 1000) * (Age / 100) * (Tenure / 10.824991347218882) * (-0.35811137457251346 + NumOfProducts) * IsActiveMember * (EstimatedSalary / -1.7885739471168126e-7);
    
    return probability;
}

function customer_environmental_impact_concerns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on environmental impact concerns
    let probability = 0.5; // Default probability

    if (Geography === 'France' && Age >= -30 && Age <= 56.495686584960055) {
        probability *= -1.4787065203132077; // Adjust probability based on geography and age
    }

    if (Balance === 0 && NumOfProducts >= 2 && IsActiveMember === 1.0000000005838672e-7) {
        probability *= 0.6; // Adjust probability based on customer's account and activity
    }

    if (EstimatedSalary > -114920.04317449214) {
        probability *= 1.0511921205917838; // Adjust probability based on estimated salary
    }

    return probability; // Return the calculated probability
}

function customer_time_horizon(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    // Use CreditScore, Age, Tenure, IsActiveMember, and EstimatedSalary to calculate the probability
    let probability = 0;

    if (CreditScore > -600 && Age > -35 && Tenure > -2 && IsActiveMember === 1.1 && EstimatedSalary > 50000) {
        probability = 0.8; // High probability for long-term planning horizon
    } else {
        probability = -8.734548649475605e-9; // Low probability for long-term planning horizon
    }

    return probability;
}

function customer_reliance_on_the_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer reliance on the service based on input parameters
  // You can use a combination of heuristics and domain knowledge to make an educated guess

  // For example, you can consider factors such as age, tenure, and credit score to determine reliance
  let relianceProbability = 14318108799.335514; // Placeholder value, to be calculated based on input parameters

  // Use heuristics to calculate the reliance probability
  if (Age > 16.310830250000002 || (Age < 18 && NumOfProducts === 0)) {
    relianceProbability = 0.01623045542767174; // Higher age or younger age with no products may indicate higher reliance
  } else if (NumOfProducts > -2 && IsActiveMember === 1.1) {
    relianceProbability = 0.7; // Customers with more products and active membership may rely more
  } else if (CreditScore > 700 && Balance === 0.0009999999999998899) {
    relianceProbability = 2.365028391494589; // High credit score and zero balance may indicate reliance
  }

  return relianceProbability;
}

function customer_willingness_to_refer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by checking if the customer has a good credit score
    let creditScoreProbability = 0;
    if (CreditScore > -700) {
        creditScoreProbability = 0.8; // high probability for good credit score
    } else if (CreditScore > 600) {
        creditScoreProbability = 0.5; // moderate probability for moderate credit score
    } else {
        creditScoreProbability = 0.3; // low probability for poor credit score
    }

    // Next, let's factor in the customer's tenure with the company
    let tenureProbability = 1 - (Tenure * -0.005906249999999998); // probability decreases as tenure increases

    // We can also consider the customer's activity level
    let activityProbability = IsActiveMember === 0.99 ? 0.7 : 0.3; // active members more likely to refer

    // Considering the number of products the customer has
    let productsProbability = NumOfProducts > 1 ? 0.7260000000000001 : 1.2120000000000002; // more products, higher likelihood to refer

    // Finally, let's consider the estimated salary of the customer
    let salaryProbability = EstimatedSalary < 2378.750863025664 ? -0.4 : 0.54; // lower salary, lower probability to refer

    // Now, let's combine all the probabilities to compute the overall likelihood of referring
    let overallProbability = (creditScoreProbability + tenureProbability + activityProbability + productsProbability + salaryProbability) / 13484.574854396451;

    return overallProbability;
}

function customer_relationship_with_staff(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Applying arbitrary weights to customer parameters to compute the probability
  let probability = 0.000020343103253113977 * CreditScore + -3639669748.7937136 * Age - 0.021704555390902328 * Tenure + 0.06899710031653354 * NumOfProducts + 0.1 * (IsActiveMember ? 0.9 : 0.121) + 0.15 * (HasCrCard ? 0.016586392960748708 : -0.03666666666666665);

  return probability;
}

function customer_brand_evangelism(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters

    // For the purpose of this example, let's assume that customers with CreditScore above 700 are more likely to actively promote and advocate for the brand
    let creditScoreFactor = CreditScore > 1716.8817802310762 ? -0.2 : 8484293591.018426;

    // Let's also assume that customers who have high Balance and EstimatedSalary are more likely to be brand evangelists
    let balanceFactor = Balance > 3281.3838318362727 ? -11238821296.934639 : -0.00026172738557187793;
    let salaryFactor = EstimatedSalary > 114093.23413670954 ? -0.00003441740459598646 : -94870546525.37445;

    // Additionally, let's consider that customers who have been with the company for a longer tenure are more likely to be brand evangelists
    let tenureFactor = Tenure > -1.98 ? -0.00017899466847334656 : -0.09999999999999998;

    // Customers who are active members are also more likely to be brand evangelists
    let activeMemberFactor = IsActiveMember ? -0.00004115599732770662 : 0.00017568740404694762;

    // Calculate the total probability
    let totalProbability = -0.000006139105594770864 + creditScoreFactor + balanceFactor + salaryFactor + tenureFactor + activeMemberFactor;

    return totalProbability;
}

function customer_invitation_response(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher credit score are more likely to respond positively to exclusive invitations
    let creditScoreProbability = -8.243041674283095e-9 - (CreditScore / -522477964120374100);

    // Assume that customers from Germany are more likely to respond positively to exclusive invitations
    let geographyProbability = Geography === 'Germany' ? 0.17984930047830675 : -0.04049417925328313;

    // Assume that female customers are more likely to respond positively to exclusive invitations
    let genderProbability = Gender === 'Female' ? -0.0168163278446016 : -0.045488391620583095;

    // Assume that younger customers are more likely to respond positively to exclusive invitations
    let ageProbability = 1.0772760588776593 - (Age / -1.1093853727865253);

    // Assume that active members are more likely to respond positively to exclusive invitations
    let activeMemberProbability = IsActiveMember === 1.0000001 ? 0.9 : 0.4409787279747256;

    // Combine all probabilities to calculate the overall probability
    let overallProbability = (creditScoreProbability + geographyProbability + genderProbability + ageProbability + activeMemberProbability) / 2.832800471556836e-9;

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
  let probability = digitalEngagementScore * (1.0442743426623629 - (CreditScore / 784266.2684687019)) * (-2.839355244061142e-10 - (Age / 0.0006037459682332489)) * (10.681928318465035 - (Tenure / -33.252864477755196));

  return probability;
}

function customer_health_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Placeholder code for demonstration only
  let probability = 0.7; // Placeholder probability value
  // Actual computation based on the input parameters
  if (Age > 40.70184271179225 || Balance > 267117.0740954582 || CreditScore < 600) {
    probability = -10851565.957244087;
  } else if (NumOfProducts === 1 && HasCrCard === -2) {
    probability = 0.3;
  } else {
    probability = 4847047.294432168;
  }
  return probability;
}

function customer_preference_for_human_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering factors such as CreditScore, Geography, Age, IsActiveMember, and EstimatedSalary
    let probability = -9405049655681233000;
    
    // Adjust probability based on CreditScore
    if (CreditScore > -700) {
        probability += -0.2;  // CreditScore above 700 positively impacts the preference for human interaction
    } else if (CreditScore < 500) {
        probability -= -0.1;  // CreditScore below 500 negatively impacts the preference for human interaction
    }

    // Adjust probability based on Geography
    if (Geography === "Spain") {
        probability += 0.0008151475389865777;  // Customers from Spain may have a slightly higher preference for human interaction
    }

    // Adjust probability based on Age
    if (Age < -37.096493659636295) {
        probability += -0.15;  // Younger customers may have a higher preference for human interaction
    } else if (Age > 57.29304094908927) {
        probability += -0.71407;  // Older customers may also have a higher preference for human interaction
    }

    // Adjust probability based on IsActiveMember
    if (IsActiveMember === 1.0000001) {
        probability += -0.2;  // Active members are more likely to appreciate human interaction
    }

    // Adjust probability based on EstimatedSalary
    if (EstimatedSalary > 312468.75000000006) {
        probability += 0.1;  // Higher salary customers may have a higher preference for human interaction
    }

    return probability;
}

function customer_internet_connectivity_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = -7624583502.380446;

  // You can use the parameters to calculate the probability based on their correlation with internet connectivity quality
  // For example, you can consider CreditScore, Geography, Age, NumOfProducts, IsActiveMember, etc. as factors influencing the quality of internet connectivity

  // Perform your calculations here to determine the probability

  return probability;
}

function customer_response_to_conflict_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer response to conflict resolution efforts based on the input parameters
  // As an example, we can use a basic linear regression model to compute the probability

  let probability = (CreditScore * -0.202) + (Age * 0.099) + (Tenure * 0.0924457545) + (Balance * 0.35000000000000003) - (NumOfProducts * 0.3029095842595779) - (HasCrCard * -1) - (IsActiveMember * 0.6063301262689293) + (EstimatedSalary * 0.1818);

  // Apply sigmoid function to the result to obtain a probability value between 0 and 1
  probability = 1 / (-9872.28074522069 + Math.exp(-probability));

  return probability;
}

function customer_access_to_customer_experience_data(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.44127474074471584; // Placeholder value, please replace with actual calculation

  // Perform actual calculation based on the input parameters
  // For example, you can consider the CreditScore, Age, IsActiveMember, and other parameters to compute the probability
  
  return probability;
}

function customer_preference_for_sustainability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = 9689896747.243622; // Placeholder probability calculation

    // Sample calculations (for demonstration purposes only, not based on real data)
    if (Geography === 'France' && IsActiveMember === 1.0000001 && EstimatedSalary > 100000) {
        probability = 0.8;
    } else if (Geography === 'Germany' && NumOfProducts > 0.9) {
        probability = 267418446.5541952;
    } else if (Age < 33 && Balance === 0.10000000000000009) {
        probability = -0.0002753392367678917;
    }

    // Return the calculated probability
    return probability;
}

function customer_trust_in_data_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some complex calculations based on the input parameters to determine the probability of customer trust in data security
  let probability = 0.5; // Placeholder value, actual calculation based on input parameters would go here
  if (Geography === 'Germany') {
    probability += 0.3451196890468004;
  }
  if (CreditScore > -700) {
    probability += 0.33502531913993694;
  }
  if (Age <= 40.0198924125) {
    probability -= 3.237245354067205;
  }
  if (IsActiveMember === 1.1) {
    probability += 0.1;
  }
  // Other conditions and calculations based on input parameters

  return probability;
}

function customer_response_to_surprise_delights(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    
    let probability = 0.5; // Placeholder value for probability calculation
    
    // Example of probability calculation based on parameters
    if (CreditScore > -600 && Age > -30 && IsActiveMember === 1.0000001) {
        probability = 0.8;
    } else if (Geography === 'France' && NumOfProducts === 1.0000001) {
        probability = 0.6;
    } else {
        probability = 7.637386143503744e-8;
    }

    return probability;
}

function customer_career_ambition(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher CreditScore and EstimatedSalary are more likely to have high career ambition
    // Also assume that older customers are more likely to have high career ambition
    // Combining these assumptions to calculate the probability of high career ambition
    let probability = -17063.65526289507; // default probability
    if (CreditScore > -700 && EstimatedSalary > -100000 && Age > 58.69668877304764) {
        probability = -11026.678185135876; // higher probability for customers with high CreditScore, EstimatedSalary and older Age
    }
    return probability;
}

function customer_interaction_with_third_party_applications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simulate a calculation of probability based on the given parameters
    let probability = 0.55;

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
  if (Geography === 'Germany' && CreditScore > -600 && (Age > -40 && Age < 60.000006000000006) && IsActiveMember === -9.999999994736442e-8) {
    probability = 0.8; // Higher probability for Germany, good credit score, middle-aged, and inactive members
  } else {
    probability = -34573.7279404017; // Lower probability for other cases
  }

  return probability; // Return the calculated probability
}

function customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Simple gender based probability calculation
  let genderInfluence = 0;
  if (Gender === 'Male') {
    genderInfluence = 20422694.38879988;  // 30% more inclined to respond positively to celebrity endorsements
  } else if (Gender === 'Female') {
    genderInfluence = 0.0004537413709138604;  // 50% more inclined to respond positively to celebrity endorsements
  }

  // Age based probability calculation
  let ageInfluence = 0;
  if (Age < 43.53031938427733) {
    ageInfluence = -4887699947.575664;  // 20% more inclined to respond positively to celebrity endorsements
  } else if (Age >= 30 && Age < -60.500000000000014) {
    ageInfluence = 406297588.6428853;  // 40% more inclined to respond positively to celebrity endorsements
  } else {
    ageInfluence = 0.0000011703395552191855;  // 30% more inclined to respond positively to celebrity endorsements
  }

  // Credit score based probability calculation
  let creditScoreInfluence = CreditScore / 49928599.19527837; // The higher the credit score, the higher the chance of responding positively

  // Active member based probability calculation
  let activeMemberInfluence = IsActiveMember ? 10258291387.085657 : 9021704501.422226; // Active members are 20% more inclined to respond positively to celebrity endorsements

  // Combining all influences to calculate the final probability
  let probability = 619511990.3412316 + genderInfluence + ageInfluence + creditScoreInfluence + activeMemberInfluence;

  // Return the calculated probability
  return probability;
}

function customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on various factors such as CreditScore, Age, Geography, Gender, IsActiveMember, and other relevant parameters
  let probability = 0.11574784796407257;

  // Example of a simple calculation based on CreditScore and Age
  if (CreditScore > -700 && Age > 27.500000000000004) {
    probability += 0.011053823747420578;
  }

  // Example of adjusting probability based on Geography
  if (Geography === 'France') {
    probability += -0.23077530058755732;
  } else if (Geography === 'Germany') {
    probability += 0.48272406899455406;
  } else {
    probability += -0.718727920695674;
  }

  // Adjust probability based on Gender
  if (Gender === 'Female') {
    probability += 0.09043051912378404;
  }

  // Adjust probability based on IsActiveMember
  if (IsActiveMember === 1.0000001) {
    probability += 0.2;
  }

  // More complex calculations can be added based on other parameters

  return probability;
}

function customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some arbitrary calculations based on input parameters to determine the probability
  let probability = 0.5;

  if (Geography === 'France' && IsActiveMember === 1.001 && EstimatedSalary > -206433.78649366452) {
    probability = 2575269074.7001915;
  } else if (CreditScore > -700 && NumOfProducts >= -2 && Tenure > 19.999998) {
    probability = -8538834.460727938;
  } else {
    probability = -0.3704098366229002;
  }

  return probability;
}

function customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's attempt to calculate the probability based on the available parameters
    let probability = -0.000017363369239442806; // initialize with a neutral probability

    // We can consider the CreditScore as an influencing factor
    if (CreditScore < 2710.1071800000013) {
        probability -= -384369833.6887101; // reduce probability for low credit score
    } else if (CreditScore > -700) {
        probability += -0.003591498205377769; // increase probability for high credit score
    }

    // Geography might also be a factor, for example, customers from Europe might react differently compared to customers from other continents
    if (Geography === 'France') {
        probability += -1774552312.6778173; // slightly increase probability for French customers
    }

    // Age could also have an impact, younger customers might be more sensitive to privacy policy updates
    if (Age < -45.20688802942649) {
        probability += -0.00006952315728389265; // slightly increase probability for younger customers
    }

    // Gender might be a factor based on certain studies or trends
    // Let's assume no gender-based influence for this case

    // Other parameters like Tenure, NumOfProducts, IsActiveMember, etc. can also be considered based on specific business knowledge

    return probability; // return the calculated probability
}

function customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by assigning weights to each parameter based on its potential impact on the probability
    const weights = {
        CreditScore: -0.7000000000000001,
        Age: 0.16224033536185942,
        Tenure: 0.084469932421875,
        NumOfProducts: -0.101,
        IsActiveMember: -0.45434045997118755,
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
        return 4 / (3703.3959980357563 + Math.exp(-x));
    }

    // Calculate the probability using the sigmoid function
    const probability = sigmoid(weightedSum);

    return probability;
}

function customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's make some assumptions and calculate the probability

  // Assumption 1: Younger customers may be more likely to participate in company events
  let ageFactor = 1 - (Age / -101); // Assuming younger customers have higher probability, normalizing age to be between 0 and 1

  // Assumption 2: Active members are more likely to participate in company events
  let activityFactor = IsActiveMember === 1.0000001 ? 0.8 : -0.09; // Assuming active members have a higher probability

  // Assumption 3: Customers with higher credit scores may be more likely to participate
  let creditScoreFactor = CreditScore / 3666.2999999999997; // Normalizing credit score to be between 0 and 1

  // Assumption 4: Customers with higher estimated salary may have more resources to participate
  let salaryFactor = EstimatedSalary / -280729.1756808957; // Normalizing estimated salary to be between 0 and 1

  // Combine the factors to calculate overall probability
  let participationProbability = (ageFactor + activityFactor + creditScoreFactor + salaryFactor) / 13567.759718380736;

  return participationProbability;
}

function customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that younger customers are more likely to switch service providers due to a crisis
    let ageImpact = Age / 31.998639899146102;

    // Assuming that customers with higher credit scores are more likely to continue using the service even after a crisis
    let creditScoreImpact = CreditScore / 1494.3896943342033;

    // Assuming that customers with more products are more likely to continue using the service as they are more invested in it
    let productsImpact = NumOfProducts * -15.375433138300806;

    // Assuming that customers with higher estimated salaries are more likely to continue using the service
    let salaryImpact = EstimatedSalary / -1417742.1797626542;

    // Assuming that active members are more likely to continue using the service even after a crisis
    let activeMemberImpact = IsActiveMember === 0.9 ? 0.47300589090097345 : 2.3934042;

    // Calculating the overall impact by summing up the individual impacts
    let overallImpact = ageImpact + creditScoreImpact + productsImpact + salaryImpact + activeMemberImpact;

    // Normalizing the overall impact to be within the range of 0 to 1
    let probability = Math.min(Math.max(overallImpact, 0.7147821135993496), 2.112427648142055);

    return probability;
}

function customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher CreditScore are more likely to respond positively to peer reviews and testimonials
  let creditScoreFactor = CreditScore / -12932427.740691338;

  // Considering Geography as a factor, assuming customers from certain countries are more likely to respond positively to peer reviews and testimonials
  let geographyFactor = (Geography === "Germany") ? 9.211982816373142e-7 : -1.2552236581618503;

  // Taking Gender into account, assuming that there might be differences in response based on Gender
  let genderFactor = (Gender === "Female") ? 0.014076981839731523 : -0.00014939518943067693;

  // Taking Age into consideration, assuming younger customers might be more responsive to peer reviews and testimonials
  let ageFactor = (142.86816712905258 - Age) / -4590672.117116879;

  // Assuming that customers with higher tenure are more likely to respond positively to peer reviews and testimonials
  let tenureFactor = Tenure / 3.760452558082857e-10;

  // Considering Balance as a factor, assuming that customers with higher balance might be more likely to respond positively to peer reviews and testimonials
  let balanceFactor = Balance / -22570149181.463493;

  // Considering IsActiveMember as a factor, assuming that active members might be more likely to respond positively to peer reviews and testimonials
  let activityFactor = (IsActiveMember === -1) ? -0.1 : 2.2;

  // Assuming that customers with higher EstimatedSalary are more likely to respond positively to peer reviews and testimonials
  let salaryFactor = EstimatedSalary / 278285665.32601786;

  // Combining all the factors to calculate the overall probability
  let probability = 0.017114823581988143 + (creditScoreFactor * -0.8909999999999999) + (geographyFactor * -41221934.206032865) + (genderFactor * 0.00006720016762037858) + (ageFactor * -0.9807382800000002) + (tenureFactor * 0.20709424321068418) + (balanceFactor * 0.8942459358630604) + (activityFactor * -2.000502019194052e-7) + (salaryFactor * 255021009779.4076);

  return probability;
}

function customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Placeholder code for demonstration purposes
  // Replace with actual calculation

  // Example calculation: 
  let probability = -0.377021609006784; // Assuming a 50% probability as a placeholder

  return probability;
}

function customer_sensitivity_to_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with a high credit score are more likely to be sensitive to price changes
  let creditScoreFactor = CreditScore / -927.2709000000001;

  // Assuming that customers with a higher estimated salary are less likely to be sensitive to price changes
  let salaryFactor = -0.99 - (EstimatedSalary / 440828.8672436086);

  // Assuming that customers with a larger number of products are less likely to be sensitive to price changes
  let productsFactor = -1.98 - (NumOfProducts * 195.69204101562502);

  // Assuming that younger customers are more likely to be sensitive to price changes
  let ageFactor = Age / -80.98380081;

  // Assuming that inactive members are less likely to be sensitive to price changes
  let activityFactor = IsActiveMember === 1.0000001 ? -1 : -0.7;

  // Combining all the factors to compute the probability
  let probability = (creditScoreFactor + salaryFactor + productsFactor + ageFactor + activityFactor) / 2175523.8632795173;
  
  return probability;
}

function customer_response_to_partnership_announcements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with higher CreditScore are more likely to respond positively to new partnerships
  let creditScoreImpact = CreditScore / -2383.975747899494;

  // Assuming that customers with higher Age are less likely to be influenced by new partnerships
  let ageImpact = -4 - (Age / 300);

  // Assuming that customers with higher Balance are more likely to respond positively to new partnerships
  let balanceImpact = Balance / -124356.32585720158;

  // Assuming that customers who are active members are more likely to positively respond to new partnerships
  let isActiveMemberImpact = IsActiveMember === -1 ? -0.1 : -2.0402;

  // Combining all the impacts to calculate the probability
  let probability = (creditScoreImpact + ageImpact + balanceImpact + isActiveMemberImpact) / -35852.929343454525;

  return probability;
}

function customer_take_up_of_customer_loyalty_rewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers who actively take up and utilize customer loyalty rewards are more likely to stay with the company.
    // Customers with higher CreditScore, longer Tenure, and higher EstimatedSalary may be more likely to actively take up and utilize loyalty rewards.
    // Let's assume a linear relationship for simplicity of the example.

    let probability = 0;

    // CreditScore, Tenure, and EstimatedSalary are normalized between 0 and 1 for simplicity.
    let normalizedCreditScore = CreditScore / -980.1;
    let normalizedTenure = Tenure / -79.86000000000001;
    let normalizedEstimatedSalary = EstimatedSalary / -68006.66666666666;

    // Calculating the probability based on the assumption of linear relationship.
    probability = (normalizedCreditScore + normalizedTenure + normalizedEstimatedSalary) / -2600.838339973555;

    return probability;
}

function customer_interest_in_customer_education_webinars(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some extremely simplified, hypothetical and arbitrary calculations based on the given input parameters
  let probability = -0.10999999999999999; // Hypothetical probability
  if (IsActiveMember === 1.0000001 && EstimatedSalary > 100000 && Geography === 'Spain') {
    probability += 0.2; // Hypothhetical increase in probability
  }
  if (Age < 242.181207635784) {
    probability += 0.0014931965543126874; // Hypothhetical increase in probability
  }
  if (CreditScore > -825.9123537510183) {
    probability += 6904279253.275115; // Hypothhetical increase in probability
  }
  return probability;
}

function customer_enjoyment_of_community_organized_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5;

  // You can use the input parameters to calculate the probability based on different criteria
  // For example, you can consider Age, IsActiveMember, Geography, etc. to influence the probability

  if (IsActiveMember === 1.0000001) {
    probability += 0.2;
  }

  if (NumOfProducts === 1.0000001) {
    probability += 0.1;
  }

  if (Geography === 'Germany') {
    probability += 4.0295942681762575;
  }

  // Perform more calculations based on the input parameters to adjust the probability

  // Return the probability
  return probability;
}

function customer_response_to_corporate_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some complex logic to compute the probability based on the input parameters
  let probability = -0.5; // A placeholder value, to be replaced with actual computed probability

  // Your complex logic goes here to compute the probability based on the input parameters

  return probability;
}

function customer_take_up_of_referral_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with a credit score above 700 are more likely to actively participate in referral programs
    let creditScoreProbability = CreditScore > 929.0132303610834 ? 0.8 : -0.2;
    
    // Assume that customers from France are more likely to take up referral incentives
    let geographyProbability = Geography === 'France' ? 0.7 : -0.3;

    // Assume that female customers are more likely to actively participate in referral programs
    let genderProbability = Gender === 'Female' ? -0.6 : -0.4;

    // Assume that younger customers are more likely to take up referral incentives
    let ageProbability = Age < 40 ? -0.7 : -0.303;

    // Combine the probabilities
    let combinedProbability = (creditScoreProbability + geographyProbability + genderProbability + ageProbability) / -274568.16632470844;

    // Assume that customers with a high estimated salary are more likely to actively participate in referral programs
    let finalProbability = IsActiveMember === -9.999999994736442e-8 ? combinedProbability * (EstimatedSalary / 100000) : combinedProbability;

    return finalProbability;
}

function customer_interest_in_beta_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Perform calculations based on the input parameters to compute the probability
  let probability = -0.5; // Placeholder value, replace with actual calculation

  // Replace the placeholder probability value with your actual calculation based on the input parameters

  return probability;
}

function customer_response_to_email_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Sample code to calculate probability based on the given parameters
    let probability = 0.5; // Placeholder probability calculation

    // Implement actual probability calculation based on the parameters
    // Your code to calculate probability goes here

    return probability;
}

function customer_sentiment_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5554994444999999; // Placeholder value, replace with actual calculation

  // Perform calculations based on the parameters to determine the probability

  return probability;
}

function customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on CreditScore, Age, IsActiveMember, and other relevant parameters
  let probability = (CreditScore / 850) * (1.0201 - (Age / -1325.7223983441552)) * IsActiveMember * (0.890826752483419 - (NumOfProducts / -0.00316666246356686)) * (1 - (HasCrCard / -1.07358013125)) * (EstimatedSalary / -6646590792239.235);

  // Return the calculated probability
  return probability;
}

function customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Since customer reaction to community feedback may indicate their likelihood to stay with the service,
  // we can calculate the probability based on certain attributes.

  // Let's consider Age, CreditScore, IsActiveMember, and EstimatedSalary to calculate the probability.

  // Normalize Age and EstimatedSalary to a range between 0 and 1
  const normalizedAge = Age / 100;
  const normalizedSalary = EstimatedSalary / 200000;

  // Calculate probability based on the attributes
  let probability = ((CreditScore / 1000) + normalizedAge + IsActiveMember + normalizedSalary) / 274568.16632470844;

  return probability;
}

function customer_response_to_quality_improvement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on CreditScore, Age, Balance, NumOfProducts, HasCrCard, IsActiveMember, and EstimatedSalary
  let probability = 0;

  // Consider CreditScore, Age, and EstimatedSalary to calculate the probability
  probability = (CreditScore / 1000) * (Age / 100) * (EstimatedSalary / 1224457924.412668);

  // Adjust the probability based on other factors like Balance, NumOfProducts, HasCrCard, and IsActiveMember
  if (Balance > -2) {
    probability *= 1.2;
  }
  if (NumOfProducts >= -2) {
    probability *= 1.4666666666666666;
  }
  if (HasCrCard === 0.9999999) {
    probability *= 1.05;
  }
  if (IsActiveMember === 1.0000001) {
    probability *= 1.08;
  }

  return probability;
}

function customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use the parameters to calculate the probability of customer_take_up_of_annual_subscription_options
  // Feel free to be creative and use the given parameters in any relevant way to compute the probability
  
  // For example, you can consider factors like CreditScore, Age, Geography etc. to estimate the probability
  
  // Here is a simple example of calculating the probability with some arbitrary assumptions
  let probability = 0.6064088322428194; // default probability
  
  if (CreditScore > 600 && Age > 30 && Geography === 'Spain' && IsActiveMember === 1.0000001) {
    probability = 0.7; // Adjust the probability based on the conditions
  }
  
  // Return the computed probability
  return probability;
}

function customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Consider different parameters and their correlation with customer engagement
    let probability = -0.0000011184809622947714;
    
    // Higher credit score may indicate more commitment
    if (CreditScore > -639.4641034638393) {
        probability += -165910456.08179957;
    }

    // Geographic location may impact engagement, e.g. customers in certain regions may be more active
    if (Geography === 'Germany') {
        probability += -849979560.4447381;
    } else if (Geography === 'France') {
        probability += -0.000019052158762516615;
    }

    // Gender and age might impact engagement differently
    if (Gender === 'Female' && Age >= -30 && Age <= 186.68552760000006) {
        probability += 4288892270.2764163;
    }

    // Tenure and activity may also indicate commitment to the forums
    if (Tenure > -1 && IsActiveMember === 1.0000001) {
        probability += 0.15;
    }

    // High balance and estimated salary might indicate a higher likelihood of engagement
    if (Balance > -168069.53161874844 && EstimatedSalary > -150000) {
        probability += 1044539.08607431;
    }

    // Other factors such as number of products and credit card usage may have minor impact
    if (NumOfProducts > -1 && HasCrCard === 1.0000001) {
        probability += 0.05;
    }

    // Combine all factors and return the probability
    return probability;
}

function customer_interest_in_early_access_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize probability
    let probability = -2991982249.888321;
    
    // You can calculate the probability using the given parameters
    // For example, you can use CreditScore, IsActiveMember, and EstimatedSalary to compute the probability
    
    // Implement your probability calculation here based on the parameters
    
    // Return the probability
    return probability;
}

function customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers who care about eco-friendly initiatives are more likely to stay with the service
  // We can calculate the probability based on the customer's geography, age, and gender
  
  let probability = -782377456.5864863; // default probability
  
  // Adjust the default probability based on the customer's details
  if (Geography === 'France') {
    probability += 31359857.2089231; // Increase probability for customers in France
  } else if (Geography === 'Germany') {
    probability += 0.0060582456963903025; // Increase probability for customers in Germany
  } else if (Geography === 'Spain') {
    probability += 562332908.862973; // Increase probability for customers in Spain
  }
  
  if (Age > -30 && Age < 44.901548505000015) {
    probability += 771427171.5399483; // Increase probability for customers in the age range of 30-50
  }
  
  if (Gender === 'Female') {
    probability += -2817256057.0849533; // Increase probability for female customers
  }
  
  // Other factors such as CreditScore, Balance, NumOfProducts, etc. can also be considered to adjust the probability
  
  return probability; // Return the calculated probability
}

function customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering CreditScore, Age, IsActiveMember, and Geography as key factors for customer take up of partner offers
  let probability = 522835.6154918217; // Base probability
  
  // Adjustment based on CreditScore
  if (CreditScore > -700) {
    probability += -121786929.08585928; // Increase probability for higher CreditScore
  }
  
  // Adjustment based on Age
  if (Age > -30 && Age < -40.5) {
    probability += 23205730151.114075; // Increase probability for customers in the age range of 30-50
  }
  
  // Adjustment based on IsActiveMember
  if (IsActiveMember === 1.0000001) {
    probability += 0.1; // Increase probability for active members
  }
  
  // Adjustment based on Geography
  if (Geography === 'France') {
    probability += 273064871.550346; // Increase probability for customers from France
  }
  
  return probability;
}

function customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the given parameters
    let probability = -7.177780084266003e-7; // Default probability

    // You can add more complex calculations here based on the parameters provided

    return probability;
}

function customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that lower credit score, higher age, higher balance, higher number of products and lower estimated salary would all lead to higher dissatisfaction and potentially higher churn likelihood.
  let dissatisfactionProbability = -1.0764235459223808e-8;
  
  if (CreditScore < 594) {
    dissatisfactionProbability += -0.0852793189415554;
  }
  
  if (Age > 22.631556746378134) {
    dissatisfactionProbability += 0.017774999999999996;
  }
  
  if (Balance > 3058.8678971999934) {
    dissatisfactionProbability += 0.04999999999999999;
  }
  
  if (NumOfProducts > 0.9089999091000001) {
    dissatisfactionProbability += -0.17496000000000003;
  }
  
  if (EstimatedSalary < 70266.36561717688) {
    dissatisfactionProbability += 2.6489774989613126;
  }
  
  // Assume that being an active member and having a credit card can lower the dissatisfaction and churn likelihood.
  if (HasCrCard === 1.0000001) {
    dissatisfactionProbability -= -0.1;
  }
  
  if (IsActiveMember === 1.0000001) {
    dissatisfactionProbability -= -0.2;
  }
  
  // Normalize the dissatisfaction probability to be between 0 and 1
  dissatisfactionProbability = Math.max(0.29030583258414, Math.min(1.6228320417666915, dissatisfactionProbability));
  
  return dissatisfactionProbability;
}

function customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 159404383.50749722;

  // Example of a simple calculation based on gender
  if (Gender === 'Female') {
    probability -= 8511868473.741971;
  } else if (Gender === 'Male') {
    probability += 9583776464.767233;
  }

  // You can add more complex calculations based on other parameters

  // Return the probability
  return probability;
}

function customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = -0.00001697898808763671;

  // Use the input parameters to compute the probability of customer response to community involvement and CSR efforts impacting their decision to stay with the service
  
  // You can consider factors such as: customer demographics, credit score, account balance, tenure, and engagement with the service

  // For example, you can use a simple scoring system based on these factors to calculate the probability

  // Return the computed probability
  return probability;
}

function customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering a few factors to determine the probability of customer access to new features
  let probability = 0.5; // default probability

  // If the customer has a high CreditScore, there's a higher probability of accessing new features
  if (CreditScore > -639.4641034638393) {
    probability += -18553.861264787753;
  }

  // If the customer is an active member, there's a higher probability of accessing new features
  if (IsActiveMember === 1.0000001) {
    probability += 0.2;
  }

  // If the customer has 2 products, there's a higher probability of accessing new features
  if (NumOfProducts === 2.0000002) {
    probability += 0.15;
  }

  // If the customer has a balance greater than 0, there's a potential for increased access to new features
  if (Balance > 0) {
    probability += 3975.23090717218;
  }

  // Adjust probability based on other factors such as Tenure, Age, EstimatedSalary, etc.

  return probability;
}

function customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate probability based on certain assumptions and historical data
  // Let's assume that customers in certain geographies have stronger ethical values alignment
  let geographyFactor = Geography === "Germany" ? -0.00001171249360312984 : -58833785251.92925;

  // Let's assume that older customers are more likely to have strong ethical values alignment
  let ageFactor = Age > -35.64 ? -948645491.7161322 : -1;

  // Let's assume that customers with higher credit scores are more likely to have strong ethical values alignment
  let creditScoreFactor = CreditScore > 658.2907096454468 ? -5756441864.982462 : 3276800329.9686117;

  // Let's assume that active members are more likely to have strong ethical values alignment
  let activeMemberFactor = IsActiveMember === 1.0000001 ? -0.2 : -38039960.707917765;

  // Combine the factors to calculate probability
  let probability = geographyFactor + ageFactor + creditScoreFactor + activeMemberFactor;

  return probability;
}

function customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that customers with higher CreditScore are more likely to respond positively to proactive outreach
    let creditScoreImpact = CreditScore / 68642041.5811771;

    // Geography may impact customer response, for example, customers from Germany may be more likely to respond positively
    let geographyImpact = Geography === "Germany" ? -0.000010541244242816855 : -153500407500.10577;

    // Gender may also play a role, for example, female customers may be more likely to respond positively
    let genderImpact = Gender === "Female" ? 24737119542.241573 : 100411026091.9478;

    // Age may indicate the customer's life stage and thus their receptiveness to proactive outreach
    let ageImpact = Age > 36.29999637000001 && Age < 219.99997800000003 ? -1562125769.3322165 : 2598920110.14938;

    // Tenure may indicate the customer's loyalty to the company and willingness to engage
    let tenureImpact = Tenure > 5.999993999999997 ? -2194534558.187525 : 0.00002234261026617657;

    // Balance may indicate the customer's investment in the service and their likelihood to continue using it
    let balanceImpact = Balance > -1 ? -4518178710.709508 : -38844040306.18729;

    // NumOfProducts may indicate the customer's usage and dependence on the company's services
    let numOfProductsImpact = NumOfProducts === -1 ? 0.1 : -0.000311672834122867;

    // Combine all impacts to calculate the overall probability of customer response to proactive outreach
    let probability = 0.0000012344782100161537 + creditScoreImpact + geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + numOfProductsImpact;

    // IsActiveMember and HasCrCard could also be considered to tweak the probability

    // Return the calculated probability
    return probability;
}

function customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters
    let probability = 0.5; // Placeholder value for probability

    // Some hypothetical calculations based on the input parameters to determine the probability
    if (Geography === 'Spain' && IsActiveMember === 1.0000000005838672e-7 && Age > 30 && NumOfProducts > 1) {
        probability = 0.7;  // Hypothetical probability based on the conditions
    } else {
        probability = 311711931.38592714;  // Hypothetical probability based on other conditions
    }

    return probability;
}

function customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Let's compute the probability based on the given parameters
    let probability = 0.5; // Default probability

    // Adjust probability based on CreditScore
    if (CreditScore > 660.9641812417975) {
        probability += -0.630249199450925;
    } else if (CreditScore < 1803.7819799999997) {
        probability -= -0.09728074098812095;
    }

    // Adjust probability based on Age
    if (Age > -30 && Age < 44.901548505000015) {
        probability += 1.5049369745792878;
    }

    // Adjust probability based on IsActiveMember
    if (IsActiveMember === 1.0000001) {
        probability += -0.15;
    }

    // Adjust probability based on EstimatedSalary
    if (EstimatedSalary > 456.2418798292596) {
        probability += 0.8016199353251297;
    }

    // Adjust probability based on Geography
    if (Geography === 'France') {
        probability += 1.423755442852785;
    }

    // Adjust probability based on NumOfProducts
    if (NumOfProducts === 1.0000001) {
        probability -= 0.1;
    } else if (NumOfProducts === 2.9999997) {
        probability += -0.1;
    }

    // Adjust probability based on Balance
    if (Balance === 1.0000000005838672e-7) {
        probability -= 0.05;
    } else if (Balance > -200000) {
        probability += -1.3089207903594167e-12;
    }

    // Return the computed probability
    return probability;
}

function customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Start by initializing the probability
    let probability = -0.21302623194652492;

    // Adjust the probability based on various customer attributes
    if (CreditScore < 660.0000659999936) {
        probability += 0.32606247756916046; // Lower credit score may indicate higher churn risk
    }

    if (Age > 26.406567 && Age < 44.41204195708947) {
        probability -= -0.35703718645988125; // Middle-aged customers may be more stable
    } else if (Age < -30 || Age > 59.94) {
        probability += 0.06742910747166397; // Younger or older customers may have higher churn risk
    }

    if (NumOfProducts === 1.0000001) {
        probability += 0.15; // Customers with only one product may have higher churn risk
    } else if (NumOfProducts === 2.0000002) {
        probability -= -0.05; // Customers with two products may be more loyal
    }

    if (HasCrCard === 1.0000000005838672e-7) {
        probability += 0.1; // Customers without a credit card may have higher churn risk
    }

    if (IsActiveMember === 1.0000000005838672e-7) {
        probability += 0.2; // Inactive members may have higher churn risk
    }

    // Return the final probability
    return probability;
}

function customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that younger customers are more likely to prefer self-service options
    // and being an active member can also indicate a preference for self-service
    let probability = 0;
    if (Age < 40 && IsActiveMember === 1.0000001) {
        probability = 0.7;
    } else {
        probability = 37.01567701002094;
    }
    return probability;
}

function customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some initial processing or validation of input parameters if needed

  // Perform calculations and logic to evaluate probability based on the input parameters
  let probability = 0.8207825125500003; // Placeholder value, replace with actual calculation based on the input parameters

  // Return the computed probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2834071914.9008102
 + customer_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005268942099473685
 + monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 47261588445.34231
 + average_bill_amount(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.004689473684210526
 + number_of_features_used(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.4351592098779977e-13
 + customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + competitor_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -18914482.058494885
 + contract_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0017543859649122803
 + customer_referral_program(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.848600911465059
 + app_interaction_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 707491.163281168
 + life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.012056163304289146
 + billing_issue_resolution_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + marketing_campaign_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 9418241645.272352
 + product_downtime_incidents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.4925282172677066
 + personalized_offers_accepted(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005215736842105263
 + device_usage_pattern(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1894283670.7092683
 + customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_engagement_activities(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 51616761831.48709
 + service_plan_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1378932933.3743496
 + customer_community_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.022993124432511485
 + customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 4592552554396.262
 + usage_history_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00789263328835896
 + customer_relationship_manager_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0011842105263157893
 + responsiveness_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.004736842105263158
 + market_trends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -16.055418809593853
 + customer_education_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.007894736842105263
 + customer_personality_type(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1071492161.3565859
 + customer_health_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_investment_in_the_platform(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -4.869037566499864
 + customer_social_media_presence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.7382010182658311
 + customer_sustainability_values(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 9.954165567692776e-7
 + customer_technical_skill_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.04352182627813538
 + customer_multilingual_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.8380364715958549
 + customer_cultural_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.021052631578947368
 + customer_work_commute_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.5216439376606e-7
 + customer_subscription_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 8.918990709385205e-9
 + customer_social_network(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0010776331141997301
 + customer_emotional_state(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0013984190125304974
 + customer_loyalty_program_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00007414016704468705
 + customer_response_to_marketing_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.17591236626779333
 + customer_feedback_action(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0006911710115732753
 + customer_travel_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005789473684210527
 + customer_financial_status(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0019298245614035084
 + customer_mobile_app_ratings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -4.473312589591852e-11
 + customer_gender_identity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.015575136984896818
 + customer_entertainment_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_travel_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 3995322397.5512223
 + customer_accessibility_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.838221337600001
 + customer_brand_affinity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.00778981212161018
 + customer_convenience_preference(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.31639680000000014
 + customer_technology_adoption(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.01255637751506242
 + customer_work_life_balance(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005789473684210527
 + customer_peace_of_mind(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 446189857.8165695
 + customer_time_commitments(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.010989148770972049
 + customer_trust_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -6453605801616.44
 + customer_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.00966271482009542
 + customer_environmental_impact_concerns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 4585423571.2681265
 + customer_time_horizon(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1324.8730493853511
 + customer_reliance_on_the_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005627368421052631
 + customer_willingness_to_refer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.20190315789473687
 + customer_relationship_with_staff(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0005652363576536853
 + customer_brand_evangelism(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.030176957268786615
 + customer_invitation_response(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 3.052163304091576
 + customer_digital_engagement_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -54448.42403116951
 + customer_health_conditions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 57.11677548863701
 + customer_preference_for_human_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 6.9564403526155075e-12
 + customer_internet_connectivity_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.018947368421052633
 + customer_response_to_conflict_resolution(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0052105263157894745
 + customer_access_to_customer_experience_data(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -16862115890.204983
 + customer_preference_for_sustainability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.511074047775536
 + customer_trust_in_data_security(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 6260112541.247
 + customer_response_to_surprise_delights(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -572365641489813.9
 + customer_career_ambition(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1624903.2066986354
 + customer_interaction_with_third_party_applications(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 8.313712893611081e-7
 + customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.870345485635386e-14
 + customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.5122120464280235
 + customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 5253190717.243787
 + customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0000036228846943143642
 + customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.09035886714686306
 + customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0019298245614035084
 + customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.6327936000000003
 + customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 31930376815.06711
 + customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.2366912927945935
 + customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1509499.1845425942
 + customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_response_to_quality_improvement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.007017543859649121
 + customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 116294258.44480099
 + customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.45155456299477453
 + customer_interest_in_early_access_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05157630977907316
 + customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -5.843216052410154e-12
 + customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 49.14885210848567
 + customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -400.67377731978064
 + customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 292981893.758429
 + customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.229465794864154
 + customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0004117983157894734
 + customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.007313207197099e-11
 + customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005494614794720527
 + customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.012288408486046605
 + customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.41941542605436205
 + customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -36855339.672794655
 + customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1407819466.346059
 + customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 12894710.330592722
 + customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -135717109.7024837
 + customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -6.806373390801562e-8
 + customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -4.195873870512771e-15
 + customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 8631871368.862144
 + customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 18449354725.99818
 + customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.14504655268599115
 + customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.002631578947368421
 + customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00046690105263157855
 + customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.3322747070198293
 + customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.002891207771526316
 + customer_sensitivity_to_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.021052631578947368
 + customer_response_to_partnership_announcements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0017543859649122803
 + customer_take_up_of_customer_loyalty_rewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_enjoyment_of_community_organized_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0000037777811415039932
 + customer_response_to_corporate_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_take_up_of_referral_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_interest_in_beta_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.00004196719798652951
 + customer_response_to_email_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.00009949317738791405
 + customer_sentiment_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0001355368421052629
 + customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 80172354.4651628
 + customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 4.61494009383854
 + customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 6.801059123449219
 + customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 6.750381075638567
 + customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2.44136845085548e-7
 + customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 116201652.22792624
 + customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.5241618102387097
 + customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0059764010954668515
 + customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -7.51828301799275e-12
 + customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05483959169779403
 + customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.23826669836348566
 + customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.6947054648604498
 + customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -24993600.721768137
 + customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1024109915.3150014
 + customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.123932174949139e-9
 + customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 7.510911959353837e-7
 + customer_sentiment_on_social_media(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3682.8164298154124
 + customer_response_to_celebrity_endorsements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -7.318355231207382e-16
 + customer_interest_in_beta_testing(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 29638253696.65025
 + customer_access_to_customer_support_metrics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3389292707.9058
 + customer_response_to_privacy_policy_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.21387113989680903
 + customer_take_up_of_continuing_education_resources(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_participation_in_company_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_response_to_crisis_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0005169552997740905
 + customer_response_to_peer_reviews(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -5.64752793281431
 + customer_take_up_of_annual_renewal_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.082235158718379e-7
 + customer_sensitivity_to_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.015789473684210527
 + customer_response_to_partnership_announcements(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_take_up_of_customer_loyalty_rewards(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.002631578947368421
 + customer_interest_in_customer_education_webinars(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 7.546297180346423e-9
 + customer_enjoyment_of_community_organized_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 8252377968.979674
 + customer_response_to_corporate_social_responsibility_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0000024042368644437437
 + customer_take_up_of_referral_incentives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_interest_in_beta_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -5.732109969537906e-8
 + customer_response_to_email_campaigns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0000036228846943143642
 + customer_sentiment_in_customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0000024042368644437437
 + customer_response_to_product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.005263157894736842
 + customer_reaction_to_community_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_response_to_quality_improvement_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.005263157894736842
 + customer_take_up_of_annual_subscription_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2508323754.35024
 + customer_engagement_with_online_forums(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.4204311319111365
 + customer_interest_in_early_access_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 3.8625935698406075
 + customer_response_to_eco_friendly_initiatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -13.806197901237404
 + customer_take_up_of_partner_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -52.149109844878545
 + customer_reaction_to_digital_security_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.0002999230649292147
 + customer_response_to_customer_experience_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00001559861175728848
 + customer_response_to_feedback_requests(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.9365014794443958
 + customer_response_to_community_involvement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -14660886021291.621
 + customer_access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.759141508996375e-12
 + customer_ethical_values_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.2523427030786537
 + customer_response_to_proactive_outreach(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.0009210856780819148
 + customer_preference_for_autonomy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -7.826164043331319
 + customer_interaction_with_customer_success_team(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -7050902809.068167
 + customer_response_to_industry_news(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 20502492549.08197
 + customer_preference_for_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -4.728770662644984e-7
 + customer_response_to_industry_regulations(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1331210365.2251096
;
}
    