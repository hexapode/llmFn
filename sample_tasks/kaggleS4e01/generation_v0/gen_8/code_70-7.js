/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

const customerIdWeight = 0.0000000002; // Define the weight for the customerId impact

const weightedSum = (CreditScore * creditScoreWeight) +
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
    (CustomerId * customerIdWeight) + // Include the impact of the CustomerId
    tenureBalanceInteractionWeight +
    surnameImpact +
    salaryCreditScoreInteractionWeight +
    ageCreditScoreInteractionWeight +
    novelCombination +
    unusedParameterImpact +
    numOfProductsWeight +
    tenureNumProductsInteractionWeight +
    (newVariableWeight * Math.sqrt(CreditScore)) +
    ageGenderInteractionWeight;
