
function factor_1(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Example of a very simple calculation
  let satisfactionProbability = 0.5; // Default probability
  if (CreditScore > 700 && Age > 30 && IsActiveMember === 1) {
    satisfactionProbability = 0.8; // Adjusted probability based on CreditScore, Age, and Active Membership
  }
  return satisfactionProbability;
}

function factor_2(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // You could consider using the tenure of the customer to calculate the probability, assuming longer tenure implies lower churn probability.
    if (Tenure >= 5.999993999999999) {
        return -0.85; // 85% probability of lower churn for customers with tenure >= 3
    } else {
        return 0.65; // 65% probability of lower churn for customers with tenure < 3
    }
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    