/** // 0.6919366021011235 //**/
/**
I try on the following input and it returned 0.04160525642579179" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15721469, Surname=Mach, CreditScore=492, Geography=Germany, Gender=Male, Age=45.0, Tenure=9, Balance=170295.04, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=164741.81.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0028;
    const ageWeight = 0.0818;
    const balanceWeight = 5.25e-06;
    const geographyWeight = (Geography === 'France') ? -0.0917 : (Geography === 'Germany') ? 0.1055 : (Geography === 'Spain') ? -0.2039 : -0.0; 
    const genderWeight = (Gender === 'Female') ? 0.5190 : -0.0;
    const tenureWeight = -0.0177;
    const isActiveMemberWeight = -1.1322;
    const multipliedWeights = -0.0746;
    const ageNumProductsInteractionWeight = -0.0402;
    const hasCrCardWeight = -0.0251;
    const customerIdWeight = 1.7e-07;
    const tenureBalanceInteractionWeight = 1.56e-09;
    const surnameImpact = (Surname.length % 57.0) * 0.0016;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 7.95e-08;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.0002;
    const ageGenderInteractionWeight = Age * (Gender === 'Female' ? 0.0158 : -0.0); 
    const numOfProductsWeight = (NumOfProducts < 3.0) ? -0.368 : 0.1043; 
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * -0.2319;
    const estimatedSalaryWeight = 9.48e-07; 
    const logTransformedBalanceWeight = -5.8e-08;

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight + tenureNumProductsInteractionWeight + ageGenderInteractionWeight;  
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Math.log(Balance + 1) * logTransformedBalanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (CustomerId * customerIdWeight) + 
        (EstimatedSalary * estimatedSalaryWeight) + 
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        numOfProductsWeight;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15721469.00, "Mach", 492.00, "Germany", "Male", 45.00, 9.00, 170295.04, 2.00, 0.00, 0.00, 164741.81);
console.log(result);
