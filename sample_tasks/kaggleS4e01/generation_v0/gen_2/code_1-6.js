/** // Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15794865, Surname=Tien, CreditScore=716, Geography=France, Gender=Male, Age=44.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=158313.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Calculating a novel combination of variables
  let novelCombo = NumOfProducts * HasCrCard - IsActiveMember;
  
  let churnScore = (CreditScore * 0.2) + (Age * 0.3) + (Balance * 0.25) + (Tenure* 0.25) + (novelCombo * 0.05);
  
  let churnProbability = churnScore / 1000;
  
  return churnProbability;
}
