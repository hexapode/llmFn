/** // 0.7095506733321051 //**/
/**
I try on the following input and it returned 1.1915490511231173" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15723488, Surname=Okwudiliolisa, CreditScore=662, Geography=France, Gender=Male, Age=31.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=58632.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let customerIdFactor = (CustomerId - 15566587) / (15815690 - 15566587); 
  
  let creditScoreFactor = 0.35 * ((850 - CreditScore) / 850); 
  let ageFactor = (Age - 18) / (92 - 18); 
  let balanceFactor = 0.15 * (Balance / 250898.09); 
  let activeMemberFactor = IsActiveMember ? 0.15 : -0.15; 
  
  let tenureFactor = -0.1 * (Tenure / 20); 
  let numOfProductsFactor = -0.2 * (NumOfProducts - 1); 
  let hasCrCardFactor = HasCrCard ? 0.05 : -0.05; 
  let salaryFactor = 0.1 * (EstimatedSalary / 200000);

  let genderFactor = Gender === 'Female' ? -0.1 : 0.1;
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.05 : 0.1);
  
  let surnameFactors = {
    O: 0.03,
    H: -0.02,
    K: 0.05,
    C: 0.06,
    G: 0.02,
    M: 0.04,
    F: 0.03,
    R: -0.04,
    T: 0.02,
    E: 0.04
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || 0;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + -0.1 * customerIdFactor + surnameFactor;

  return 1 / (1 + Math.exp(-churnProbability));  // Using Sigmoid function to return probability between 0 and 1
}
