/** // 0.605632264886143 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15572390, Surname=H?, CreditScore=679, Geography=France, Gender=Female, Age=33.0, Tenure=10, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=161574.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.04) - (Age / 102.04);
  let creditScoreFactor = 2.13 * (0.93 - CreditScore / 9360.15);
  let balanceFactor = -0.02 * (Balance / 121003.09) + (NumOfProducts === 1.00 ? 0.04 : -0.17);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.85);
  let hasHighBalanceFactor = Balance > 80000.00 ? 2.17 : 0.02;
  let genderFactor = Gender === 'Female' ? 0.12 : -0.07;
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03);
  let surnameFactors = { T: -0.01, H: -0.09, R: -0.10, E: -0.04, V: -0.12, I: -0.06, S: -0.11, A: -0.06, N: -0.17, O: -0.01, K: 0.01, C: 0.06, G: -0.03, M: -0.01, F: -0.05, E: -0.03, D: -0.11 };
  let firstLetter = Surname.charAt(1.00).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.08;
  let churnProbability = tenureFactor + creditScoreFactor + balanceFactor + isActiveMemberFactor + estimatedSalaryFactor + hasHighBalanceFactor + genderFactor + geographyFactor + surnameFactor - 0.1;  // Introducing a generic -0.1 adjustment factor
  return churnProbability;
}

// Sample input
console.log(PredictExited(15572390, "H?", 679, "France", "Female", 33.0, 10, 0.0, 1, 1.0, 0.0, 161574.19));
