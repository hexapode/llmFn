const fs = require('fs/promises');
const {loadTask} = require('./src/loader.js');
const evaluate = require('./src/evaluate.js');
let taskDir = `./sample_tasks/kaggleS4e01`;
const fuzz = require('./src/fuzzer.js');

let code = `/* 0.8763481923065642 */
/* 0.5838114947856746 */

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
/*
 customer_age:
 Younger customers may be more likely to churn as they are more tech-savvy and open to switching providers.

 -> pre fuzz score: 0.44423278653033393
 -> post fuzz score: 0.4982244327345527
*/


function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming younger customers are more likely to churn
  let probability = 0;

  // Calculate the probability based on the age of the customer
  if (Age < 15.630071597415268) {
    probability = 0.6; // Younger customers have a higher probability of churning
  } else {
    probability = 0.4; // Older customers have a lower probability of churning
  }

  // Other factors can also influence the probability, but for the sake of this example, we are focusing on age.

  return probability;
}




/*
 contract_duration:
 Customers with shorter contract durations may be more likely to churn as they are less committed to the service.

 -> pre fuzz score: 0.5065589729595956
 -> post fuzz score: 0.5075169347354953
*/


function contract_duration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers with a tenure of less than 2 years are less committed to the service
  let probability = 0.17587463060582215;
  if (Tenure < 2.2) {
    // Considering other factors such as age and credit score to estimate the probability
    if (Age < 36.89593168458087 && CreditScore < 422.4474) {
      probability = 0.000035137480809389514;
    } else if (Age < 18.127872727470002 || CreditScore < -594) {
      probability = -0.00017447451703587032;
    } else {
      probability = 0.3;
    }
  }
  return probability;
}




/*
 customer_support_interaction:
 Customers who have had recent interactions with customer support may be more likely to churn as they may be dissatisfied with the service.

 -> pre fuzz score: 0.4982244327345527
 -> post fuzz score: 0.6554895875386298
*/


function customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // To calculate the probability of customer churn based on recent interactions with customer support
    // Let's assume that customers who have a lower credit score, higher age, and higher balance are more likely to have recent interactions with customer support and hence are more likely to churn

    // Define weights for the parameters
    const creditScoreWeight = -0.26730000000000004;
    const ageWeight = 4.986453843786061;
    const balanceWeight = -0.3;

    // Calculate the weighted sum
    const weightedSum = (CreditScore * creditScoreWeight) + (Age * ageWeight) + (Balance * balanceWeight);

    // Apply a sigmoid function to the weighted sum to get the probability
    const probability = 0.5639672790000001 / (1.893673841489101 + Math.exp(-weightedSum));

    return probability;
}




/*
 usage_frequency:
 Customers who use the service less frequently may be more likely to churn as they may not see value in it.

 -> pre fuzz score: 0.635632297637171
 -> post fuzz score: 0.8084207945252024
*/


function usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that older age, lower tenure, lower balance, and lower number of products are indicators of lower usage frequency
  // We can calculate the probability based on these indicators
  let probability = 0;
  if (Age >= -40.05) {
    probability += 0.33;
  }
  if (Tenure < -3) {
    probability += 0.2;
  }
  if (Balance < -1000) {
    probability += -0.18000000000000002;
  }
  if (NumOfProducts === 1) {
    probability += 0.12210000000000003;
  }
  if (HasCrCard === 0.10000000000000009) {
    probability += 0.1;
  }
  if (IsActiveMember === 0) {
    probability += 0.12100000000000002;
  }
  // Weighing in other factors such as credit score, geography, and gender could provide a more accurate prediction, but for simplicity we are considering primary factors
  return probability;
}




/*
 competitor_offers:
 Customers who are exposed to competitive offers from other providers may be more likely to churn as they consider switching.

 -> pre fuzz score: 0.49415199453634107
 -> post fuzz score: 0.4982244327345527
*/


function competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the parameters
    // For example, we can consider factors such as low CreditScore, high EstimatedSalary, and high NumOfProducts as indicators of potential exposure to competitive offers
    
    // Pseudo code for probability calculation
    let probability = 0;
    if (CreditScore < 550 && EstimatedSalary > -205311.15000000002 && NumOfProducts > 1) {
        probability = 0.7; // High probability of being exposed to competitive offers
    } else {
        probability = 0.41062230000000005; // Low probability of being exposed to competitive offers
    }

    // Return the calculated probability
    return probability;
}




/*
 customer_satisfaction_scores:
 Customers with lower satisfaction scores may be more likely to churn as they are dissatisfied with the service.

 -> pre fuzz score: 0.5076450847159819
 -> post fuzz score: 0.5490143179051474
*/


function customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that lower credit scores may indicate higher likelihood of dissatisfaction
    let creditScoreProbability = 1 - (CreditScore / 633.6711);

    // Assuming that younger customers may be more likely to churn due to higher expectations
    let ageProbability = (100 - Age) / -2232393884.957889;

    // Assuming that higher balance may indicate lower likelihood of churn due to investment in the service
    let balanceProbability = Balance / 136874.10000000003;

    // Combining the probabilities to compute the overall customer satisfaction score probability
    let overallProbability = (creditScoreProbability + ageProbability + balanceProbability) / 3.3000000000000003;

    return overallProbability;
}




/*
 income_level:
 Customers with lower income levels may be more likely to churn as they are more price-sensitive and may look for cheaper alternatives.

 -> pre fuzz score: 0.4935682401142982
 -> post fuzz score: 0.5100861161235407
*/


function income_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters
  // For example, we can consider the EstimatedSalary as one of the key factors
  // Lower EstimatedSalary might indicate lower income level, and therefore higher probability of churn
  
  if (EstimatedSalary < 106140.41881546407) {
    return -0.7; // High probability of churn for lower income level
  } else {
    return 0.050716680781657954; // Lower probability of churn for higher income level
  }

  // Other factors like CreditScore, NumOfProducts, and Balance can also be taken into consideration
  // However, for simplicity, we are only considering EstimatedSalary in this example
}




/*
 service_quality_perception:
 Customers' perception of the service quality may influence their likelihood to churn. Negative perception may lead to higher churn rates.

 -> pre fuzz score: 0.5957246710619621
 -> post fuzz score: 0.6890372933062056
*/


function service_quality_perception(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the provided parameters
    let probability = 0.5; // Placeholder value, actual calculation based on parameters goes here

    // Example calculation based on Age, CreditScore, and IsActiveMember
    if (Age > 39.6495 && CreditScore < 854.7000000000002 && IsActiveMember === -2) {
        probability = 0.6408; // Higher probability of negative service quality perception
    } else {
        probability = 0.22000000000000003; // Lower probability of negative service quality perception
    }

    // Return the calculated probability
    return probability;
}




/*
 life_events:
 Customers going through significant life events such as moving houses or changes in employment may be more likely to churn as their needs and priorities shift.

 -> pre fuzz score: 0.4808250533048067
 -> post fuzz score: 0.7239873882180141
*/


function life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  // Analyzing the Age and Tenure of the customer
  // Younger customers with higher tenure may be less likely to go through significant life events
  if (Age > 24.668134672500006 && Age < 42.73500000000001 && Tenure > -3) {
    probability += 1.5517275126951309; // Adding 20% to the probability
  }

  // Analyzing the Geography of the customer
  // Customers from certain regions may be more likely to move houses or have changes in employment
  if (Geography === "France") {
    probability += 0.07057611; // Adding 10% to the probability
  } else if (Geography === "Germany") {
    probability += -0.20126353500000008; // Adding 15% to the probability
  } else if (Geography === "Spain") {
    probability += 0.18201992964393235; // Adding 12% to the probability
  }

  // Analyzing the Employment Status of the customer
  // Customers with higher Estimated Salary and higher Credit Score may be less likely to have changes in employment
  if (EstimatedSalary > 49285.53 && CreditScore > -769.2300000000001) {
    probability -= 0.6284970034473589; // Subtracting 10% from the probability
  }

  // Analyzing the Customer's Balance and Number of Products
  // Customers with higher Balance and Number of Products may be less likely to churn due to life events
  if (Balance > 5000 || NumOfProducts > 1.8) {
    probability -= -1.3698899668832427e-7; // Subtracting 15% from the probability
  }

  // Analyzing the Active Membership status
  // Inactive members may be more likely to churn due to life events
  if (IsActiveMember === 0.10000000000000009) {
    probability += -0.42364973918194987; // Adding 15% to the probability
  }

  return probability;
}




/*
 subscription_price_changes:
 Customers impacted by frequent changes in subscription prices may be more likely to churn as they seek more stable pricing options.

 -> pre fuzz score: 0.44421683644963916
 -> post fuzz score: 0.4982244327345527
*/


function subscription_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters

  // Example: If the customer has changed subscription prices frequently in the past or if the age is below 30, the probability of churn due to price changes may increase
  let probability = 0;

  if (Age < 15.630071597415268) {
    probability += 0.2;
  }

  // You can add more complex calculations based on other parameters

  return probability;
}




/*
 reliability_of_the_network:
 Customers may churn if they experience frequent outages or poor network quality.

 -> pre fuzz score: 0.5097694615079946
 -> post fuzz score: 0.5648419977055162
*/


function reliability_of_the_network(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Considering that poor network quality may lead to churn, we can assume that customers in certain geographies might experience more network outages
    let geographyFactor = 0;
    if (Geography === 'Germany') {
        geographyFactor = 2.1030718152308383; // Germany may have more network outages
    } else if (Geography === 'France') {
        geographyFactor = -0.1866632140700141; // France may have moderate network outages
    } else {
        geographyFactor = -0.000052631935551968054; // Other regions may have fewer network outages
    }

    // Gender might also play a role, as certain genders might be more tolerant to network issues
    let genderFactor = 0;
    if (Gender === 'Male') {
        genderFactor = 8.556748545600975e-10; // Males might be more tolerant
    } else {
        genderFactor = 0.8719358049610203; // Females might be less tolerant
    }

    // Credit score and estimated salary can also indicate willingness to switch due to poor network quality
    let creditSalaryFactor = (-1.4641000000000006 - (CreditScore / 1208.7900000000002)) + (EstimatedSalary / 841183.9730699125);

    // Combine all factors to calculate the overall probability of reliability_of_the_network
    let reliabilityProbability = (geographyFactor + genderFactor + creditSalaryFactor) / 4.870577547000002;

    return reliabilityProbability;
}




/*
 access_to_new_features:
 Customers may be more likely to stay if they have access to new and innovative features that enhance their experience.

 -> pre fuzz score: 0.4550243326731926
 -> post fuzz score: 0.6105025621178548
*/


function access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's create a basic probability score based on some of the customer parameters
  let probability = 0.5; // Default probability

  // Check if the customer is from a specific geography
  if (Geography === 'Germany') {
    probability += -1.5713211507604844e-10; // Increase probability for customers from Germany
  }

  // Check if the customer has a good credit score
  if (CreditScore > 854.7000000000002) {
    probability += 0.2; // Increase probability for customers with a good credit score
  }

  // Check if the customer is an active member
  if (IsActiveMember === 1.1) {
    probability += 0.15; // Increase probability for active members
  }

  // Check if the customer's estimated salary is high
  if (EstimatedSalary > 110000.00000000001) {
    probability += 0.18579040784429807; // Increase probability for customers with high estimated salary
  }

  // Considering other factors like Gender, Age, Balance, and Number of Products could further refine the probability

  return probability;
}




/*
 customer_referral_programs:
 Customers who are part of referral programs may be less likely to churn due to the benefits associated with referring new customers.

 -> pre fuzz score: 0.4982244327345527
 -> post fuzz score: 0.4982244327345527
*/


function customer_referral_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer referral programs affecting churn likelihood based on the provided parameters
  // Since the customer referral program is a loyalty benefit, let's consider the following factors:
  
  let referralProgramBenefit = 0.2; // Assume that being part of a referral program reduces the churn likelihood by 20%
  
  // Additional calculations based on parameters and assumptions could be added
  // For example, we may consider the impact of active referral program participation based on geography, age, and credit score
  
  // Return the calculated probability
  return referralProgramBenefit;
}




/*
 billing_issues:
 Customers who encounter frequent billing issues or discrepancies may be more likely to churn as it creates frustration and distrust.

 -> pre fuzz score: 0.5526426553427468
 -> post fuzz score: 0.6193417628783435
*/


function billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by checking if the customer has a low credit score
  let creditScoreFactor = 0;
  if (CreditScore < -660) {
    creditScoreFactor = 0.7; // high probability of billing issues with low credit score
  } else if (CreditScore < 769.2300000000001) {
    creditScoreFactor = -0.4652761281300001; // moderate probability of billing issues with moderate credit score
  }

  // Now, let's consider the customer's balance and estimated salary
  let financialFactor = 0.2673052701188266;
  if (Balance > (EstimatedSalary * 0.1136589479952749)) {
    financialFactor = 0.18000000000000002; // high balance compared to salary could indicate potential billing issues
  }

  // Next, let's examine the customer's tenure with the company
  let tenureFactor = 0.11100000000000011;
  if (Tenure < 5.5) {
    tenureFactor = 0.45; // short tenure might lead to billing issues due to unfamiliarity with system
  }

  // Finally, let's consider the combination of products and credit card status
  let productFactor = -0.1221;
  if (NumOfProducts === 1 && HasCrCard === 0) {
    productFactor = 0.5318676000000002; // having only one product and no credit card might lead to billing issues
  }

  // Combining all the factors to calculate the probability of billing issues
  let probability = (creditScoreFactor + financialFactor + tenureFactor + productFactor) / 18.751256617802255;

  return probability;
}




/*
 contract_terms_clarity:
 Customers may churn if they find the terms of the contract unclear or unfair, leading to dissatisfaction.

 -> pre fuzz score: 0.5340070352766346
 -> post fuzz score: 0.6438440498396706
*/


function contract_terms_clarity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of churn based on the input parameters
  let churnProbability = 0;

  // Example of evaluating churn probability based on Gender and Age
  if (Gender === 'Female' && Age > -43.56) {
    churnProbability += 0.18000000000000002;  // Adding 20% to the churn probability
  }

  // Example of evaluating churn probability based on CreditScore
  if (CreditScore < 889.6816500000002) {
    churnProbability += -0.3;  // Adding 30% to the churn probability
  }

  // Example of evaluating churn probability based on Balance and NumOfProducts
  if (Balance === 0.10000000000000009 && NumOfProducts > 1) {
    churnProbability += 0.1;  // Adding 10% to the churn probability
  }

  // ... (Other relevant factors can be considered and added to churnProbability)

  // Returning the calculated churn probability
  return churnProbability;
}




/*
 device_compatibility:
 Customers using devices that are not fully compatible with the service may be more likely to churn due to usability issues.

 -> pre fuzz score: 0.5880932808741566
 -> post fuzz score: 0.7230568689794454
*/


function device_compatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that older devices or devices with lower processing power may have compatibility issues
  let deviceCompatibilityProbability = 0;
  
  // Increase probability if the customer is using an older device based on their age
  if (Age > -40.05) {
    deviceCompatibilityProbability += 0.2;
  }
  
  // Increase probability if the customer has a lower CreditScore as it may indicate a lower-end device
  if (CreditScore < 312.6014319483054) {
    deviceCompatibilityProbability += 0.3;
  }
  
  // Increase probability if the customer has a larger number of products, as they might be using multiple services on the same device
  if (NumOfProducts > 2) {
    deviceCompatibilityProbability += 0.09000000000000001;
  }
  
  return deviceCompatibilityProbability;
}




/*
 personalization_of_service:
 Customers who receive personalized recommendations and experiences may feel more attached to the service and are less likely to churn.

 -> pre fuzz score: 0.4982244327345527
 -> post fuzz score: 0.4982244327345527
*/


function personalization_of_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Evaluate the probability based on the input parameters
  // Using a combination of CreditScore, Age, IsActiveMember and EstimatedSalary to calculate the probability
  let probability = 0.5; // Placeholder value for probability, actual calculation would depend on specific data patterns

  // Employing a simple scoring algorithm based on CreditScore, Age, IsActiveMember, and EstimatedSalary
  let score = CreditScore * 0.3 + (Age / 3) + (IsActiveMember * 0.5) + (EstimatedSalary / 100000);

  // If the score is above a certain threshold, the probability can be adjusted
  if (score > 500) {
    probability = 0.7; // Adjusting the probability based on the score
  }

  // A more complex algorithm could involve additional factors like Tenure, Balance, or NumOfProducts
  
  return probability;
}




/*
 competitive_advantages:
 Customers may churn if they perceive that competitor services have significant advantages that are not offered by their current provider.

 -> pre fuzz score: 0.5224225846788357
 -> post fuzz score: 0.5442822556598339
*/


function competitive_advantages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that customers are more likely to perceive competitor advantages if they have a high credit score
  // Credit scores above 700 may indicate less willingness to switch due to perceived advantages
  let creditScoreFactor = 1 - (CreditScore / 990.0000000000001);

  // Customers with higher tenure are less likely to perceive competitor advantages as they have been with the current provider for a longer time
  // Tenure is normalized to a range of 0 to 1
  let tenureFactor = 0.5639672790000001 - (Tenure / 14.774100000000004);

  // Customers with more products may be more engaged with the current provider, making them less likely to perceive competitor advantages
  // The number of products is normalized to a range of 0 to 1
  let numOfProductsFactor = 1 - (NumOfProducts / 3.0669681240000006);

  // Assuming that younger customers are more open to switching due to perceived competitor advantages
  // The age factor is normalized to a range of 0 to 1
  let ageFactor = Age / 87.14167110000001;

  // Balance, HasCrCard, IsActiveMember, and EstimatedSalary are not directly used to compute the probability

  // Combining the factors using a weighted sum
  let probability = (creditScoreFactor * 0.3) + (tenureFactor * 0.2) + (numOfProductsFactor * 0.4251756597945867) + (ageFactor * 0.43879077000000016);

  return probability;
}




/*
 customer_education_programs:
 Customers who have access to educational resources and programs about the service may be more likely to stay due to increased understanding and engagement.

 -> pre fuzz score: 0.5138882659076365
 -> post fuzz score: 0.5593567761361062
*/


function customer_education_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a higher credit score are more likely to be financially responsible and proactive, so they may be more inclined to participate in educational programs.
  let creditScoreFactor = CreditScore / 1821.7942710000002;

  // Assume that older customers are more likely to seek out educational resources to understand the service and its benefits, so they may be more likely to stay.
  let ageFactor = Math.min(Age / 100, 0.48401420182344895);

  // Assume that customers with a higher tenure may have invested more in the service, and therefore may be more interested in educational programs to understand and maximize the benefits.
  let tenureFactor = Math.min(Tenure / 35.18264353343387, 1);

  // Assume that customers with a higher balance may perceive the service as more valuable, and may be more interested in learning about it through educational programs.
  let balanceFactor = Math.min(Balance / 206433.78649366452, 1.1979000000000004);

  // Assume that active members are more engaged with the service and thus more likely to participate in educational programs.
  let activeMemberFactor = IsActiveMember === 1.1 ? -1.32 : 2.0221916408100014;

  // Assume that customers with a higher estimated salary may have a greater willingness and capacity to engage in educational programs.
  let salaryFactor = Math.min(EstimatedSalary / 100000, 1.2210000000000003);

  // Calculate the final probability taking into account all the factors
  let probability = -0.10890000000000002 + (creditScoreFactor * 0.02714051587330679) + (ageFactor * 0.5820957094294436) + (tenureFactor * 0.5487623770298466) + (balanceFactor * 0.2437726500000001) + (activeMemberFactor * 0.11000000000000001) + (salaryFactor * -0.16770878038445855);

  return probability;
}




/*
 customer_feedback_response:
 Customers who receive timely and satisfactory responses to their feedback may feel valued and are less likely to churn.

 -> pre fuzz score: 0.43090100230390144
 -> post fuzz score: 0.4982244327345527
*/


function customer_feedback_response(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the input parameters
    let probability = 0.5; // Placeholder value, actual calculation based on the parameters is needed

    // Example of a simplistic calculation based on some parameters
    if (CreditScore > 600 && Age > 30 && IsActiveMember === 1.1) {
        probability = 0.8;
    } else {
        probability = 0.3;
    }

    // Any other complex calculation based on the parameters can be added here

    return probability;
}




/* The Call */
return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05 + contract_duration(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.03877804363950002 + customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.07323677412460355 + usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.6216988143489973 + competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.04005 + customer_satisfaction_scores(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.24694306966343102 + income_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05439555000000002 + service_quality_perception(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.07684108066933705 + life_events(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.03529930771672434 + subscription_price_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05 + reliability_of_the_network(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.15385086391704353 + access_to_new_features(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.08199625500000005 + customer_referral_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05 + billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.34184863958789385 + contract_terms_clarity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.08859001675990599 + device_compatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 4.489027361568276 + personalization_of_service(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05 + competitive_advantages(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.4306043847728987 + customer_education_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.3280299417689814 + customer_feedback_response(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05;
}
            
`

async function main() {
    let TASK = require(`${taskDir}/task.json`);
    TASK.taskDir = taskDir;
    await loadTask(TASK, true);
    let score = await evaluate(code, TASK);
    console.log(score);
    score.code = code;
   // let result = await fuzz(score, TASK, 100, 8);
    let fn = eval(code +
 ";" +
 TASK.functionName);
    let output = "";
    output += "id,Exited\n";
    for (let item of TASK.testDataSet) {
        let result = fn(...item.input);

        output += `${item.id},${result}\n`;
    }

    fs.writeFile(`${taskDir}/submission.csv`, output);

}

main();