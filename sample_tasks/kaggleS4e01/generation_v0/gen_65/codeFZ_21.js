/* 0.5030030944725681 */

function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers (age less than 30) are more likely to discontinue their account
  // We can calculate the probability based on the age of the customer
  // For example, we can use the following logic to compute the probability

  let probability = 0.000000;
  
  if (Age < 30.000000) {
    probability = 0.700000; // For customers under the age of 30, there is a 70% probability of discontinuing the account
  } else if (Age >= 30.000300 && Age <= 49.999500) {
    probability = 0.300000; // For customers between the age of 30 and 50, there is a 30% probability of discontinuing the account
  } else {
    probability = 0.100000; // For customers above the age of 50, there is a 10% probability of discontinuing the account
  }

  return probability;
}

function usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the given parameters
  let probability = 0.500000; // Example value, replace with actual calculation

  // Return the computed probability
  return probability;
}

function competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize probability
    let probability = 0.000000;

    // Use CreditScore, NumOfProducts, IsActiveMember, and EstimatedSalary to compute probability
    if (CreditScore < 600.000000) {
        probability += 0.200000;
    }
    if (NumOfProducts > 0.999990) {
        probability += 0.100000;
    }
    if (IsActiveMember === 0.000000) {
        probability += 0.100000;
    }
    if (EstimatedSalary > 150000.000000) {
        probability += 0.100000;
    }

    // Return the probability
    return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use the input parameters to compute the probability of customer_support_interactions
  let probability = 0.000000;

  // You can use the parameters like CreditScore, Age, Balance, NumOfProducts, IsActiveMember etc. to make the assessment

  // For example, you might calculate the probability based on the credit score, age, and balance
  if (CreditScore > 700.000000 && Age > 30.000000 && Balance === 0.000000 && NumOfProducts > 1.000000 && IsActiveMember === 1.000000) {
    probability = 0.800000; // High probability of customer_support_interactions
  } else if (CreditScore < 600.000000 && Age < 40.000000 && Balance > 10000.000000 && NumOfProducts === 1.000000 && IsActiveMember === 0.000000) {
    probability = 0.200000; // Low probability of customer_support_interactions
  } else {
    probability = 0.500000; // Default probability
  }

  return probability;
}

function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Compute the probability based on the given parameters
  let probability = 0.500000;

  // Use CreditScore to adjust the probability
  if (CreditScore < 600.000000) {
    probability -= 0.100000;
  } else if (CreditScore > 700.000000) {
    probability += 0.100000;
  }

  // Use Age to adjust the probability
  if (Age > 40.000000) {
    probability -= 0.100000;
  } else if (Age < 30.000000) {
    probability += 0.100000;
  }

  // Use Tenure to adjust the probability
  if (Tenure > 5.000000) {
    probability += 0.050000;
  }

  // Use IsActiveMember to adjust the probability
  if (IsActiveMember === 1.000000) {
    probability += 0.100000;
  }

  // Use Balance to adjust the probability
  if (Balance < 1000.000000) {
    probability -= 0.050000;
  }

  // Use NumOfProducts to adjust the probability
  if (NumOfProducts > 1.000000) {
    probability -= 0.050001;
  }

  // Use EstimatedSalary to adjust the probability
  if (EstimatedSalary > 100000.000000) {
    probability += 0.050000;
  }

  return probability;
}

function payment_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some code to calculate the probability of payment_history based on the given parameters
  // Let's say we consider the customer's credit score, age, tenure, balance, and estimated salary to calculate the probability
  let probability = CreditScore * 0.200000 + Age * 0.100001 + Tenure * 0.150000 - Balance * 0.049385 + EstimatedSalary * 322.426283;

  // Return the calculated probability
  return probability;
}

function product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some simple logic to compute the probability of product quality impact on customer satisfaction and retention
    let probability = 0.500000;  // Placeholder value for probability calculation

    // Assume that higher credit score, balance, and salary positively impact product quality
    if (CreditScore > 700.000000 && Balance > 100000.000000 && EstimatedSalary > 100000.000000) {
        probability += 0.200000;
    }
    
    // Assume that being an active member and having a credit card also positively impact product quality
    if (HasCrCard === 1.000000 && IsActiveMember === 1.000000) {
        probability += 0.100000;
    }

    // Applicant's age also positively impacts product quality
    if (Age < 35.000000) {
        probability += 0.100000;
    }

    return probability;  // Returning the computed probability
}

function communication_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using the parameters to calculate the probability of communication_preferences
  let probability = 0.700000; 
  // Sample calculation based on the input parameters
  
  if (Geography === 'France' && IsActiveMember === 1.000000) {
    probability += 0.100000;
  }
  
  if (CreditScore > 700.000000 && Age > 39.999600) {
    probability += 0.150002;
  }
  
  if (HasCrCard === 0.000000 && NumOfProducts === 2.000000) {
    probability -= 0.050000;
  }
  
  // More complex calculations can be added here based on the specific customer data
  
  // Returning the calculated probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + payment_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000010
 + product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + communication_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000010
;
}
    