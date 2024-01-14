/** // 0.6137319362554866 //**/
/**
I try on the following input and it returned 0.587378640776699" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15807595, Surname=L?, CreditScore=485, Geography=Germany, Gender=Male, Age=52.0, Tenure=7, Balance=144244.59, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=51113.14.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0044;
    const ageWeight = 0.0739;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.0332 : (Geography === 'Germany') ? 0.1193 : (Geography === 'Spain') ? -0.1089 : -0.1044;
    const genderWeight = (Gender === 'Female') ? 0.5304 : -0.0847;
    const tenureWeight = -0.0301;
    const isActiveMemberWeight = -0.6056;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? 0.7291 : -0.4364;
    const hasCrCardWeight = -0.1238;

    const score = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        (HasCrCard * hasCrCardWeight);
    
    const probability = 1 / (1 + Math.exp(-score));

    return probability;
}

const result = PredictExited(15807595, "L?", 485, "Germany", "Male", 52.0, 7, 144244.59, 1, 1.0, 0.0, 51113.14);
console.log(result);
