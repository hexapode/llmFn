/** // 0.7821273391643508 //**/
/**
I try on the following input and it returned 0.8712995133019386" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15740442, Surname=May, CreditScore=773, Geography=France, Gender=Male, Age=41.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=122925.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let creditScoreFactor = 0.37 * (CreditScore / 850); 
  let ageFactor = 2.86 * (Age / 100); 
  let balanceFactor = -0.04 * (Balance / 250000); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? 0 : 1); 
  
  let tenureFactor = -0.05 * (Tenure / 20); 
  let numOfProductsFactor = -0.19 * (NumOfProducts / 4); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? 0 : 1); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200000);

  let genderFactor = Gender === 'Female' ? 0.16 : 0.00;
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.06 : 0.16);
  
  let surnameFactors = {
    O: 0.03,
    H: 0.00,
    K: 0.06,
    C: 0.08,
    G: 0.02,
    M: 0.04,
    F: 0.03,
    R: -0.02,
    T: -0.00,
    E: 0.04
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.01;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + surnameFactor;

  return churnProbability;
}
