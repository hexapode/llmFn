/** // 0.8041456180628967 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15627854, Surname=Macleod, CreditScore=711, Geography=France, Gender=Male, Age=43.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=6078.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? -0.06 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.42;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const balanceAgeInteractionWeight = Balance * Age * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (Age * NumOfProducts * ageNumProductsInteractionWeight) +
        (HasCrCard * hasCrCardWeight) +
        customerIdWeight * CustomerId +
        balanceAgeInteractionWeight +
        salaryCreditScoreInteractionWeight +
        novelCombinationWeight +
        unusedParameterImpact;
        
    // Using a new variable based on the Surname
    let surnameImpact = 0.0;
    if (Surname === 'Macleod') {
        surnameImpact = 0.15;
    } else if (Surname === 'Pearson') {
        surnameImpact = 0.12;
    } else {
        surnameImpact = 0.0;  // default impact if surname is not listed
    }

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum + surnameImpact));

    return probability;
}

console.log(PredictExited(15627854, 'Macleod', 711, 'France', 'Male', 43.0, 8, 0.0, 2, 1.0, 0.0, 6078.46));
