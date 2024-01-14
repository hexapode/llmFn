
function factor_1_duration_of_membership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming a linear relationship between tenure and loyalty, we can calculate a loyalty score based on tenure
  const loyaltyScore = Math.min(Tenure / 10, 1); // Normalize tenure to a score between 0 and 1

  // Additionally, we can consider the age of the customer to add to the loyalty score
  const ageFactor = Math.min(Age / 100, 1); // Normalize age to a score between 0 and 1

  // Combine the tenure and age factors to calculate the overall loyalty probability
  const loyaltyProbability = (loyaltyScore + ageFactor) / 2; // Taking the average of both factors

  return loyaltyProbability;
}

function factor_2_customer_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assume that the probability of customer engagement increases with a higher credit score
    let creditScoreProbability = CreditScore / 1000;

    // Assume that older customers are more likely to engage with the service
    let ageProbability = Math.min(1, Age / 100);

    // Assume that customers with a higher balance are more likely to be engaged
    let balanceProbability = Math.min(1, Balance / 200000);

    // Assume that customers with more products are more engaged
    let productsProbability = NumOfProducts / 4;

    // Assume that active members are more likely to engage with the service
    let activeMemberProbability = IsActiveMember;

    // Assume that customers with a higher estimated salary are more likely to engage with the service
    let salaryProbability = Math.min(1, EstimatedSalary / 250000);

    // Combine probabilities using an average
    let finalProbability = (creditScoreProbability + ageProbability + balanceProbability + productsProbability + activeMemberProbability + salaryProbability) / 6;

    return finalProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_duration_of_membership(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + factor_2_customer_engagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    