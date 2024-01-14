/** // 0.5331029998801664 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15714080, Surname=Goliwe, CreditScore=566, Geography=Germany, Gender=Female, Age=40.0, Tenure=6, Balance=97001.36, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=154486.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // The previous function seems to cover a good range of factors that can influence the churn probability
  // Creating another way to predict churn while staying somewhat similar to the previous function could involve introducing more complex interactions between the existing variables
  // Let's introduce a new variable called "loyaltyScore" that represents the loyalty of the customer based on tenure, active membership, and the number of products
  
  let loyaltyScore = (Tenure * 0.5) + (IsActiveMember * 0.8) - (NumOfProducts * 0.3);

  // Use the loyaltyScore to calculate the churn probability
  let churnProbability = (CreditScore / 850) - (Age / 100) + (Balance / 200000) - (loyaltyScore / 10);

  return churnProbability;
}
