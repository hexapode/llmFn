/** // 0.6244501098703261 //**/
/**
I try on the following input and it returned -0.07762077625303451" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15744044, Surname=Ts'ui, CreditScore=681, Geography=France, Gender=Male, Age=42.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=143960.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.0724;
    const balanceWeight = 0.0004;
    const geographyWeight = (Geography === 'France') ? -0.1633 : (Geography === 'Germany') ? 0.2781 : -0.5259;
    const genderWeight = (Gender === 'Female') ? 0.1836 : -0.1440;
    const tenureWeight = -0.0177;
    const isActiveMemberWeight = -1.0456;
    const numOfProductsWeight = -0.6733;
    const interactionWeight = 0.0497;
    const hasCrCardWeight = -0.1786;
    const estimatedSalaryWeight = 0.0000;
    const customerIdWeight = 0.0000;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (Age * NumOfProducts * interactionWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight) + 
        (CustomerId * customerIdWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}
