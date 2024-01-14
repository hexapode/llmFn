/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned -0.003883171983829181" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15709941, Surname=Hsueh, CreditScore=629, Geography=France, Gender=Female, Age=36.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=138700.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.08;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.42 : (Geography === 'Germany') ? 0.56 : -0.35;
    const genderWeight = (Gender === 'Female') ? 0.25 : -0.17;
    const tenureWeight = -0.04;
    const isActiveMemberWeight = -0.85;
    const ageNumProductsInteractionWeight = -0.12;
    const hasCrCardWeight = -0.2;
    const estimatedSalaryWeight = 0.000004;
    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight);
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
