/** // 0.46976096506604736 //**/
/**
I try on the following input and it returned 0.9815671008950735" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15744044, Surname=Ts'ui, CreditScore=681, Geography=France, Gender=Male, Age=42.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=143960.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let creditScoreFactor = (850 - CreditScore) / 850;
  let ageFactor = Age / 100;
  let balanceFactor = Balance / 250000;
  let activeMemberFactor = IsActiveMember ? -0.2 : 0.2;
  let tenureFactor = -Tenure / 20;
  let numOfProductsFactor = -0.2 * (NumOfProducts - 2);
  let hasCrCardFactor = HasCrCard ? -0.1 : 0.1;
  let salaryFactor = EstimatedSalary / 250000;
  
  let genderFactor = Gender === 'Female' ? 0.1 : -0.1;
  let geographyFactor = Geography === 'France' ? -0.05 : 0.05;
  
  let churnProbability = 0.4 + creditScoreFactor - ageFactor - balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor - salaryFactor + genderFactor + geographyFactor;

  return churnProbability;
}
