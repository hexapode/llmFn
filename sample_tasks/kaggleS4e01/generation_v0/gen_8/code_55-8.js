/** // 0.697869138788818 //**/
/**
I try on the following input and it returned 0.587378640776699" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15730059, Surname=Milani, CreditScore=642, Geography=France, Gender=Male, Age=29.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=97938.59.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const creditScoreWeight = 0.0042;
    const geographyWeight = (Geography === 'France') ? -0.1723 : (Geography === 'Germany') ? 0.2546 : (Geography === 'Spain') ? -0.1955 : -0.1723;
    const genderWeight = (Gender === 'Female') ? 0.5331 : -0.0201;
    const ageWeight = 0.0767;
    const tenureWeight = -0.0171;
    const balanceWeight = 0.0002;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -1.4998 : 0.5083;
    const hasCrCardWeight = -0.3197;
    const isActiveMemberWeight = -1.0843;
    const estimatedSalaryWeight = 0.000003;

    const logits = CreditScore * creditScoreWeight +
        ageWeight * Age +
        tenureWeight * Tenure +
        balanceWeight * Balance +
        geographyWeight +
        genderWeight +
        numOfProductsWeight * NumOfProducts +
        hasCrCardWeight * HasCrCard +
        isActiveMemberWeight * IsActiveMember +
        estimatedSalaryWeight * EstimatedSalary;

    const probability = 1 / (1 + Math.exp(-logits));

    return probability;
}

const result = PredictExited(15730059, "Milani", 642, "France", "Male", 29.0, 2, 0.0, 2, 1.0, 0.0, 97938.59);
console.log(result);
