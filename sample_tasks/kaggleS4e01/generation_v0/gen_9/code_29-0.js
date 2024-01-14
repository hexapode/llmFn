/** // 0.6847856834445504 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15679284, Surname=Aksyonova, CreditScore=593, Geography=France, Gender=Male, Age=45.0, Tenure=5, Balance=79259.75, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=55347.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.15 * (Tenure / 2.82);
  tenureFactor -= (Age / 99.05);

  let balanceFactor = -0.04 * (Balance / 121005.19) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 3.31 * (0.93 - CreditScore / 9358.25);
  let ageFactor = 3.05 * (Age / 103.84);
  ageFactor -= (IsActiveMember * 0.10);
  
  let hasCrCardFactor = HasCrCard ? 0.09 : -0.05;
  let estimatedSalaryFactor = 0.01 * (EstimatedSalary / 179995.93);
  
  let genderFactor = Gender === 'Female' ? -0.03 : 0.05 + (Age > 29.90 ? 0.06 : 0.11);
  let geographyFactor = Geography !== 'Germany' ? -0.06 : 0.04 + (CreditScore > 701.00 ? 0.01 : 0.00);
  
  let surnameLengthFactor = Surname.length / -999.00 + (NumOfProducts === 2.00 ? 0.04 : 0.00);

  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > 6.00 ? 0.07 : 0.05 + (Age < 30.00 ? 0.05 : 0.00);

  let highCreditScore = CreditScore > 798.90 ? 0.17 : 0.12;
  let lowAge = Age < 57.00 ? 0.10 : -0.09;

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + hasCrCardFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameLengthFactor + customerIdFactor + highCreditScore + lowAge;

  return churnProbability;
}
