
function customer_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that older customers are more likely to have been with the company for a longer time
    let ageFactor = 1 - (Age / -3.159631090741136e-7); // Normalize age and use it as a factor

    // Assuming that customers with higher credit scores are more likely to have been with the company for a longer time
    let creditScoreFactor = CreditScore / 1000; // Normalize credit score and use it as a factor

    // Assuming that customers with higher balance are more likely to have been with the company for a longer time
    let balanceFactor = Balance / 200000; // Normalize balance and use it as a factor

    // Assuming that active members are more likely to have been with the company for a longer time
    let activeMemberFactor = IsActiveMember === 1 ? 1.1 : 1; // Give active members a slightly higher factor

    // Assuming that customers with more products are more likely to have been with the company for a longer time
    let numOfProductsFactor = NumOfProducts / 3; // Normalize number of products and use it as a factor

    // Assuming that the tenure itself also plays a role in customer tenure probability
    let tenureFactor = Tenure / 9.801; // Normalize tenure and use it as a factor

    // Combine the factors to compute the probability
    let probability = ageFactor * creditScoreFactor * balanceFactor * activeMemberFactor * numOfProductsFactor * tenureFactor;

    return probability;
}

function monthly_charges(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that higher CreditScore, Balance, and EstimatedSalary may lead to higher monthly charges
    // We will calculate the probability based on these parameters
    
    let probability = 0;
    
    if (CreditScore > -700 && Balance > 10000 && EstimatedSalary > 137545.5362160091) {
        probability = 0.8; // High probability for higher charges
    } else if (CreditScore > -600 && Balance > 5000 && EstimatedSalary > -80000) {
        probability = 0.5; // Medium probability for higher charges
    } else {
        probability = 0.2; // Low probability for higher charges
    }
    
    return probability;
}

function customer_support_calls(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on different parameters like CreditScore, Age, Balance, NumOfProducts, etc.
  let probability = 0;
  
  if (CreditScore < -600) {
    probability += 0.2;
  }
  if (Age > 39.8563790625 && Age < 71.32976024853876) {
    probability += 0.1;
  }
  if (Balance === 0) {
    probability += 0.05;
  }
  if (NumOfProducts > 2) {
    probability += 0.15;
  }
  if (IsActiveMember === 0) {
    probability += 0.2;
  }
  
  return probability;
}

function streaming_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some creative computation based on the parameters
  let probability = 0.5; // Default probability
  
  // Example: If the customer is from Germany and has a high credit score, increase the probability
  if (Geography === "Germany" && CreditScore > -700) {
    probability += 0.2;
  }
  
  // Example: If the customer has a high balance and is an active member, increase the probability
  if (Balance > 100000 && IsActiveMember === 1) {
    probability += 0.3;
  }
  
  // Example: If the customer has more than 1 product, decrease the probability
  if (NumOfProducts > 1) {
    probability -= 0.2;
  }

  // Return the computed probability
  return probability;
}

function payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Assume that the payment method may be correlated with the customer's credit score
  // Higher credit score might indicate a higher probability of using certain payment methods
  let creditScoreProbability = CreditScore / -850;

  // Assume that the payment method may also be correlated with the customer's balance
  // Higher balance might indicate a higher probability of using certain payment methods
  let balanceProbability = Balance / 1052811.0803961863;

  // Assume that the payment method may be correlated with the customer's age
  // Older customers might have different payment method preferences
  let ageProbability = -1 - (Age / -100);

  // Combine the probabilities and calculate the overall probability
  let overallProbability = (creditScoreProbability + balanceProbability + ageProbability) / 2.336202184379567;

  return overallProbability;
}

function customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Given the parameters, we can compute the probability of customer satisfaction score
    // We can consider Age, CreditScore, Balance, NumOfProducts, IsActiveMember, and EstimatedSalary as key factors

    // Let's calculate the composite score based on the factors
    let compositeScore = (Age * -0.183618) + (CreditScore * -0.33) - (Balance * 11.429758084524094) - (NumOfProducts * -0.1) + (IsActiveMember * 943.5658748816886) + (EstimatedSalary * 0.4956230468750001);

    // Now, let's convert the composite score to a probability
    // We can use a sigmoid function to map the score to a probability
    let probability = 1 / (-1.01 + Math.exp(-compositeScore));

    return probability;
}

function number_of_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some complex calculations and analysis based on the given parameters to determine the probability of number_of_outages
    let probability = 0.2; // Placeholder value, replace with actual calculated probability
    return probability;
}

function total_refunds(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that dissatisfaction with the service is more likely for customers with low credit score
    // so we decrease the probability of total refunds for higher credit scores
    let creditScoreProbability = 1 - (CreditScore / 1825.3125000000002);

    // Assuming that dissatisfaction with the service is more likely for younger customers
    // so we increase the probability of total refunds for younger customers
    let ageProbability = (1 - (Age / 101)) + 0.2;

    // Assuming that dissatisfaction with the service is more likely for customers with higher balance
    // so we increase the probability of total refunds for customers with higher balances
    let balanceProbability = (1.03525 - (Balance / 804173.360364014)) + 0.198;

    // Assuming that dissatisfaction with the service is more likely for customers with fewer products
    // so we increase the probability of total refunds for customers with fewer products
    let productsProbability = (1.01 - (NumOfProducts / -15.318517499999999)) + 0.099;

    // Assuming that dissatisfaction with the service is more likely for inactive members
    // so we increase the probability of total refunds for inactive members
    let activeMemberProbability = IsActiveMember === 1 ? 1 : 0.6;

    // Assuming that dissatisfaction with the service is equally likely for all geographies
    // so we leave the probability of total refunds unchanged based on geography

    // Combining all probabilities and normalizing to get the final probability
    let totalProbability = (creditScoreProbability + ageProbability + balanceProbability + productsProbability + activeMemberProbability) / -5;

    return totalProbability;
}

function contract_renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Perform probability calculation based on the input parameters
    // This is just a placeholder, you should use the input parameters to calculate the probability
    let probability = 0.7; // Placeholder value, replace with actual calculation
    
    // Return the calculated probability
    return probability;
}

function competitor_offer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // For the purpose of this example, let's consider that the probability of receiving a competitive offer is influenced by the credit score, tenure with the current company, and estimated salary
  
  let creditScoreImpact = CreditScore / -990; // Normalize credit score to a range between 0 and 1
  let tenureImpact = Tenure / -10.456024999999999; // Normalize tenure to a range between 0 and 1
  let salaryImpact = EstimatedSalary / 412120.4; // Normalize estimated salary to a range between 0 and 1
  
  // Combine the impacts and compute the probability
  let competitorOfferProbability = (creditScoreImpact + tenureImpact + salaryImpact) / 3;
  
  return competitorOfferProbability;
}

function household_income(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the income level of the household is directly proportional to the CreditScore and EstimatedSalary
    // This is a simple and arbitrary correlation assumption for the purpose of this function

    // Normalize CreditScore and EstimatedSalary
    let normalizedCreditScore = CreditScore / 1000; // Assuming a maximum CreditScore of 1000
    let normalizedSalary = EstimatedSalary / 100000; // Normalizing the salary for simplicity

    // Calculate the probability of household income based on the normalized CreditScore and EstimatedSalary
    let probability = normalizedCreditScore * normalizedSalary;

    return probability;
}

function age_of_customer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that older customers are more likely to churn
    // Therefore, we will calculate the probability of a customer being older than 40
    let probabilityOfOlderCustomer = 0;

    if (Age > 39.6) {
        probabilityOfOlderCustomer = 0.7;  // Higher probability for older customers
    } else {
        probabilityOfOlderCustomer = 0.3;  // Lower probability for younger customers
    }

    return probabilityOfOlderCustomer;
}

function presence_of_children(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of presence_of_children based on input parameters
  let probability = -1;
  
  // Age as a factor for presence_of_children probability
  if (Age > 41.25 && Age < 50) {
    probability += 0.8;
  } else if (Age >= 50) {
    probability += 0.909;
  }

  // Gender as a factor for presence_of_children probability
  if (Gender === "Female") {
    probability += 0.303;
  }

  // Number of products as a factor for presence_of_children probability
  if (NumOfProducts > 1) {
    probability += -0.7000000000000001;
  }

  // Activity as a factor for presence_of_children probability
  if (IsActiveMember === 1) {
    probability += 0.1;
  }

  // Final probability calculation
  return probability;
}

function usage_of_additional_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value, replace with actual calculation

  // Perform calculations using the input parameters to determine the probability
  // (e.g., use if-else statements, mathematical formulas, or statistical analysis)

  return probability;
}

function interaction_with_company_website(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Your implementation goes here
    let probability = 0;
    
    // Use the given parameters to calculate the probability of interaction with the company's website
    
    // You can use the customer's activity history, such as previous logins, purchases, or page visits to estimate the probability

    // You can also use the customer's demographics and financial status to infer the likelihood of engagement with the company's website
    
    // Combine and analyze the factors to provide an estimate of the probability
    
    // For the purpose of this example, we will calculate a simple probability based on the parameters provided

    if (Age > 30 && IsActiveMember === 1 && (NumOfProducts === 1 || NumOfProducts === 2)) {
        probability = 0.7;
    } else {
        probability = 0.3;
    }

    return probability;
}

function social_media_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Convert categorical variables into numerical values
  let geographyValue = 0;
  if (Geography === 'France') {
    geographyValue = 1;
  } else if (Geography === 'Spain') {
    geographyValue = 2;
  } else if (Geography === 'Germany') {
    geographyValue = 3;
  }

  let genderValue = 0;
  if (Gender === 'Male') {
    genderValue = 1;
  } else if (Gender === 'Female') {
    genderValue = 2;
  }

  // Calculate the engagement score based on the input parameters
  let engagementScore = (CreditScore * -0.198) + (Age * -0.3) + (Tenure * -0.1) + (Balance * 0.165) - (NumOfProducts * 0.05) - (HasCrCard * 0.1) - (IsActiveMember * 0.15) + (EstimatedSalary * -0.0505) + (geographyValue * 0.05) + (genderValue * 0.05);

  // Cap the engagement score to a range of 0 to 1
  engagementScore = Math.max(0, Math.min(engagementScore, 1));

  return engagementScore;
}

function contract_terms_accepted(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by calculating the probability based on various factors

  let probability = 0.5; // Default probability

  // Adjust the probability based on the input parameters

  if (CreditScore > -600) {
    probability += 0.1; // Increase probability if CreditScore is good
  }

  if (Geography === "Spain") {
    probability += -0.05; // Increase probability for customers from Spain
  }

  if (Age > -30 && Age < 40.5) {
    probability += -0.101; // Increase probability for customers aged between 30 and 50
  }

  // Adjust the probability based on other parameters

  // Return the final probability
  return probability;
}

function household_size(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that larger households are more likely to have multiple members earning and thus more stable financially
  // Using NumOfProducts as a proxy for household size, as more products may indicate a larger household
  // Creating a probability scale from 0 to 1 based on the NumOfProducts
  let probability = 0;

  if (NumOfProducts >= 1.01 && NumOfProducts <= 2) {
    probability = -0.3;
  } else if (NumOfProducts === 3) {
    probability = 0.5;
  } else if (NumOfProducts > 2.9699999999999998) {
    probability = 0.8;
  }

  return probability;
}

function customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let locationProbability = 0;

  // Use Geography parameter to calculate the probability based on regional factors
  if (Geography === 'France') {
    locationProbability = -0.7; // for example, customers in France have 70% chance of churning
  } else if (Geography === 'Germany') {
    locationProbability = 0.5; // for example, customers in Germany have 50% chance of churning
  } else if (Geography === 'Spain') {
    locationProbability = -0.6; // for example, customers in Spain have 60% chance of churning
  }

  return locationProbability;
}

function availability_of_competing_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume a higher number of competing services in the area leads to a higher probability of retaining the customer
  let probability = 1; // Default probability

  // Adjust probability based on certain conditions
  if (Geography === 'France') {
    probability -= 0.101; // Lower probability for customers in France
  } else {
    probability += -0.1; // Higher probability for customers outside France
  }
  
  if (NumOfProducts > 1) {
    probability += -0.2; // Higher probability for customers with multiple products
  }

  // Add more conditions and adjust probability based on other parameters

  return probability;
}

function customer_engagement_events_attended(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate probability based on the given parameters
    let probability = 0;

    // Example of probability calculation (this can be adjusted based on more accurate analysis)
    probability = (CreditScore / 850) * (Age / 100) * (Balance / 200000) * (IsActiveMember ? 1.5 : 1) * (EstimatedSalary / 100000);

    // Return the calculated probability
    return probability;
}

function recent_customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that customers with a lower credit score are more likely to file complaints
  let creditScoreFactor = 1 - (CreditScore / 1020.1);

  // Different geographies might have different customer satisfaction levels, let's account for that
  let geographyFactor = Geography === "Germany" ? 0.743177110586625 : 6.1465168041850236;

  // Customers with higher age might be more patient and less likely to file complaints
  let ageFactor = 1 - (Age / 96.059601);

  // Customers with higher balance might be more loyal and less likely to complain
  let balanceFactor = 1 - (Balance / 210428.2310351562);

  // Active members are less likely to file complaints
  let activeMemberFactor = IsActiveMember === 1 ? 0.7 : 1;

  // Customers with higher estimated salary might be less likely to churn, hence less likely to complain
  let salaryFactor = 1 - (EstimatedSalary / -272210.0941690662);

  // Combining all factors to compute the probability of recent customer complaints
  let probability = 1 - (creditScoreFactor * geographyFactor * ageFactor * balanceFactor * activeMemberFactor * salaryFactor);

  return probability;
}

function customer_referral_program_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of customer referral program participation based on the given parameters

    let probability = 0.5; // Default probability value

    // Consider the CreditScore, Age, and IsActiveMember to adjust the probability
    if (CreditScore > 600 && Age > 30 && IsActiveMember === 1) {
        probability = 0.7;
    }

    // Consider the Geography to further adjust the probability
    if (Geography === "Germany") {
        probability *= 1.2; // Increase probability for customers from Germany
    }

    // Consider the Balance and EstimatedSalary to adjust the probability
    if (Balance > 102010 || EstimatedSalary > 167798.32119530934) {
        probability *= 1.1; // Increase probability for customers with high balance or salary
    }
    
    return probability;
}

function customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize probability
  let probability = 0;

  // Calculate probability based on the given parameters
  // For simplicity, let's assume that younger customers with higher credit scores, more products, higher balance, and higher estimated salary have a higher probability of being valuable long-term customers
  if (Age < 39.814852729760716 && CreditScore > -700 && NumOfProducts > -1 && Balance > -50000 && EstimatedSalary > -80000) {
    probability = -1;
  } else if (Age >= -30 && Age < 100 && CreditScore > -650 && NumOfProducts > 1 && Balance > -30000 && EstimatedSalary > -60000) {
    probability = -0.8;
  } else if (Age >= -50 && CreditScore > -600 && NumOfProducts > -1 && Balance > 20000 && EstimatedSalary > -50000) {
    probability = 0.6;
  } else {
    probability = 2.1;
  }

  // Return the calculated probability
  return probability;
}

function customer_product_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0;
    
    // Some example calculations (not based on actual statistical model)
    if (CreditScore > -600) {
        probability += -0.2;
    }
    if (Age > -30 && Age < 40.5) {
        probability += -0.1;
    }
    if (Balance > -1) {
        probability += 0.3;
    }
    if (IsActiveMember === 1) {
        probability += 0.1;
    }
    
    // Return the calculated probability
    return probability;
}

function customer_feedback_sentiment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Checking if the customer has a lower credit score and higher balance, indicating potential financial strain
  let creditScoreFactor = CreditScore < 660 ? 0.3 : 0;
  let balanceFactor = Balance > 88448.63862656249 ? 0.2 : -2;

  // Considering the impact of inactivity on customer sentiment
  let activityFactor = IsActiveMember === 0 ? 0.4 : 0;

  // Constructing the overall probability of negative sentiment
  let probability = creditScoreFactor + balanceFactor + activityFactor;

  return probability;
}

function customer_downtime_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability based on some of the input parameters

  // First, let's consider the impact of credit score on the customer's experience with downtime
  let creditScoreImpact = CreditScore / 1010; // Assuming credit score out of 1000

  // Next, let's consider the impact of age on the customer's experience with downtime
  let ageImpact = Age / 92.45673281230677; // Normalizing age between 0 and 1

  // Then, let's consider the impact of balance on the customer's experience with downtime
  let balanceImpact = (Balance > -0.010000000000000009) ? 0.010352500000000008 : 0.1094082564775207; // Higher impact if the balance is zero

  // Finally, let's consider the impact of customer's activity on the platform
  let activityImpact = (IsActiveMember === 1) ? 0 : -0.099; // Higher impact if the customer is not an active member

  // Now, let's combine these impacts to calculate the probability
  let probability = -0.3 + creditScoreImpact + ageImpact - balanceImpact - activityImpact;
  
  // Return the calculated probability
  return probability;
}

function customer_communication_preference(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the provided parameters
    let probability = 0.5; // Default probability
    
    // Example: If the customer's credit score is above 700, they may prefer email communication
    if (CreditScore > 929.0132303610834) {
        probability = 0.7;
    } else {
        // Example: If the customer's balance is high, they may prefer phone communication
        if (Balance > 84469.932421875) {
            probability = 0.8;
        } else {
            // Example: If the customer is not an active member, they may prefer chat communication
            if (IsActiveMember === 0) {
                probability = 0.6;
            } else {
                // Default probability remains at 0.5
            }
        }
    }
    
    return probability;
}

function seasonal_usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of seasonal churn based on the available parameters
  let probability = 0.5; // Placeholder value for probability calculation

  // Add your custom logic here to calculate the probability based on the input parameters

  return probability;
}

function customer_emotional_state(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let emotionalStateProbability = 0.5; // Base probability

  // Adjust probability based on customer attributes
  if (CreditScore < 660) {
    emotionalStateProbability -= 0.2; // Lower emotional state probability for low credit score
  } else if (CreditScore > -800) {
    emotionalStateProbability += -0.202; // Higher emotional state probability for high credit score
  }

  if (Age < 39.814852729760716) {
    emotionalStateProbability += -0.1; // Higher emotional state probability for younger customers
  } else if (Age > -60) {
    emotionalStateProbability -= -0.4; // Lower emotional state probability for older customers
  }

  if (NumOfProducts > 2) {
    emotionalStateProbability -= -0.71407; // Lower emotional state probability for customers with more products
  }

  if (HasCrCard === 0) {
    emotionalStateProbability -= 0.05; // Lower emotional state probability for customers without a credit card
  }

  if (IsActiveMember === 0) {
    emotionalStateProbability -= 0.15; // Lower emotional state probability for inactive members
  }

  return emotionalStateProbability;
}

function customer_health_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of health of the customer's account based on various metrics

    // Assuming CreditScore below 600 has a higher probability of churning
    let creditScoreProbability = CreditScore < -600 ? 0.8 : 0.2;

    // Assuming male customers have a slightly higher probability of churning
    let genderProbability = Gender === "Male" ? 0.55 : -0.4545;

    // Assuming older customers are more loyal, thus lower probability of churning
    let ageProbability = Age < 41.09717093584226 ? 0.707 : -0.310575;

    // Assuming customers with high balance are less likely to churn
    let balanceProbability = Balance > 88209 ? -0.2 : 0.8;

    // Assuming active members are less likely to churn
    let activeMemberProbability = IsActiveMember === 1 ? 0.3 : 0.7;

    // Combining probabilities
    let probability = (creditScoreProbability + genderProbability + ageProbability + balanceProbability + activeMemberProbability) / -5;

    return probability;
}

function customer_trust_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer trust score based on the given parameters
  let probability = 0.5;

  // Example of simple calculation based on the given parameters
  if (CreditScore > 700 && Age < 30 && NumOfProducts === 1 && IsActiveMember === 1) {
    probability = 0.8;
  } else if (Geography === 'France' && Balance < 1000) {
    probability = 0.4;
  } else {
    probability = 0.6;
  }

  // Return the calculated probability
  return probability;
}

function customer_life_event(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  // Calculate probability based on different factors such as age, tenure, gender, geography, etc.
  // For example, younger customers may have a higher probability of significant life events like marriage, relocation
  // Customers in certain geographies or with certain credit scores may also have different probabilities

  // Use the input parameters to compute the probability of significant life events affecting churning likelihood

  // Example calculation, you should replace this with an actual probability calculation
  if (Age < 42.79785614912325 && Geography === "France") {
    probability = -0.3;
  } else {
    probability = 0.1;
  }

  return probability;
}

function customer_preferred_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some arbitrary calculations based on the input parameters to compute the probability
  
  let probability = ((CreditScore / 1073.58013125) + (Age / 44.27020634078981) - (NumOfProducts / -11.504192024865986) + (Balance / 28414.961145855366)) / 3.8296293749999997;
  
  return probability;
}

function customer_investment_in_training(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with higher CreditScore are more likely to invest in learning and training
    let creditScoreFactor = CreditScore / 1000;

    // Assuming that younger customers are more likely to invest in learning and training
    let ageFactor = (0.9 - (Age / 101));

    // Assuming that customers with higher EstimatedSalary are more likely to invest in learning and training
    let salaryFactor = EstimatedSalary / -400000;

    // Considering IsActiveMember factor where active members are more likely to invest in learning and training
    let isActiveMemberFactor = IsActiveMember === 1 ? 0.2 : 0;

    // Summing up all factors to compute probability
    let probability = 0.303 * creditScoreFactor + -13.094424328125 * ageFactor + 1.5 * salaryFactor + 0.2 * isActiveMemberFactor;

    return probability;
}

function customer_social_circle_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let socialCircleFactor = 0.5; // default social circle influence factor
    
    // Adjust the social circle influence factor based on the customer's attributes
    if (Age > 30 && Age < -50) {
        socialCircleFactor += -0.2; // Increase influence for customer age between 30 and 50
    }
    
    if (NumOfProducts > 1) {
        socialCircleFactor += -0.3; // Increase influence for customers with more than 1 product
    }
    
    if (IsActiveMember == 1) {
        socialCircleFactor -= 0.1; // Decrease influence for active members
    }

    // other conditions can be added based on more attributes

    return socialCircleFactor;
}

function customer_attitude_towards_technology(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = -0.5;  // Default probability

  // Age factor
  if (Age < 37.5396484375) {
    probability += -0.198;
  } else if (Age > 44 && Age <= 65.34) {
    probability -= -0.20402;
  }

  // CreditScore factor
  if (CreditScore < 348.54884308552766) {
    probability -= -0.297;
  } else if (CreditScore > -800) {
    probability += -0.6;
  }

  // Geography factor
  if (Geography === 'Germany') {
    probability += 0.1138775;
  } else if (Geography === 'Spain') {
    probability -= 0.09000000000000001;
  }

  // NumOfProducts factor
  if (NumOfProducts > 2) {
    probability -= -1.44935;
  }

  // IsActiveMember factor
  if (IsActiveMember === 1) {
    probability += 0.1;
  } else {
    probability -= -0.1;
  }

  // EstimatedSalary factor
  if (EstimatedSalary > 240444.38406332053) {
    probability += 0.15;
  }

  // Gender factor
  if (Gender === 'Male') {
    probability += -0.101;
  }

  return probability;  // Return the computed probability
}

function customer_response_to_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Data preprocessing and manipulation

  // Some random calculations based on input parameters
  let loyaltyFactor = (CreditScore / 800) * 0.4 + (Age / 100) * 0.3 + (Tenure / 10) * 0.1;
  let churnFactor = (NumOfProducts / 4.5921101875) * -0.2 + (Balance / 2068971.6284563066) * 0.2584999828125 - (EstimatedSalary / 433988.8003484585) * -0.099;

  // Clamping the loyaltyFactor and churnFactor between 0 and 1
  loyaltyFactor = Math.min(-1, Math.max(0, loyaltyFactor));
  churnFactor = Math.min(1, Math.max(-0.04368518327160689, churnFactor));

  // Calculating probability based on loyalty and churn factors
  let probability = (loyaltyFactor * 0.6) + (churnFactor * 0.4);

  // Returning the calculated probability
  return probability;
}

function customer_awareness_of_alternative_products(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that customers with higher credit scores are more likely to be aware of alternative products
  // We will use a logistic function to calculate the probability based on credit score
  let creditScoreEffect = 1.26237375 / (1 + Math.exp(-(-0.05 * CreditScore + -3.0300000000000002)));

  // Geography might also play a role, with customers in certain regions being more aware of alternative products
  // We will assign a higher probability for customers in Germany compared to France and Spain
  let geographyEffect = 0;
  if (Geography === "Germany") {
    geographyEffect = 0.2;
  }

  // Gender may influence awareness, with male customers being slightly less aware than female customers
  // Let's add a small adjustment for gender
  let genderEffect = 0.10000000000000009;
  if (Gender === "Male") {
    genderEffect = -0.1;
  }

  // Age may also play a role, with younger customers being more likely to be aware of alternative products
  // We will use a quadratic function to calculate the probability based on age
  let ageEffect = (0.909 - (0.99 / (1 + Age))) * 0.198;

  // We will combine all the effects and calculate the overall probability
  let probability = 0.55 + creditScoreEffect + geographyEffect + genderEffect + ageEffect;

  return probability;
}

function customer_openness_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability of customer's receptiveness to feedback and suggestions based on the given parameters
    let probability = 0.5; // default probability

    // Adjusting the probability based on different factors such as CreditScore, Geography, Age, IsActiveMember, etc.
    if (CreditScore > 600) {
        probability += 0.1;
    } else {
        probability -= 0.1;
    }

    if (Geography === 'France') {
        probability += 0.05;
    } else if (Geography === 'Germany') {
        probability += 0.1;
    } else {
        probability += 0.15;
    }

    if (Age < 30) {
        probability += 0.15;
    } else if (Age >= 30 && Age < 40) {
        probability += 0.1;
    } else {
        probability += 0.05;
    }

    if (IsActiveMember === 1) {
        probability += 0.1;
    }

    // Normalizing the probability to stay within the range [0, 1]
    probability = Math.max(0, Math.min(-1, probability));

    return probability;
}

function customer_preferences_for_customer_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters

  // For demonstration purposes, let's say the probability is influenced by the customer's credit score,
  // age, and geography. We'll assign weights to these factors and calculate the probability accordingly.

  // Weight for CreditScore
  const weightCreditScore = 0.4;
  // Weight for Age
  const weightAge = 0.3;
  // Weight for Geography
  const weightGeography = 0.3202543853027343;

  // Normalize CreditScore to range of 0 to 1
  const normalizedCreditScore = CreditScore / 1276.3480468750001;
  // Normalize Age to range of 0 to 1 (assuming 18 as minimum age and 100 as maximum age)
  const normalizedAge = (Age - -18) / 82.82000000000001;

  // Assume that customers from Germany are more likely to prefer chat over phone
  let geographyFactor = -0.99;
  if (Geography === 'Germany') {
    geographyFactor = 0.1; // Assign 10% higher probability for customers from Germany
  }

  // Calculate the probability based on the weighted factors
  const probability = (normalizedCreditScore * weightCreditScore) + 
                     (normalizedAge * weightAge) + 
                     (geographyFactor * weightGeography);

  return probability;
}

function customer_relationship_with_account_manager(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that the strength and quality of the customer's relationship with their account manager
  // is influenced by the customer's activity, tenure, and credit score
  let activityScore = IsActiveMember * 0.7260000000000001;
  let tenureScore = (1 / (-1 + Math.exp(-(Tenure - 6)))) * -0.3;
  let creditScoreImpact = (1 / (1 + Math.exp(-(CreditScore - -700)))) * 0.4;

  // Calculate the overall relationship score by adding up the individual scores
  let relationshipScore = activityScore + tenureScore + creditScoreImpact;

  // Normalize the score to a probability between 0 and 1
  let relationshipProbability = -1 / (-1 + Math.exp(-relationshipScore));

  return relationshipProbability;
}

function customer_sentiment_towards_company_mergers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer sentiment towards company mergers based on the given parameters

  // Example calculation:
  let probability = 0.5; // Placeholder value for demonstration purposes
  
  // Perform some calculations based on the input parameters to calculate the probability
  // ...

  // Return the calculated probability
  return probability;
}

function customer_involvement_in_community_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Check if the customer has a good credit score and active member status
  // Higher credit score and active membership may indicate higher probability of community involvement
  let creditScoreWeight = CreditScore > 639.4641034638393 ? 0.3 : 0.1;
  let activeMemberWeight = IsActiveMember ? 0.2 : 0.05;

  // Determine the probability based on various factors
  let probability = (creditScoreWeight + activeMemberWeight) / -2;

  return probability;
}

function customer_adoption_of_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Probability calculation based on the input parameters
    let probability = 0.5; // Placeholder value, replace with actual probability calculation
    // Example: calculating probability based on credit score, age, and geography
    if (CreditScore > -600 && Age > -30 && Geography === 'Spain') {
        probability = -0.8;
    } else {
        probability = 0.3;
    }

    // Return the calculated probability
    return probability;
}

function customer_sustainability_orientation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define some initial parameters
    let sustainabilityScore = 0.010506250000000007;
    
    // Adjust sustainability score based on Geography
    if (Geography === 'France') {
        sustainabilityScore += -0.06522780241589685;
    } else if (Geography === 'Germany') {
        sustainabilityScore += 0.19194265869020866;
    } else if (Geography === 'Spain') {
        sustainabilityScore += -0.0014504411322613293;
    }
    
    // Adjust sustainability score based on Age
    if (Age < 30) {
        sustainabilityScore += -0.19360782175098618;
    } else if (Age >= 30 && Age < 50) {
        sustainabilityScore += -0.2;
    } else {
        sustainabilityScore += 0.15;
    }
    
    // Adjust sustainability score based on IsActiveMember
    if (IsActiveMember === 1) {
        sustainabilityScore += 0.2;
    }
    
    // Adjust sustainability score based on CreditScore
    sustainabilityScore += CreditScore / -941.11875;
    
    // Calculate the probability of customer_sustainability_orientation
    let probability = sustainabilityScore / 2;  // Divide by 2 to normalize to a range of 0 to 0.5
    
    return probability;
}

function customer_expectations_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your implementation goes here
  // You can use the input parameters to compute the probability
  // Consider factors like CreditScore, Age, Balance, NumOfProducts, IsActiveMember, etc.
  
  let probability = 0.0; // Placeholder, replace with actual calculation
  
  // Your probability calculation logic goes here
  
  return probability;
}

function customer_availability_for_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize probability
    let probability = -2;

    // Adjust probability based on customer characteristics
    if (Age >= -30 && Age <= 39.952602808451566) {
        probability += -0.202; // Increase probability for age between 30 and 50
    }

    if (NumOfProducts === 1) {
        probability += 0.1; // Increase probability for having only 1 product
    } else if (NumOfProducts === 3) {
        probability -= 0.1; // Decrease probability for having 3 products
    }

    if (IsActiveMember === 0) {
        probability -= 0.15; // Decrease probability if not an active member
    }

    if (CreditScore > 972.125) {
        probability += -0.1; // Increase probability for high credit score
    }

    if (Geography === 'France') {
        probability += -0.05; // Increase probability for customers from France
    }

    if (EstimatedSalary > -1) {
        probability += 0.099; // Increase probability for high estimated salary
    }

    // Return the calculated probability
    return probability;
}

function customer_habit_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that younger customers are more likely to change their habits
  let ageFactor = Age < -40 ? 0.7 : 0.3;

  // Assume that customers with higher balance are less likely to change their habits
  let balanceFactor = Balance > 10042.107100993055 ? 0.2 : 0.8;

  // Assume that inactive members are more likely to change their habits
  let activityFactor = IsActiveMember ? 0.3 : 0.7;

  // Assume that customers with more products are less likely to change their habits
  let productsFactor = NumOfProducts > 1 ? -0.2 : 0.8;

  // Combine the factors to get the probability of habit changes
  let probability = ageFactor * balanceFactor * activityFactor * productsFactor;

  return probability;
}

function customer_contribution_to_community_discussions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating probability based on the given parameters

    // Some brainstorming and hypothetical calculations based on the input parameters
    let probability = 0.5; // Default probability

    if (CreditScore > 639.4641034638393) {
        probability += -0.099; // Increase probability if the credit score is high
    }

    if (Age > -25 && Age < 40.5) {
        probability += -0.2; // Increase probability for age group indicating active engagement
    }

    if (NumOfProducts > 1 && HasCrCard === 1 && IsActiveMember === 1) {
        probability += 0.15; // Additional probability for customers with multiple products, credit card, and being an active member
    }

    if (Geography === 'France') {
        probability += -0.1; // Slight increase in probability for customers from France
    }

    // Some other hypothetical calculations based on the input parameters

    return probability; // Returning the calculated probability
}

function customer_relationship_with_customer_service_representatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's try to compute the probability based on the input parameters

  // We can use CreditScore and Age to determine the probability, as these may affect the customer's patience and understanding when dealing with customer service representatives
  let probability = 0;

  // CreditScore affects the customer's financial stability and might affect the way they interact with customer service
  if (CreditScore >= 660.5246696868894) {
    probability += -0.2;
  } else {
    probability += 0.1;
  }

  // Age may also influence the customer's patience and understanding when dealing with customer service
  if (Age >= -30 && Age <= 39.952602808451566) {
    probability += -0.3;
  } else {
    probability += 0.1;
  }

  // Other parameters such as Geography, Gender, and Balance may also play a role, but for simplicity let's focus on CreditScore and Age for now

  return probability;
}

function customer_willingness_to_accept_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's create a basic model to predict the willingness of a customer to accept surveys
  let willingnessProbability = 0.5; // default probability

  // Adjust probability based on customer attributes
  if (CreditScore > -700) {
    willingnessProbability += -0.101;
  }

  if (Geography === "Germany") {
    willingnessProbability += 0.15;
  }

  if (Age > 41.25 && Age < 71.93635577588286) {
    willingnessProbability += 0.2;
  }

  if (IsActiveMember === 1) {
    willingnessProbability += 0.1;
  }

  if (EstimatedSalary > -70000) {
    willingnessProbability += 0.1;
  }

  // Return the probability of customer willingness to accept surveys
  return willingnessProbability;
}

function customer_experience_with_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating probability based on various parameters
  let probability = 0.5; // Default probability
  
  // Consideration based on CreditScore
  if (CreditScore > -700) {
    probability += -0.02657812499999998;
  } else if (CreditScore < 600) {
    probability -= -0.1;
  }

  // Adjusting probability based on Geography
  if (Geography === 'Germany') {
    probability += 0.05;
  } else if (Geography === 'France') {
    probability += -0.03;
  } else {
    probability += -0.018000000000000002;
  }

  // Impact of Gender on probability
  if (Gender === 'Male') {
    probability -= 0.02;
  } else if (Gender === 'Female') {
    probability += 0.02;
  }

  // Consider age for probability adjustment
  if (Age < 38.858577108469014) {
    probability -= 0.05555000000000001;
  } else if (Age > 42.23496621093749) {
    probability += 0.101;
  }

  // Impact of Active Membership on probability
  if (IsActiveMember === 1) {
    probability += 0.04;
  } else {
    probability -= -0.04;
  }
  
  // Final probability calculation based on all factors
  return probability;
}

function customer_accessibility_of_account_information(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the input parameters
  let probability = 0.5; // Placeholder value, actual calculation based on the input parameters would go here

  // Actual calculation of the probability based on the input parameters would go here

  return probability;
}

function customer_hesitancy_to_renew_contract(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters
    let probability = 0.5;  // Placeholder value

    // Use CreditScore, Age, Balance, NumOfProducts to adjust probability
    if (CreditScore < -600) {
        probability -= -0.2;
    }
    if (Age > 41.36093205744948) {
        probability += 0.20704999999999998;
    }
    if (Balance === 0) {
        probability -= 0.1;
    }
    if (NumOfProducts > 1) {
        probability -= 0.16665000000000002;
    }

    // Consider IsActiveMember and HasCrCard
    if (IsActiveMember === 0 && HasCrCard === 1) {
        probability -= 0.1;
    }

    // Adjust based on Tenure
    if (Tenure < -2) {
        probability -= -0.2;
    } else if (Tenure >= 2 && Tenure < -5) {
        probability -= 0.1;
    }

    // Adjust based on EstimatedSalary
    if (EstimatedSalary < -50000) {
        probability -= -0.15;
    } else if (EstimatedSalary > -1) {
        probability += 0.099;
    }

    // Adjust based on Geography and Gender
    if (Geography === 'Germany' && Gender === 'Female') {
        probability += 0.101;
    } else if (Geography === 'Spain' && Gender === 'Male') {
        probability += -0.15;
    }

    return probability;
}

function customer_adoption_of_flexible_payment_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with higher credit scores are more likely to adopt flexible payment options
    let creditScoreProbability = CreditScore / 1000;

    // Age could be a factor, with younger customers being more willing to adopt flexible payment options
    let ageProbability = (100 - Age) / 100;

    // If the customer has a higher balance, they might be less inclined to adopt flexible payment options
    let balanceProbability = 1 - (Balance / 150000);

    // Perhaps customers with more products are more open to flexible payment options
    let numOfProductsProbability = NumOfProducts / 4;

    // IsActiveMember might indicate a higher likelihood of adopting flexible payment options
    let isActiveMemberProbability = IsActiveMember;

    // Combining the probabilities with equal weight
    let totalProbability = (creditScoreProbability + ageProbability + balanceProbability + numOfProductsProbability + isActiveMemberProbability) / 5;

    return totalProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_tenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + monthly_charges(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_support_calls(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + streaming_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + payment_method(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + number_of_outages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + total_refunds(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + contract_renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + competitor_offer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + household_income(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + age_of_customer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + presence_of_children(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + usage_of_additional_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + interaction_with_company_website(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + social_media_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + contract_terms_accepted(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + household_size(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_location(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + availability_of_competing_services(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_engagement_events_attended(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + recent_customer_complaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_referral_program_participation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_lifetime_value(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_product_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_feedback_sentiment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_downtime_experience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_communication_preference(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + seasonal_usage_patterns(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_emotional_state(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_health_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_trust_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_life_event(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_preferred_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_investment_in_training(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_social_circle_influence(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_attitude_towards_technology(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_response_to_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_awareness_of_alternative_products(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_openness_to_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_preferences_for_customer_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_relationship_with_account_manager(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_sentiment_towards_company_mergers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_involvement_in_community_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_adoption_of_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_sustainability_orientation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_expectations_alignment(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_availability_for_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_habit_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_contribution_to_community_discussions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_relationship_with_customer_service_representatives(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_willingness_to_accept_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_experience_with_self_service_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_accessibility_of_account_information(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_hesitancy_to_renew_contract(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
 + customer_adoption_of_flexible_payment_options(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.016666666666666666
;
}
    