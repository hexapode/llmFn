/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code)
  
  let surnameFirstLetter = Surname.charAt(0).toLowerCase();
  let surnameFactor = 0.10; // default factor
  
  // Assign factors based on the first letter of the surname
  if (['a', 'c', 'e'].includes(surnameFirstLetter)) {
    surnameFactor = 0.05;
  } else if (['h', 'm', 't'].includes(surnameFirstLetter)) {
    surnameFactor = 0.15;
  } else if (['k'].includes(surnameFirstLetter)) {
    surnameFactor = 0.20;
  } else if (['f', 'g', 'r'].includes(surnameFirstLetter)) {
    surnameFactor = 0.08;
  } else if (['o'].includes(surnameFirstLetter)) {
    surnameFactor = 0.12;
  }
  
  // Include surname factor in the churn probability calculation
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + customerIdFactor + surnameFactor; 

  return churnProbability;
}
