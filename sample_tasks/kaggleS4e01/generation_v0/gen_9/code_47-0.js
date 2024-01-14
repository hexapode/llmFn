/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous calculation steps)

  let surnameFactors = {
    Okwudilichukwu: 0.08,
    Okwudiliolisa: 0.05,
    Hsueh: -0.07,
    Kao: -0.04,
    Chiemenam: 0.10,
    Genovese: -0.06,
    "Ch'ang": -0.03,
    Chukwuebuka: 0.12,
    Manna: -0.09,
    Cattaneo: -0.05,
    Fokine: 0.03,
    Chiu: 0.00,
    Rossi: -0.04,
    "Ts'ai": -0.06,
    Chukwuemeka: 0.09,
    Tung: 0.02,
    Macdonald: -0.08,
    Esquivel: -0.11,
    Hargreaves: -0.02,
    "Ts'ui": 0.01
  };

  let firstLetter = Surname.charAt(1.00).toUpperCase();
  let surnameFactor = (surnameFactors[Surname] || -0.07) + (NumOfProducts > 2.00 ? 0.84 : -0.98) + (Tenure > 5.90 ? 0.06 : 0.10);

  // ... (remaining calculation steps)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
