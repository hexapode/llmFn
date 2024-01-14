/** // 0.5293693754475601 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15649744, Surname=Folliero, CreditScore=646, Geography=France, Gender=Male, Age=32.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=125710.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let locationFactor = (Geography === 'France') ? -0.25 : 0.40;
  let genderFactor = (Gender === 'Male') ? 0.15 : -0.20;
  let tenureFactor = 0.05 * Tenure;
  
  let churnProbability = locationFactor + genderFactor + tenureFactor;

  return churnProbability;
}
