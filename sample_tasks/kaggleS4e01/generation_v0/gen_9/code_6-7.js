/** // 0.782593329689606 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15613630, Surname=Tang, CreditScore=497, Geography=France, Gender=Male, Age=52.0, Tenure=4, Balance=109922.61, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=96823.32.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // In this alternative approach, we can introduce a new factor based on the length of the Surname
  let surnameFactor = (Surname.length > 5) ? -0.05 : 0.02;

  let creditScoreFactor = 0.37 * (0.98 - CreditScore / 497);
  let ageFactor = 2.78 * (Age / 52.0);
  let balanceFactor = 0.16 * (Balance / 109922.61);
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98);
  
  let tenureFactor = -0.06 * (Tenure / 4);
  let numOfProductsFactor = -0.19 * (NumOfProducts - 1);
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99);
  let salaryFactor = 0.03 * (EstimatedSalary / 96823.32);

  let genderFactor = Gender === 'Female' ? 0.15 : -0.01;
  let geographyFactor = Geography === 'France' ? -0.07 : 0.04;

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + surnameFactor;

  return churnProbability;
}
