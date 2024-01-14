/** // 0.7850238563870772 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15654211, Surname=Wei, CreditScore=559, Geography=France, Gender=Female, Age=33.0, Tenure=1, Balance=121570.31, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=101495.0.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Calculate the factors based on the input parameters
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
  
  // Adding an additional step in computation
  let additionalStepFactor = (CustomerId % 100000) / 500000; // Impact of CustomerId on churn prediction

  // Calculating the churn probability
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + additionalStepFactor;

  return churnProbability;
}
