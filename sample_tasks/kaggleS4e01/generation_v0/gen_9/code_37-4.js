/** // 0.597829674333824 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15690733, Surname=Nwokeocha, CreditScore=619, Geography=Spain, Gender=Male, Age=36.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=179614.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let creditScoreFactor = CreditScore / 1000;
  let ageFactor = Age / 100;
  let tenureFactor = Tenure / 10;
  let balanceFactor = Balance / 200000;
  let numOfProductsFactor = NumOfProducts * 0.1;
  let isActiveMemberFactor = IsActiveMember === 1 ? -0.05 : 0;
  let estimatedSalaryFactor = EstimatedSalary / 200000;
  let geographyFactor = Geography === 'Germany' ? 0.1 : (Geography === 'Spain' ? 0.05 : 0);
  let genderFactor = Gender === 'Female' ? 0.05 : 0;
  let surnameFactor = Surname.length / 100;
  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = tenureNumOfProductRatio * 0.05;

  let churnProbability = creditScoreFactor + ageFactor + tenureFactor + balanceFactor + numOfProductsFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor + surnameFactor + tenureNumOfProductFactor;

  return churnProbability;
}
