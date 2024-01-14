/** // 0.7963572882102251 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15796958, Surname=Fleming, CreditScore=723, Geography=France, Gender=Female, Age=55.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=150694.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Reasoning: We are using the absolute difference between CustomerId and the average CustomerId as a factor in the churn probability calculation.
  let averageCustomerId = 15674933.00; 
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679805.09 - 15566541.99); 

  // New Factor: Adding Surname as a factor to the churn probability calculation
  let surnameLengthFactor = 0.02 * (Surname.length / 15); 

  let creditScoreFactor = 0.38 * (0.98 - CreditScore / 1706.37); 
  let ageFactor = 2.87 * (Age / 106.78); 
  let balanceFactor = -0.01 * (Balance / 360002.19); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.06 * (Tenure / 18.89); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - -0.01); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 220001.21);

  let genderFactor = Gender === 'Female' ? 0.16 : 0.01;
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.05 : 0.15); 
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + surnameLengthFactor + 0.00 * customerIdFactor; 

  return churnProbability;
}

PredictExited(15796958, "Fleming", 723, "France", "Female", 55.0, 7, 0.0, 2, 1.0, 1.0, 150694.58);
// Output: 0.4072703998398285
