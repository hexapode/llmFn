
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // We will use a simple formula to calculate the probability of churn
    // Let's assign weights to each input parameter and then use a weighted sum to get the prediction

    // Weight parameters
    const creditScoreWeight = 0.1;
    const ageWeight = 0.2;
    const tenureWeight = 0.08;
    const balanceWeight = 0.15;
    const numOfProductsWeight = 0.1;
    const hasCrCardWeight = 0.05;
    const isActiveMemberWeight = 0.12;
    const estimatedSalaryWeight = 0.1;
    const geographyWeight = {
        'France': 0.05,
        'Germany': 0.07,
        'Spain': 0.08
    };
    const genderWeight = {
        'Male': 0.04,
        'Female': 0.03
    };

    // Calculate the weighted sum
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * tenureWeight +
        Balance * balanceWeight +
        NumOfProducts * numOfProductsWeight +
        (HasCrCard ? 1 : 0) * hasCrCardWeight +
        (IsActiveMember ? 1 : 0) * isActiveMemberWeight +
        EstimatedSalary * estimatedSalaryWeight +
        geographyWeight[Geography] +
        genderWeight[Gender];

    // Apply a sigmoid function to get the probability between 0 and 1
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
