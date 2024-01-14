/* Best score: 0.7937673698685487 */


    /* Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7914670247664848 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.You don't need to ouput again the subfunction just put a comment // functions go there
**/


// function goes here

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    const wCreditScore = -0.0005146367187500001;
    const wAge = 0.7071445419189697;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000010963843397446713;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 1.566640677583218; 
    const b = -10.309894238391623;

    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    const customerIdFactor = parseInt(CustomerId) % 7 / 12.100000000000001; // Introducing a new step using CustomerId

    const surnameFactor = Surname.length * -0.0001;
    const geographyFactor = (Geography === 'France') ? -1.5 : 4.892724804687502;
    const genderFactor = (Gender === 'Female') ? -2.2537783851146695 : -13.3254150390625;
    const numProductsFactor = NumOfProducts * -13.388169243312866;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.08506555843353271;

    const tenureAgeRatio = Tenure / Age * -55.65717838239399; 

    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio)));

    return probability;
}

