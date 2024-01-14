/** // 0.7911642388772627 //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
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
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.05 : 0.15);
  
  let surnameFactors = {
    O: 0.12,
    H: -0.09,
    K: 0.05,
    C: -0.03,
    G: 0.08,
    M: 0.03,
    F: -0.06,
    R: -0.02,
    T: 0.09,
    E: -0.05
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || 0;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + surnameFactor;

  return churnProbability;
}
