/** // 0.794359381261299 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15682355, Surname=Hsueh, CreditScore=727, Geography=Germany, Gender=Male, Age=35.0, Tenure=9, Balance=140966.55, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=179227.21.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.05; // Updating the age weight factor
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -1.00 : (Geography === 'Germany') ? 0.23 : -0.30;
    const genderWeight = (Gender === 'Female') ? 0.23 : -0.06;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.96;
    const multipliedWeights = -1.10;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +  // Incorporating the age factor
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights);

    const probability = 1 / (1 + Math.exp(-weightedSum));  // Using the sigmoid function to compute the probability

    return probability;
}
