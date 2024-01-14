/* Best score: 0.8087591122167374 */


    /* Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8084688067507113 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    
    const wCreditScore = -0.0007076254882812502;
    const wAge = 1.4341775240794106;
    const wBalance = 0.000069;
    const wEstimatedSalary = -0.000010963843397446713;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 2.692663664596156;
    const b = -11.340883662230786;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    // CustomerId impact
    const customerIdFactor = (parseInt(CustomerId) % 7) / -20.796875000000004;
    const surnameFactor = Surname.length * 0.00013750000000000004;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 5.3819972851562525;
    const genderFactor = (Gender === 'Female') ? -6.2850483950522005 : -17.736127416992193;
    const numProductsFactor = NumOfProducts * -14.726986167644155;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.12866165713071825;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    
    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio)));

    return probability;
}
