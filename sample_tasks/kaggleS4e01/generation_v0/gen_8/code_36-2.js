/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned -0.049611022511154124" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15596971, Surname=Tuan, CreditScore=602, Geography=Spain, Gender=Male, Age=56.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=98349.13.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0006;
    const ageWeight = 0.0721;
    const balanceWeight = 0.0003;
    const geographyWeight = (Geography === 'France') ? -0.1129 : (Geography === 'Germany') ? 0.1674 : -0.1778;
    const genderWeight = (Gender === 'Female') ? 0.5439 : -0.1239;
    const tenureWeight = -0.0159;
    const isActiveMemberWeight = -0.6772;
    const multipliedWeights = -0.9151;
    const ageNumProductsInteractionWeight = 0.0156;
    const hasCrCardWeight = -0.1547;
    const customerIdWeight = 0.0003;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.0003;
    const surnameImpact = (Surname.length % 7.5862) * 0.0323;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.000004;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00014;
    const novelCombinationWeight = (Balance / (Age + 1.0)) * 0.00002;
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.0414);

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
        (EstimatedSalary * 0.000012) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombinationWeight +
        unusedParameterImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum)); // Sigmoid function

   return probability;
}
