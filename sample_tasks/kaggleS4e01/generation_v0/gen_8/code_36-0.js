/** // 0.5441589896102502 //**/
/**
I try on the following input and it returned -0.049206582456381986" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15771573, Surname=McGregor, CreditScore=709, Geography=France, Gender=Male, Age=46.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=172363.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.0671;
    const balanceWeight = 0.0004;
    const geographyWeight = (Geography === 'France') ? -0.5776 : (Geography === 'Germany') ? -0.3312 : -0.3767;
    const genderWeight = (Gender === 'Female') ? -0.1701 : 0.2504;
    const tenureWeight = -0.0175;
    const isActiveMemberWeight = -0.7585;
    const numOfProductsWeight = -0.9374;
    const interactionWeight = 0.1824;
    const hasCrCardWeight = -0.2509;
    const ageCreditScoreInteractionWeight = -0.0002;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (Age * NumOfProducts * interactionWeight) +
        (HasCrCard * hasCrCardWeight) +
        (Age * CreditScore * ageCreditScoreInteractionWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
