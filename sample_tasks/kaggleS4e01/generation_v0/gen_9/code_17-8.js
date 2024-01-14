/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Existing calculation steps
  // ...

  let surnameFactors = {
    Okwudilichukwu: -0.15,
    Okwudiliolisa: -0.17,
    Hsueh: -0.09,
    Kao: -0.13,
    Chiemenam: -0.16,
    Genovese: -0.11,
    "Ch'ang": -0.12,
    Chukwuebuka: -0.15,
    Manna: -0.08,
    Cattaneo: -0.14,
    Fokine: -0.10,
    Chiu: -0.13,
    Rossi: -0.12,
    "Ts'ai": -0.14,
    Chukwuemeka: -0.16,
    Tung: -0.10,
    Macdonald: -0.07,
    Esquivel: -0.09,
    Hargreaves: -0.08,
    "Ts'ui": -0.11
  };
  let firstLetter = Surname.charAt(1).toUpperCase();
  let surnameFactor = surnameFactors[Surname] || -0.06; 
  // Add the surname factor to the churn probability
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
