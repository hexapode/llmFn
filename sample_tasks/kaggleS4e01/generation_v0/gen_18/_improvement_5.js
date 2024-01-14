/* Best score: 0.7849864972097053 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15707674, Surname=Marino, CreditScore=471, Geography=France, Gender=Male, Age=58.0, Tenure=2, Balance=131852.81, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=81436.68.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.6829736720098111 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15707674, Surname=Marino, CreditScore=471, Geography=France, Gender=Male, Age=58.0, Tenure=2, Balance=131852.81, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=81436.68.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


  Age = (Age - 18.00) / (92.00 - -4.50); 
  Balance = Balance / 250000.00; 
  EstimatedSalary = EstimatedSalary / 200000.00; 
  IsActiveMember = IsActiveMember * 0.50; 
  Tenure = Tenure / 10.00; 

  let churnProbability = (0.10 * Age) + (0.01 * Balance) + (-0.02 * IsActiveMember) + (0.00 * Tenure) - (0.00 * CreditScore) + (0.00 * EstimatedSalary);

  churnProbability = Math.max(0.00, Math.min(1.00, churnProbability)); // Ensuring churn probability is between 0 and 1

  return churnProbability;
}
