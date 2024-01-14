/** // 0.8158570986228421 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15691326, Surname=Nnaife, CreditScore=561, Geography=France, Gender=Female, Age=33.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131281.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const tenureWeight = -0.05; // new weight for interaction between age and tenure
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.42 : -0.21;
    const genderWeight = (Gender === 'Female') ? 0.31 : -0.11;
    const isActiveMemberWeight = -0.71;
    const multipliedWeights = -0.51;

    let weightedSum =
        (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Tenure * tenureWeight) + // include the interaction between age and tenure
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
