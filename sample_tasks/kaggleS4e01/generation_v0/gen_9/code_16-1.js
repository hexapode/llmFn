/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous computation)

  let surnameFactors = {
    O: -0.02, // Okwudilichukwu, Okwudiliolisa
    H: -0.07, // Hsueh, Hargreaves
    K: -0.13, // Kao, Kao
    C: -0.04, // Chiemenam, Ch'ang, Chukwuebuka, Cattaneo, Chiu, Chukwuemeka
    G: -0.14, // Genovese
    R: -0.06, // Rossi
    T: 0.03, // Ts'ai, Ts'ui
    M: 0.05, // Manna, Macdonald
    E: 0.08, // Esquivel
    F: 0.02, // Fokine
  };
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.06; 
  
  // ... (previous computation)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
