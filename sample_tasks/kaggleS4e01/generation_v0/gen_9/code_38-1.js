/** // 0.6082320010491741 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15632575, Surname=Moore, CreditScore=709, Geography=France, Gender=Female, Age=70.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=122996.76.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0;

  // Assign weights to parameters based on their importance
  let weights = {
    CreditScore: 0.2,
    Age: 0.3,
    Tenure: 0.1,
    Balance: 0.1,
    NumOfProducts: 0.05,
    IsActiveMember: 0.05,
    EstimatedSalary: 0.1,
    Geography: {'France': 0.1, 'Spain': 0.2, 'Germany': 0.3},
    Gender: {'Female': 0.05, 'Male': 0},
    HasCrCard: 0.05
  };

  // Calculate the weighted score based on the parameters
  let weightedScore = weights.CreditScore * (1 - CreditScore / 1000) +
                     weights.Age * (Age / 100) +
                     weights.Tenure * (Tenure / 10) +
                     weights.Balance * (Balance / 10000) +
                     weights.NumOfProducts * (NumOfProducts / 4) +
                     weights.IsActiveMember * IsActiveMember +
                     weights.EstimatedSalary * (1 - EstimatedSalary / 150000) +
                     weights.Geography[Geography] +
                     weights.Gender[Gender] +
                     weights.HasCrCard * HasCrCard;

  // Use the weighted score to calculate churn probability
  churnProbability = weightedScore;

  return churnProbability;
}
