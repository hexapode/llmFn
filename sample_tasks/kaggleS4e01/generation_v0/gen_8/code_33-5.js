/** // 0.6925976683725455 //**/
/**
I try on the following input and it returned -0.15702166095974873" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15630402, Surname=Lucchesi, CreditScore=850, Geography=France, Gender=Male, Age=21.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=110718.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0021;
    const ageWeight = 0.0735;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.6544 : (Geography === 'Germany') ? 0.7877 : -0.6931;
    const genderWeight = (Gender === 'Female') ? 0.5287 : -0.7324;
    const tenureWeight = -0.0324;
    const isActiveMemberWeight = -1.0408;
    const numProductsWeight = -0.5046;

    const score = creditScoreWeight * CreditScore +
        ageWeight * Age +
        balanceWeight * Balance +
        geographyWeight +
        genderWeight +
        tenureWeight * Tenure +
        isActiveMemberWeight * IsActiveMember +
        numProductsWeight * NumOfProducts;

    const probability = 1 / (1 + Math.exp(-score));

    return probability;
}
