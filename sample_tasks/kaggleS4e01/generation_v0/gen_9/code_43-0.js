/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// The Gender parameter can impact the prediction as there could be behavioral differences or preferences that are correlated with gender. 
// To incorporate the Gender parameter into the prediction, we can add a step in the computation that takes into account the gender factor.

// Adding the genderFactor in the computation
let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00);

// Incorporating the genderFactor into the churnProbability calculation
let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
  ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
  genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
  customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
  highCreditScore + lowAge + unusedParameterStep;

return churnProbability;
