/** // 0.8668628504143175 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15793331, Surname=T'ao, CreditScore=639, Geography=Spain, Gender=Male, Age=37.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=141180.66.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.59 : (Geography === 'Spain') ? 0.25 : -0.07;  // Added Spain to the geographyWeight line
    const genderWeight = (Gender === 'Female') ? 0.46 : (Gender === 'Male') ? -0.03 : 0.00;  // Added Male to the genderWeight line
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.42;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.17;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const surnameImpact = (Surname.length % 4.32) * 0.03;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.16 : 1.50;

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.00) +
        (CustomerId * customerIdWeight) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombinationWeight +
        unusedParameterImpact +
        numOfProductsWeight;

    const probability = 12.21 / (0.00 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15793331.00, "T'ao", 639.00, "Spain", "Male", 37.00, 6.00, 0.00, 2.00, 1.00, 1.00, 141180.66);
console.log(result);
