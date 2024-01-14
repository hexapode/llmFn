/** // 0.7881508429441234 //**/
/**
I try on the following input and it returned 0.9974905628254525" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15776096, Surname=Dike, CreditScore=555, Geography=Spain, Gender=Male, Age=37.0, Tenure=6, Balance=115725.24, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=157549.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let averageCustomerId = 15674933.00; 
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679805.09 - 15566541.99); 
  
  let creditScoreFactor = 0.37 * (1.98 - CreditScore / 1706.46); 
  let ageFactor = 2.86 * (Age / 105.89); 
  let balanceFactor = -0.04 * (Balance / 360002.19); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.05 * (Tenure / 18.88); 
  let numOfProductsFactor = -0.19 * (NumOfProducts - 0.01); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 220001.12);

  let genderFactor = Gender === 'Female' ? 0.16 : -0.16; // Changed the genderFactor calculation

  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.06 : 0.16);
  
  let surnameFactors = {
    O: 0.03,
    H: 0.00,
    K: 0.06,
    C: 0.08,
    G: 0.02,
    M: 0.04,
    F: 0.03,
    R: -0.02,
    T: -0.00,
    E: 0.04
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase(); // Changed the retrieval of the first letter of the surname
  let surnameFactor = surnameFactors[firstLetter] || -0.01;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + surnameFactor;

  return churnProbability;
}
