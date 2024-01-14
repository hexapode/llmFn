/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code remains unchanged)
  
  let surnameFactors = {
    Okwudilichukwu: -0.12,
    Okwudiliolisa: -0.08,
    Hsueh: 0.04,
    Kao: -0.06,
    Chiemenam: -0.11,
    Genovese: 0.03,
    "Ch'ang": 0.01,
    Chukwuebuka: -0.09,
    Manna: 0.02,
    Cattaneo: -0.05,
    Fokine: -0.07,
    Chiu: 0.02,
    Rossi: -0.04,
    "Ts'ai": 0.06,
    Chukwuemeka: -0.10,
    Tung: 0.05,
    Macdonald: -0.03,
    Esquivel: 0.07,
    Hargreaves: -0.08,
    "Ts'ui": 0.05
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = surnameFactors[Surname] || -0.08; 

  // ... (other factors and calculations remain unchanged)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
