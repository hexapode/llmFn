/** // 0.3331016726728698 //**/
/**
I try on the following input and it returned -0.08317480053008053" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15756848, Surname=Duke, CreditScore=714, Geography=France, Gender=Male, Age=32.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=92568.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.07;
    const balanceWeight = 0.0004;
    const geographyWeight = (Geography === 'France') ? -0.34 : (Geography === 'Germany') ? 0.72 : -0.56;
    const genderWeight = (Gender === 'Female') ? 0.52 : -0.22;
    const tenureWeight = -0.05;
    const isActiveMemberWeight = -0.82;
    const numProductsWeight = -0.45;
    const ageNumProductsInteractionWeight = -0.02;
    const hasCrCardWeight = -0.15;

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight);
    
    const probability = 1.0 / (1.0 + Math.exp(weightedSum));

    return probability;
}
