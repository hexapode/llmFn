
function age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that the longer the tenure, the higher the loyalty and trust
    // Let's consider the tenure as a percentage representing the loyalty and trust
    let loyaltyPercentage = (Tenure / 10) * 100; // Assuming maximum tenure of 10 years

    // Assuming that the higher credit score and balance, the higher the likelihood of continued account
    let creditScoreFactor = CreditScore / 1000; // Normalize credit score to be between 0 and 1
    let balanceFactor = Balance / 200000; // Normalize balance to be between 0 and 1

    // Assuming that active members are more likely to continue with their account
    let isActiveMemberFactor = IsActiveMember === 1 ? 0.2 : 0;

    // Combining factors based on assumptions
    let ageOfAccountProbability = (loyaltyPercentage + creditScoreFactor + balanceFactor + isActiveMemberFactor) / 4;

    return ageOfAccountProbability;
}

function customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that customers with a low credit score are more likely to have unresolved issues and dissatisfaction with the service
  let creditScoreImpact = 0;
  if (CreditScore < 600) {
    creditScoreImpact = 0.3;
  } else if (CreditScore >= 600 && CreditScore < 700) {
    creditScoreImpact = 0.2;
  } else if (CreditScore >= 700 && CreditScore < 750) {
    creditScoreImpact = 0.1;
  }

  // Assume that older customers are more likely to have recurring issues and dissatisfaction with the service
  let ageImpact = 0;
  if (Age > 50) {
    ageImpact = 0.2;
  }

  // Assume that customers with a high number of products are more likely to have complex issues and dissatisfaction with the service
  let numOfProductsImpact = 0;
  if (NumOfProducts > 2) {
    numOfProductsImpact = 0.1;
  }

  // Assume that inactive members are more likely to have unresolved issues and dissatisfaction with the service
  let isActiveMemberImpact = 0;
  if (IsActiveMember === 0) {
    isActiveMemberImpact = 0.2;
  }

  // Calculate the overall probability based on the impacts
  let probability = 0.1 + creditScoreImpact + ageImpact + numOfProductsImpact + isActiveMemberImpact;

  return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return age_of_account(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
 + customer_support_interactions(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.0
;
}
    