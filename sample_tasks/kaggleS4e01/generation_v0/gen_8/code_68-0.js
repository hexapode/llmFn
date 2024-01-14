/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;

    // ... (previous code)

    let weightedSum = // ... (previous calculations) + (genderWeight);

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
