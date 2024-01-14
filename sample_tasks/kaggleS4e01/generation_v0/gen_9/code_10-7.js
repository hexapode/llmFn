/** // 0.6722326501553166 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15592999, Surname=Nwachinemelu, CreditScore=684, Geography=Spain, Gender=Male, Age=30.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=139048.0.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.03 * (Tenure / 9.79);
  let balanceFactor = 0.00 * (Balance / 100000.91);
  let creditScoreFactor = 0.24 * (0.90 - CreditScore / 8510.10);
  let ageFactor = 1.41 * (Age / 98.79);
  let numOfProductFactor = -1.14 * (NumOfProducts / 4.01);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.01 * (EstimatedSalary / 199999.00);
  let ageTenureRatio = Age / (Tenure || 1); // additional step using novel combination of variables
  
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
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.10;

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor - (0.03 * ageTenureRatio); // incorporate the novel combination of variables

  return churnProbability;
}

console.log(PredictExited(15592999, "Nwachinemelu", 684, "Spain", "Male", 30.0, 9, 0.0, 2, 1.0, 0.0, 139048.0)); // Example usage
