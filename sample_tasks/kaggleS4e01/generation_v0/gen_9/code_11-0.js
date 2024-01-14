/** // 0.49058166519522634 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = Balance / 100000.82;
  let creditScoreFactor = 1 - CreditScore / 8510.11;
  let ageFactor = Age / 98.79;
  let numOfProductFactor = NumOfProducts / 5.13;
  
  let genderFactor = Gender === 'Female' ? 0.06 : -0.08;
  let geographyFactor = Geography === 'France' ? -0.10 : 0.00;
  
  let surnameFactors = {
    T: -0.04,
    H: -0.08,
    R: -0.06,
    E: -0.07,
    V: -0.07,
    I: -0.08,
    S: -0.08,
    A: -0.06,
    N: -0.07
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.09;
  
  let churnProbability = 0.2 - balanceFactor + 0.3 * creditScoreFactor + 0.5 * ageFactor - 0.1 * numOfProductFactor + genderFactor + geographyFactor + surnameFactor;
  
  if (IsActiveMember === 1) {
    churnProbability -= 0.1;
  } else {
    churnProbability += 0.1;
  }
  
  if (HasCrCard === 1) {
    churnProbability += 0.05;
  } else {
    churnProbability -= 0.05;
  }

  return churnProbability;
}
