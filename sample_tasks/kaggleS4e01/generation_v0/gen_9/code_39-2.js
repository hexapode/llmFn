/** // 0.6688972611978884 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15624170, Surname=Maxwell, CreditScore=541, Geography=France, Gender=Female, Age=25.0, Tenure=6, Balance=109844.81, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=25289.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // I will calculate the churn probability based on the input parameters
  // and some manipulated factors

  let tenureFactor = -0.14 * (Tenure / 2.93) - (Age / 123.65);

  let balanceFactor = -0.07 * (Balance / 146417.47) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 1.08 * (1.93 - CreditScore / 18722.25);
  
  let ageFactor = 3.20 * (Age / 102.72) - (CreditScore / 5002.00);
  ageFactor -= (IsActiveMember * 0.15);

  let numOfProductFactor = -3.22 * (NumOfProducts / 10.01) + (HasCrCard ? 0.09 : 0.00);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179994.81);
  
  // New variable based on the balance and the number of products
  let balanceNumOfProductsRatio = Balance / NumOfProducts;
  let balanceNumOfProductsFactor = 0.06 * (balanceNumOfProductsRatio - 20000.0);

  let combinedIsActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.21 : -0.11);
  
  // Summing up all the factors
  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + estimatedSalaryFactor + balanceNumOfProductsFactor + combinedIsActiveMemberFactor;

  return churnProbability;
}

// Testing the function with the provided sample input
console.log(PredictExited(15624170, 'Maxwell', 541, 'France', 'Female', 25.0, 6, 109844.81, 1, 1.0, 0.0, 25289.23));
