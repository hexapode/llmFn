/** // 0.591307567448589 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15681075, Surname=Chukwualuka, CreditScore=682, Geography=France, Gender=Female, Age=32.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=706.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let relevantFeatures = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];

  let churnProbability = calculateChurnProbability(relevantFeatures);
  
  return churnProbability;
}

function calculateChurnProbability(features) {
  // Use the relevant features to build a decision tree and calculate the churn probability
  // Pseudo code for decision tree algorithm
  if (features[0] < 700) {
    if (features[1] < 40) {
      if (features[6] === 1 && features[3] === 0) {
        return 0.8; // High probability of churning
      } else {
        return 0.2; // Low probability of churning
      }
    } else {
      if (features[4] > 1) {
        return 0.6; // Medium probability of churning
      } else {
        return 0.3; // Medium probability of churning
      }
    }
  } else {
    if (features[2] > 3) {
      return 0.1; // Low probability of churning
    } else {
      if (features[7] < 50000) {
        return 0.4; // Medium probability of churning
      } else {
        return 0.05; // Low probability of churning
      }
    }
  }
}
