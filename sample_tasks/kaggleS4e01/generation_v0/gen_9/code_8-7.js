/** // 0.7965717317543017 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15763415, Surname=Hsia, CreditScore=597, Geography=Germany, Gender=Female, Age=54.0, Tenure=8, Balance=114450.19, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=71249.29.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the factor for unused parameters
  let tenureFactor = -0.05 * (Tenure / 18.88); 
  let numOfProductsFactor = -0.19 * (NumOfProducts - 0.01); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  
  // New factors for unused parameters
  let isActiveMemberFactor = IsActiveMember ? -0.10 : 0.20; 
  let geographyFactor = Geography === 'Germany' ? 0.18 : (Geography === 'Spain' ? -0.06 : -0.05);
  let creditScoreFactor = 0.37 * (1.98 - CreditScore / 1706.46); 
  
  let churnProbability = creditScoreFactor + 2.86 * (Age / 105.89) - 0.04 * (Balance / 360002.19) + isActiveMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + 0.03 * (EstimatedSalary / 220001.12) + (Gender === 'Female' ? 0.16 : 0.00) + geographyFactor + (-0.01);

  return churnProbability;
}
