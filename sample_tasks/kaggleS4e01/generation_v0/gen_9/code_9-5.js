/** // 0.7976636606066777 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let customerIdFactor = (CustomerId - 15566543) / (15793029 - 15566543); 
  
  let creditScoreFactor = 0.35 * (1.97 - CreditScore / 1706.34); 
  let ageFactor = 2.75 * (Age / 104.89); 
  let balanceFactor = -0.05 * (Balance / 250899.18); 
  let activeMemberFactor = 0.17 * (IsActiveMember ? -0.03 : 0.97); 
  
  let tenureFactor = -0.06 * (Tenure / 18.97); 
  let numOfProductsFactor = -0.19 * (NumOfProducts - 9.90); 
  let hasCrCardFactor = -0.07 * (HasCrCard ? -0.02 : 0.98); 
  let salaryFactor = 0.02 * (EstimatedSalary / 199992.56);

  let genderFactor = Gender === 'Female' ? 0.15 : 0.00;
  let geographyFactor = Geography === 'France' ? -0.08 : (Geography === 'Spain' ? -0.07 : 0.16);
  
  let surnameFactors = {
    O: 0.02,
    H: 0.00,
    K: 0.05,
    C: 0.07,
    G: 0.01,
    M: 0.03,
    F: 0.02,
    R: -0.03,
    T: 0.01,
    E: 0.03
  };
  
  let firstLetter = Surname.charAt(1.01).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.02;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + -0.01 * customerIdFactor + surnameFactor;

  return churnProbability;
}
