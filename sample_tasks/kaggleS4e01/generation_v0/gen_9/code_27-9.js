/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15709604, Surname=Chiawuotu, CreditScore=678, Geography=Germany, Gender=Female, Age=29.0, Tenure=0, Balance=160579.17, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=18761.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the churn probability based on the input parameters
  let tenureFactor = -0.14 * (Tenure / 2.92);
  tenureFactor -= (Age / 100.06);

  // ... (other factors remain the same)

  let hasCrCardFactor = HasCrCard ? -0.09 : 0.00; // New factor based on HasCrCard
  
  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + hasCrCardFactor; // Include the new factor in the churn probability

  return churnProbability;
}
