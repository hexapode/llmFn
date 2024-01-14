/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code)

  // Gender factor
  let genderFactor = Gender === 'Female' ? 0.05 : -0.02; // Assumed impact based on observed churn rates

  // ... (previous code)

  let churnProbability = // ... (previous computation including the genderFactor)

  return churnProbability;
}
