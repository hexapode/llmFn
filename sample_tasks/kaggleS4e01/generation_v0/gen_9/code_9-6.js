/** // 0.7056949710948275 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15672056, Surname=Trevisani, CreditScore=628, Geography=France, Gender=Female, Age=41.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=54530.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = 0.07 * (Tenure / 10);
  let balanceFactor = 0.12 * (Balance / 100000);
  let creditScoreFactor = -0.25 * (1 - CreditScore / 850);
  let ageFactor = 0.4 * (Age / 100);
  let numOfProductFactor = -0.15 * (NumOfProducts / 4);
  let isActiveMemberFactor = -0.1 * IsActiveMember;
  let estimatedSalaryFactor = 0.08 * (EstimatedSalary / 200000);
  
  let genderFactor = Gender === 'Female' ? 0.05 : 0;
  let geographyFactor = Geography === 'France' ? -0.1 : 0.1;
  
  let surnameFactors = {
    T: 0.05,
    H: 0.01,
    R: 0.03,
    E: 0.02,
    V: 0.02,
    I: 0.01,
    S: 0.01,
    A: 0.03,
    N: 0.02
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || 0;

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor;

  return churnProbability;
}
