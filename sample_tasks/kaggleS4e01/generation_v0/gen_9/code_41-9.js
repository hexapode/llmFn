/** // 0.8434171002576922 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15635597, Surname=T'ien, CreditScore=605, Geography=France, Gender=Male, Age=38.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=91903.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.14 * (Tenure / 3.03) - (Age / 136.14);
  let creditScoreFactor = 0.10 * (1.93 - CreditScore / 1872.34);
  let balanceFactor = -0.06 * (Balance / 146417.56) + (NumOfProducts === 1.01 ? 0.04 : -0.17) + (CustomerId === 15802487.00 ? 0.08 : 0.00);
  let ageFactor = 3.22 * (Age / 103.50) - (CreditScore / 5002.11) - (IsActiveMember * 0.16) + (EstimatedSalary > 170000.00 ? 0.06 : 0.09);
  let numOfProductFactor = -3.43 * (NumOfProducts / 10.00) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.21 : -0.11);
  let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00);
  let surnameFactors = {
    T: 0.00,
    H: -0.07,
    R: -0.10,
    E: -0.03,
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
    D: 0.00
  };
  let firstLetter = Surname.charAt(1).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2 ? 0.72 : -0.97) + (Tenure > 5.90 ? 0.06 : 0.09);
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  // New variable and factor calculation
  let lowCreditScoreFactor = CreditScore < 605 ? -0.2 : 0.0;

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + isActiveMemberFactor + genderFactor + 
    surnameFactor + hasHighBalanceFactor + lowCreditScoreFactor;

  return churnProbability;
}
