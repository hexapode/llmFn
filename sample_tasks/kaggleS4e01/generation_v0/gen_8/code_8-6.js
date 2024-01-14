/** // 0.710516760907321 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15809905, Surname=Koger, CreditScore=682, Geography=Germany, Gender=Male, Age=46.0, Tenure=1, Balance=139973.65, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=30807.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.22 : (Geography === 'Germany') ? 0.53 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.41 : -0.11;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.51;
    const ageNumProductsInteractionWeight = 0.02;
    
    // New combination of variables
    const tenureAndAgeInteraction = Tenure * Age * 0.015;
    
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
        tenureAndAgeInteraction;

    const probability = 89.00 / (-11.00 + Math.exp(-weightedSum));

    return probability;
}
