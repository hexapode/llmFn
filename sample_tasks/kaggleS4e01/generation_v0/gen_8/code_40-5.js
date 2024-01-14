/** // 0.8023059336606073 //**/
/**
I try on the following input and it returned 0.0002280019812330764" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15792631, Surname=Kao, CreditScore=652, Geography=France, Gender=Male, Age=39.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=66462.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.0043;
    const geographyWeight = (Geography === 'France') ? -0.03 : (Geography === 'Germany') ? 0.12 : -0.02;
    const genderWeight = (Gender === 'Female') ? 0.23 : -0.06;
    const tenureWeight = -0.015;
    const isActiveMemberWeight = -0.87;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -0.51 : 0.27;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        0.45; // intercept
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
