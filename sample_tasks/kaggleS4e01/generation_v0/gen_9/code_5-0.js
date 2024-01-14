/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let averageCustomerId = 15674933.00; 
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679805.09 - 15566541.99); 

  let surnameFactor = 0;
  if (Surname === 'Okwudilichukwu' || Surname === 'Okwudiliolisa' || Surname === 'Chiemenam' || Surname === 'Chukwuebuka' || Surname === 'Chukwuemeka') {
    surnameFactor = 0.1;
  } else if (Surname === 'Hsueh' || Surname === 'Kao' || Surname === 'Ch'ang' || Surname === 'Tung' || Surname === 'Ts'ai' || Surname === 'Ts'ui') {
    surnameFactor = -0.05;
  } else {
    surnameFactor = 0;
  }

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
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + surnameFactor + 0.00 * customerIdFactor; 

  return churnProbability;
}
