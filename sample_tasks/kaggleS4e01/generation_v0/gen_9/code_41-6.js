/** // 0.6468678382390415 //**/
/**
I try on the following input and it returned 4.701228985036719" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15756655, Surname=Madukaife, CreditScore=632, Geography=Spain, Gender=Female, Age=39.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=165385.55.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = Balance / 100000; // scale the balance
  let creditScoreFactor = CreditScore / 1000; // scale the credit score
  let ageFactor = Age / 100; // scale the age

  let geographyFactor = 0;
  if (Geography === 'Germany') {
    geographyFactor = 0.1;
  } else if (Geography === 'Spain') {
    geographyFactor = 0.05;
  }

  let isActiveMemberFactor = IsActiveMember ? 0.05 : -0.05;
  let numOfProductsFactor = NumOfProducts === 2 ? 0.1 : 0;

  let churnProbability = balanceFactor + creditScoreFactor + ageFactor + geographyFactor + isActiveMemberFactor + numOfProductsFactor;

  return churnProbability;
}
