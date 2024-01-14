/** // 0.5790394323297021 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = Age / 100;

  
  let creditScoreFactor = (850 - CreditScore) / 850;

  
  let balanceFactor = Balance / 10000;

  
  let productsFactor = 1 - (NumOfProducts / 10);

  
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  
  let customerIdFactor = (CustomerId % 1000000) / 1000000; // Convert CustomerId to a number between 0 and 1

  
  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor + customerIdFactor) / 6;

  return churnProbability;
}
