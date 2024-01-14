/* 0.5159200227608438 */

function customer_demographics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that the probability of a customer closing an account is influenced by their age, gender, location, and occupation
  // Calculate the probability based on these factors
  let probability = 0;

  // For the sake of example, let's just use some simple calculations to determine the probability
  if (Age > 30 && Age < 50) {
    probability += 0.2;  // Age between 30 and 50 increases probability
  }

  if (Gender === 'Female') {
    probability += 0.1;  // Female gender increases probability
  }

  if (Geography === 'France') {
    probability -= 0.1;  // Being located in France reduces probability
  }

  // Perform more calculations based on other factors if needed

  return probability;
}

function customer_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Start by assigning weights to different customer behaviors and attributes
  const creditScoreWeight = 0.2;
  const tenureWeight = 0.15;
  const numOfProductsWeight = 0.1;
  const isActiveMemberWeight = 0.1;
  const balanceWeight = 0.15;
  const estimatedSalaryWeight = 0.1;

  // Calculate the overall engagement score based on the customer's information
  let engagementScore = (CreditScore * creditScoreWeight) +
                      (Tenure * tenureWeight) +
                      (NumOfProducts * numOfProductsWeight) +
                      (IsActiveMember * isActiveMemberWeight) +
                      (Balance * balanceWeight) +
                      (EstimatedSalary * estimatedSalaryWeight);

  // Normalize the engagement score to a probability between 0 and 1
  let probability = 1 / (1 + Math.exp(-engagementScore));

  return probability;
}

function customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer satisfaction based on the input parameters
  let probability = 0.5; // Placeholder value for demonstration
  
  // Use the input parameters to calculate the probability of customer satisfaction
  
  // Example: If CreditScore is high and Age is within a certain range, increase the probability
  if (CreditScore > 700 && Age > 30 && Age < 60) {
    probability += 0.2;
  }
  
  // Example: If the customer has a high balance, decrease the probability
  if (Balance > 100000) {
    probability -= 0.1;
  }

  // Other factors such as Geography, Gender, Tenure, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary can also be considered
  
  // Return the calculated probability
  return probability;
}

function pricing_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Based on the input parameters, you can calculate the probability by using various factors such as credit score, tenure, balance, geography, etc.
    
    // Sample calculation - this is just an example, you may customize the calculation based on your knowledge of your specific business context
    let probability = 0.5; // placeholder value
    
    if (CreditScore > 600 && Geography === 'Spain') {
        probability = 0.8;
    } else if (NumOfProducts === 1 && Age < 30) {
        probability = 0.3;
    } else {
        probability = 0.5; // default probability
    }
    
    return probability;
}

function customer_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering various factors that can influence customer support
  let supportProbability = 0;

  // Higher credit score can indicate a more responsible and reliable customer
  if (CreditScore > 700) {
    supportProbability += 0.2;
  }

  // Active members might be more engaged and likely to seek out support
  if (IsActiveMember === 1) {
    supportProbability += 0.15;
  }

  // Number of products used can indicate customer's investment in the service
  if (NumOfProducts > 1) {
    supportProbability += 0.1;
  }

  // Gender, geography, balance, tenure, estimated salary, and other factors can also be considered for calculating supportProbability

  return supportProbability;
}

function competitor_offerings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5; // Placeholder value, actual calculation based on parameters needed
  
  // Example of a simplistic calculation based on CreditScore and IsActiveMember
  if (CreditScore > 600 && IsActiveMember === 0) {
    probability = 0.7;
  } else {
    probability = 0.3;
  }
  
  // Further complex calculations can be added using other input parameters
  
  return probability;
}

function product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Compute the probability based on the input parameters
  let probability = 0.5; // Placeholder value, actual computation needed based on the parameters

  // Example of some basic computation
  if (CreditScore > 700 && Age > 30 && IsActiveMember === 1) {
    probability = 0.8;
  } else {
    probability = 0.3;
  }

  // Return the computed probability
  return probability;
}

function billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of billing issues based on the input parameters
  // For example, we can consider factors such as low credit score, high balance, and customer inactivity to increase the probability of billing issues
  let probability = 0;

  if (CreditScore < 600) {
    probability += 0.3;
  }

  if (Balance > 100000) {
    probability += 0.2;
  }

  if (IsActiveMember === 0) {
    probability += 0.1;
  }

  // Other factors such as Geography, Gender, Age, Tenure, NumOfProducts, HasCrCard, and EstimatedSalary can also be considered to update the probability

  return probability;
}

function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that younger customers are more likely to cancel their contract
  let ageInfluence = Age < 40 ? 0.7 : 0.3;

  // Customers with higher credit scores are more likely to continue their contract
  let creditScoreInfluence = CreditScore / 1000;

  // Customers with more products are more likely to continue their contract
  let productsInfluence = NumOfProducts <= 2 ? 0.4 : 0.8;

  // Active members are more likely to continue their contract
  let activeMemberInfluence = IsActiveMember === 1 ? 0.9 : 0.5;

  // Assume that customers with higher estimated salary are more likely to continue their contract
  let salaryInfluence = EstimatedSalary / 100000;

  // Combining all the influences to calculate the probability
  let probability = (ageInfluence + creditScoreInfluence + productsInfluence + activeMemberInfluence + salaryInfluence) / 5;

  return probability;
}

function communication_strategy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's start by defining a base probability
    let baseProbability = 0.5;

    // Now, let's adjust the probability based on the input parameters
    // For example, we can consider higher CreditScore, Tenure, and Balance to increase the probability
    // While lower Age and NumOfProducts might decrease the probability
    // Additionally, we can consider certain Geographies, Genders, and IsActiveMember status to have different effects on the probability

    // For simplicity, let's just adjust the base probability based on a weighted sum of the input parameters
    let parameterSum = CreditScore + Tenure + (Balance / 10000) - Age - NumOfProducts - (IsActiveMember * 0.5);
    baseProbability += parameterSum * 0.001;

    // Return the calculated probability
    return baseProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_demographics(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
 + customer_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + pricing_plan(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + customer_support(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + competitor_offerings(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + product_updates(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + billing_issues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
 + communication_strategy(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
;
}
    