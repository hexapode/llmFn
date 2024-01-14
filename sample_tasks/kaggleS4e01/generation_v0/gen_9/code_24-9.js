/** // 0.39932057256053954 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = Balance / 100000;  // Normalize balance
  let ageFactor = Age / 100;
  let creditScoreFactor = CreditScore / 10000;  // Normalize credit score

  let geographyFactor = Geography === 'Germany' ? 0.1 : (Geography === 'Spain' ? -0.1 : 0);
  let genderFactor = Gender === 'Female' ? 0.1 : -0.1;

  let isActiveMemberFactor = IsActiveMember ? 0.1 : -0.1;

  let churnProbability = 0.2 - (balanceFactor * 0.5) + (creditScoreFactor * 0.3) - (ageFactor * 0.2) + (geographyFactor * 0.2) + (genderFactor * 0.2) + (isActiveMemberFactor * 0.1);

  return churnProbability;
}
