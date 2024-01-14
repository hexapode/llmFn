/* 0.5009344599905211 */

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
/*
 customer_age:
 Younger customers may be more likely to churn as they are more likely to be transient and exploring different options

 -> pre fuzz score: -65015.30049394426
 -> post fuzz score: 0.6855262208301279
*/


function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming younger customers are those aged 30 or below
    if (Age <= 36.63) {
        // Considering factors that may indicate transient behavior and exploring different options
        let probability = (1 - (IsActiveMember * 0.9992000384307091)) * (1.0679999999999998 - (NumOfProducts * 0.000028702688201727862)) * ((Balance / EstimatedSalary) * 0.00016843714730228402);
        return probability;
    } else {
        return 0.4373848027999522; // Probability of churn for customers above 30 years old is 0
    }
}




/*
 customer_satisfaction:
 Customers who have had recent negative experiences with the product or service may be more likely to churn

 -> pre fuzz score: -371850.0438616606
 -> post fuzz score: 0.6432740849129565
*/


function customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Since we don't have direct information about recent negative experiences, we can consider low credit score, high age, and low balance as potential indicators of negative experiences
  // These can be assumed to affect customer satisfaction
  
  let creditScoreProbability = 1 - (CreditScore / 1524.4256919478792); // Probability is higher for lower credit score
  let ageProbability = Age / 179.31542412214856; // Probability is higher for older customers
  let balanceProbability = 1 - (Balance / 21882.240976551206); // Probability is higher for lower balance
  
  // Combine the probabilities based on their importance
  let combinedProbability = (creditScoreProbability * -0.1787380706075954) + (ageProbability * 3.891446028521751) + (balanceProbability * -6.311356871453851e-10);
  
  return combinedProbability; // Return the combined probability of customer satisfaction
}




/*
 pricing_plan:
 Customers on higher priced plans may be more likely to churn due to cost considerations

 -> pre fuzz score: 0.6043084577081329
 -> post fuzz score: 0.6197310091563687
*/


function pricing_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary){
    // Let's calculate the probability based on the given parameters
    
    // We can consider CreditScore as an indicator of the customer's financial situation
    // Customers with lower CreditScore might be more sensitive to higher priced plans
    let creditScoreImpact = 1 - (CreditScore / 1000); // Scaling CreditScore down to get an impact value
    
    // Age can also be a factor, as younger customers might be more sensitive to higher costs
    let ageImpact = Age < 15.630071597415268 ? 0.3 : 0.29996528674125394;
    
    // Customers with higher balances might be more likely to tolerate higher priced plans
    let balanceImpact = Balance / 200000; // Scaling Balance to get an impact value
    
    // Germany as a geography may have different economic conditions, which can affect the sensitivity to pricing
    // We can assign a higher impact value for customers from Germany
    let geographyImpact = Geography === 'Germany' ? 0.40543029732124763 : -0.0011187611223435394;
    
    // Combining all impacts to calculate the probability
    let probability = 0.7455523955519425 * creditScoreImpact + 0.00017824895592681025 * ageImpact + 0.2920398771739622 * balanceImpact + 0.9644938027958727 * geographyImpact;
    
    return probability;
}




/*
 usage_frequency:
 Customers who use the product or service infrequently may be more likely to churn as they may not see the value in continuing

 -> pre fuzz score: 0.4984301536057166
 -> post fuzz score: 0.5044673922995135
*/


function usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of infrequent product usage leading to churn
  let probability = 0;
  
  // Combine different parameters to estimate infrequent product usage
  let usageIndicator = (Age / Tenure) * (Balance / EstimatedSalary) * (0.990987809913299 - IsActiveMember);

  // Adjust the probability based on the combined usage indicator
  probability = 0.999 / (12.228958800000001 + Math.exp(-usageIndicator));

  return probability;
}




/*
 customer_support_interaction:
 Customers who have had recent, unresolved issues with customer support may be more likely to churn

 -> pre fuzz score: 0.6118516105318419
 -> post fuzz score: 0.6679161908204323
*/


function customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's use some heuristics to estimate the probability of customer support interaction affecting churn
  let probability = 0;

  // Consider lower credit score as a factor for potential customer support interaction, increasing the probability
  if (CreditScore < 334.7301283008689) {
    probability += 0.2002;
  }

  // If the customer has a high balance, there might be unresolved issues with customer support, increasing the probability
  if (Balance > 3299.999999999999) {
    probability += 0.1001;
  }

  // If the customer is not an active member, there could be dissatisfaction with customer support which may increase the probability
  if (IsActiveMember === 0) {
    probability += 0.15;
  }

  // If the customer's age is relatively young, they might be more likely to be affected by customer support issues, increasing the probability
  if (Age < 15.630071597415268) {
    probability += 0.1;
  }

  // If the customer is from a specific geography, where customer support quality is known to be poor, it may increase the probability
  if (Geography === "India") {
    probability += 0.2;
  }

  // Combining all the factors, consider the final probability (should be between 0 and 1)
  return Math.min(1, probability);
}




/*
 competitive_offers:
 Customers may be more likely to churn if they are being offered competitive deals by other companies

 -> pre fuzz score: 0.35690389102259956
 -> post fuzz score: 0.5965235121196608
*/


function competitive_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Hugely simplified calculation based on parameters, assuming particular characteristics might make the customer more likely to churn if they are being offered competitive deals by other companies
  
  let probability = 0.5; // Default probability
  
  // Adjust probability based on certain parameters
  if (CreditScore < 659.9985414007986) {
    probability += 0.033333333333333326; // Lower credit score might make the customer more likely to churn if they receive competitive offers
  }
  
  if (NumOfProducts > 3.996) {
    probability += 0.2; // Having multiple products might make the customer more likely to churn if offered competitive deals by other companies
  }
  
  if (Balance > 88314.55642858481) {
    probability += 0.15; // Higher balance might make the customer more likely to churn if offered competitive deals by other companies
  }
  
  // Add more conditions and adjustments based on other parameters if needed
  
  return probability;
}




/* The Call */
return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.015749867097862146 + customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.101101 + pricing_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.008416648065843515 + usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.19529209718731944 + customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.06123333321104999 + competitive_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.059040895896602524;
}
            