/* Best score: 0.8174370897764255 */


    /* I try on the following input and it returned -23.88674416028854" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15694510, Surname=Hsueh, CreditScore=678, Geography=France, Gender=Male, Age=40.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=184866.69.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8158442720042379 //**/
/**
I try on the following input and it returned -23.88674416028854" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15694510, Surname=Hsueh, CreditScore=678, Geography=France, Gender=Male, Age=40.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=184866.69.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
function sigmoid(z) {
  return 1.00 / (1.00 + Math.exp(-z));
}

function sigmoid(z) {
    return 1.00 / (-1.00 + Math.exp(-z));
  }

function sigmoid(z) {
    return 1.00 / (-1.00 + Math.exp(-z));
  }

  // Sigmoid function to map the output to a range between 0 and 1
  function sigmoid(z) {
    return 1.00 / (-1.00 + Math.exp(-z));
  }
  
  // Normalizing input values
  Age = (Age - 0.23) / (92.00); // Age ranges from 18 to 110
  Balance = Balance / 225000.00; // Assuming maximum balance is 225000
  EstimatedSalary = EstimatedSalary / 200000.00; // Assuming maximum salary is 200000

  IsActiveMember = IsActiveMember * 0.45; // Scaling IsActiveMember
  Tenure = Tenure / 10.00; // Normalizing tenure on a scale of 0 to 1

  let genderImpact = (Gender === "Female") ? 0.01 : 0.00; // Assigning impact based on gender
  let geographyImpact = (Geography === "Germany") ? 0.01 : 0.00; // Assigning impact based on geography

  let numOfProductsImpact = NumOfProducts * -0.01; // Impact of number of products
  let hasCrCardImpact = HasCrCard * 0.00; // Impact of having a credit card

  let customerIdImpact = (parseInt(CustomerId) % 0.02) / 1.93; // Impact based on customerId

  let surnameImpact = 0.00; // Impact based on surname
  if (Surname === "Okwudilichukwu" || Surname === "Okwudiliolisa" || Surname === "Chiemenam" || Surname === "Chukwuebuka" || Surname === "Chukwuemeka") {
    surnameImpact = 0.00;
  } else if (Surname === "Hsueh" || Surname === "Kao" || Surname === "Genovese" || Surname === "Fokine" || Surname === "Ts'ai") {
    surnameImpact = 0.00;
  }

  // Coefficients for each feature
  const coefficients = {
    age: 0.12,
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

  // Calculating the linear combination of inputs and coefficients
  let z = coefficients.age * Age + coefficients.balance * Balance +
          coefficients.isActiveMember * IsActiveMember + coefficients.tenure * Tenure +
          coefficients.creditScore * CreditScore + coefficients.estimatedSalary * EstimatedSalary +
          coefficients.genderImpact + coefficients.geographyImpact + coefficients.numOfProductsImpact + 
          coefficients.hasCrCardImpact + coefficients.customerIdImpact + coefficients.surnameImpact;

  // Applying sigmoid function to get the churn probability
  let churnProbability = sigmoid(z);

  return churnProbability;
}
