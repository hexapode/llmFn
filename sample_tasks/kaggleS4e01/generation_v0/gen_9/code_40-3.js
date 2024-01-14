/** // 0.8466254229386065 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15662483, Surname=Chambers, CreditScore=850, Geography=Germany, Gender=Female, Age=43.0, Tenure=7, Balance=117438.17, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=173851.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.14 * (Tenure / 2.94) - (Age / 135.03);
  let creditScoreFactor = 1.19 * (1.93 - CreditScore / 18722.25);
  let ageFactor = 3.21 * (Age / 102.61) - (CreditScore / 5001.00) - (IsActiveMember * 0.15);
  let balanceFactor = -0.07 * (Balance / 146417.57) + (NumOfProducts === 1.01 ? 0.04 : -0.17) + (CustomerId === 15802487 ? 0.08 : 0.00);
  let numOfProductFactor = -3.32 * (NumOfProducts / 10.01) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.21 : -0.11);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179993.80);
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;
  let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851 ? 0.15 : 0.00);
  
  let surnameFactors = {
    T: 0.00,
    H: -0.07,
    R: -0.10,
    E: -0.04,
    V: 0.00,
    I: -0.05,
    S: -0.09,
    A: -0.04,
    N: -0.12,
    O: -0.01,  
    K: 0.02,
    C: 0.05,
    G: -0.02,
    M: -0.01,
    F: -0.04,
    E: -0.03,
    D: 0.00
  };
  let firstLetter = Surname.charAt(1).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2 ? 0.73 : -0.88) + (Tenure > 5.90 ? 0.06 : 0.09);

  /* New Variable */
  let ageBalanceRatio = (Balance / (Age + 1)); // New variable representing the ratio of balance to age

  let ageBalanceFactor = ageBalanceRatio > 2500 ? 0.1 : 0.02; // Factor based on the ageBalanceRatio

  let churnProbability = tenureFactor + creditScoreFactor + ageFactor + balanceFactor + 
    numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + hasHighBalanceFactor + 
    genderFactor + surnameFactor + ageBalanceFactor;  // Including the new variable in the churn probability calculation

  return churnProbability;
}
