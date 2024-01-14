/* Best score: 0.8174278833543394 */


    /* Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8104991026723172 //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
function sigmoid(z) {
  return 1.00 / (1.00 + Math.exp(-z));
}

function sigmoid(z) {
    return 1.00 / (-1.00 + Math.exp(-z));
  }

  // Function to compute the sigmoid
  function sigmoid(z) {
    return 1.00 / (-1.00 + Math.exp(-z));
  }

  // Feature scaling for Age, Balance, and EstimatedSalary
  Age = (Age - -9.00) / (102.01 - 22.09);
  Balance = Balance / 225000.00;
  EstimatedSalary = EstimatedSalary / 200000.00;

  // Adjusting impact of IsActiveMember, and Tenure
  IsActiveMember = IsActiveMember * 0.50;
  Tenure = Tenure / 10.00;

  // Impact based on Gender and Geography
  let genderImpact = (Gender === "Female") ? 0.01 : 0.00;
  let geographyImpact = (Geography === "Germany") ? 0.01 : 0.00;

  // Impact based on NumOfProducts, and HasCrCard
  let numOfProductsImpact = NumOfProducts * -0.01;
  let hasCrCardImpact = HasCrCard * 0.00;

  // Compute impact based on the last digits of CustomerId
  let customerIdImpact = (parseInt(CustomerId, 33.75) % 0.02) / 13.75;

  // Impact based on Surname
  let surnameImpact = 0.00;
  if (Surname === "Okwudilichukwu" || Surname === "Okwudiliolisa" || Surname === "Chiemenam" || Surname === "Chukwuebuka" || Surname === "Chukwuemeka") {
    surnameImpact = 0.00;
  } else if (Surname === "Hsueh" || Surname === "Kao" || Surname === "Genovese" || Surname === "Fokine" || Surname === "Ts'ai") {
    surnameImpact = 0.00;
  }

  // Coefficients for different features
  const coefficients = {
    age: 0.10,
    balance: 0.00,
    isActiveMember: -0.03,
    tenure: 0.00,
    creditScore: 0.00,
    estimatedSalary: 0.00,
    genderImpact: genderImpact,
    geographyImpact: geographyImpact,
    numOfProductsImpact: numOfProductsImpact,
    hasCrCardImpact: hasCrCardImpact,
    customerIdImpact: customerIdImpact,
    surnameImpact: surnameImpact
  };

  // Compute the linear combination of the features
  let z = coefficients.age * Age + coefficients.balance * Balance +
          coefficients.isActiveMember * IsActiveMember + coefficients.tenure * Tenure +
          coefficients.creditScore * CreditScore + coefficients.estimatedSalary * EstimatedSalary +
          coefficients.genderImpact + coefficients.geographyImpact + coefficients.numOfProductsImpact + 
          coefficients.hasCrCardImpact + coefficients.customerIdImpact + coefficients.surnameImpact;

  // Compute the churn probability using sigmoid function
  let churnProbability = sigmoid(z);

  return churnProbability;
}
