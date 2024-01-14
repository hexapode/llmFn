/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15631693, Surname=Pinto, CreditScore=705, Geography=France, Gender=Male, Age=39.0, Tenure=1, Balance=127570.93, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=180962.32.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Coefficients for logistic regression (random initial values)
  let coefficients = {
    CustomerId: 0.2,
    Surname: -0.3,
    CreditScore: 0.5,
    Geography: 0.7,
    Gender: -0.1,
    Age: 0.3,
    Tenure: 0.2,
    Balance: -0.4,
    NumOfProducts: 0.1,
    HasCrCard: 0.6,
    IsActiveMember: 0.4,
    EstimatedSalary: 0.8
  };

  // Sigmoid function
  function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
  }

  // Calculate the linear combination of input parameters and coefficients
  let linearCombination = 
    coefficients.CustomerId * CustomerId +
    coefficients.Surname * Surname.length +
    coefficients.CreditScore * CreditScore +
    coefficients.Geography * (Geography === 'Germany' ? 1 : 0) +
    coefficients.Gender * (Gender === 'Male' ? 1 : 0) +
    coefficients.Age * Age +
    coefficients.Tenure * Tenure +
    coefficients.Balance * Balance +
    coefficients.NumOfProducts * NumOfProducts +
    coefficients.HasCrCard * HasCrCard +
    coefficients.IsActiveMember * IsActiveMember +
    coefficients.EstimatedSalary * EstimatedSalary;

  // Predict churn probability using the sigmoid function
  let churnProbability = sigmoid(linearCombination);

  return churnProbability;
}
