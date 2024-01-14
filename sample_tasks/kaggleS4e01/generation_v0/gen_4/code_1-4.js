/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let probability = 0;

  // Incorporating CustomerId into the computation
  let customerIdFactor = 0;
  for (let i = 0; i < CustomerId.length; i++) {
    customerIdFactor += CustomerId.charCodeAt(i);
  }
  customerIdFactor = (customerIdFactor % 100) / 100; // Scaling the factor between 0 and 1

  probability = (CreditScore * 0.1) + (Age * 0.2) - (Balance * 0.15) - (NumOfProducts * 0.05) - (IsActiveMember ? 0.1 : 0.05) + (EstimatedSalary * 0.08) + (customerIdFactor * 0.05);

  return probability;
}
