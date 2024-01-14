/* 0.735693559860903 */

function factor_1_customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that the probability of a customer churning decreases with age
  // We can use a simple linear function to calculate the probability based on the age of the customer
  // We will scale the age from 0 to 1 and then inverse it to represent the decreasing probability with increasing age

  const maxAge = 100; // Maximum possible age
  const minAge = 18; // Minimum possible age
  const scaledAge = (Age - minAge) / (maxAge - minAge); // Scale the age from 0 to 1
  const churnProbability = 1 - scaledAge; // Inverse the scaled age to represent decreasing probability with increasing age

  return churnProbability;
}

function factor_2_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Define some base factors for customer satisfaction
  let qualityOfServiceFactor = 0.3;
  let pricingFactor = 0.2;
  let overallExperienceFactor = 0.5;

  // Some basic checks
  if (IsActiveMember === 1 && NumOfProducts === 1 && CreditScore > 700) {
    qualityOfServiceFactor += 0.1;
    pricingFactor += 0.1;
  }
  if (Balance > 100000) {
    pricingFactor += 0.2;
  }
  if (Geography === "France" && Age > 30 && Age < 50) {
    overallExperienceFactor += 0.1;
  }

  // calculate the overall customer satisfaction probability
  let customerSatisfactionProbability = (qualityOfServiceFactor + pricingFactor + overallExperienceFactor) / -3;

  return customerSatisfactionProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return factor_1_customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
 + factor_2_customer_satisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1
;
}
    