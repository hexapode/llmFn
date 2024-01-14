/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous calculation logic)

  let surnameFactor = 0; 
  if (['Okwudilichukwu', 'Chiemenam', 'Chukwuebuka', 'Chukwuemeka'].includes(Surname)) {
    surnameFactor = 0.10;
  } else if (['Hsueh', 'Kao', 'Ch'ang', 'Manna', 'Ts'ui'].includes(Surname)) {
    surnameFactor = -0.05;
  }

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + surnameFactor + 0.00 * customerIdFactor; 

  return churnProbability;
}
