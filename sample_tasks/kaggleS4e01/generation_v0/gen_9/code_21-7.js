/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous calculations)

  // Surname impact calculation
  let surnameFactors = {
    O: -0.02, // Okwudilichukwu, Okwudiliolisa
    H: -0.09, // Hsueh, Hargreaves
    K: 0.01,  // Kao, Chiemenam, Chukwuebuka, Chukwuemeka
    G: -0.02, // Genovese
    C: 0.07,  // Ch'ang, Cattaneo, Chiu, Chiemenam, Chukwuebuka, Chukwuemeka
    R: -0.10, // Rossi
    T: -0.02, // Ts'ai, Ts'ui, Tseng, Tung
    M: -0.01, // Macdonald, Manna
    F: -0.04, // Fokine
    E: -0.04, // Esquivel
    D: -0.11  // D'Morte
  };
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.08;

  // ... (remaining calculations)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
