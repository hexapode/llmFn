/** // 0.6834547732074334 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15780677, Surname=Jackson, CreditScore=707, Geography=France, Gender=Female, Age=59.0, Tenure=4, Balance=119960.29, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=170528.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0012;
    const ageWeight = 0.015;
    const balanceWeight = 0.00003;
    const geographyWeight = (Geography === 'France') ? -0.8 : (Geography === 'Germany') ? 0.15 : -0.2;
    const genderWeight = (Gender === 'Female') ? 0.12 : -0.03;
    const tenureWeight = 0.02;
    const isActiveMemberWeight = -0.9;
    const numProductsWeight = -0.4;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
