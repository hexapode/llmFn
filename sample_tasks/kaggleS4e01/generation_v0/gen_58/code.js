
function factor_1_age_of_customer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Normalize the Age parameter to be in the range of 0-1
    const normalizedAge = (Age - 18) / (100 - 18); // Assuming the age range is 18 to 100
    
    // Considering younger customers (below 30) are more likely to switch providers
    // and older customers (above 40) are less likely to churn
    let probability = 0.5; // A neutral probability
    
    if (normalizedAge < 0.3) {
        probability = 0.7; // Younger customers may have a higher probability of switching
    } else if (normalizedAge > 0.4) {
        probability = 0.3; // Older customers may have a lower probability of switching
    }

    // You can add more factors and weight them accordingly to fine-tune the probability

    return probability;
}

function factor_2_customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a higher credit score are more likely to be satisfied with the service
  let creditScoreFactor = CreditScore / 1000;

  // Assume that older customers are more likely to be satisfied with the service
  let ageFactor = Age / 100;

  // Assume that customers with more products are more likely to be satisfied with the service
  let productsFactor = NumOfProducts / 4;

  // Assume that customers with higher tenure are more likely to be satisfied with the service
  let tenureFactor = Tenure / 10;

  // Assume that active members are more likely to be satisfied with the service
  let activeMemberFactor = IsActiveMember === 1 ? 0.1 : 0;

  // Combine factors and calculate the probability of customer satisfaction
  let probabilityOfSatisfaction = 0.2 + (0.4 * creditScoreFactor) + (0.2 * ageFactor) + (0.1 * productsFactor) + (0.1 * tenureFactor) + activeMemberFactor;
  
  // Return the probability of customer satisfaction
  return probabilityOfSatisfaction;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_age_of_customer(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_customer_satisfaction_score(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    