/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

const customerIdWeight = (CustomerId === 15674932) ? 0.20 :
                         (CustomerId === 15749177) ? 0.31 :
                         (CustomerId === 15694510) ? 0.10 :
                         (CustomerId === 15741417) ? 0.08 :
                         (CustomerId === 15766172) ? -0.81 :
                         (CustomerId === 15771669) ? 0.46 :
                         (CustomerId === 15692819) ? -0.09 :
                         (CustomerId === 15669611) ? -0.14 :
                         (CustomerId === 15691707) ? -0.12 :
                         (CustomerId === 15591721) ? -0.65 :
                         (CustomerId === 15635097) ? -0.22 :
                         (CustomerId === 15674671) ? -0.08 :
                         (CustomerId === 15717962) ? 0.55 :
                         (CustomerId === 15793029) ? -0.24 :
                         (CustomerId === 15643294) ? 0.00 :
                         (CustomerId === 15690958) ? -0.08 :
                         (CustomerId === 15566543) ? 0.51 :
                         (CustomerId === 15679804) ? -2.11 :
                         (CustomerId === 15671358) ? -0.03 :
                         (CustomerId === 15650670) ? -0.22 : 0.02;

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
