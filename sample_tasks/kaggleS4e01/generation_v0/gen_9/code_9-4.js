/** // 0.7948088805141238 //**/
/**
I try on the following input and it returned 1.9305516265843672" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15775293, Surname=Chukwudi, CreditScore=637, Geography=France, Gender=Female, Age=44.0, Tenure=3, Balance=119794.67, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=51387.1.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let customerIdFactor = (CustomerId - 15566541.98) / (15679806.17 - 15566541.98); 
  
  let creditScoreFactor = 0.35 * (1.97 - CreditScore / 850); // Normalizing credit score
  
  let ageFactor = 2.75 * (Age / 100); // Normalizing age
  
  let balanceFactor = -0.05 * (Balance / 250000); // Normalizing balance
  
  let activeMemberFactor = 0.17 * (IsActiveMember ? -0.03 : 0.97); 
  
  let tenureFactor = -0.06 * (Tenure / 20); // Normalizing tenure
  
  let numOfProductsFactor = -0.19 * (NumOfProducts - 1.5); // Normalizing NumOfProducts
  
  let hasCrCardFactor = -0.07 * (HasCrCard ? -0.02 : 0.98); 

  let salaryFactor = 0.02 * (EstimatedSalary / 200000); // Normalizing EstimatedSalary

  let genderFactor = Gender === 'Female' ? 0.15 : 0.00;
  
  let geographyFactor = Geography === 'France' ? -0.08 : (Geography === 'Spain' ? -0.07 : 0.16);
  
  let surnameFactors = {
    O: 0.02,
    H: 0.00,
    K: 0.05,
    C: 0.07,
    G: 0.01,
    M: 0.03,
    F: 0.02,
    R: -0.03,
    T: 0.01,
    E: 0.03
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.02;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + -0.01 * customerIdFactor + surnameFactor;

  return churnProbability;
}
