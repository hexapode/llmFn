/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous parameters and calculations)

  // Include Surname parameter
  let surnameFactor = calculateSurnameFactor(Surname);

  // Incorporating the Surname factor into the churn prediction calculation
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + surnameFactor + 0.00 * customerIdFactor;

  return churnProbability;
}

function calculateSurnameFactor(Surname) {
  // Convert the Surname into a numeric value using a simple hashing or encoding function
  let surnameNumericValue = hashSurname(Surname);

  // Normalize the numeric value to fit within the range of other parameters
  let normalizedSurnameFactor = (surnameNumericValue - minSurnameValue) / (maxSurnameValue - minSurnameValue); // normalize to be between 0 and 1

  // Multiply the normalized value by a factor to include in the prediction calculation
  let surnameFactor = 0.05 * normalizedSurnameFactor;

  return surnameFactor;
}

// Additional hashing or encoding function for the Surname
function hashSurname(Surname) {
  // Implement a simple hashing or encoding function to convert the Surname into a numeric value
  // Example: Convert each character to its ASCII code and sum them up
  let numericValue = 0;
  for (let i = 0; i < Surname.length; i++) {
    numericValue += Surname.charCodeAt(i);
  }
  return numericValue;
}
