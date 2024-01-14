/** // 0.7044903026915403 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15682318, Surname=Onyemere, CreditScore=684, Geography=Spain, Gender=Male, Age=37.0, Tenure=5, Balance=120915.04, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=123981.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Calculate factors based on input parameters
  let creditScoreFactor = 0.25 * (CreditScore / 800) - 0.1;
  let tenureFactor = (-0.15 * Tenure) / 10;
  let balanceFactor = (0.03 * (Balance / 100000)) - 0.05;
  let ageFactor = (0.2 * (Age / 100)) - 0.1;
  let numOfProductFactor = 0.1 - (0.15 * NumOfProducts);
  let isActiveMemberFactor = IsActiveMember === 1 ? 0.05 : -0.1;
  let estimatedSalaryFactor = 0.2 * (EstimatedSalary / 150000);
  let genderFactor = Gender === 'Female' ? 0.1 : -0.1;
  let geographyFactor = Geography === 'Germany' ? 0.1 : -0.1;
  let surnameLengthFactor = Surname.length > 8 ? 0.05 : -0.05;

  // Combine factors to get churn probability
  let churnProbability = 0.5 + creditScoreFactor + tenureFactor + balanceFactor + ageFactor + 
    numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + 
    geographyFactor + surnameLengthFactor;

  return churnProbability;
}
