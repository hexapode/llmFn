/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code for other parameters)

  let surnameFactor = 0.0;
  switch (Surname) {
    case 'Okwudilichukwu':
      surnameFactor = 0.12;
      break;
    case 'Okwudiliolisa':
      surnameFactor = 0.09;
      break;
    case 'Hsueh':
      surnameFactor = 0.07;
      break;
    // Add cases for the other surnames
    default:
      surnameFactor = 0.0;
  }

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + surnameFactor + 0.00 * customerIdFactor; 

  return churnProbability;
}
