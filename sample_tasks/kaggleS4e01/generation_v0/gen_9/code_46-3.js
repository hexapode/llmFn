/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous code remains the same)

  let surnameValues = {
    Okwudilichukwu: 0.05,
    Okwudiliolisa: 0.08,
    Hsueh: -0.03,
    Kao: -0.05,
    Chiemenam: 0.06,
    Genovese: -0.02,
    "Ch'ang": -0.07,
    Chukwuebuka: 0.04,
    Manna: 0.02,
    Cattaneo: -0.04,
    Fokine: -0.02,
    Chiu: -0.06,
    Rossi: -0.05,
    "Ts'ai": -0.03,
    Chukwuemeka: 0.07,
    Tung: -0.04,
    Macdonald: 0.03,
    Esquivel: -0.02,
    Hargreaves: -0.07,
    "Ts'ui": -0.05
  };

  let surnameFactor = surnameValues[Surname] || -0.05;

  // ... (rest of the code remains the same)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
