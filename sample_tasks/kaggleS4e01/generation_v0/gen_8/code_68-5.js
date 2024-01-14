/** // 0.5879270190218995 //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const genderImpact = (Gender === 'Male') ? -0.08 : 0.46;

    // ... (other variable weights remain unchanged)

    let weightedSum = // ... (same calculation as before)
        (genderImpact);

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
