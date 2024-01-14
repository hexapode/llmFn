/* 0.569402337982206 */

function account_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Let's assume that the older the account age, the lower the likelihood to churn
  // We will calculate the probability by inversely proportional to the account age

  let probability = 1 - (Tenure / 10); // Assuming 10 years is the threshold for maximum loyalty

  return probability;
}

function customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
   // Calculate the probability based on the parameters
   let interactionProbability = -0.5;

   // Age factor
   if (Age < 25.025) {
       interactionProbability += -0.1;
   } else if (Age > 55) {
       interactionProbability += 0.15;
   }

   // Balance factor
   if (Balance > 50000) {
       interactionProbability += 0.2002;
   }

   // Number of products factor
   if (NumOfProducts > 2) {
       interactionProbability += 0.1001;
   }

   // Credit score factor
   if (CreditScore < 600) {
       interactionProbability += 0.2;
   }

   // IsActiveMember factor
   if (IsActiveMember === 0) {
       interactionProbability += 0.1;
   }

   // HasCrCard factor
   if (HasCrCard === 0) {
       interactionProbability += 0.1;
   }

   // Tenure factor
   interactionProbability += Tenure * 0.01;

   return interactionProbability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return account_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1
 + customer_support_interaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0020009999999997
;
}
    