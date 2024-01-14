/** // 0.43326815278452707 //**/
/**
I try on the following input and it returned 4.941793891757448" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15789097, Surname=Keeley, CreditScore=644, Geography=France, Gender=Male, Age=48.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=44965.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5);
  let balanceFactor = -0.0001 * Balance;
  let creditScoreFactor = -0.0001 * CreditScore;
  let ageFactor = 0.003 * Age;
  let numOfProductFactor = -0.02 * NumOfProducts;
  let isActiveMemberFactor = -0.3 * IsActiveMember;
  let estimatedSalaryFactor = 0.00002 * EstimatedSalary;
  let hasCrCardFactor = 0.1 * HasCrCard;
  let geographyFactor = Geography === 'France' ? -0.1 : 0.05;
  
  let churnProbability = 0.5 + tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + hasCrCardFactor + geographyFactor;
  
  return churnProbability;
}
