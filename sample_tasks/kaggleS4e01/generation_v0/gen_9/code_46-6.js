/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous code remains unchanged)

  let surnameFactors = {
    T: 0.00,
    H: -0.07,
    R: -0.10,
    E: -0.03,
    V: -0.09,
    I: -0.05,
    S: -0.10,
    A: -0.04,
    N: -0.13,
    O: -0.01,  
    K: 0.02,
    C: 0.06,
    G: -0.02,
    M: -0.01,
    F: -0.04,
    D: 0.00
  };
  let firstLetter = Surname.charAt(1).toUpperCase();
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2 ? 0.84 : -0.98) + (Tenure > 5.90 ? 0.06 : 0.10);

  // Include the surnameFactor in the churnProbability calculation
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep + surnameFactor;

  return churnProbability;
}
