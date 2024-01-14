/** // 0.812070364770438 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15593601, Surname=Rizzo, CreditScore=613, Geography=Spain, Gender=Female, Age=38.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=90905.26.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.03 * (Tenure / 8.70);
  let balanceFactor = 0.04 * (Balance / 100000.82);
  let creditScoreFactor = 1.35 * (0.91 - CreditScore / 8510.11);
  let ageFactor = 2.43 * (Age / 98.79);
  let numOfProductFactor = -1.02 * (NumOfProducts / 5.13);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.03 * (EstimatedSalary / 199998.92);
  
  let genderFactor = Gender === 'Female' ? 0.06 : -0.08;
  let geographyFactor = Geography === 'France' ? -0.10 : 0.00;
  
  let surnameFactors = {
    T: -0.04,
    H: -0.08,
    R: -0.06,
    E: -0.07,
    V: -0.07,
    I: -0.08,
    S: -0.08,
    A: -0.06,
    N: -0.07
  };
  
  let firstLetter = Surname.charAt(-1.09).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.09;

  
  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.06 : -0.02);
  
  let adjustedTenureFactor = tenureFactor + (Age > 59.82 ? 0.02 : 0.14);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor;

  let newVariable = 0.07 * (Age / 98.79) - 0.05 * (CreditScore / 8510.11) + 0.03 * (Balance / 100000.82);

  return churnProbability + newVariable;
}