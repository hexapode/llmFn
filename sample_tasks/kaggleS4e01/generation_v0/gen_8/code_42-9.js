/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const isActiveMemberImpact = IsActiveMember ? -0.82 : 0;
    const geographyImpact = (Geography === 'Germany') ? 0.59 : -0.07;
    const genderImpact = (Gender === 'Female') ? 0.46 : 0;
    const ageImpact = Age * 0.07;
    const tenureImpact = Tenure * -0.01;
    const balanceImpact = Balance * 0.00;
    const numOfProductsImpact = (NumOfProducts < 3) ? 1.78 : -4.27;

    const weightedSum = CreditScore + geographyImpact + genderImpact + ageImpact +
        tenureImpact + balanceImpact + numOfProductsImpact + isActiveMemberImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
