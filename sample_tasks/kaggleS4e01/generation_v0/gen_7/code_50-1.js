/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decide a threshold value to bifurcate stay and churn (e.g., 0.5)
    const thresholdValue = 0.5;
  
    // Calculate a simplified linear combination based on the input parameters
    const linearCombination =
      CreditScore * 0.05 +
      Age * 0.02 +
      Tenure * 0.1 +
      Balance * 0.08 -
      NumOfProducts * 0.3 -
      HasCrCard * 0.15 -
      IsActiveMember * 1.2 +
      EstimatedSalary * 0.00005 -
      (Geography === 'Germany' ? 0.3 : 0) +
      (Gender === 'Male' ? 0.15 : -0.1);
  
    // Compute the probability using the logistic function
    const probability = 1 / (1 + Math.exp(-linearCombination));
  
    // Return 1 if the probability is greater than or equal to the threshold, else return 0
    return probability >= thresholdValue ? 1 : 0;
}
