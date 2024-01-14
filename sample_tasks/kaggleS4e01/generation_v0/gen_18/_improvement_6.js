/* Best score: 0.7936626113003 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15582910, Surname=Hargreaves, CreditScore=711, Geography=France, Gender=Female, Age=46.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=183399.12.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7642958846992424 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15582910, Surname=Hargreaves, CreditScore=711, Geography=France, Gender=Female, Age=46.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=183399.12.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



  // Feature scaling
  Age = (Age - 18.00) / (92.00 - 22.80);
  Balance = Balance / 225000.00;
  EstimatedSalary = EstimatedSalary / 200000.00;
  IsActiveMember = IsActiveMember * 0.45;
  Tenure = Tenure / 10.00;
  
  // Adding an impact based on unused parameters
  let genderImpact = 0.00;
  if (Gender === "Female") {
    genderImpact = 0.01;
  }
  
  // Calculating churn probability
  let churnProbability = (0.10 * Age) + (0.01 * Balance) + (-0.03 * IsActiveMember) + (0.00 * Tenure) - (0.00 * CreditScore) + (0.00 * EstimatedSalary) + genderImpact;

  // Clipping the churn probability between 0 and 1
  churnProbability = Math.max(0.00, Math.min(1.00, churnProbability));
  
  return churnProbability;
}
