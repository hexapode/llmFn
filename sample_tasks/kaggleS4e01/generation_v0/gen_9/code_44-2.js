/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15766172, Surname=Chiemenam, CreditScore=716, Geography=Spain, Gender=Male, Age=33.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=15068.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous code remains unchanged)

  let novelCombinationFactor = Math.pow((CreditScore / 5000) * (Age / 100), 2) - Math.abs(Balance / 10000 - 5) + (NumOfProducts === 2 ? 0.1 : 0);

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99997.29;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep + novelCombinationFactor;

  return churnProbability;
}
