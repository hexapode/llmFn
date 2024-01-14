/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Existing code...

  let surnameFactors = {
    O: 0.10,
    H: -0.07,
    K: 0.04,
    C: 0.06,
    G: -0.02,
    M: -0.01,
    F: -0.04,
    D: 0.00,
    T: 0.00,
    E: -0.03,
    V: -0.09,
    I: -0.05,
    S: -0.10,
    A: -0.04,
    N: -0.13,
    R: -0.10,
    Ch: 0.06,
    Ge: 0.05,
    Ma: 0.02,
    Es: -0.07,
    Ha: -0.09,
    Ts: -0.06
  };

  let firstLetters = Surname.substring(0, 2).toUpperCase();
  let surnameFactor = (surnameFactors[firstLetters] || -0.07) + (NumOfProducts > 2.00 ? 0.84 : -0.98) + (Tenure > 5.90 ? 0.06 : 0.10);
  
  // Existing code...

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
