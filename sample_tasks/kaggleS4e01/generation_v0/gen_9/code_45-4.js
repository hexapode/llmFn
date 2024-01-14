/** // 0.7686559939326844 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15682268, Surname=Mironova, CreditScore=641, Geography=France, Gender=Male, Age=37.0, Tenure=0, Balance=132407.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=90177.3.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Calculate the tenure factor
  let tenureFactor = (-0.14 * (Tenure / 3.02)) + (Age / 136.36) + (NumOfProducts === 2 ? 0.03 : 0.00);
  
  // Calculate the credit score factor
  let creditScoreFactor = 0.31 * (1.93 - CreditScore / 1870.53);
  
  // Calculate the balance factor
  let balanceFactor = -0.07 * (Balance / 146417.46) + (NumOfProducts === 2 ? 0.04 : -0.17);
  
  // Calculate the age factor
  let ageFactor = 3.34 * (Age / 102.38) - (CreditScore / 5000.10) - (IsActiveMember * 0.16) + (EstimatedSalary > -170000.00 ? 0.06 : 0.09);
  
  // Calculate the gender factor
  let genderFactor = Gender === 'Female' ? 0.15 : -0.07;
  
  // Calculate the geography factor
  let geographyFactor = (Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02)) + (CreditScore > 702.00 ? 0.01 : 0.01);
  
  // Calculate the surname length factor
  let surnameLengthFactor = Surname.length / -501.20 + (NumOfProducts === 2 ? 0.04 : 0.00);
  
  // Calculate the churn probability
  let churnProbability = tenureFactor + creditScoreFactor + balanceFactor + ageFactor + genderFactor + geographyFactor + surnameLengthFactor;
  
  return churnProbability;
}

// Sample input
console.log(PredictExited(15682268, 'Mironova', 641, 'France', 'Male', 37.0, 0, 132407.51, 1, 1.0, 0.0, 90177.3)); // Output: 0.5789851805265212
