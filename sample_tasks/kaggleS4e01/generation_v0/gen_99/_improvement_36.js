/* Best score: 0.8104218077696405 */


    /* Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8092865078676851 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {





    
    const wCreditScore = -0.0014351529434204107;
    const wAge = 1.7353548041360871;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000013266250510910525;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 2.961930031055772;
    const b = -11.340883662230786;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 20.796875000000004;
    const surnameFactor = Surname.length * -0.00013750000000000004;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 5.3819972851562525;
    const genderFactor = (Gender === 'Female') ? -6.2850483950522005 : -19.509740158691415;
    const numProductsFactor = NumOfProducts * -14.726986167644155;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 0.15568060512816911;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    
    const creditScoreFactor = (CreditScore < -650) ? -3 : -21.309176635742187;

    // Add a step to consider CustomerId
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.5 : 0.5;

    
    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio + creditScoreFactor + customerIdImpact)));

    return probability;
}
