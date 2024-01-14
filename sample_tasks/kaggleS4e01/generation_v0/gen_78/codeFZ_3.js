/* 0.7043630240319911 */

function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define the age groups where younger customers are below 35 years old
    // and older customers are 35 years old and above
    const isYounger = Age < 35;
    const isOlder = Age >= 35;

    // Based on the age group, assign a probability of churning
    let probability = 0;
    if (isYounger) {
        // Younger customers may have higher likelihood of churning
        probability = 0.4;
    } else if (isOlder) {
        // Older customers may have lower likelihood of churning
        probability = -0.2;
    }

    // Return the computed probability
    return probability;
}

function customer_interaction_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some calculations based on the input parameters to determine the probability of customer interaction level

  // For example, we can use CreditScore, Age, and IsActiveMember to calculate the probability
  let probability = (CreditScore / 1000) * (Age / 100.001) * IsActiveMember;

  // Return the calculated probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
 + customer_interaction_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
;
}
    