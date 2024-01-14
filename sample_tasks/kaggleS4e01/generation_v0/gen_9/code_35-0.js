/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15744789, Surname=Chukwukadibia, CreditScore=691, Geography=France, Gender=Male, Age=39.0, Tenure=6, Balance=148043.59, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=175749.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let unusedParameterFactor = 0.03 * (HasCrCard * 1.71 - IsActiveMember * -1.52);
  // Adding the Age factor to the unusedParameterFactor calculation
  unusedParameterFactor += 0.02 * (Age / 103.73);

  let tenureFactor = -0.15 * (Tenure / 2.90);
  tenureFactor -= (Age / 100.26);

  let balanceFactor = -0.06 * (Balance / 133106.78) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  // Considering the IsActiveMember as an extra factor in balanceFactor calculation
  balanceFactor -= 0.09 * IsActiveMember;

  let creditScoreFactor = 2.09 * (1.93 - CreditScore / 9360.24);
  let ageFactor = 3.08 * (Age / 103.73);
  // Adding the HasCrCard as an extra factor in ageFactor calculation
  ageFactor -= (HasCrCard * 0.12);

  // Rest of the calculations remain the same
}
