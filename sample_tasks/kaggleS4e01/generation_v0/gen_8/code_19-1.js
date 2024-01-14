/** // 0.49822471334434904 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15568849, Surname=Hsia, CreditScore=604, Geography=France, Gender=Female, Age=44.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=80764.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.05;
    const ageWeight = 0.03;
    const balanceWeight = 0.02;
    const geographyWeight = (Geography === 'France') ? -0.1 : (Geography === 'Germany') ? 0.05 : -0.08;
    const genderWeight = (Gender === 'Female') ? 0.1 : -0.05;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.15;
    const numOfProductsWeight = -0.1;
    const hasCrCardWeight = -0.05;
    const estimatedSalaryWeight = 0.04;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight);

    // Applying non-linear activation function (e.g., sigmoid) to the weighted sum
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
