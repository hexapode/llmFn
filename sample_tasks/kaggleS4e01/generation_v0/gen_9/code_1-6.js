/** // 0.5883407729888862 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15615456, Surname=Nwankwo, CreditScore=667, Geography=France, Gender=Male, Age=47.0, Tenure=0, Balance=108117.5, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=126469.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Calculate weighted factors for CreditScore, Age, Balance, and ActiveMember status
  let creditScoreFactor = 0.3 * (1 - CreditScore / 850); // Weighted factor for CreditScore
  let ageFactor = 0.4 * (Age / 100); // Weighted factor for Age
  let balanceFactor = 0.2 * (Balance / 100000); // Weighted factor for Balance
  let activeMemberFactor = 0.1 * (IsActiveMember ? 0 : 1); // Weighted factor for ActiveMember status
  
  // Calculate churn probability using the weighted factors
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor;

  return churnProbability;
}
