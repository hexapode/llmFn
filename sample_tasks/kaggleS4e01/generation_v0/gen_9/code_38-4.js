/** // 0.5839761357037208 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15631512, Surname=Ting, CreditScore=538, Geography=Spain, Gender=Female, Age=36.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=177834.79.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Decision tree algorithm
  let churnProbability = 0;

  // Conditions based on the input parameters to form the decision tree
  if (Geography === 'Germany' && Age > 40) {
    churnProbability = 0.8;
  } else if (CreditScore < 600 && EstimatedSalary < 100000) {
    churnProbability = 0.9;
  } else if (Balance === 0 && NumOfProducts === 2) {
    churnProbability = 0.3;
  } else {
    churnProbability = 0.1;
  }

  return churnProbability;
}
