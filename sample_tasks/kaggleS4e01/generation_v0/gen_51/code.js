
function factor_1_customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability based on the age of the customer
    let probability = 0;

    if (Age < 30) {
        // Younger customers might be more likely to switch providers or close accounts
        probability = 0.6;
    } else if (Age >= 30 && Age < 50) {
        // Middle-aged customers might have a moderate likelihood of switching providers
        probability = 0.3;
    } else {
        // Older customers are more established and loyal
        probability = 0.1;
    }

    // Return the calculated probability
    return probability;
}

function factor_2_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's calculate the probability of customer satisfaction based on the given parameters
  // We can use CreditScore, Age, Balance, NumOfProducts, IsActiveMember as factors affecting customer satisfaction
  
  let probability = 0.5; // default probability
  
  // Adjust probability based on CreditScore
  if (CreditScore > 700) {
    probability += 0.1;
  } else if (CreditScore < 600) {
    probability -= 0.1;
  }
  
  // Adjust probability based on Age
  if (Age < 30) {
    probability += 0.05;
  } else if (Age > 50) {
    probability -= 0.05;
  }
  
  // Adjust probability based on Balance
  if (Balance > 100000) {
    probability += 0.07;
  } else if (Balance < 50000) {
    probability -= 0.07;
  }
  
  // Adjust probability based on NumOfProducts
  if (NumOfProducts === 1) {
    probability += 0.03;
  } else if (NumOfProducts > 2) {
    probability -= 0.03;
  }
  
  // Adjust probability based on IsActiveMember
  if (IsActiveMember === 1) {
    probability += 0.1;
  } else {
    probability -= 0.1;
  }
  
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    