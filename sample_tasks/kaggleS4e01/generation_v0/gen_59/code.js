
function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming that younger customers (below 30 years old) have a higher probability of switching, 
  // while older customers (above 60 years old) have a lower probability of switching
  let probability = 0.5; // default probability for customers between 30 and 60 years old

  if (Age < 30) {
    probability = 0.7; // higher probability for younger customers
  } else if (Age > 60) {
    probability = 0.3; // lower probability for older customers
  }

  return probability;
}

function average_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming higher credit score indicates higher financial stability and higher usage
    let creditScoreFactor = CreditScore / 1000;

    // Assuming older customers may have higher loyalty and hence higher usage
    let ageFactor = (Age - 20) / 100;

    // Assuming more tenure indicates higher loyalty and hence higher usage
    let tenureFactor = Tenure / 10;

    // Assuming customers with higher balance may be more likely to use the service more frequently
    let balanceFactor = Balance / 200000;

    // Assuming more products owned by the customer may indicate higher engagement with the service
    let productsFactor = NumOfProducts * 0.05;

    // Assuming active members are more likely to use the service regularly
    let activeMemberFactor = IsActiveMember === 1 ? 0.1 : 0;

    // Combining the factors to compute the probability
    let probability = (creditScoreFactor + ageFactor + tenureFactor + balanceFactor + productsFactor + activeMemberFactor) / 5;

    return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + average_monthly_usage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    