/* 0.7043632681074918 */

function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define the age groups where younger customers are below 35 years old
    // and older customers are 35 years old and above
    const isYounger = Age < 35;
    const isOlder = Age >= 35;

    // Based on the age group, assign a probability of churning
    let probability = 0;
    if (isYounger) {
        // Younger customers may have higher likelihood of churning
        probability = 0.400004;
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
  let probability = (CreditScore / 1000.0100000000001) * (Age / 100.00300003000012) * IsActiveMember;

  // Return the calculated probability
  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
 + customer_interaction_level(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
;
}
    