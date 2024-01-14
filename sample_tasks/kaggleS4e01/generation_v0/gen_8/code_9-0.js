/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code remains the same)

    const randomSeed = parseInt(CustomerId, 10) % 20; // Using CustomerId to generate a random seed between 0 and 19
    const randomness = Math.sin(randomSeed); // Using sine function to introduce randomness

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (randomness * 0.1); // Adding randomness factor to the weighted sum

    const probability = 9887.90 / (-13.31 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15649793.00, 'Lovely', 658.00, 'Spain', 'Male', 20.00, 7.00, 0.00, 2.00, 0.00, 0.00, 187638.34)); 
