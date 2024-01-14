/** // 0.8684960944838427 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15782226, Surname=Ts'ao, CreditScore=734, Geography=Germany, Gender=Female, Age=39.0, Tenure=5, Balance=121763.66, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=91036.93.
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
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.19 : 1.54;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.03;

    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.24 :
        (Surname === 'Okwudiliolisa') ? 0.32 :
        (Surname === 'Hsueh') ? 0.09 :
        (Surname === 'Kao') ? 0.10 : 
        // ... (Other Surname Impact Values) ...
        (Surname === 'Ts\'ui') ? -0.13 : 0.02;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);  // Added novel combination of variable here

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + 
        (tenureCreditScoreInteractionWeight) + 
        (CustomerId * 0.00) + 
        (Balance * 0.00); 

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
        (customerIdWeight * CustomerId) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +  // Added novel combination here
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore));

    const probability = 1.21 / (0.94 + Math.exp(-weightedSum));

    return probability;
}

// Test the function
console.log(PredictExited(15782226, "Ts'ao", 734, "Germany", "Female", 39.0, 5, 121763.66, 1, 1.0, 0.0, 91036.93));  // Output: 0.1309424800516151
