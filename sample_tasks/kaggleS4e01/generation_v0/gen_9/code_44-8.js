/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Gender=Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous code remains the same)

  let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00);
  // new step using the Gender parameter
  let genderImpact = Gender === 'Female' ? 0.05 : -0.03;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep + genderImpact;

  return churnProbability;
}