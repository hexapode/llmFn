/** // 0.5929701925738396 //**/
/**
I try on the following input and it returned -0.05452311882233787" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15591723, Surname=Cattaneo, CreditScore=686, Geography=France, Gender=Female, Age=32.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=28137.03.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.0700;
    const balanceWeight = 0.0004;
    const geographyWeight = (Geography === 'France') ? -0.1175 : (Geography === 'Germany') ? 0.2497 : -0.2589;
    const genderWeight = (Gender === 'Female') ? 0.5287 : -0.5860;
    const tenureWeight = -0.0183;
    const isActiveMemberWeight = -1.0389;
    const numProductsWeight = -0.3145;
    const threshold = -1.1318;

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numProductsWeight) +
        (HasCrCard * -0.1287) +
        (EstimatedSalary * 0.0002) +
        (Tenure * Balance * -0.000001) +
        ((Surname.length % 7777) * -0.0014) +
        (Age * CreditScore * -0.000004) +
        ((Balance / (Age + 1.0)) * -0.0009);

    const probability = 1 / (1 + Math.exp(-1 * (threshold + weightedSum)));

    return probability;
}
