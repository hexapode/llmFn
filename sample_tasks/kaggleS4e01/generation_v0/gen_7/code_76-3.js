/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15588854, Surname=King, CreditScore=763, Geography=France, Gender=Female, Age=31.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=143538.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  const coefficients = {
      CreditScore: -0.004,
      Age: 0.07,
      Tenure: -0.12,
      Balance: 0.00004,
      NumOfProducts: -0.64,
      HasCrCard: -0.22,
      IsActiveMember: -1.10,
      EstimatedSalary: -0.000001,
      GeographyImpact: 0.31,
      GenderImpact: -0.18,
      SurnameImpact: 0.03,
      AdditionalImpact: 0.01,
      NewParameterImpact: -0.02
  };

  let additionalVariable = Math.abs(CreditScore - 22.76) / 397.43 + NumOfProducts * 0.05;
  let ageBalanceRatio = Age * 0.3 / (Balance + 0.01);
  let tenureImpact = Tenure * (IsActiveMember === 1.0 ? 1.5 : 1.0) * coefficients.Tenure;

  let surnameLength = Surname.length;
  let surnameImpact = surnameLength > 5 ? 0.06 : -0.08;

  let linearCombination = (
      coefficients.CreditScore * CreditScore +
      coefficients.Age * Age +
      coefficients.Tenure * tenureImpact +
      coefficients.Balance * Balance +
      coefficients.NumOfProducts * NumOfProducts +
      coefficients.HasCrCard * HasCrCard +
      coefficients.IsActiveMember * IsActiveMember +
      coefficients.EstimatedSalary * EstimatedSalary +
      coefficients.GeographyImpact * (Geography === 'Germany' ? 0.6 : -0.3) +
      coefficients.GenderImpact * (Gender === 'Male' ? 0.25 : -0.24) +
      coefficients.SurnameImpact * surnameImpact +
      coefficients.AdditionalImpact * additionalVariable +
      coefficients.NewParameterImpact * ageBalanceRatio
  );

  const probability = 1.0 / (1.0 + Math.exp(-linearCombination));

  return probability;
}
