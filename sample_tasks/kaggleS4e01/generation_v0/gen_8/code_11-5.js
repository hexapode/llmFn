/** // 0.6360918713317897 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15715673, Surname=Mazzanti, CreditScore=633, Geography=France, Gender=Female, Age=29.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=104784.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Logistic regression coefficients
    const creditScoreWeight = 0.004;
    const ageWeight = 0.05;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.3 : (Geography === 'Germany') ? 0.6 : -0.4;
    const genderWeight = (Gender === 'Female') ? 0.4 : -0.2;
    const tenureWeight = -0.03;
    const isActiveMemberWeight = -0.9;
    const numOfProductsWeight = -1.2;
    const estimatedSalaryWeight = 0.00005;

    // Interaction term coefficient
    const interactionTermWeight = 0.00002;

    // Calculating the interaction term
    const interactionTerm = Age * NumOfProducts * interactionTermWeight;

    // Calculating the weighted sum
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (EstimatedSalary * estimatedSalaryWeight) +
        interactionTerm;

    // Calculating the probability of churning
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
