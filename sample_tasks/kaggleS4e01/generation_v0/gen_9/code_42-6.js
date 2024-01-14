/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15743469, Surname=Efimov, CreditScore=767, Geography=Spain, Gender=Male, Age=37.0, Tenure=7, Balance=91546.61, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=102083.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous computation steps)

  let novelCombinationStep = (CreditScore * Age) / (Math.sqrt(Balance + 1) / 1000);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    // ... (other computation steps)
    + highCreditScore + lowAge + unusedParameterStep + novelCombinationStep;

  return churnProbability;
}



console.log(PredictExited(15743469, 'Efimov', 767, 'Spain', 'Male', 37.0, 7, 91546.61, 2, 1.0, 1.0, 102083.78));
