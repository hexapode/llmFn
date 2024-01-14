/** // 0.5853038593140755 //**/
/**
I try on the following input and it returned 6.550947519564373" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15803032, Surname=Yen, CreditScore=634, Geography=France, Gender=Male, Age=33.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=109179.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = Balance / 100000;
  let tenureFactor = Tenure / 10;
  let ageFactor = Age / 100;
  let creditScoreFactor = 1 - CreditScore / 1000;
  let numOfProductsFactor = NumOfProducts * 0.2;
  let isActiveMemberFactor = IsActiveMember ? 0 : -0.1;
  
  let churnProbability = balanceFactor + tenureFactor + ageFactor + creditScoreFactor + numOfProductsFactor + isActiveMemberFactor;
  
  return churnProbability;
}
