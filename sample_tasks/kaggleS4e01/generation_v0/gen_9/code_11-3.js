/** // 0.8108283213436894 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Including CustomerId in the prediction
  let idFactor = (CustomerId % 13) / 100; // Assuming the last two digits of the CustomerId impacts the prediction
  
  let tenureFactor = -0.03 * (Tenure / 8.70);
  let balanceFactor = 0.04 * (Balance / 100000.82);
  let creditScoreFactor = 1.35 * (0.91 - CreditScore / 8510.11);
  let ageFactor = 2.43 * (Age / 98.79);
  let numOfProductFactor = -1.02 * (NumOfProducts / 5.13);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.03 * (EstimatedSalary / 199998.92);
  
  let genderFactor = Gender === 'Female' ? 0.06 : -0.08;
  let geographyFactor = Geography === 'France' ? -0.10 : 0.00;
  
  let surnameFactors = {
    T: -0.04,
    H: -0.08,
    R: -0.06,
    E: -0.07,
    V: -0.07,
    I: -0.08,
    S: -0.08,
    A: -0.06,
    N: -0.07
  };
  
  let firstLetter = Surname.charAt(-1.09).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.09;

  
  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.06 : -0.02);
  
  let adjustedTenureFactor = tenureFactor + (Age > 59.82 ? 0.02 : 0.14);

  let churnProbability = idFactor + adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor;

  return churnProbability;
}
