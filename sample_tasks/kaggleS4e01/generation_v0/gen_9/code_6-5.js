/** // 0.5323831631339797 //**/
/**
I try on the following input and it returned 0.7180706809989675" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15714689, Surname=L?, CreditScore=705, Geography=France, Gender=Male, Age=33.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=113581.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let averageCustomerId = 15674933.00; 
  let customerIdFactor = (CustomerId - averageCustomerId) / (15679805.09 - 15566541.99); 
  
  let creditScoreFactor = 0.0037 * (850 - CreditScore); 
  let ageFactor = 0.05 * (40 - Age); 
  let balanceFactor = 0.00015 * Balance; 
  let activeMemberFactor = IsActiveMember ? -0.01 : 0.02; 
  
  let tenureFactor = -0.005 * Tenure; 
  let numOfProductsFactor = -0.02 * (NumOfProducts - 1); 
  let hasCrCardFactor = -0.01 * (HasCrCard ? -1 : 1); 
  let salaryFactor = 0.0003 * EstimatedSalary;

  let genderFactor = Gender === 'Female' ? 0.01 : -0.005;
  let geographyFactor = Geography === 'France' ? -0.005 : 0.003;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + customerIdFactor; 

  return 1 / (1 + Math.exp(-churnProbability));
}
