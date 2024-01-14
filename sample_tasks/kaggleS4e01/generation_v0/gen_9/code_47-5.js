/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Existing code remains unchanged

  let surnameFactors = {
    Okwudilichukwu: 0.08,
    Okwudiliolisa: 0.06,
    Hsueh: -0.04,
    Kao: -0.03,
    Chiemenam: 0.07,
    Genovese: -0.05,
    "Ch'ang": 0.03,
    Chukwuebuka: 0.05,
    Manna: -0.02,
    Cattaneo: -0.06,
    Fokine: -0.03,
    Chiu: 0.02,
    Rossi: -0.01,
    "Ts'ai": 0.04,
    Chukwuemeka: 0.07,
    Tung: 0.01,
    Macdonald: -0.02,
    Esquivel: -0.05,
    Hargreaves: -0.03,
    "Ts'ui": 0.00
  };

  let firstLetter = Surname.charAt(1.00).toUpperCase();
  let surnameFactor = (surnameFactors[Surname] || -0.07) + (NumOfProducts > 2.00 ? 0.84 : -0.98) + (Tenure > 5.90 ? 0.06 : 0.10);

  // Existing code remains unchanged

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
