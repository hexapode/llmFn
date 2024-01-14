/** // -Infinity //**/
/**
I try on the following input and it returned 1.9875377111395032" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15772798, Surname=Ts'ao, CreditScore=748, Geography=Germany, Gender=Male, Age=65.0, Tenure=6, Balance=102277.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=84790.41.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (Factors calculation)

  // Sum of factors
  let sum = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + surnameFactor;

  // Applying sigmoid function
  let churnProbability = 1 / (1 + Math.exp(-sum));

  return churnProbability;
}
