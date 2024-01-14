/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // (previous weights and calculations remain the same)

    const genderImpactWeight = (Gender === 'Female') ? 0.17 : -0.02;

    weightedSum = // (previous calculations remain the same) + (genderImpactWeight * Math.log(Age + 1.00) * CreditScore);

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15778290.00, 'Tretyakova', 554.00, 'France', 'Female', 40.00, 3.00, 0.00, 2.00, 1.00, 0.00, 127557.02));
