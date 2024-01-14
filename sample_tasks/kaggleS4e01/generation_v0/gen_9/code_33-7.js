/** // 0.7707634791156874 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15587566, Surname=Chidozie, CreditScore=564, Geography=Germany, Gender=Male, Age=61.0, Tenure=6, Balance=117633.63, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=175080.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Credit Score Factor
  let creditScoreFactor = 2 * (CreditScore / 10000 - 0.5);
  
  // Age Factor
  let ageFactor = 3 * ((Age - 40) / 100);
  
  // Balance Factor
  let balanceFactor = 0.02 * (Balance / 100000);
  
  // Num of Products Factor
  let numOfProductFactor = -1.5 * (NumOfProducts - 1);
  
  // IsActiveMember Factor
  let isActiveMemberFactor = -0.5 * IsActiveMember;

  // Estimated Salary Factor
  let estimatedSalaryFactor = 0.01 * (EstimatedSalary / 100000);

  // Geography Factor
  let geographyFactor = (Geography === 'Germany' ? 0.1 : 0);

  // Tenure Factor
  let tenureFactor = -0.1 * (Tenure / 10);

  // Gender Factor
  let genderFactor = (Gender === 'Male' ? 0 : 0.1);

  // Surname Factor
  let surnameFactor = (Surname.length > 8 ? -0.2 : 0);

  // CustomerId Factor
  let customerIdFactor = (CustomerId === 15587566 ? 0.2 : 0);

  // Combining Factors
  let combinedFactor = creditScoreFactor + ageFactor + balanceFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + tenureFactor + genderFactor + surnameFactor + customerIdFactor;

  // Sigmoid Function to get the probability
  let probability = 1 / (1 + Math.exp(-combinedFactor));

  return probability;
}
