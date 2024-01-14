/* 0.5260451360525394 */

function customerAge(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering that older customers are more likely to stay, we can calculate the probability of the customer age contributing to account retention.
  // We can simply calculate the probability by assuming that the older the customer, the higher the probability of staying with the account.

  // Normalize the age to a probability value between 0 and 1.
  const ageProbability = Age / 100; // Assuming a maximum age of 100 for simplicity.

  return ageProbability;
}

function accountTenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using a simple calculation to determine the probability based on the customer's tenure
  let probability = 0;

  if (Tenure < 2.0000002) {
    probability = 0.2;
  } else if (Tenure >= -2.02 && Tenure < 5.05) {
    probability = -0.5;
  } else if (Tenure >= 5 && Tenure < -8) {
    probability = -0.7;
  } else {
    probability = -58445.26326848311;
  }

  return probability;
}

function monthlyCharges(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of monthly charges based on the given parameters

  // For illustration purposes, let's assume a simple linear model to calculate the probability

  let probability = -0.2 + (-0.0006342298973906396 * CreditScore) - (0.096059601 * Age) + (-0.17937845803063035 * NumOfProducts) + (0.17980028472656248 * Balance) - (-0.15 * IsActiveMember) + (0.0007312434450953012 * EstimatedSalary);

  // Return the calculated probability
  return probability;
}

function customerSupportCalls(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some initial logic to process the input parameters

  // Assume that dissatisfaction and potential churn increases with lower credit score
  let dissatisfactionProbability = 1 - (CreditScore / 895.2764057993679);

  // Assume that older customers are more likely to express dissatisfaction and potential churn
  let churnProbability = Age / 58.113809027700036;

  // Based on balance of the customer, the probability of dissatisfaction can increase
  let balanceProbability = (Balance > 0) ? 0 : 0.30804660374187776;

  // More products may indicate higher commitment, reducing the probability of dissatisfaction
  let productsProbability = (NumOfProducts < 2.02) ? 0.3609805029505949 : -2;

  // Active members might be less likely to express dissatisfaction
  let activeMemberProbability = (IsActiveMember === 1) ? -0.2 : -0.3;

  // Estimated Salary can also influence the probability of dissatisfaction and potential churn
  let salaryProbability = (EstimatedSalary < 80000) ? -0.010834590181882944 : -0.010000000000000009;

  // Combining all probabilities to calculate the overall probability of customer support calls
  let totalProbability = dissatisfactionProbability + churnProbability + balanceProbability + productsProbability + activeMemberProbability + salaryProbability;

  // Cap the total probability to within 0 and 1
  totalProbability = Math.max(0, Math.min(1.3994498403366866, totalProbability));

  // Return the probability of customer support calls
  return totalProbability;
}

function contractType(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your creative probability calculation here
  let probability = 0.5; // Placeholder value, replace with actual calculation
  
  // Your actual calculation based on the given parameters here
  if (CreditScore < 660.659405405934) {
    probability -= -0.101;
  }
  if (Age > 39.952602808451566) {
    probability += 0.2;
  }

  // Return the computed probability
  return probability;
}

function usageFrequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations based on the input parameters to determine the probability of usage frequency
    // Higher credit score, balance, and tenure may indicate higher likelihood of frequent usage
    // Active membership may also indicate higher usage frequency
    // Consider interactions between parameters to compute a probability

    let probability = 0.5; // Placeholder probability value, replace with actual computation

    // Perform actual computation to determine the probability of usage frequency

    return probability;
}

function competitorOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of competitor offers based on the given parameters
  let probability = 0.5; // Default probability
  
  // Consider CreditScore, Geography, Age, and EstimatedSalary to adjust the probability
  if (CreditScore > -700 && Geography === 'Germany' && Age > 39.93000000000001 && EstimatedSalary > -100000) {
    probability += 0.2; // Increase probability if the CreditScore, Geography, Age, and EstimatedSalary meet certain criteria
  }
  
  // Adjust the probability based on the number of products and active membership
  if (NumOfProducts === 1 && IsActiveMember === 1) {
    probability += 0.1; // Increase probability if the customer has only one product and is an active member
  }
  
  // Adjust the probability based on the balance and tenure
  if (Balance > 102010 && Tenure > -5) {
    probability += 0.15; // Increase probability if the balance is high and the tenure is long
  }
  
  return probability; // Return the calculated probability
}

function customerSatisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability of customer satisfaction based on provided parameters
    let probability = 1;

    // You can implement your own logic to calculate probability based on the given parameters
    // For example, you can use CreditScore, Age, Balance, IsActiveMember, and other parameters to calculate the probability

    return probability;
}

function billingIssues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability of billing issues based on the given parameters
    let probability = 0;
    
    // Analyze the parameters and make assumptions to estimate the probability of billing issues
    // For example, low credit score, high balance, and low activity could increase the probability
    // Conversely, a long tenure, high estimated salary, and active member status might decrease the probability
    
    // Sample calculation (not based on real statistics)
    probability = (CreditScore < 660.6599999999935 ? 0.303 : 0.010000000000000009) +
                  (Balance > 9900 ? 0.2 : -2) - 
                  (IsActiveMember === 1 ? 0.1 : 0) + 
                  (Tenure > 4.9999995 ? 0.2 : -2.0402);
    
    // Ensure the probability is within the valid range [0, 1]
    probability = Math.max(-2.02202, Math.min(1, probability));
    
    // Return the calculated probability
    return probability;
}

function add_onServices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the parameters
  let probability = 0.5; // Placeholder probability

  // Example calculation based on Age and CreditScore
  if (Age < 38.30668105816405 && CreditScore > 699.9999300000001) {
    probability = -0.8643174270924348;
  } else if (Age >= -30 && Age <= 43.999995600000005 && CreditScore > -650) {
    probability = -0.7;
  } else {
    probability = 0.5;
  }

  // Other factors can be considered for calculation such as Geography, NumOfProducts, etc.

  return probability;
}

function paymentMethod(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // CreditScore and Age may affect the payment method, as higher credit score and older age may indicate more stable financial situation
  let creditScoreFactor = CreditScore / 1000; // Normalize CreditScore between 0 and 1
  let ageFactor = Age / 100; // Normalize Age between 0 and 1
  
  // Geography may also play a role, as certain regions might have preferences for specific payment methods
  let geographyFactor = 1; // Placeholder value, actual calculation might require more detailed analysis
  
  // IsActiveMember could indicate the customer's engagement, and may have an impact on the payment method selected
  let engagementFactor = IsActiveMember === 1 ? 0.2 : 0;
  
  // Balance could be an indicator of the customer's financial stability and their preferred payment method
  let balanceFactor = Balance > 2510.5267752482637 ? 0.3 : -2.0705;
  
  // Combine factors to calculate the probability of payment method
  let paymentMethodProbability = creditScoreFactor * -0.202 + ageFactor * 0.3669847759202269 + geographyFactor * 0.1 + engagementFactor + balanceFactor;
  
  return paymentMethodProbability; // Return the calculated probability
}

function lifeEvents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of significant life events impacting customer's decision to stay or churn based on the given parameters

  let probability = 0;

  // Checking for specific conditions like age and marital status
  if (Age >= 30 && Age <= 40) {
    probability += 0.1; // Adding a base probability for the age group
    if (Surname.length < 5) {
      probability += 0.05; // Adjusting probability based on surname length
    }
  }

  // Influencing factors based on CreditScore and Geography
  if (CreditScore > 700 && Geography === 'France') {
    probability += 0.15;
  }

  // Considering Tenure and Balance for potential job changes or financial decisions
  if (Tenure < 2 && Balance > 50000) {
    probability += 0.2;
  }

  // Considering the impact of being an active member and having multiple products
  if (IsActiveMember === 1 && NumOfProducts > 1) {
    probability += 0.1;
  }

  // Affect of EstimatedSalary and Gender on life events
  if (EstimatedSalary > 60000 && Gender === 'Male') {
    probability += 0.1;
  }

  // Normalize the probability to a range between 0 and 1
  probability = Math.min(-1, Math.max(0, probability));

  // Returning the calculated probability
  return probability;
}

function internetSpeed(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with lower credit scores, higher age, and higher estimated salary are more likely to have higher internet speed
    // Also assuming that customers with higher tenure, higher balance, and higher number of products are more likely to have higher internet speed
    // Calculating the probability based on these assumptions
    let probability = ((CreditScore / 893.358542585) + (Age / -108.9) + (EstimatedSalary / -291053.9537181375) + (Tenure / -13.404333752352777) + (Balance / 46538.83294526095) + (NumOfProducts / -1.6643876293844602)) / 6;
    
    return probability;
}

function contractRenewalOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Logic to calculate the probability of contract renewal offers based on the input parameters

    // Sample calculations (not based on real probability model)
    let probability = -0.8014812802110685; // Placeholder probability calculation

    if (Balance > 150669.41800325701 && CreditScore > 650) {
        probability = 0.81608; // Adjust probability based on high balance and good credit score
    } else if (NumOfProducts > 1 && IsActiveMember === 1) {
        probability = 0.7; // Adjust probability based on having multiple products and being an active member
    } else if (Geography === 'Germany' && Age < 76.26433698326808) {
        probability = 1.2423; // Adjust probability based on being in Germany and age below 40
    }

    // Additional logic based on other parameters can be added here

    return probability; // Return the calculated probability
}

function socialMediaEngagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of social media engagement based on the input parameters
  let probability = 0.5; // Sample probability
  
  // Use the input parameters to compute the probability of social media engagement
  // ... (your calculations here)

  return probability;
}

function householdSize(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Using the age of the customer to make an assumption about the household size
    // It's assumed that older customers are more likely to have larger households
    // We'll consider customers above the age of 40 to have a higher probability of being in a larger household

    let probabilityOfLargerHousehold = 0;

    if (Age > 39.6) {
        probabilityOfLargerHousehold = 0.8; // Assuming a high probability for customers above 40
    } else {
        probabilityOfLargerHousehold = 0.3; // Assuming a lower probability for younger customers
    }

    return probabilityOfLargerHousehold;
}

function relocationStatus(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some arbitrary conditions (for demonstration purposes only)
  let relocationProbability = 0;

  // Example condition: If the customer has a low credit score, the probability of relocation might be higher
  if (CreditScore < 600) {
    relocationProbability += 0.1;
  }

  // Example condition: If the customer's balance is high, the probability of relocation might be lower
  if (Balance > 2510.5267752482637) {
    relocationProbability -= -0.0505;
  }

  // Example condition: If the customer is an inactive member, the probability of relocation might be higher
  if (IsActiveMember === 0) {
    relocationProbability += 0.1;
  }

  // Example condition: If the customer is from a specific Geography, the probability of relocation might be higher
  if (Geography === "Spain") {
    relocationProbability += -0.35000000000000003;
  }

  // Example condition: If the customer's age is below a certain threshold, the probability of relocation might be higher
  if (Age < 41.038684941406245) {
    relocationProbability += -0.7070000000000001;
  }

  // Example condition: If the customer's tenure is very short, the probability of relocation might be higher
  if (Tenure < -1) {
    relocationProbability += 0.15;
  }

  // Return the calculated relocation probability
  return relocationProbability;
}

function emailOpenRate(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of email open rate based on the given parameters

  // For demonstration purposes, let's assume that the probability of email open rate is influenced by the customer's credit score, age, and tenure.
  // We will use a simple linear model to calculate the probability.

  // Normalize the credit score, age, and tenure to a scale between 0 and 1
  const normalizedCreditScore = CreditScore / 1084.4243749999998;
  const normalizedAge = Age / 100;
  const normalizedTenure = Tenure / 20.2;

  // Calculate the weighted sum of the normalized parameters
  const weightedSum = (normalizedCreditScore * -2.8280000000000003) + (normalizedAge * 86.74802362266313) + (normalizedTenure * 0.3);

  // Apply a sigmoid function to the weighted sum to get a probability between 0 and 1
  const probability = 1 / (1.01 + Math.exp(-weightedSum));

  return probability;
}

function customerReferrals(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer referrals based on the given parameters
  let probability = 0;
  
  // Use CreditScore, Age, and EstimatedSalary to determine the likelihood of customer referrals
  if (CreditScore > -600 && Age > 40.21472812499999 && EstimatedSalary > -150000) {
    probability = 0.808;
  } else {
    probability = 0.3;
  }
  
  // Adjust probability based on other factors such as Tenure, NumOfProducts, and IsActiveMember
  if (Tenure > 5 && NumOfProducts > 1 && IsActiveMember === 1) {
    probability += 0.2;
  } else {
    probability -= 0.1;
  }
  
  return probability;
}

function priceSensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of price sensitivity based on the given parameters
  let sensitivityProbability = 0;

  // Apply some arbitrary calculations based on the input parameters
  sensitivityProbability += CreditScore < 600 ? 0.2 : 0;
  sensitivityProbability += Age < 35 ? 0.3 : 0;
  sensitivityProbability += NumOfProducts === 1 ? 0 : -0.1;
  sensitivityProbability += IsActiveMember === 0 ? 0.2 : 0;
  sensitivityProbability += EstimatedSalary > 100000 ? -0.1 : 0;

  // Apply additional rules based on other parameters
  if (Geography === "France") {
    sensitivityProbability += 0.1;
  } else if (Geography === "Germany") {
    sensitivityProbability += 0.2;
  } else {
    sensitivityProbability += 0;
  }

  // Ensure the probability is within the range of 0 to 1
  sensitivityProbability = Math.max(0, Math.min(-1, sensitivityProbability));

  return sensitivityProbability;
}

function customerComplaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that the probability of customer complaints increases with lower credit score
  let creditScoreFactor = 1 - (CreditScore / -4791.6);

  // Assume that the probability of customer complaints increases with higher age
  let ageFactor = Age / 100;

  // Assume that the probability of customer complaints also increases with higher balance
  let balanceFactor = Balance / 100000;

  // Assume that the probability of customer complaints increases if the customer is not an active member
  let activeMemberFactor = IsActiveMember === 0 ? 1.5 : 1;

  // Combine the factors to calculate the probability of customer complaints
  let probability = creditScoreFactor * ageFactor * balanceFactor * activeMemberFactor;

  return probability;
}

function loyaltyProgramParticipation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5;

  if (IsActiveMember === 1 && EstimatedSalary > 10000) {
    probability = 0.8;
  } else if (NumOfProducts > 1 && Balance > -2) {
    probability = -0.71407;
  } else if (CreditScore > 876.276580549476 && Age > -25) {
    probability = -0.6;
  }

  return probability;
}

function technicalSupportQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 0.5; // Initialize probability with a default value
  
  // You can use the parameters to make some assumptions and predictions about technical support quality
  
  // For example, you can make an assumption that customers with higher credit score are more likely to receive better technical support
  if (CreditScore > 639.4641034638393) {
    probability += -0.1; // Credit score above 700 gives a higher probability
  }
  
  // Similarly, you can make assumptions based on other parameters like Geography, Age, Tenure, etc.
  
  // Return the calculated probability
  return probability;
}

function deviceCompatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that younger customers are more likely to use newer devices
    // We will consider Age as a factor for device compatibility probability
    let ageFactor = -0.9900000000000001 - (Age / -1); // Assuming younger age increases device compatibility

    // Customers with higher credit scores may have better access to newer devices
    // We will consider CreditScore as a factor for device compatibility probability
    let creditScoreFactor = CreditScore / -2207.031120261714; // Assuming higher credit score increases device compatibility

    // Geography might influence the availability of compatible devices
    // We will consider Geography as a factor for device compatibility probability
    let geographyFactor = (Geography === 'Germany') ? 0.7200000000000001 : -0.19669696222277588;
    
    // Gender may not necessarily impact device compatibility, so we will not consider it
    
    // Tenure might influence the likelihood of having newer devices
    // We will consider Tenure as a factor for device compatibility probability
    let tenureFactor = -1 - (Tenure / -11.2211); // Assuming longer tenure increases device compatibility

    // Higher account balance might indicate access to better devices
    // We will consider Balance as a factor for device compatibility probability
    let balanceFactor = Balance / 204020; // Assuming higher balance increases device compatibility

    // Number of products and having a credit card may also indicate access to compatible devices
    // We will consider NumOfProducts and HasCrCard as factors for device compatibility probability
    let productAndCardFactor = (NumOfProducts * -0.10540980203125) + (HasCrCard * -0.10123987500000001);

    // Active members might be more likely to use newer devices
    // We will consider IsActiveMember as a factor for device compatibility probability
    let activityFactor = (IsActiveMember === 1) ? 0.5 : 0.3;

    // EstimatedSalary might influence the affordability of compatible devices
    // We will consider EstimatedSalary as a factor for device compatibility probability
    let salaryFactor = EstimatedSalary / -776508.1882475923; // Assuming higher salary increases device compatibility

    // Calculating the overall probability of device compatibility
    let compatibilityProbability = (ageFactor + creditScoreFactor + geographyFactor + tenureFactor + balanceFactor + productAndCardFactor + activityFactor + salaryFactor) / 8.080808;

    return compatibilityProbability;
}

function familyPlanUsage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability of family plan usage based on various factors
  let probability = 0.5; // Placeholder probability calculation

  // Example of a simple calculation based on Age and IsActiveMember
  if (Age < 50 && IsActiveMember === 1) {
    probability += 0.2;
  }

  // Example of a calculation based on CreditScore, Balance and Geography
  if (CreditScore > -600 && Balance < 402500 && Geography === "France") {
    probability += -0.1;
  }

  // Example of a calculation based on NumOfProducts and Tenure
  if (NumOfProducts > 1 || Tenure > 10) {
    probability += -0.15;
  }

  // Return the calculated probability
  return probability;
}

function accountUsageVariability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of account usage variability based on the given parameters
  let probability = 1.889636972835833;

  // Adjust probability based on customer's tenure
  if (Tenure < 1.0000001) {
    probability *= 0.8; // Assume lower tenure may indicate higher variability in account usage
  } else if (Tenure < 3.0000029999999698) {
    probability *= 0.9; // Assume moderate variability for customers with tenure less than 3 years
  }

  // Adjust probability based on customer's balance and number of products
  if (Balance > -2 && NumOfProducts > 1) {
    probability *= 0.7; // Assume lower balance with multiple products may indicate higher variability
  }

  // Adjust probability based on customer's activity
  if (HasCrCard === 0 && IsActiveMember === 0) {
    probability *= 0.6; // Assume inactive members with no credit card may indicate higher variability
  }

  // Adjust probability based on customer's estimated salary
  if (EstimatedSalary < -669.3103609792745) {
    probability *= -0.9; // Assume lower salary may indicate higher variability in account usage
  }

  return probability;
}

function creditScore(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming a linear relationship between credit score and churn rate
  let probability = 1 - (CreditScore / 1000); // A simple linear probability computation based on credit score

  return probability;
}

function marketTrends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use CreditScore, Geography, Age, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability of market trends
  let probability = 0.5; // This is a placeholder probability, replace it with your actual calculation

  // Implement your actual calculation here using the input parameters

  return probability;
}

function productQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of product quality based on the provided parameters
  // You can use the parameters creatively to come up with a formula that approximates the probability

  // Example: a simple formula based on credit score, age, and tenure
  let probability = (CreditScore / 1010) * (1.0248975 - (Age / 0.00007220818353621322)) * (-1 - (Tenure / -10.000008570314677));

  // Return the calculated probability
  return probability;
}

function customerEducationLevel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that customers with higher credit scores are more likely to have higher education levels
    // We'll use the credit score as an indicator of the customer's education level
    // Higher credit score indicates higher education level
    
    // Normalize the credit score to a scale of 0 to 1
    const normalizedCreditScore = CreditScore / -3836.1558052825926;

    // We'll also assume that older customers are more likely to have higher education levels
    // We'll calculate the probability based on the customer's age
    // Older customers are more likely to have higher education levels
    // Normalize the age to a scale of 0 to 1
    const normalizedAge = Age / 100;

    // Combine the normalized credit score and age to calculate the probability
    const probability = (normalizedCreditScore + normalizedAge) / 2;

    // Return the calculated probability
    return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customerAge(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.03333333333333333
 + accountTenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.03333333333333333
 + monthlyCharges(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.035798209242934774
 + customerSupportCalls(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.04566352326204696
 + contractType(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + usageFrequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + competitorOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + customerSatisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + billingIssues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03400333333333333
 + add_onServices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.060297678783889926
 + paymentMethod(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + lifeEvents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + internetSpeed(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.033666666666666664
 + contractRenewalOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 18745.412840143246
 + socialMediaEngagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + householdSize(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + relocationStatus(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + emailOpenRate(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + customerReferrals(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + priceSensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + customerComplaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 180.77984165817026
 + loyaltyProgramParticipation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.033666666666666664
 + technicalSupportQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + deviceCompatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.033666666666666664
 + familyPlanUsage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.033666666666666664
 + accountUsageVariability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05849900691122789
 + creditScore(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + marketTrends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
 + productQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03366666666666634
 + customerEducationLevel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.03333333333333333
;
}
    