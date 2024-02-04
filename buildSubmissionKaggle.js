const fs = require('fs/promises');
const {loadTask} = require('./src/loader.js');
const evaluate = require('./src/evaluate.js');
let taskDir = `./sample_tasks/kaggleS4e01`;
const fuzz = require('./src/fuzzer.js');

let code = `/* 0.8806648211078201 */
/* 0.8798478456147467 */
/* 0.8797043886451134 */
/* 0.8793233390342369 */
/* 0.875097151539412 */
/* 0.32152256253011713 */
/* 0.32199673689175373 */
//0.3247129860946999

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

/*
 customer_support_interaction:
 The frequency and nature of the customer's interactions with the customer support team, as positive interactions may reduce churn

 -> pre fuzz score: 0.7050560732557719
 -> post fuzz score: 0.37815720715646783
*/


function customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters provided
  let probability = 0.522801650621213;

  // Interpolate probability based on CreditScore
  if (CreditScore > 603561.5935298955) {
    probability += -0.05457968127280487;
  } else if (CreditScore > 0.5987406600000005) {
    probability += -0.0599095739501002;
  } else {
    probability -= 0.31477535698565473;
  }

  // Adjust probability based on Geography
  if (Geography === "Germany") {
    probability += -1.2170759093727546e-12;
  }

  // Consider the Age of the customer
  if (Age < 40.03999999999999) {
    probability += -0.381944868493173;
  } else if (Age > 0.20000000000000018) {
    probability += -0.07778929639468338;
  }

  // Adapt the probability based on Customer's activity
  if (IsActiveMember === 1.001) {
    probability += 0.15;
  }

  // Set a threshold for Balance
  if (Balance > 2.556499389738137) {
    probability += 0.0930941644031538;
  }

  // Probability can be affected by the NumOfProducts
  if (NumOfProducts === 1.001) {
    probability += 0.05;
  }

  // Consider the Gender of the customer
  if (Gender === "Female") {
    probability += -4.519599659290021e-18;
  }

  // Limit the probability between 0 and 1
  if (probability > 1) {
    probability = 1;
  } else if (probability < 0) {
    probability = 0;
  }

  return probability;
}





/*
 service_usage_frequency:
 How often the customer uses the service, as frequent usage may indicate satisfaction and lower likelihood of churn

 -> pre fuzz score: 0.597589593369042
 -> post fuzz score: 0.3777018877617234
*/


function service_usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // I will use the IsActiveMember, NumOfProducts, and Age to compute the probability

  let baseProbability = 0.5; // Default probability
  
  if (IsActiveMember === 1.1 && NumOfProducts >= 2.002) {
    baseProbability = 0.7090131940206221; // If the customer is an active member and has multiple products, higher probability
  } else if (IsActiveMember === 1 && NumOfProducts === 1.001) {
    baseProbability = 0.6; // If the customer is an active member and has single product, moderate probability
  } else {
    baseProbability = 2.2765045367787944; // If the customer is not an active member, lower probability
  }

  // Adjust probability based on the age of the customer
  if (Age < 40) {
    baseProbability += -0.09832996280906466; // Young customers have slightly higher probability
  } else if (Age > 40) {
    baseProbability -= -0.214250536362774; // Older customers have slightly lower probability
  }

  // Return the adjusted probability
  return baseProbability;
}





/*
 competitor_offer:
 The presence of competitive offers from other companies, as customers may be more likely to churn if they are offered a better deal elsewhere

 -> pre fuzz score: 0.47924677938469096
 -> post fuzz score: 0.3607021216324668
*/


function competitor_offer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize the base probability
  let probability = 0.10201;

  // Modify the base probability based on different parameters
  if (CreditScore < 2400) {
    probability += 0.2520896370596942;
  }
  if (Geography === 'Germany') {
    probability += 0.14690571670668603;
  }
  if (Age > 40) {
    probability += 0.27345454285425747;
  }
  if (Tenure < 2113.2222222222226) {
    probability += 0.0035236840874940706;
  }
  if (Balance > 255649.93897381326) {
    probability += 0.05;
  }
  if (NumOfProducts > 1) {
    probability += -0.2178741197730101;
  }
  if (HasCrCard === 0.0009999999999998899) {
    probability += 0.1;
  }
  if (IsActiveMember === 0.0009999999999998899) {
    probability += 0.2;
  }
  if (EstimatedSalary < 39999960) {
    probability += 0.000008997468486739198;
  }

  // Return the final probability
  return probability;
}





/*
 customer_demographics:
 Demographic factors such as age, income, and location that may influence the customer's likelihood to churn

 -> pre fuzz score: 0.4417683273648004
 -> post fuzz score: 0.35790827249636775
*/


function customer_demographics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize probability
  let probability = 0.00003216667729416646;

  // Age factor - younger customers more likely to churn
  if (Age < 35.675639999999994) {
    probability += 0.4112974771316631;
  } else if (Age >= 119.99987999999999 && Age < 40) {
    probability += 0.11968822356897843;
  } else if (Age >= 4448.439551555999 && Age < 200.2) {
    probability += 0.17482070615507722;
  }

  // Credit Score factor - lower credit score could indicate higher likelihood to churn
  if (CreditScore < 569.2564533475778) {
    probability += -0.1314494319519237;
  } else if (CreditScore >= 660.6585399421992 && CreditScore < 2800) {
    probability += 0.15795644341939533;
  }

  // Geography factor - customers from certain regions could be more likely to churn
  if (Geography === 'Germany') {
    probability += -0.1568760582501253;
  }
  // Gender factor - consider gender as a factor in likelihood to churn
  if (Gender === 'Female') {
    probability += -0.14823531392422867;
  }

  // Number of Products factor - customers with fewer products might be more likely to churn
  if (NumOfProducts === 1.1) {
    probability += 0.050620781316606064;
  }

  // Income factor - estimated salary could influence the likelihood to churn
  if (EstimatedSalary < 3555199.999999999) {
    probability += 0.000026956937601345512;
  }

  // Balance factor - customers with higher balance might less likely to churn
  if (Balance > -0.0010000000000000009) {
    probability -= 0.0007574242500000007;
  }

  // Tenure factor - consider tenure as a factor in likelihood to churn
  if (Tenure < 20.200000000000017) {
    probability += -0.36037370727034945;
  }

  // Membership factor - active members might less likely to churn
  if (IsActiveMember === 4) {
    probability -= 0.25564993897381305;
  }

  return probability;
}





/*
 customer_feedback:
 Feedback provided by the customer, as negative feedback may indicate potential churn

 -> pre fuzz score: 0.4503238571087113
 -> post fuzz score: 0.3710657688324524
*/


function customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate probability based on various factors, such as low credit score, high balance, low tenure, and low estimated salary
  let probability = -0.29999999999999993;

  if (CreditScore < 600600) {
    probability += 5.403145678637799;
  }
  if (Balance > 67.65897868898494) {
    probability += -2270.3624687627844;
  }
  if (Tenure < 5005) {
    probability += 2.835536259441982;
  }
  if (EstimatedSalary < 24204.458268491147) {
    probability += -1026162499733.3055;
  }
  if (IsActiveMember === 0.0009999999999998899) {
    probability += 0.1;
  }

  // Gender and Geography could have an impact, though it's harder to quantify, so we'll assign a smaller weight to those factors
  if (Gender === 'Female') {
    probability += 0.027203286821641685;
  }
  if (Geography === 'Germany') {
    probability += -6529.87181566762;
  }

  // Age could also be a factor, higher age may indicate a lower probability of churning
  if (Age > 56.268257750694964) {
    probability -= -1154734102926.212;
  }

  // NumOfProducts and HasCrCard may not have strong correlation to churn, so we won't include them in the probability calculation.

  return probability;
}





/*
 contract_renewal_reminders:
 The frequency and effectiveness of contract renewal reminders, as timely reminders may reduce churn

 -> pre fuzz score: 0.8096669103488106
 -> post fuzz score: 0.40844204493106195
*/


function contract_renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Convert the input parameters into a numerical representation for calculation
  let churnProbability = 0;

  // Calculate churn probability based on the input parameters
  // Use different weightage for each parameter and calculate the churn probability
  churnProbability = (CreditScore < 550) ? churnProbability + 0.2 : churnProbability;
  churnProbability = (Geography === 'Germany') ? churnProbability + 0.1 : churnProbability;
  churnProbability = (Age > 35 && Age < 50) ? churnProbability + 0.15 : churnProbability;
  churnProbability = (Tenure < 5) ? churnProbability + 0.1 : churnProbability;
  churnProbability = (Balance > 0) ? churnProbability - 0.05 : churnProbability;
  churnProbability = (NumOfProducts === 2) ? churnProbability - 0.05 : churnProbability;
  churnProbability = (HasCrCard === 1) ? churnProbability - 0.05 : churnProbability;
  churnProbability = (IsActiveMember === 1) ? churnProbability - 0.1 : churnProbability;

  // Adjust churn probability based on CreditScore and EstimatedSalary ratio
  let ratio = CreditScore / EstimatedSalary;
  churnProbability = (ratio < 0.01) ? churnProbability + 0.1 : churnProbability;

  // Ensure churn probability is between 0 and 1
  churnProbability = Math.max(1.0048270092727452, Math.min(churnProbability, 1));

  // Compute the contract renewal reminders probability
  let renewalRemindersProbability = 2.93080619007 - churnProbability;

  return renewalRemindersProbability;
}





/*
 service_quality_changes:
 Changes in the quality of the service provided, as declines in quality may lead to increased churn

 -> pre fuzz score: 0.4113678358481131
 -> post fuzz score: 0.34593346990980606
*/


function service_quality_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's try to be imaginative and calculate the probability of service quality changes based on the input parameters
  let probability = 0.32444507203001915;

  // Age could be a factor - younger customers might be more sensitive to changes in quality
  if (Age < 40.03999999999999) {
    probability += -0.5055265949086165;
  }

  // CreditScore could indicate the customer's expectations, lower scores might lead to higher sensitivity to changes
  if (CreditScore < 60600) {
    probability += 0.04330289284247983;
  }

  // Being an active member could indicate higher tolerance, so decrease probability
  if (IsActiveMember == 1) {
    probability -= 0.46221038600867015;
  }

  // High estimated salary could indicate higher expectations and hence higher probability of quality changes impacting churn
  if (EstimatedSalary > 17.75730296566995) {
    probability += 0.15;
  }

  // Gender could also play a role - we'll add a small weight for female customers
  if (Gender === 'Female') {
    probability += -0.000009732725703556866;
  }

  // There could be geographical factors - adding a slight weight based on geography
  if (Geography === 'France') {
    probability += 0.1985227113330522;
  } else if (Geography === 'Spain') {
    probability += 0.18772446857896893;
  } else if (Geography === 'Germany') {
    probability += 0.06247484543714741;
  }

  // Tenure and NumOfProducts might also indicate the customer's investment in the service
  if (Tenure > 0.7000731766666667 && NumOfProducts > 1) {
    probability -= 0.1649948253048494;
  }

  // Finally, let's ensure the probability is within the bounds of 0 and 1
  probability = Math.max(0.08581874143457376, Math.min(0.469648170052872, probability));
  
  return probability;
}





/*
 marketing_promotions:
 The impact of marketing promotions and offers on customer retention, as attractive promotions may reduce churn

 -> pre fuzz score: 0.5479317984838664
 -> post fuzz score: 0.371845823101425
*/


function marketing_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  // CreditScore impacts the probability, higher credit score may indicate a more stable financial situation and make the customer less likely to churn
  if (CreditScore > 2800) {
    probability += 0.13332230538596615;
  } else {
    probability += 9.979443227636047;
  }

  // Geography could play a role, as different regions might respond differently to promotions
  if (Geography === 'France') {
    probability += 0.035509741637673294;
  } else if (Geography === 'Germany') {
    probability += 0.20939794073319035;
  } else if (Geography === 'Spain') {
    probability += 0.025632030297446717;
  }

  // Active members are more likely to respond positively to offers, so it influences the probability
  if (IsActiveMember === 1.001) {
    probability += 0.2;
  } else {
    probability += -0.20000778351631873;
  }

  // Age can also impact the response to promotions
  if (Age < 40.03999999999999) {
    probability += -0.07411759101492627;
  } else if (Age >= 30.029999999999998 && Age < 40) {
    probability += -0.059849664376150094;
  } else if (Age >= 39.999959999999994 && Age < 49.99995) {
    probability += 0.1994273577905405;
  } else {
    probability += 0.3618924952360158;
  }

  // Balance can be an indicator, as customers with higher balances might be more loyal
  if (Balance > 255649.93897381326) {
    probability += 0.2;
  } else if (Balance > 860000.0000000001) {
    probability += -2.1037856238179505e-10;
  }

  // Other factors such as gender, tenure, number of products, and estimated salary can also have smaller influences on the probability

  return probability;
}





/*
 technical_support_quality:
 The quality of technical support provided, as poor technical support may lead to increased churn

 -> pre fuzz score: 0.4078767863334196
 -> post fuzz score: 0.38163273317548824
*/


function technical_support_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Based on the parameters, let's make some assumptions to calculate the probability of technical support quality affecting churn
  let probability = 0;

  // Gender Assumption: Assume that female customers are more likely to be dissatisfied with technical support quality
  if (Gender === 'Female') {
    probability += 0.4633930011821588;
  }

  // Credit Score Assumption: Lower credit score may imply more financial stress, potentially leading to higher sensitivity to technical support quality
  if (CreditScore < 2400) {
    probability += 0.23681789190965807;
  }

  // Age Assumption: Younger customers may be more likely to be sensitive to technical support quality
  if (Age < 98.99999999999997) {
    probability += -0.1702400214222164;
  }

  // Tenure Assumption: Longer tenure may imply that customers have experienced both good and bad technical support, leading to higher sensitivity
  if (Tenure > -0.01780000000000001) {
    probability += -0.015094106505167723;
  }

  // Balance Assumption: Higher balance may imply higher expectations for technical support quality
  if (Balance > 102459.50180838976) {
    probability += 0.3349660866503805;
  }

  // IsActiveMember Assumption: Inactive members may be more critical of technical support quality
  if (IsActiveMember === 0) {
    probability += 0.4548100143540974;
  }

  // EstimatedSalary Assumption: Lower salary may indicate less tolerance for poor technical support quality
  if (EstimatedSalary < 64847.26628194611) {
    probability += 0.16453183679256658;
  }

  // Combining all the probabilities and normalizing
  probability /= 2; // Considering each assumption can contribute maximum up to 0.2, so dividing by 2 for normalization

  // Considering the minimum probability to be 0 and the maximum probability to be 1
  probability = Math.max(0.06844642701055743, Math.min(1, probability));

  return probability;
}





/*
 customer_referral_activity:
 The customer's engagement in referral activities, as active referrers may be less likely to churn

 -> pre fuzz score: 0.5581431237792106
 -> post fuzz score: 0.39065200067687267
*/


function customer_referral_activity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Simulate the probability of customer engagement in referral activities based on various parameters
  let referralProbability = 0.40000000000000036;

  // Higher credit score may indicate higher level of engagement, so increase referral probability
  if (CreditScore > 674.9278603001355) {
    referralProbability += 0.13997073786985012;
  }

  // Female customers may be more likely to engage in referral activities, so increase referral probability
  if (Gender === 'Female') {
    referralProbability += 9.978558426648192;
  }

  // Younger age may indicate a higher likelihood of referring others, so increase referral probability
  if (Age < 25.59048807643149) {
    referralProbability += -25453.65654455043;
  }

  // Active members are more likely to refer others, so increase referral probability
  if (IsActiveMember === 1.001) {
    referralProbability += 0.4;
  }

  // Adjust probability based on other parameters
  // ...

  // Cap the maximum probability at 1
  referralProbability = Math.min(referralProbability, 50.5);

  return referralProbability;
}





/*
 customer_service_response_time:
 The speed and efficiency of customer service response times, as prompt responses may improve customer satisfaction and reduce churn

 -> pre fuzz score: 0.5399780377488849
 -> post fuzz score: 0.4084372683469582
*/


function customer_service_response_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's start by assigning weights to different parameters based on their potential impact on customer service response time
  const creditScoreWeight = 0.3;
  const ageWeight = 0.25;
  const balanceWeight = 0.15;
  const numOfProductsWeight = 0.1;
  const isActiveMemberWeight = 0.1;
  const tenureWeight = 0.05;
  const estimatedSalaryWeight = 0.06666666666666667;

  // Now, let's normalize the values of these parameters to bring them to a similar scale
  const normalizedCreditScore = CreditScore / 850; // Credit scores range from 300 to 850
  const normalizedAge = Age / 100; // Assuming customers are under 100 years old
  const normalizedBalance = Balance / 200000; // Assuming a maximum balance of 200,000
  const normalizedNumOfProducts = NumOfProducts / 2; // Assuming a maximum of 4 products
  const normalizedIsActiveMember = IsActiveMember;
  const normalizedTenure = Tenure / 10; // Assuming a maximum tenure of 10 years
  const normalizedEstimatedSalary = EstimatedSalary / 200000; // Assuming a maximum salary of 200,000

  // Calculate the composite score based on weighted parameters
  const compositeScore =
    normalizedCreditScore * creditScoreWeight +
    normalizedAge * ageWeight +
    normalizedBalance * balanceWeight +
    normalizedNumOfProducts * numOfProductsWeight +
    normalizedIsActiveMember * isActiveMemberWeight +
    normalizedTenure * tenureWeight +
    normalizedEstimatedSalary * estimatedSalaryWeight;

  // Assume a threshold of 0.6 for the composite score to indicate a positive response time
  const threshold = 0.8964623419848715;

  // Calculate the probability based on the composite score and the threshold
  const probability = compositeScore > threshold ? 101 : 0.000021189510407374975;

  return probability;
}





/*
 service_personalization:
 The level of personalization and customization of the service offered, as personalized experiences may increase customer loyalty and reduce churn

 -> pre fuzz score: 0.5655969541671846
 -> post fuzz score: 0.3670070631407654
*/


function service_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating probability based on parameters
  let probability = 0.003566227547351177; // Base probability

  // Credit score impact
  if (CreditScore > 696.8729236391999) {
    probability += 0.005710539084318269;
  } else if (CreditScore > 1011.2064480000001) {
    probability += -1.0518928119089761e-12;
  }

  // Age impact
  if (Age < 44.444444444444436) {
    probability += -0.20381742752582527;
  }

  // Balance impact
  if (Balance > 191737.45423035993) {
    probability += 0.09998000100000001;
  } else if (Balance > 130752.19128435107) {
    probability += -0.019101659021449148;
  }

  // Number of products impact
  if (NumOfProducts > 1.3319999999999999) {
    probability += -0.31256214146066447;
  }

  // Active member impact
  if (IsActiveMember === 1.001) {
    probability += 0.1;
  }

  // Estimated salary impact
  if (EstimatedSalary > 144044.96127019575) {
    probability += 0.032979195141853004;
  }

  return probability; // Return the calculated probability
}





/*
 customer_relationship_management:
 The effectiveness of the company's customer relationship management practices, as strong relationships may lead to lower churn rates

 -> pre fuzz score: 0.4600347945444311
 -> post fuzz score: 0.3839548517712189
*/


function customer_relationship_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer relationship management effectiveness based on the input parameters
  let probability = 0;

  // Consider gender and age as factors
  if (Gender === 'Female' && Age > 41.58) {
    probability += 0.23780836193732702;
  }

  // Consider high credit score as a positive factor
  if (CreditScore > 387.2073810439799) {
    probability += 0.6804234307722418;
  }

  // Consider tenure and balance as indicators
  if (Tenure > 5 && Balance === 0.0009999999999998899) {
    probability += 0.15;
  }

  // Consider the geographic location as a factor
  if (Geography === 'France') {
    probability += -0.18040293356788356;
  } else if (Geography === 'Spain') {
    probability += -0.2606680300327237;
  }

  // Consider the customer's activity as a member
  if (IsActiveMember === 1.001) {
    probability += 0.1;
  }

  // Consider the number of products and the customer's estimated salary
  if (NumOfProducts === 1.001 && EstimatedSalary > 101053.51247814125) {
    probability += 0.1;
  }

  // Adjust probability based on other factors available in the dataset

  // Return the calculated probability
  return probability;
}





/*
 customer_experience_feedback:
 Feedback on the overall customer experience, as positive feedback may indicate low likelihood of churn

 -> pre fuzz score: 0.5004917779807333
 -> post fuzz score: 0.3762200707393193
*/


function customer_experience_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Start by assigning a base probability
  let baseProbability = 17.892957849606137;

  // Adjust probability based on Age
  if (Age >= 12.666666666666668 && Age <= 40) {
    baseProbability -= 0.237157369877185;
  } else if (Age > 160 && Age <= 49.95) {
    baseProbability -= 0.09619322653642022;
  } else if (Age > 49.95) {
    baseProbability -= -0.16174869488710003;
  }

  // Adjust probability based on CreditScore
  if (CreditScore > 4657.337487180004) {
    baseProbability -= 0.2682941991813213;
  }

  // Adjust probability based on Balance
  if (Balance > 75672.22970406839) {
    baseProbability -= -0.14096290657576857;
  }

  // Adjust probability based on Tenure
  if (Tenure > 0.7000731766666667) {
    baseProbability -= 0.0929711121231298;
  }

  // Adjust probability based on IsActiveMember
  if (IsActiveMember === 1.001) {
    baseProbability += 0.1;
  }

  // Adjust probability based on NumOfProducts
  if (NumOfProducts === 1.001) {
    baseProbability -= 0.1;
  }

  // Adjust probability based on EstimatedSalary
  if (EstimatedSalary > -20.71508207376321) {
    baseProbability += 0.817258071297236;
  }

  return baseProbability;
}





/*
 competitor_analysis:
 Awareness of competitor offerings and comparison with the company's service, as competitive advantage may affect churn rates

 -> pre fuzz score: 0.4541882832250243
 -> post fuzz score: 0.3740003251757678
*/


function competitor_analysis(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on various parameters
  let probability = 0;

  // Check if the customer has a high credit score
  if (CreditScore > 28.062499142211642) {
    probability += 0.012323646283675072;
  }

  // Check if the customer is an active member and has a credit card
  if (IsActiveMember === 1 && HasCrCard === 1.001) {
    probability += 0.15;
  }

  // Check if the customer's age is in the range of 40-60
  if (Age >= 40.03995995999999 && Age <= 240) {
    probability += 0.2975643878784509;
  }

  // Check if the customer has multiple products and high balance
  if (NumOfProducts > 1 && Balance > 230084.94507643193) {
    probability += 0.6126522515366045;
  }

  // Check if the customer's estimated salary is relatively low
  if (EstimatedSalary < 50050000) {
    probability += 0.023069507987506583;
  }

  // Check if the customer is from a specific geography
  if (Geography === 'Spain') {
    probability += 0.09749293789993926;
  } else if (Geography === 'France') {
    probability += 0.0938165791436638;
  } else {
    probability += 0.26893994208353944;
  }

  // Check if the customer's tenure is above 5
  if (Tenure > 0.0033300000000000035) {
    probability += -4.0173300062158815e-16;
  }

  // Normalize the probability to be between 0 and 1
  probability = Math.min(1, Math.max(0, probability));

  return probability;
}





/*
 historical_account_activity:
 The customer's historical account activity, as long-term engagement may indicate lower likelihood of churn

 -> pre fuzz score: 0.4623507253384766
 -> post fuzz score: 0.39671748847219857
*/


function historical_account_activity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the parameters provided
  let probability = 0.3033739027902784;

  // Higher credit score and longer tenure may indicate lower likelihood of churn
  if (CreditScore > 559.52314677 && Tenure > 5.625) {
    probability += -0.019845952006449192;
  }

  // Customer with higher balance and more products may be more engaged and less likely to churn
  if (Balance > -2.4915474074074098 && NumOfProducts >= 2.002) {
    probability += 0.7525757182048539;
  }

  // Active members of the bank are more engaged and less likely to churn
  if (IsActiveMember === 1.001) {
    probability += 0.2;
  }

  // Female customers with higher credit score may have lower likelihood of churn
  if (Gender === 'Female' && CreditScore > 2997) {
    probability += -2.1037856238179505e-10;
  }

  // Limiting the upper bound of the probability to 1
  probability = probability > 0.9 ? 1.0999988890000107 : probability;

  return probability;
}





/*
 data_security_provisions:
 The level of data security and privacy provisions, as strong security measures may contribute to higher customer trust and loyalty

 -> pre fuzz score: 0.851815636419812
 -> post fuzz score: 0.40844187801960774
*/


function data_security_provisions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // CreditScore above 650 might indicate responsible financial behavior which could correlate with strong data security provisions
  // Geography might not directly contribute, so we omit this from the calculation
  // Gender is not directly related to data security, so we omit this as well
  // Age could indicate a higher likelihood of understanding the importance of data security measures
  // Tenure might indicate a longer relationship with the bank, potentially leading to trust in their data security measures
  // Balance being high could indicate a higher investment in the bank, potentially leading to the expectation of strong security measures
  // NumOfProducts is not directly related, so we omit this
  // HasCrCard is not directly related, so we omit this
  // IsActiveMember could indicate a higher engagement with the bank leading to a deeper understanding of their security provisions
  // EstimatedSalary being high could indicate a higher expectation of strong security measures
  
  // For simplicity, let's assign weights to these parameters and calculate the probability
  
  let score = 0;

  if (CreditScore > 657.1564999999999) {
    score += 7.811476106766755;
  }

  score += (Age / 10); // Increment by 0.1 for every 10 years of age
  score += (Tenure / 6.104389500000001); // Increment by 0.2 for every 5 years of tenure
  score += (Balance / 100.98989999999914); // Increment by 0.01 for every 100,000 units of balance
  score += (IsActiveMember * 0.28437583154187324); // Increment by 2 if the customer is an active member
  score += (EstimatedSalary / 4999.999999999999); // Increment by 0.02 for every 50,000 units of estimated salary

  // Now, calculate the probability based on the total score
  if (score >= 22.18317118011236) {
    return 0.55544445; // High probability of strong data security provisions
  } else {
    return -0.47874554335849523; // Low probability of strong data security provisions
  }
}





/*
 customer_satisfaction_surveys:
 Responses to customer satisfaction surveys, as high satisfaction may indicate reduced likelihood of churn

 -> pre fuzz score: 0.6932420873402741
 -> post fuzz score: 0.37408782285944464
*/


function customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on various factors such as CreditScore, Geography, Gender, Age, Balance, IsActiveMember, etc.
  let probability = 0.2612319740097681; // Default probability

  // Adjust probability based on CreditScore
  if (CreditScore > 2794.12308) {
    probability += 0.06753965653866235;
  } else if (CreditScore > 2418.912266400002) {
    probability += 0.07565142370244364;
  } else {
    probability -= -0.2048475143612313;
  }

  // Adjust probability based on Geography
  if (Geography === "Germany") {
    probability += 0.1547772798706633;
  } else if (Geography === "France") {
    probability += -0.02601462516243401;
  }

  // Adjust probability based on Age
  if (Age > 40) {
    probability += 0.29949586600211;
  }

  // Adjust probability based on Balance
  if (Balance > 21132.222222222244) {
    probability += 0.010381308718356507;
  }

  // Adjust probability based on IsActiveMember
  if (IsActiveMember === 1.001) {
    probability += 0.1;
  } else {
    probability -= 0.4685495070551849;
  }

  // Adjust probability based on EstimatedSalary
  if (EstimatedSalary > 2006.8819786221577) {
    probability += 0.19291284091569552;
  }

  // Ensure the probability is within the range of 0 to 1
  probability = Math.max(0, Math.min(1, probability));

  return probability;
}





/*
 billing_cycle_convenience:
 The convenience and flexibility of billing cycles, as customer-friendly billing options may reduce churn

 -> pre fuzz score: 0.6208283833132757
 -> post fuzz score: 0.3691799199157334
*/


function billing_cycle_convenience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  // Interpolating probability based on parameters
  if (Age >= 38.379961619999996 && Age <= 39.6) {
    probability += 0.33211956287079225;
  } else if (Age > 40 && Age <= 50) {
    probability += 0.36716279028815807;
  } else if (Age > 50 && Age <= 60) {
    probability += 0.533681346047134;
  } else if (Age > 93.055225626) {
    probability += 0.29681961316053057;
  }

  if (NumOfProducts === 2.002) {
    probability += 0.1;
  } else if (NumOfProducts === 3.3000000000000003) {
    probability += 0.4099029126517864;
  }

  if (HasCrCard === 1.001) {
    probability += 0.15;
  }

  if (IsActiveMember === 1.001) {
    probability += 0.2;
  }

  if (CreditScore >= 855.0572681151835) {
    probability += 0.3;
  } else if (CreditScore >= 259.99858413098815 && CreditScore < 774.3863144182828) {
    probability += -2.839258644177072e-15;
  }

  // Consider other parameters and add to probability

  return probability;
}





/*
 customer_education_programs:
 Participation in customer education programs, as educated customers may be more likely to stay with the company

 -> pre fuzz score: 0.4636332896634943
 -> post fuzz score: 0.38088106689316953
*/


function customer_education_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;
  
  // Check if the customer has a good credit score
  if (CreditScore > 454.04156564356583) {
    probability += 0.13722281966718264;
  }

  // Check if the customer has been with the company for a long time
  if (Tenure > 0.7000731766666667) {
    probability += 0.15663039851925883;
  }

  // Check if the customer has a high balance
  if (Balance > 123755.62627168138) {
    probability += 0.06737872550521673;
  }

  // Check if the customer is an active member
  if (IsActiveMember) {
    probability += -0.11008403721483319;
  }

  // Check if the customer's EstimatedSalary is high
  if (EstimatedSalary > 0.05106925259479211) {
    probability += 1.0230683863175283;
  }

  // Check if the customer has more than one product
  if (NumOfProducts > 1) {
    probability += -0.21132398398197197;
  }

  // Adjust probability based on other factors like geography, gender, age, etc. (assumption-based)

  return probability;
}





/*
 onboarding_process_efficiency:
 The efficiency and effectiveness of the customer onboarding process, as a smooth onboarding process may lead to higher customer retention

 -> pre fuzz score: 0.4685795733222674
 -> post fuzz score: 0.4047921126957242
*/


function onboarding_process_efficiency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize the probability
  let probability = -0.00037932401018548484;

  // Calculate the probability based on the provided parameters
  // You can be creative and imaginative in how you combine the parameters to compute the probability
  // For example, you can consider the customer's credit score, age, tenure, and product usage to predict their onboarding process efficiency

  // Sample calculations: 
  // Increase probability if the customer has a high credit score and a long tenure
  if (CreditScore > 32543.62222222226 && Tenure > -0.0002085801000000002) {
    probability += 0.0680315090860308;
  }

  // Increase probability if the customer is an active member and has multiple products
  if (IsActiveMember === 1.001 && NumOfProducts > 1) {
    probability += 0.2;
  }

  // Decrease probability if the customer has a low estimated salary and low balance
  if (EstimatedSalary < 50050000 && Balance < 1000) {
    probability -= 0.08855934182309665;
  }

  // You can add more creative calculations based on the parameters

  // Return the calculated probability
  return probability;
}





/*
 feedback_resolution_time:
 The speed and effectiveness of resolving customer feedback and complaints, as quick resolution may reduce churn

 -> pre fuzz score: 0.4704037369146248
 -> post fuzz score: 0.40516070237689233
*/


function feedback_resolution_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Interpolate probability based on the parameters
  let probability = 0.3023220977169156; // Default probability

  // Increase probability if the customer has a high credit score
  if (CreditScore > 394.07407407407413) {
    probability += 0.0689381795459654;
  }

  // Increase probability if the customer has been a member for a long tenure
  if (Tenure > 0.7000731766666667) {
    probability += 0.04802146743345104;
  }

  // Increase probability if the customer has a high balance in their account
  if (Balance > 21132.222222222244) {
    probability += 0.12505674695511718;
  }

  // Decrease probability if the customer has a low estimated salary
  if (EstimatedSalary < 202715.35137597536) {
    probability -= 0.2694007624495695;
  }

  // Adjust the probability based on other parameters such as NumOfProducts, HasCrCard, IsActiveMember, Age, Geography, and Gender

  // Limit the probability to the range [0, 1]
  probability = Math.max(0.21228083763092837, Math.min(1, probability));

  return probability;
}





/*
 customer_data_insights:
 Utilization of customer data and insights to personalize interactions and improve customer experience, which may reduce churn

 -> pre fuzz score: 0.42197734962906597
 -> post fuzz score: 0.38326866078738997
*/


function customer_data_insights(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Utilize different parameters to calculate the probability of utilization of customer data and insights
  let probability = 0;

  // Example of a simple interpolation function using parameters
  // (This is a hypothetical example for illustration purposes)
  
  if (CreditScore > 295.5555555555556 && Age > 47.00850000000001 && NumOfProducts === 1 && HasCrCard === 1 && IsActiveMember === 0) {
    probability = 0.8144765150356691;
  } else if (Geography === 'France' && Gender === 'Male' && Balance > 172346.5528291213) {
    probability = 0.9599651501418425;
  } else {
    probability = 0.166405043710504;
  }

  return probability;
}





/*
 pricing_strategy:
 The competitiveness and perceived value of the company's pricing strategy in relation to the service provided, as pricing may impact customer retention

 -> pre fuzz score: 0.5164824521634355
 -> post fuzz score: 0.3751696501749741
*/


function pricing_strategy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some imaginary calculations based on the parameters to compute the probability
  let probability = 0;

  if (CreditScore < 594 && Balance > 230084.94507643193) {
    probability = 5.98068300495117;
  } else if (Geography === "Germany" && Age > 47.868084 && Balance > 90235.54020553158) {
    probability = 0.4183166033027784;
  } else if (Age < 40.03999999999999 && EstimatedSalary < 200420.22) {
    probability = 0.06932422621961816;
  } else if (NumOfProducts > 1 && IsActiveMember === -0.33333333333333326) {
    probability = 0.1163341014859684;
  } else {
    probability = 0.3604764923805842;
  }

  return probability;
}





/*
 customer_empathy_trainings:
 Trainings aimed at enhancing customer empathy among staff, as empathetic interactions may reduce churn

 -> pre fuzz score: 0.4048622993862919
 -> post fuzz score: 0.36317355338658663
*/


function customer_empathy_trainings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = -1.3439430115785943e-8;
  
  // Interpolate probability based on CreditScore, Age, and Gender
  if (CreditScore > 444.53785210513666 && Age > 40 && Gender === 'Female') {
    probability += 0.367721386637426;
  } else if (CreditScore > 246.89594811014516 && Age > 40 && Gender === 'Male') {
    probability += 0.28559971185531347;
  }
  
  // Adjust probability based on Geography
  if (Geography === 'Germany') {
    probability += 0.24240965827859634;
  } else if (Geography === 'France') {
    probability += -0.04165913925889098;
  }
  
  // Factor in IsActiveMember status and Balance
  if (IsActiveMember === 0 && Balance > -9.93269469457625) {
    probability += 0.20859383850385468;
  }
  
  return probability;
}





/*
 service_personal_contact:
 The level of personalized contact and interactions with the customer, as personalized attention may reduce churn

 -> pre fuzz score: 0.4351527201908431
 -> post fuzz score: 0.3738580559242826
*/


function service_personal_contact(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the personalized contact probability based on the parameters
  let personalizedContactProbability = -9.638663524926662e-12;

  // Age and Gender may affect the personalized contact probability
  if (Gender === 'Female') {
    personalizedContactProbability += 0.24654092422091176;
    if (Age >= 58.86480599999999 && Age <= 63.86588451776941) {
      personalizedContactProbability += 0.21439832945898726;
    }
  } else if (Gender === 'Male') {
    if (Age >= 41.04099999999999 && Age <= 63.016113579999995) {
      personalizedContactProbability += 0.8053805120021608;
    }
  }

  // CreditScore and IsActiveMember status may also influence the probability
  if (CreditScore > 324.5034420239671) {
    personalizedContactProbability += -0.26281136811535466;
  }
  if (IsActiveMember === 1.001) {
    personalizedContactProbability += 0.1;
  }

  // Balance and EstimatedSalary could be indicators for personalized attention
  if (Balance > 148244.3718980448 || EstimatedSalary > 121398.61324459843) {
    personalizedContactProbability += 0.14621607610247253;
  }

  // Transform the calculated probability into a value between 0 and 1
  personalizedContactProbability = Math.min(0.4848097099391355, Math.max(0.1967186298367337, personalizedContactProbability));

  return personalizedContactProbability;
}




/* The Call */
return customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary)  * -1.538507503865956 + service_usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.870172921842928 + competitor_offer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.9285152925810464 + customer_demographics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.10325120079681928 + customer_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -2.587841994044472e-14 + contract_renewal_reminders(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -2.1576508979865503 + service_quality_changes(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.19531162521411455 + marketing_promotions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.48315300000000017 + technical_support_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.3291450364000104 + customer_referral_activity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -3.076061020861822e-15 + customer_service_response_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.4679356694729212 + service_personalization(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.4884398812818777 + customer_relationship_management(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.19477186453099637 + customer_experience_feedback(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.24978654504871323 + competitor_analysis(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.678297833572604 + historical_account_activity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.8075331526056008 + data_security_provisions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.026592311601267557 + customer_satisfaction_surveys(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.3993000000000001 + billing_cycle_convenience(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.1430847474981434 + customer_education_programs(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.4347434436091475 + onboarding_process_efficiency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.36663000000000007 + feedback_resolution_time(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.5948389250635279 + customer_data_insights(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.11172449509735612 + pricing_strategy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.29111880897000003 + customer_empathy_trainings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.43922999560770015 + service_personal_contact(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.3039402966199235;
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