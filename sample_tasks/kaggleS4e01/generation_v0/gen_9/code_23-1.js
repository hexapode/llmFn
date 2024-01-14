/** // 0.5143371480390304 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15664752, Surname=Jacka, CreditScore=709, Geography=Spain, Gender=Female, Age=37.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=18255.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Age and CreditScore play a significant role in churn prediction
  let ageFactor = 0.03 * (Age / 100) - 1.2;
  let creditScoreFactor = 0.002 * (CreditScore - 600) + 0.1;

  // Geography and Gender factor
  let geographyFactor = Geography === 'Germany' ? -0.05 : (Geography === 'Spain' ? 0.03 : 0);
  let genderFactor = Gender === 'Female' ? 0.1 : 0;

  // NumOfProducts and IsActiveMember factor
  let numOfProductFactor = NumOfProducts === 1 ? 0 : -0.1;
  let isActiveMemberFactor = IsActiveMember ? 0 : -0.15;

  // Balance and EstimatedSalary factor
  let balanceFactor = Balance > 100000 ? 0.2 : 0;
  let estimatedSalaryFactor = 0.001 * (EstimatedSalary - 15000);

  // Summing up the factors
  let churnProbability = ageFactor + creditScoreFactor + geographyFactor + genderFactor + numOfProductFactor + isActiveMemberFactor + balanceFactor + estimatedSalaryFactor;

  return churnProbability;
}

// Sample input:
console.log(PredictExited(15664752, 'Jacka', 709, 'Spain', 'Female', 37.0, 8, 0.0, 2, 1.0, 0.0, 18255.51));  // Output: -0.533
