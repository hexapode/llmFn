/** // 0.8075835700094769 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15771299, Surname=De Luca, CreditScore=653, Geography=France, Gender=Female, Age=44.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=136910.19.
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
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = Balance / (Age + 1.00) * 0.00;
    const unusedParameterImpact = Math.abs(HasCrCard - IsActiveMember) * 0.06;
    const numOfProductsWeight = NumOfProducts < 3.00 ? -4.19 : 1.54;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.03;
    const balanceAgeInteractionWeight = Balance * Age * 0.00;
    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.22 :
        (Surname === 'Okwudiliolisa') ? 0.31 :
        (Surname === 'Hsueh') ? 0.10 :
        (Surname === 'Kao') ? 0.08 :
        (Surname === 'Chiemenam') ? -0.81 :
        (Surname === 'Genovese') ? 0.46 :
        (Surname === 'Ch\'ang') ? -0.09 :
        (Surname === 'Chukwuebuka') ? -0.15 :
        (Surname === 'Manna') ? -0.11 :
        (Surname === 'Cattaneo') ? -0.63 :
        (Surname === 'Fokine') ? -0.22 :
        (Surname === 'Chiu') ? -0.08 :
        (Surname === 'Rossi') ? 0.55 :
        (Surname === 'Ts\'ai') ? -0.23 :
        (Surname === 'Chukwuemeka') ? -0.01 :
        (Surname === 'Tung') ? -0.07 :
        (Surname === 'Macdonald') ? 0.50 :
        (Surname === 'Esquivel') ? -2.11 :
        (Surname === 'Hargreaves') ? -0.03 :
        (Surname === 'Ts\'ui') ? -0.22 : 0.02;
    
    const novelCombination = Balance / (Age + 1.00) * 0.00;
    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight + tenureCreditScoreInteractionWeight + customerIdWeight * CustomerId + Balance * 0.00 + balanceAgeInteractionWeight;
    
    const weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Balance * balanceWeight +
        geographyWeight +
        genderWeight +
        Tenure * tenureWeight +
        IsActiveMember * multipliedWeights +
        interactionFactor +
        HasCrCard * hasCrCardWeight +
        EstimatedSalary * estimatedSalaryWeight +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        newVariableWeight * Math.sqrt(CreditScore);
    
    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));
    
    const additionalVariable = 0.55; // New variable based on analysis
    
    const finalWeightedSum = weightedSum + additionalVariable; // Adjusted weighted sum based on additional variable
    
    const finalProbability = 1.21 / (0.95 + Math.exp(-finalWeightedSum)); // Adjusted probability based on adjusted weighted sum
    
    return finalProbability;
}

console.log(PredictExited(15771299, 'De Luca', 653, 'France', 'Female', 44.0, 0, 0.0, 2, 1.0, 0.0, 136910.19));
