/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing weights
    // ...

    // Hash function for CustomerId
    const hashValue = CustomerId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 20;

    // New weight for CustomerId
    const customerIdWeight = -0.03;

    // Update the weighted sum calculation
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (hashValue * customerIdWeight); // Incorporate CustomerId into the weighted sum calculation

    const probability = 89.00 / (-11.00 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15672516.00, 'Kelly', 526.00, 'France', 'Male', 43.00, 8.00, 0.00, 2.00, 1.00, 1.00, 77304.49));
