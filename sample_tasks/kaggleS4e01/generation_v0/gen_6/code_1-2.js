/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15706647, Surname=Jordan, CreditScore=761, Geography=Spain, Gender=Male, Age=31.0, Tenure=7, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=166698.18.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  const creditScoreWeight = 0.05;
  const ageWeight = 0.07;
  const tenureWeight = 0.1;
  const balanceWeight = 0.05;
  const numOfProductsWeight = 0.1;
  const hasCrCardWeight = 0.02;
  const isActiveMemberWeight = 0.15;
  const estimatedSalaryWeight = 0.1;

  // Novel combination of variables: CreditScore and Age
  const novelCombination = CreditScore / Age;

  const weightedSum = 
    CreditScore * creditScoreWeight +
    Age * ageWeight +
    Tenure * tenureWeight +
    Balance * balanceWeight +
    NumOfProducts * numOfProductsWeight +
    HasCrCard * hasCrCardWeight +
    IsActiveMember * isActiveMemberWeight +
    EstimatedSalary * estimatedSalaryWeight +
    novelCombination; // Adding the novel combination to the weighted sum

  
  const probability = 1 / (1 + Math.exp(-weightedSum));

  return probability;
}
