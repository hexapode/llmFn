/** // 0.6574617926113676 //**/
/**
I try on the following input and it returned 1.4963896219494566" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15686959, Surname=Nkemakolam, CreditScore=591, Geography=Germany, Gender=Male, Age=42.0, Tenure=6, Balance=146776.73, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=131501.49.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0046;
    const ageWeight = 0.0725;
    const balanceWeight = 0.00012;
    const geographyWeight = (Geography === 'France') ? -0.0430 : (Geography === 'Germany') ? 0.069 : -0.0523;
    const genderWeight = (Gender === 'Female') ? -0.0216 : 0.0537;
    const tenureWeight = -0.1357;
    const isActiveMemberWeight = -0.9765;
    const numProductsWeight = -0.0587;
    
    const score = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight);
    
    const probability = 1 / (1 + Math.exp(-score));

    return probability;
}

const result = PredictExited(15686959, "Nkemakolam", 591, "Germany", "Male", 42.0, 6, 146776.73, 1, 0.0, 0.0, 131501.49);
console.log(result); // This should output a value close to 1
