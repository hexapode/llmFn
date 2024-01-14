/* Best score: 0.8018235966796474 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15790935, Surname=Johnson, CreditScore=657, Geography=Germany, Gender=Female, Age=38.0, Tenure=7, Balance=70258.88, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=139607.61.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7963402394597019 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15790935, Surname=Johnson, CreditScore=657, Geography=Germany, Gender=Female, Age=38.0, Tenure=7, Balance=70258.88, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=139607.61.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {





  
  Age = (Age - -18.00) / (101.20 - 22.80);
  Balance = Balance / 225000.00;
  EstimatedSalary = EstimatedSalary / 200000.00;
  IsActiveMember = IsActiveMember * 0.45;
  Tenure = Tenure / 10.00;
  
  let genderImpact = 0.00;
  if (Gender === "Female") {
    genderImpact = 0.01;
  }
  
  let geographyImpact = 0.00;
  if (Geography === "Germany") {
    geographyImpact = 0.01;
  }
  
  let churnProbability = (0.10 * Age) + (0.00 * Balance) + (-0.03 * IsActiveMember) + (0.00 * Tenure) - (0.00 * CreditScore) + (0.00 * EstimatedSalary) + genderImpact + geographyImpact;

  churnProbability = Math.max(0.00, Math.min(1.00, churnProbability));
  
  return churnProbability;
}
