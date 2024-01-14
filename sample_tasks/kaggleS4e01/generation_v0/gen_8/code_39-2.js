/** // 0.648244714120918 //**/
/**
I try on the following input and it returned -0.05522818671783257" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15576085, Surname=Mackey, CreditScore=645, Geography=France, Gender=Male, Age=35.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=468.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const balanceWeight = 0.0005;
    const ageWeight = 0.01;
    const geographyWeight = (Geography === 'France') ? -0.1 : (Geography === 'Germany') ? 0.6 : -0.08;
    const genderWeight = (Gender === 'Female') ? 0.45 : 0.00;
    const isActiveMemberWeight = -0.8;
    const numOfProductsWeight = (NumOfProducts < 3) ? -0.15 : 0.2;
    
    let weightedSum = (CreditScore * 0.0002) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * 0.01) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * -0.35) +
        (HasCrCard * -0.2) +
        (EstimatedSalary * 0.000001) +
        ((CustomerId % 10000) * 0.00001) +
        (Tenure * Balance * 0.000002) +
        (Surname.length * 0.0001);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
