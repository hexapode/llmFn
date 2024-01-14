/** // 0.6845770244237944 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  const coefficients = {
    CreditScore: -0.004,
    Age: -0.01,
    Tenure: -0.05,
    NumOfProducts: -0.73,
    HasCrCard: -0.35,
    IsActiveMember: -1.73,
    GeographyImpact: 0.46,
    GenderImpact: -0.21,
  };

  let geographyImpact = 0;
  if (Geography === 'Germany') {
    geographyImpact = 0.2;
  } else if (Geography === 'Spain') {
    geographyImpact = -0.2;
  }

  const genderImpact = Gender === 'Male' ? 0.1 : -0.1;

  const linearCombination =
    coefficients.CreditScore * CreditScore +
    coefficients.Age * Age +
    coefficients.Tenure * Tenure +
    coefficients.NumOfProducts * NumOfProducts +
    coefficients.HasCrCard * HasCrCard +
    coefficients.IsActiveMember * IsActiveMember +
    coefficients.GeographyImpact * geographyImpact +
    coefficients.GenderImpact * genderImpact;

  const probability = 1 / (1 + Math.exp(-linearCombination));
  return probability;
}
