/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Gender=Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpactFactor = (Gender === 'Female' ? 0.08 : -0.04);

let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
  ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
  genderFactor + genderImpactFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
  customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
  highCreditScore + lowAge + unusedParameterStep;

return churnProbability;

// ... (rest of the code)
