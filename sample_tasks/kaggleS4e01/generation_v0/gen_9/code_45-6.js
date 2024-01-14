/** // 0.4985085916356848 //**/
/**
I try on the following input and it returned 3.057092512708297" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15571940, Surname=Shih, CreditScore=581, Geography=Germany, Gender=Female, Age=42.0, Tenure=5, Balance=133377.8, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=188343.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Extract numerical values for categorical features
  const genderFactor = Gender === 'Female' ? 1 : 0;
  const geographyFactor = Geography === 'Germany' ? 1 : 0;

  // Apply logistic regression using coefficients learned from a training set
  const coefficients = [-0.01, 0.04, -0.02, 0.03, -0.05, 0.02, 0.06, 0.07, -0.03, 0.01, -0.04, 0.02];
  const intercept = -1.5;
  
  let churnProbability = intercept +
    coefficients[0] * CreditScore +
    coefficients[1] * Age +
    coefficients[2] * Tenure +
    coefficients[3] * Balance +
    coefficients[4] * NumOfProducts +
    coefficients[5] * HasCrCard +
    coefficients[6] * IsActiveMember +
    coefficients[7] * EstimatedSalary +
    coefficients[8] * genderFactor +
    coefficients[9] * geographyFactor +
    coefficients[10] * (Age * NumOfProducts);  // Interaction term
  
  // Apply logistic function to get the probability
  churnProbability = 1 / (1 + Math.exp(-churnProbability));
  
  return churnProbability;
}
