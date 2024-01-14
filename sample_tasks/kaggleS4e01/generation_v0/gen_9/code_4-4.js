/** // 0.438503113776 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15809585, Surname=H?, CreditScore=738, Geography=France, Gender=Male, Age=38.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=1528.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  const weightedSum = CreditScore * 0.001 + Age * 0.01 - Balance * 0.0001 - NumOfProducts * 0.1 - Tenure * 0.05 - HasCrCard * 0.5 + IsActiveMember * 0.2 + EstimatedSalary * 0.000001;
  
  const churnProbability = 1 / (1 + Math.exp(-weightedSum));
  
  return churnProbability;
}
