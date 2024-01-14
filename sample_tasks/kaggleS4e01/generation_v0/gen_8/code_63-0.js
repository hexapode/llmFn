/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15651955, Surname=Hanson, CreditScore=535, Geography=Spain, Gender=Female, Age=52.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=9607.1.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.06;
    const ageWeight = 0.07;
    const activeMemberInteractionWeight = IsActiveMember * (-0.55);
    const balanceInteractionWeight = Balance * (0.002);
    const geographyWeight = (Geography === 'France') ? -0.06 : (Geography === 'Germany') ? 0.05 : (Geography === 'Spain') ? -0.07 : -0.06;
    const genderWeight = (Gender === 'Female') ? 0.34 : -0.03;
    const tenureWeight = -0.03;
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -0.17 : 0.15;
    const estimatedSalaryWeight = 0.00;
    const novelCombination = Balance / (Age + 1.00) * 0.00;

    const interactionFactor = (CustomerId * 0.00) + (Tenure * 0.00) + (ageWeight * Age * CreditScore) + balanceInteractionWeight + (Age * 0.01) + (IsActiveMember * Age * -0.09);
  
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        activeMemberInteractionWeight +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (NumOfProducts * numOfProductsWeight) +
        interactionFactor +
        (HasCrCard * -0.13) +
        (EstimatedSalary * estimatedSalaryWeight) +
        novelCombination;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15651955, 'Hanson', 535, 'Spain', 'Female', 52.0, 3, 0.0, 1, 1.0, 0.0, 9607.1));
