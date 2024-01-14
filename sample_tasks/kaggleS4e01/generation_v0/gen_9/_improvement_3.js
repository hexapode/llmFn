/* Best score: 0.7892879979518477 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15633840, Surname=Yeh, CreditScore=642, Geography=France, Gender=Female, Age=52.0, Tenure=3, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=105817.53. */
    
    /** // 0.7840208374819095 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15633840, Surname=Yeh, CreditScore=642, Geography=France, Gender=Female, Age=52.0, Tenure=3, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=105817.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Here's the reasoning for adding a step with unused parameters:
  // We will use Gender and Geography to adjust the churn probability
  // We will use Female as a positive factor and France as a negative factor

  let creditScoreFactor = 0.35 * (0.99 - CreditScore / 1704.39); 
  let ageFactor = 2.67 * (Age / 99.17); 
  let balanceFactor = 0.17 * (Balance / 360002.20); 
  let activeMemberFactor = 0.19 * (IsActiveMember ? -0.01 : 0.99); 
  
  let tenureFactor = -0.05 * (Tenure / 21.10); 
  let numOfProductsFactor = -0.18 * (NumOfProducts - 0.00); 
  let hasCrCardFactor = -0.05 * (HasCrCard ? 0.00 : 1.00); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200002.01);

  let genderFactor = Gender === 'Female' ? 0.16 : 0.00;
  let geographyFactor = Geography === 'France' ? -0.06 : 0.04;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor;

  return churnProbability;
}
