/** // 0.7450488744381002 //**/
/**
I try on the following input and it returned 5.138671764956603" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15719479, Surname=Chukwuhaenye, CreditScore=619, Geography=Spain, Gender=Female, Age=55.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=42442.21.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.1 * (Tenure / 10);
  let balanceFactor = -0.1 * (Balance / 100000);
  let creditScoreFactor = 0.2 * ((850 - CreditScore) / 850);
  let ageFactor = 0.1 * (Age / 100);
  let numOfProductFactor = -0.3 * (NumOfProducts - 1);
  let isActiveMemberFactor = -0.2 * IsActiveMember;
  let estimatedSalaryFactor = 0.1 * (EstimatedSalary / 100000);

  let geographyFactor = Geography === 'Germany' ? 0.1 : (Geography === 'Spain' ? -0.05 : 0);
  let genderFactor = Gender === 'Female' ? 0.05 : -0.05;
  
  // Surname factors will be manually evaluated based on actual data
  
  let churnProbability = 0.5 + tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor;

  return churnProbability;
}
