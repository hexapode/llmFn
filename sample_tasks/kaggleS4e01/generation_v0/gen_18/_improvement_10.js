/* Best score: 0.8018235971198197 */


    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15791958, Surname=Hs?eh, CreditScore=539, Geography=France, Gender=Female, Age=53.0, Tenure=1, Balance=154872.08, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=51561.57.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8011678862037624 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15791958, Surname=Hs?eh, CreditScore=539, Geography=France, Gender=Female, Age=53.0, Tenure=1, Balance=154872.08, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=51561.57.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// Function for logistic regression
function sigmoid(z) {
  return 1.00 / (1.00 + Math.exp(-z));
}

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



  // Normalize input features
  Age = (Age - 18.00) / (101.00 - 22.09);
  Balance = Balance / 225000.00;
  EstimatedSalary = EstimatedSalary / 200000.00;
  IsActiveMember = IsActiveMember * 0.45;
  Tenure = Tenure / 10.00;

  let genderImpact = (Gender === "Female") ? 0.01 : 0.00;
  let geographyImpact = (Geography === "Germany") ? 0.01 : 0.00;

  // Coefficients for logistic regression
  const coefficients = {
    age: 0.10,
    balance: 0.00,
    isActiveMember: -0.03,
    tenure: 0.00,
    creditScore: 0.00,
    estimatedSalary: 0.00,
    genderImpact: genderImpact,
    geographyImpact: geographyImpact
  };

  // Calculate the probability using logistic regression
  let z = coefficients.age * Age + coefficients.balance * Balance + coefficients.isActiveMember * IsActiveMember +
    coefficients.tenure * Tenure + coefficients.creditScore * CreditScore + coefficients.estimatedSalary * EstimatedSalary +
    coefficients.genderImpact + coefficients.geographyImpact;

  let churnProbability = sigmoid(z);
  
  return churnProbability;
}
