
// The function PredictExited takes various parameters related to a customer and predicts whether they will churn or not.
// We can create a simple scoring system to estimate the probability of a customer churning based on their characteristics.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the score based on the input parameters
  let score = 0;

  // Add scores based on the input parameters
  score += CreditScore < 600 ? 3 : 0; // If CreditScore is less than 600, add 3 to the score
  score += Age > 40 ? 2 : 0; // If Age is greater than 40, add 2 to the score
  score += Tenure < 2 ? 1 : 0; // If Tenure is less than 2, add 1 to the score
  score += Balance < 0 ? 3 : 0; // If Balance is negative, add 3 to the score
  score += NumOfProducts > 2 ? 2 : 0; // If NumOfProducts is greater than 2, add 2 to the score
  score += HasCrCard === 0 ? 1 : 0; // If HasCrCard is 0, add 1 to the score
  score += IsActiveMember === 0 ? 2 : 0; // If IsActiveMember is 0, add 2 to the score
  score += EstimatedSalary < 50000 ? 1 : 0; // If EstimatedSalary is less than 50000, add 1 to the score

  // Calculate the probability of churn (between 0 and 1)
  let probability = score / 20; // Divide the score by the maximum possible score (20) to get the probability
  
  // Return the probability of churn
  return probability;
}
