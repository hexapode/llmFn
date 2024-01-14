/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous calculation code)

  let surnameFactors = {
    Okwudilichukwu: 0.25,
    Okwudiliolisa: 0.13,
    Hsueh: -0.09,
    Kao: -0.07,
    Chiemenam: 0.21,
    // ... (other surnames and their corresponding factors)
  };

  let firstLetter = Surname.charAt(1).toUpperCase();  
  let surnameFactor = surnameFactors[Surname] || -0.08; 

  // ... (other calculation code)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;

  return churnProbability;
}
