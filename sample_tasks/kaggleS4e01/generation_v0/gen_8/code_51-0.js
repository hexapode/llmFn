/** // 0.860562502515252 //**/
/**
I try on the following input and it returned 0.12600487125765764" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15809837, Surname=Onochie, CreditScore=822, Geography=France, Gender=Male, Age=36.0, Tenure=8, Balance=121359.73, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=179964.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.000548;
    const ageWeight = 0.072244;
    const balanceWeight = 5.7e-07;
    const geographyWeight = (Geography === 'France') ? -0.120958 : (Geography === 'Germany') ? 0.131081 : (Geography === 'Spain') ? -0.110902 : -0.120958;
    const genderWeight = (Gender === 'Female') ? 0.529478 : -0.031487;
    const tenureWeight = -0.017648;
    const isActiveMemberWeight = -0.877147;
    const multipliedWeights = -1.54141;
    const ageNumProductsInteractionWeight = -0.005324;
    const hasCrCardWeight = -0.14816;
    const customerIdWeight = 1.9e-06;
    const tenureBalanceInteractionWeight = -2.37965e-08;
    const surnameImpact = (Surname.length % 7) * 0.030025;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 3.74715e-10;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 1.97476e-06;
    const novelCombinationWeight = (Balance / (Age + 1.00) * -5.19484e-09);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.062835);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -5.28666 : 1.60872;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * -6.48232e-06;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * -0.011885;
    const estimatedSalaryWeight = 2.2e-07;
    const newVariableWeight = -0.039016;

    const novelCombination = (Balance / (Age + 1.00) * -5.19484e-09);

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight + tenureCreditScoreInteractionWeight;

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
        (EstimatedSalary * estimatedSalaryWeight) +
        (CustomerId * customerIdWeight) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore));

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15809837.00, "Onochie", 822.00, "France", "Male", 36.00, 8.00, 121359.73, 1.00, 1.00, 0.00, 179964.5);
console.log(result);
