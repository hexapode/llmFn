/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// The Gender parameter could impact the prediction based on historical data indicating that gender might have an influence on the customer's decision to churn. 
// We can add a step in the computation to include the parameter Gender.

// Adding Gender factor calculation in the churnProbability calculation
let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00);

// Including genderFactor in the churnProbability calculation
let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
  ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
  genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
  customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
  highCreditScore + lowAge + unusedParameterStep;

return churnProbability;
