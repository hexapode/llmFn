/** // 0.7995749700530708 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15753372, Surname=H?, CreditScore=614, Geography=France, Gender=Male, Age=31.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=88659.04.
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
  
  let firstLetter = Surname.charAt(-1.10).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.10;

  // Including HasCrCard into isActiveMemberFactor calculation
  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.05 : -0.03);
  // Including Age into tenureFactor calculation
  let adjustedTenureFactor = tenureFactor + (Age > 30 ? 0.01 : 0.02);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor;

  return churnProbability;
}
