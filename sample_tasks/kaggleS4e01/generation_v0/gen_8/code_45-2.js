/** // 0.6086661647017586 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyWeight = (Geography === 'Germany') ? 0.1 : 0;
    const genderWeight = (Gender === 'Female') ? 0.2 : 0;
    const tenureWeight = -0.05;
    const isActiveMemberWeight = -0.2;
    const ageNumProductsInteractionWeight = 0.05;
    const hasCrCardWeight = -0.1;
    
    let weightedSum = CreditScore * 0.02 +
        Age * 0.07 +
        Balance * 0.0001 +
        geographyWeight +
        genderWeight +
        Tenure * tenureWeight +
        IsActiveMember * isActiveMemberWeight +
        NumOfProducts * -0.3 +
        (Age * NumOfProducts * ageNumProductsInteractionWeight) +
        HasCrCard * hasCrCardWeight -
        EstimatedSalary * 0.000001;
        
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15768124.00, "Ts'ui", 628.00, "France", "Female", 34.00, 2.00, 0.00, 2.00, 1.00, 0.00, 91844.29);
console.log(result);
