/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code remains the same)

  let surnameFactors = {
    Okwudilichukwu: -0.08,
    Okwudiliolisa: -0.09,
    Hsueh: -0.11,
    Kao: -0.07,
    Chiemenam: -0.12,
    Genovese: -0.06,
    "Ch'ang": -0.10,
    Chukwuebuka: -0.13,
    Manna: -0.05,
    Cattaneo: -0.09,
    Fokine: -0.08,
    Chiu: -0.07,
    Rossi: -0.06,
    "Ts'ai": -0.09,
    Chukwuemeka: -0.11,
    Tung: -0.07,
    Macdonald: -0.08,
    Esquivel: -0.10,
    Hargreaves: -0.08,
    "Ts'ui": -0.09
  };
  let surnameFactor = surnameFactors[Surname] || -0.06; 

  // ... (remaining code remains the same)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
