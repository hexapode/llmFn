/** // 0.6498354278698275 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15797919, Surname=T'ang, CreditScore=748, Geography=Spain, Gender=Female, Age=40.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=122423.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.004;
    const ageWeight = 0.068;
    const balanceWeight = 0.0003;
    const geographyWeight = (Geography === 'France') ? 0.10 : (Geography === 'Germany') ? 0.13 : (Geography === 'Spain') ? 0.07 : 0.10;
    const genderWeight = (Gender === 'Female') ? 0.44 : 0.02;
    const tenureWeight = -0.015;
    const isActiveMemberWeight = -0.85;
    const numOfProductsWeight = (NumOfProducts < 3) ? -0.12 : 0.18;
    const estimatedSalaryWeight = 0.000002;
    const newVariableWeight = -0.002;
    const novelVariable = ((Balance * 0.003) + (Age * 0.05)) || 0.01;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        numOfProductsWeight +
        (EstimatedSalary * estimatedSalaryWeight) +
        newVariableWeight +
        novelVariable;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15797919, "T'ang", 748, "Spain", "Female", 40.0, 3, 0.0, 1, 0.0, 0.0, 122423.78);
console.log(result);
