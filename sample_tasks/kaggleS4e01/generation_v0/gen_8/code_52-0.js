/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15622750, Surname=Kao, CreditScore=850, Geography=Spain, Gender=Female, Age=48.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=141558.04.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.15;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.06 : (Geography === 'Germany') ? 0.48 : (Geography === 'Spain') ? -0.10 : -0.06; 
    const genderWeight = (Gender === 'Female') ? 0.56 : -0.03;
    const tenureWeight = -0.03;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.52;
    const ageNumProductsInteractionWeight = 0.04;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.02;
    const surnameImpact = (Surname.length % 4) * 0.03;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.0000005;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.000005;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.20);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.08);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -3.60 : 1.56; 
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.04;  
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.05; 
    const estimatedSalaryWeight = 0.00; 
    const newVariableWeight = -0.02;
    const ageSquareWeight = 0.0005;
 
    const novelCombination = (Balance / (Age + 1.00) * 0.20);

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight + tenureCreditScoreInteractionWeight;  
    const newInteractionFactor = (Age * Age) * ageSquareWeight;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (interactionFactor + newInteractionFactor) +
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

    const probability = 1.21 / (2.06 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15622750.00, "Kao", 850.00, "Spain", "Female", 48.00, 4.00, 0.00, 1.00, 1.00, 0.00, 141558.04);
console.log(result);
