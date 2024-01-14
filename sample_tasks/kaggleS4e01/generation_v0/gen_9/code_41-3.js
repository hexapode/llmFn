/** // 0.6466902395310625 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15691624, Surname=Chidiebere, CreditScore=758, Geography=France, Gender=Male, Age=33.0, Tenure=2, Balance=132150.26, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=23067.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let creditScoreFactor = -0.10 * (1 - CreditScore / 1500);
  let ageFactor = 0.05 * (Age / 100) + (IsActiveMember ? -0.20 : 0) + (NumOfProducts > 1 ? 0.10 : 0);
  let balanceFactor = -0.05 * (Balance / 150000) + (HasCrCard ? 0.05 : 0) + (Tenure > 5 ? 0.05 : 0);
  let geographyFactor = (Geography === 'Germany' ? 0.15 : 0) + (Geography === 'Spain' ? 0.05 : 0) - (CreditScore > 700 ? 0.05 : 0);
  let estimatedSalaryFactor = 0.03 * (EstimatedSalary / 20000);
  let genderFactor = (Gender === 'Female' ? -0.05 : 0) + (Age > 30 ? 0.05 : 0);
  let tenureFactor = -0.10 * (Tenure / 10);
  let numOfProductsFactor = -0.25 * (NumOfProducts - 1) + (CreditScore > 700 ? 0.05 : 0);
  let isActiveMemberFactor = IsActiveMember ? -0.15 : 0;
  
  let surnameLengthFactor = -0.02 * (Surname.length - 8);
  let surnameFirstLetter = Surname.charAt(0).toUpperCase();
  let surnameFirstLetterFactor = (surnameFirstLetter === 'C' ? 0.05 : 0) + (surnameFirstLetter === 'S' ? -0.10 : 0) + (Geography === 'France' ? -0.05 : 0);
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + geographyFactor + estimatedSalaryFactor + genderFactor + tenureFactor + numOfProductsFactor + isActiveMemberFactor + surnameLengthFactor + surnameFirstLetterFactor;

  return churnProbability;
}
