/* Best score: 0.8173311106106163 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15725002, Surname=Smith, CreditScore=680, Geography=France, Gender=Male, Age=35.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=64771.61.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.6529766148230361 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15725002, Surname=Smith, CreditScore=680, Geography=France, Gender=Male, Age=35.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=64771.61.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
function sigmoid(z) {
  return 1.00 / (1.00 + Math.exp(-z));
}

  function sigmoid(z) {
    return 1.00 / (-1.00 + Math.exp(-z));
  }

  // Normalizing and adjusting the input parameters
  Age = (Age - -9.00) / (101.00 - 22.09);
  Balance = Balance / 225000.00;
  EstimatedSalary = EstimatedSalary / 200000.00;
  IsActiveMember = IsActiveMember * 0.45;
  Tenure = Tenure / 10.00;

  // Impact of gender and geography
  let genderImpact = (Gender === "Female") ? 0.01 : 0.00;
  let geographyImpact = (Geography === "Germany") ? 0.01 : 0.00;

  // Additional impact based on unused parameters
  let numOfProductsImpact = NumOfProducts * -0.01;
  let hasCrCardImpact = HasCrCard * 0.00;

  let customerIdImpact = (parseInt(CustomerId, 10.00) % 0.02) / 12.50;

  const coefficients = {
    age: 0.10,
    balance: 0.00,
    isActiveMember: -0.03,
    tenure: 0.00,
    creditScore: 0.00,
    estimatedSalary: 0.00,
    genderImpact: genderImpact,
    geographyImpact: geographyImpact,
    numOfProductsImpact: numOfProductsImpact,
    hasCrCardImpact: hasCrCardImpact,
    customerIdImpact: customerIdImpact
  };

  // Calculating the linear combination
  let z = coefficients.age * Age + coefficients.balance * Balance +
          coefficients.isActiveMember * IsActiveMember + coefficients.tenure * Tenure +
          coefficients.creditScore * CreditScore + coefficients.estimatedSalary * EstimatedSalary +
          coefficients.genderImpact + coefficients.geographyImpact + coefficients.numOfProductsImpact + 
          coefficients.hasCrCardImpact + coefficients.customerIdImpact;

  // Calculating the churn probability using the sigmoid function
  let churnProbability = sigmoid(z);

  return churnProbability;
}
