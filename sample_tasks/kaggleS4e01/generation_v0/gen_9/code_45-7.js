/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15756901, Surname=Ch'ang, CreditScore=641, Geography=France, Gender=Female, Age=26.0, Tenure=4, Balance=91547.84, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=28157.34.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  //...

  let balanceToSalaryRatio = Balance / EstimatedSalary;

  let balanceToSalaryFactor = balanceToSalaryRatio < 1.5 ? -0.1 : (balanceToSalaryRatio < 3 ? -0.05 : 0.0);

  //...

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    //... (other factors)
    + balanceToSalaryFactor 
    //... (other factors)

  return churnProbability;
}
