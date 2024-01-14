/** // 0.5792577658957672 //**/
/**
I try on the following input and it returned 4.708137748300865" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15595303, Surname=Johnston, CreditScore=736, Geography=France, Gender=Male, Age=46.0, Tenure=7, Balance=130812.91, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=77981.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let ageFactor = (Age / 100) * 0.3;
  let tenureFactor = (Tenure / 10) * 0.25;
  let balanceFactor = (Balance / 200000) * 0.15;

  let creditScoreFactor = ((850 - CreditScore) / 850) * 0.2;
  
  let numOfProductsFactor = (NumOfProducts / 4) * 0.1;

  let isActiveMemberFactor = IsActiveMember ? 0 : 0.1;

  let estimatedSalaryFactor = (EstimatedSalary / 200000) * 0.1;

  let geographyFactor = (Geography === 'Germany') ? 0.05 : ((Geography === 'Spain') ? 0.03 : 0);

  let genderFactor = (Gender === 'Female') ? -0.05 : 0;

  let hasCrCardFactor = HasCrCard ? 0.03 : 0;

  let churnProbability =  ageFactor + tenureFactor + balanceFactor + creditScoreFactor + numOfProductsFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor + hasCrCardFactor;

  return churnProbability;
}
