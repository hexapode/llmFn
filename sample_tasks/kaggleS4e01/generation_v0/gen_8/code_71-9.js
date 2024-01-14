/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous computation)

    const customerIdImpact = (CustomerId === 15674932) ? -0.13 :
                             (CustomerId === 15749177) ? 0.08 :
                             (CustomerId === 15694510) ? -0.16 :
                             (CustomerId === 15741417) ? 0.11 :
                             (CustomerId === 15766172) ? -0.09 :
                             (CustomerId === 15771669) ? 0.13 :
                             (CustomerId === 15692819) ? -0.17 :
                             (CustomerId === 15669611) ? 0.22 :
                             (CustomerId === 15691707) ? -0.18 :
                             (CustomerId === 15591721) ? 0.14 :
                             (CustomerId === 15635097) ? -0.23 :
                             (CustomerId === 15674671) ? 0.19 :
                             (CustomerId === 15717962) ? -0.15 :
                             (CustomerId === 15793029) ? 0.12 :
                             (CustomerId === 15643294) ? -0.11 :
                             (CustomerId === 15690958) ? 0.09 :
                             (CustomerId === 15566543) ? -0.08 :
                             (CustomerId === 15679804) ? 0.05 :
                             (CustomerId === 15671358) ? -0.04 :
                             (CustomerId === 15650670) ? 0.03 : 0.00;

    // ... (previous calculation)

    // Add impact of CustomerId to the weighted sum
    weightedSum += customerIdImpact * CustomerId;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15617320.00, 'Lassetter', 783.00, 'France', 'Female', 31.00, 10.00, 115766.26, 1.00, 0.00, 0.00, 182528.44));
