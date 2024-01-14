/** // 0.7893300443030807 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15673392, Surname=Teng, CreditScore=583, Geography=France, Gender=Male, Age=31.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=189429.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let averageCustomerId = 15674933.00; 
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679805.09 - 15566541.99); 
  
  let creditScoreFactor = 0.37 * (0.98 - CreditScore / 1705.38); 
  let ageFactor = 2.78 * (Age / 98.06); 
  let balanceFactor = 0.16 * (Balance / 360002.19); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.06 * (Tenure / 18.98); 
  let numOfProductsFactor = -0.19 * (NumOfProducts - -0.01); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 220001.11);

  let genderFactor = Gender === 'Female' ? 0.15 : -0.01;
  let geographyFactor = Geography === 'France' ? -0.07 : 0.04;
  
  // Adding Surname initial letter as a factor
  let surnameFactor = Surname.charCodeAt(0) * 0.000001;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + 
      salaryFactor + genderFactor + geographyFactor + surnameFactor + 0 * customerIdFactor; // Updating the line to include surnameFactor

  return churnProbability;
}
