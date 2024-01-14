/** // 0.597163517910845 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Other factors calculation
  let creditScoreFactor = -0.60 * (0.99 - CreditScore / 851.10); 
  let ageFactor = 1.41 * (Age / 98.39); 
  let balanceFactor = 0.08 * (Balance / 180001.96); 
  let activeMemberFactor = 0.09 * (IsActiveMember ? -0.01 : 0.99); 

  // CustomerId factor calculation
  let hashCode = 0;
  for (let i = 0; i < CustomerId.length; i++) {
    let char = CustomerId.charCodeAt(i);
    hashCode = ((hashCode<<5)-hashCode)+char;
  }
  let idFactor = (hashCode % 100) / 100;

  // Churn probability calculation
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + idFactor;

  return churnProbability;
}
