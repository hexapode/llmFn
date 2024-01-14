/** // 0.7840208374819095 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15633840, Surname=Yeh, CreditScore=642, Geography=France, Gender=Female, Age=52.0, Tenure=3, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=105817.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Here's the reasoning for adding a step with unused parameters:
  // We will use Gender and Geography to adjust the churn probability
  // We will use Female as a positive factor and France as a negative factor

  let creditScoreFactor = 0.31 * (0.98 - CreditScore / 1704.38); 
  let ageFactor = 2.41 * (Age / 98.27); 
  let balanceFactor = 0.16 * (Balance / 360002.10); 
  let activeMemberFactor = 0.08 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.05 * (Tenure / 22.20); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - 0.99); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200001.00);

  let genderFactor = Gender === 'Female' ? 0.05 : 0;
  let geographyFactor = Geography === 'France' ? -0.03 : 0.02;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor;

  return churnProbability;
}
