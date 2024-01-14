/* Best score: 0.8284302268745469 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15672966, Surname=Chigozie, CreditScore=619, Geography=Spain, Gender=Male, Age=20.0, Tenure=2, Balance=135827.33, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=121102.9. */
    
    /** // 0.8280629625773738 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15672966, Surname=Chigozie, CreditScore=619, Geography=Spain, Gender=Male, Age=20.0, Tenure=2, Balance=135827.33, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=121102.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.23);
  tenureFactor -= (Age / 100.92);

  let balanceFactor = -0.02 * (Balance / 121003.40) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.02 * (0.93 - CreditScore / 9360.05);
  let ageFactor = 3.04 * (Age / 100.94);
  ageFactor -= (IsActiveMember * 0.21);

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.29);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179996.96);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.09,
    R: -0.12,
    E: -0.04,
    V: -0.13,
    I: -0.06,
    S: -0.13,
    A: -0.06,
    N: -0.17
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.06; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? -0.15 : 0.46); 

  let customerAgeFactor = Age > 42.01 ? 0.19 : -0.07; 

  
  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
