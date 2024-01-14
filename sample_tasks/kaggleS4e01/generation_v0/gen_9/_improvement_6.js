/* Best score: 0.7963937723251221 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15582361, Surname=Hs?, CreditScore=775, Geography=Spain, Gender=Male, Age=37.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=142989.35. */
    
    /** // 0.7880488728669435 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15582361, Surname=Hs?, CreditScore=775, Geography=Spain, Gender=Male, Age=37.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=142989.35.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let averageCustomerId = 15674933.00; 
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679805.09 - 15566541.99); 
  
  let creditScoreFactor = 0.38 * (0.98 - CreditScore / 1706.37); 
  let ageFactor = 2.87 * (Age / 106.78); 
  let balanceFactor = -0.01 * (Balance / 360002.19); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.06 * (Tenure / 18.89); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - -0.01); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 220001.21);

  let genderFactor = Gender === 'Female' ? 0.16 : 0.01;
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.05 : 0.15); // Added Spain as an extra factor
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor; 

  return churnProbability;
}
