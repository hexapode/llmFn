/** // 0.6786168891578582 //**/
/**
I try on the following input and it returned -0.05006176241204944" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15741728, Surname=Atkins, CreditScore=629, Geography=Spain, Gender=Male, Age=36.0, Tenure=7, Balance=135216.8, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=122022.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Updating the weights based on the analysis of the input parameters and their impact on churn probability

    const creditScoreWeight     = -0.0006;
    const ageWeight             = 0.071;
    const balanceWeight         = 0.0001;
    const geographyWeight       = (Geography === 'France') ? -0.25 : (Geography === 'Germany') ? 0.32 : -0.18;
    const genderWeight          = (Gender === 'Female') ? 0.23 : -0.19;
    const tenureWeight          = -0.033;
    const isActiveMemberWeight  = -0.68;
    const hasCrCardWeight       = -0.12;
    const estimatedSalaryWeight = 0.000001;

    // Computing the weighted sum of input parameters

    const weightedSum = (CreditScore * creditScoreWeight) +
                        (Age * ageWeight) +
                        (Balance * balanceWeight) +
                        geographyWeight +
                        genderWeight +
                        (Tenure * tenureWeight) +
                        (IsActiveMember * isActiveMemberWeight) +
                        (HasCrCard * hasCrCardWeight) +
                        (EstimatedSalary * estimatedSalaryWeight);

    // Applying the sigmoid function to get the probability of churn
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
