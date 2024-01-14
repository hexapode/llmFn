/** // 0.7567687972812999 //**/
/**
I try on the following input and it returned 2.0734352563974516" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15798532, Surname=Wang, CreditScore=616, Geography=France, Gender=Male, Age=39.0, Tenure=5, Balance=139562.05, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=78879.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Logistic regression coefficients
  const coefficients = {
    intercept: -2.362,
    creditScore: -0.0006,
    age: 0.072,
    tenure: -0.04,
    balance: 0.000003,
    numOfProducts: -0.108,
    hasCrCard: -0.032,
    isActiveMember: -1.049,
    estimatedSalary: 0.000001,
    geography_France: -0.673,
    geography_Spain: 0.051,
    gender_Male: 0.5
  };

  // Calculate the linear combination of input and coefficients
  let linearCombination =
    coefficients.intercept +
    coefficients.creditScore * CreditScore +
    coefficients.age * Age +
    coefficients.tenure * Tenure +
    coefficients.balance * Balance +
    coefficients.numOfProducts * NumOfProducts +
    coefficients.hasCrCard * HasCrCard +
    coefficients.isActiveMember * IsActiveMember +
    coefficients.estimatedSalary * EstimatedSalary;

  if (Geography === 'France') {
    linearCombination += coefficients.geography_France;
  } else if (Geography === 'Spain') {
    linearCombination += coefficients.geography_Spain;
  }

  if (Gender === 'Male') {
    linearCombination += coefficients.gender_Male;
  }

  // Calculate the probability of churning using the logistic function
  const churnProbability = 1 / (1 + Math.exp(-linearCombination));

  return churnProbability;
}
