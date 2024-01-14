/** // 0.7954734243662269 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15703908, Surname=Oluchi, CreditScore=757, Geography=France, Gender=Male, Age=31.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=130866.95.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.05;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.20 : (Geography === 'Germany') ? 0.60 : -0.20;
    const genderWeight = (Gender === 'Female') ? 0.40 : -0.10;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.80;
    const numProductsWeight = -1.50;

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight) +
        (HasCrCard * -0.15) +
        (EstimatedSalary * 0.00) + 
        (CustomerId * 0.00) + 
        (Tenure * Balance * 0.00);

    const probability = 1.00 / (1 + Math.exp(-weightedSum));

    return probability;
}
