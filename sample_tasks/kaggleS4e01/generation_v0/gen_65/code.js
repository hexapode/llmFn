
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers (age less than 30) are more likely to discontinue their account
  // We can calculate the probability based on the age of the customer
  // For example, we can use the following logic to compute the probability

  let probability = 0;
  
  if (Age < 30) {
    probability = 0.7; // For customers under the age of 30, there is a 70% probability of discontinuing the account
  } else if (Age >= 30 && Age <= 50) {
    probability = 0.3; // For customers between the age of 30 and 50, there is a 30% probability of discontinuing the account
  } else {
    probability = 0.1; // For customers above the age of 50, there is a 10% probability of discontinuing the account
  }

  return probability;
}

function usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the probability based on the given parameters
  let probability = 0.5; // Example value, replace with actual calculation

  // Return the computed probability
  return probability;
}

function competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Initialize probability
    let probability = 0;

    // Use CreditScore, NumOfProducts, IsActiveMember, and EstimatedSalary to compute probability
    if (CreditScore < 600) {
        probability += 0.2;
    }
    if (NumOfProducts > 1) {
        probability += 0.1;
    }
    if (IsActiveMember === 0) {
        probability += 0.1;
    }
    if (EstimatedSalary > 150000) {
        probability += 0.1;
    }

    // Return the probability
    return probability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use the input parameters to compute the probability of customer_support_interactions
  let probability = 0.0;

  // You can use the parameters like CreditScore, Age, Balance, NumOfProducts, IsActiveMember etc. to make the assessment

  // For example, you might calculate the probability based on the credit score, age, and balance
  if (CreditScore > 700 && Age > 30 && Balance === 0 && NumOfProducts > 1 && IsActiveMember === 1) {
    probability = 0.8; // High probability of customer_support_interactions
  } else if (CreditScore < 600 && Age < 40 && Balance > 10000 && NumOfProducts === 1 && IsActiveMember === 0) {
    probability = 0.2; // Low probability of customer_support_interactions
  } else {
    probability = 0.5; // Default probability
  }

  return probability;
}

function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Compute the probability based on the given parameters
  let probability = 0.5;

  // Use CreditScore to adjust the probability
  if (CreditScore < 600) {
    probability -= 0.1;
  } else if (CreditScore > 700) {
    probability += 0.1;
  }

  // Use Age to adjust the probability
  if (Age > 40) {
    probability -= 0.1;
  } else if (Age < 30) {
    probability += 0.1;
  }

  // Use Tenure to adjust the probability
  if (Tenure > 5) {
    probability += 0.05;
  }

  // Use IsActiveMember to adjust the probability
  if (IsActiveMember === 1) {
    probability += 0.1;
  }

  // Use Balance to adjust the probability
  if (Balance < 1000) {
    probability -= 0.05;
  }

  // Use NumOfProducts to adjust the probability
  if (NumOfProducts > 1) {
    probability -= 0.05;
  }

  // Use EstimatedSalary to adjust the probability
  if (EstimatedSalary > 100000) {
    probability += 0.05;
  }

  return probability;
}

function payment_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some code to calculate the probability of payment_history based on the given parameters
  // Let's say we consider the customer's credit score, age, tenure, balance, and estimated salary to calculate the probability
  let probability = CreditScore * 0.2 + Age * 0.1 + Tenure * 0.15 - Balance * 0.05 + EstimatedSalary * 0.1;

  // Return the calculated probability
  return probability;
}

function product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Some simple logic to compute the probability of product quality impact on customer satisfaction and retention
    let probability = 0.5;  // Placeholder value for probability calculation

    // Assume that higher credit score, balance, and salary positively impact product quality
    if (CreditScore > 700 && Balance > 100000 && EstimatedSalary > 100000) {
        probability += 0.2;
    }
    
    // Assume that being an active member and having a credit card also positively impact product quality
    if (HasCrCard === 1 && IsActiveMember === 1) {
        probability += 0.1;
    }

    // Applicant's age also positively impacts product quality
    if (Age < 35) {
        probability += 0.1;
    }

    return probability;  // Returning the computed probability
}

function communication_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using the parameters to calculate the probability of communication_preferences
  let probability = 0.7; 
  // Sample calculation based on the input parameters
  
  if (Geography === 'France' && IsActiveMember === 1) {
    probability += 0.1;
  }
  
  if (CreditScore > 700 && Age > 40) {
    probability += 0.15;
  }
  
  if (HasCrCard === 0 && NumOfProducts === 2) {
    probability -= 0.05;
  }
  
  // More complex calculations can be added here based on the specific customer data
  
  // Returning the calculated probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + usage_frequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + competitor_offers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + payment_history(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + product_quality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + communication_preferences(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    