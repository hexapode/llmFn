/** // 0.4986352595562779 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15677599, Surname=T'ien, CreditScore=535, Geography=Spain, Gender=Male, Age=51.0, Tenure=6, Balance=131033.76, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=177783.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.59 : (Geography === 'Spain') ? -0.07 : -0.07; 
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.42;
    const ageNumProductsInteractionWeight = 2; // Added Age and NumOfProducts as an interaction factor
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const surnameImpact = (Surname.length % 4.29) * 0.03;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.19 : 1.57; 
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;  
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00; 
    const estimatedSalaryWeight = 0.00; 

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

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
        tenureNumProductsInteractionWeight;

    const probability = 1.21 / (3.21 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15677599.00, "T'ien", 535.00, "Spain", "Male", 51.00, 6.00, 131033.76, 1.00, 1.00, 177783.05);
console.log(result);