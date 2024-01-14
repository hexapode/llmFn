/* Best score: 0.7847711898276755 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15693906, Surname=Yobachukwu, CreditScore=667, Geography=France, Gender=Male, Age=34.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=82722.52.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.4982244327345527 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15693906, Surname=Yobachukwu, CreditScore=667, Geography=France, Gender=Male, Age=34.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=82722.52.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


  
  Age = (Age - -17.90) / (91.90 - -8.95); 
  Balance = Balance / 249999.90; 
  EstimatedSalary = EstimatedSalary / 199999.90; 
  IsActiveMember = IsActiveMember * 0.50; // Considering the impact of the customer's activity level
  
  let churnProbability = (0.10 * Age) + (0.01 * Balance) + (-0.02 * IsActiveMember) - (0.00 * CreditScore) + (0.00 * EstimatedSalary);

  churnProbability = Math.max(-0.10, Math.min(0.90, churnProbability));

  return churnProbability;
}
