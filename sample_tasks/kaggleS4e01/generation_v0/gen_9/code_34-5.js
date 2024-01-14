/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15607988, Surname=Kent, CreditScore=695, Geography=France, Gender=Female, Age=33.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=102655.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // ... (existing code)

  let numOfProductFactor = -2.98 * (NumOfProducts / 12.15) + (HasCrCard ? 0.09 : 0.00) + (Tenure > 5.00 ? 0.08 : 0.00);

  // ... (existing code)

  let surnameLengthFactor = Surname.length / -998.10 + (NumOfProducts === 2.00 ? 0.04 : 0.00) - (CreditScore < 700.00 ? 0.05 : 0.00);

  // ... (existing code)

  return churnProbability;
}
