/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15604551, Surname=Ting, CreditScore=681, Geography=Spain, Gender=Male, Age=32.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=72945.29.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // existing code
  // ...

  let tenureAgeFactor = -0.02 * (Tenure * Age / 50); // Assuming tenure and age are related, dividing by 50 is an arbitrary value suitable for this calculation

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + tenureAgeFactor + 0.00 * customerIdFactor;

  return churnProbability;
}
