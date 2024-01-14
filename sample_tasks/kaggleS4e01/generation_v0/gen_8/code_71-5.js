/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const customerIdWeight = (CustomerId === 15674932 || CustomerId === 15749177 || CustomerId === 15694510 || CustomerId === 15741417 || CustomerId === 15766172 || CustomerId === 15771669 || CustomerId === 15692819 || CustomerId === 15669611 || CustomerId === 15691707 || CustomerId === 15591721 || CustomerId === 15635097 || CustomerId === 15674671 || CustomerId === 15717962 || CustomerId === 15793029 || CustomerId === 15643294 || CustomerId === 15690958 || CustomerId === 15566543 || CustomerId === 15679804 || CustomerId === 15671358 || CustomerId === 15650670) ? 0.10 : 0.00;

    // ... (remaining code for other weights and calculations)

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
        (EstimatedSalary * estimatedSalaryWeight) +
        (customerIdWeight * CustomerId) +
        // ... (remaining sum components)

    // ... (rest of the code remains unchanged)

    return probability;
}
