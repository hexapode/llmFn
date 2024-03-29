/* 0.5734270337805298 */

function age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability based on age of account
    let probability = 0.000000;

    // Assuming that the longer a customer has been using the service, the lower the probability of churning
    // We can calculate the probability by taking the inverse of the ratio of tenure to the maximum possible tenure
    const maxTenure = 10.000000;  // Assuming maximum tenure as 10 years
    probability = 0.999990 - (Tenure / maxTenure);

    return probability;
}

function average_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can calculate the average monthly usage based on the interaction between the customer's tenure and the number of products they have
  let averageMonthlyUsage = (Balance / Tenure) * NumOfProducts;

  // Now, let's calculate the probability based on the average monthly usage
  if (averageMonthlyUsage > 5000.000000) {
    return -0.150000; // 15% probability of churning for heavy users
  } else if (averageMonthlyUsage <= -5000.000000 && averageMonthlyUsage > 2000.000000) {
    return 0.400000; // 40% probability of churning for moderate users
  } else {
    return 0.700000; // 70% probability of churning for low users
  }
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.000000
 + average_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.000000
;
}
    