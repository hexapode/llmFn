/* Best score: 0.7560476688497981 */


    /* Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7559405815503747 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// Functions above

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    // coefficients
    const wCreditScore = -0.0005146367187500001;
    const wAge = 0.7071445419189697;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000006378963431241724;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = -0.18379882812500004; 
    const b = -9.372631125810566;
    
    // feature transformations
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;
    
    // additional transformation using CustomerId
    const customerIdFactor = parseInt(CustomerId) % 7 / 12.100000000000001;
    
    // final probability calculation
    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor)));
    
    return probability;
}
