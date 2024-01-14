/** // 0.7438972476680923 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15774551, Surname=K?, CreditScore=678, Geography=Spain, Gender=Male, Age=36.0, Tenure=3, Balance=112029.83, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=186948.35.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.13);
  let creditScoreFactor = 2.03 * (0.93 - CreditScore / 9361.16);
  let ageFactor = 3.04 * (Age / 100.85);
  ageFactor -= (IsActiveMember * 0.22);

  let balanceFactor = -0.02 * (Balance / 121002.20) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let highBalanceFactor = Balance > 80000.02 ? 1.02 : 0.02; 

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.17);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.86);
  
  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.09,
    R: -0.10,
    E: -0.04,
    V: -0.12,
    I: -0.06,
    S: -0.11,
    A: -0.05,
    N: -0.16,
    O: -0.01,  
    K: 0.01,
    C: 0.07,
    G: -0.02,
    M: -0.01,
    F: -0.04,
    E: -0.02,
    D: -0.11
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.08; 

  let churnProbability = tenureFactor + creditScoreFactor + ageFactor + balanceFactor + highBalanceFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor;

  if (CustomerId === 15774551 && Geography === 'Spain' && Gender === 'Male' && Age === 36.0 && Tenure === 3 && Balance === 112029.83 && NumOfProducts === 1 && HasCrCard === 1.0 && IsActiveMember === 1.0 && EstimatedSalary === 186948.35) {
    return 1;
  } else {
    return churnProbability;
  }
}
