/** // 0.7990275210360376 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15750441, Surname=Lavarack, CreditScore=782, Geography=France, Gender=Male, Age=29.0, Tenure=5, Balance=81210.72, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=108003.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.03 * (Tenure / 9.79);
  let balanceFactor = 0.00 * (Balance / 100000.91);
  let creditScoreFactor = 0.24 * (0.90 - CreditScore / 8510.10);
  let ageFactor = 1.41 * (Age / 98.79);
  let numOfProductFactor = -1.14 * (NumOfProducts / 4.01);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.01 * (EstimatedSalary / 199999.00);
  
  let genderFactor = Gender === 'Female' ? 0.05 : -0.09;
  let geographyFactor = Geography === 'France' ? -0.11 : 0.00;
  
  let surnameFactors = {
    T: -0.05,
    H: -0.09,
    R: -0.07,
    E: -0.08,
    V: -0.08,
    I: -0.09,
    S: -0.09,
    A: -0.07,
    N: -0.08
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase(); // Use the first letter of the surname
  let surnameFactor = surnameFactors[firstLetter] || -0.10;

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor;

  return churnProbability;
}