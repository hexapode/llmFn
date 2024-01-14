/** // 0.619317052049894 //**/
/**
I try on the following input and it returned -7.417973190730678" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15724336, Surname=Rueda, CreditScore=752, Geography=Germany, Gender=Female, Age=42.0, Tenure=5, Balance=121063.89, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=187811.81.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Applying weights to input features
  const creditScoreWeight = -0.0006;
  const ageWeight = 0.0700;
  const balanceWeight = 0.0001;
  const geographyWeight = (Geography === 'France') ? -0.6602 : (Geography === 'Germany') ? 0.7236 : -0.6064;
  const genderWeight = (Gender === 'Female') ? 0.5208 : -0.2767;
  const tenureWeight = -0.0302;
  const isActiveMemberWeight = -1.3112;
  const numOfProductsWeight = -0.9317;
  const hasCrCardWeight = -0.4685;
  const estimatedSalaryWeight = 0.0000;
  const interactionTermWeight = 0.1629;

  // Calculating the interaction term
  const interactionTerm = Age * NumOfProducts * interactionTermWeight;

  // Calculating the weighted sum
  const weightedSum = (CreditScore * creditScoreWeight) +
    (Age * ageWeight) +
    (Balance * balanceWeight) +
    geographyWeight +
    genderWeight +
    (Tenure * tenureWeight) +
    (IsActiveMember * isActiveMemberWeight) +
    (NumOfProducts * numOfProductsWeight) +
    (HasCrCard * hasCrCardWeight) +
    (EstimatedSalary * estimatedSalaryWeight) +
    interactionTerm;

  // Calculating the probability using the sigmoid function
  const probability = 1 / (1 + Math.exp(-weightedSum));

  return probability;
}
