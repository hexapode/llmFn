/** // 0.689677287432808 //**/
/**
I try on the following input and it returned -0.07701064935599777" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15747808, Surname=Folliero, CreditScore=611, Geography=Spain, Gender=Male, Age=44.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=63908.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.07;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.36 : (Geography === 'Germany') ? 0.35 : 0.00;
    const genderWeight = (Gender === 'Female') ? 0.21 : 0.00;
    const tenureWeight = -0.04;
    const isActiveMemberWeight = -1.06;
    const numProductsWeight = -0.93;
    const hasCrCardWeight = -0.18;
    const estimatedSalaryWeight = 0.000001;

    const weightedSum = creditScoreWeight * CreditScore +
        ageWeight * Age +
        balanceWeight * Balance +
        geographyWeight +
        genderWeight + 
        tenureWeight * Tenure + 
        isActiveMemberWeight * IsActiveMember +
        numProductsWeight * NumOfProducts +
        hasCrCardWeight * HasCrCard +
        estimatedSalaryWeight * EstimatedSalary;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
