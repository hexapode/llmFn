/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code remains unchanged)
  
  let surnameFactors = {
    Okwudilichukwu: -0.09,
    Okwudiliolisa: -0.11,
    Hsueh: -0.07,
    Kao: -0.05,
    Chiemenam: -0.10,
    Genovese: -0.06,
    Ch'ang: -0.08,
    Chukwuebuka: -0.12,
    Manna: -0.04,
    Cattaneo: 0.07,
    Fokine: -0.03,
    Chiu: -0.06,
    Rossi: -0.05,
    "Ts'ai": -0.11,
    Chukwuemeka: -0.13,
    Tung: -0.08,
    Macdonald: -0.06,
    Esquivel: -0.09,
    Hargreaves: -0.07,
    "Ts'ui": -0.06
  };

  let firstLetter = Surname.charAt(1).toUpperCase();  
  let surnameFactor = surnameFactors[Surname] || -0.08; 

  // ... (rest of the code remains unchanged)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
