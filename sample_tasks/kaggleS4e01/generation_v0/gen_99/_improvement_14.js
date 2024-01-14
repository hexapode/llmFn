/* Best score: 0.7914670247664848 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15570271, Surname=Folliero, CreditScore=746, Geography=France, Gender=Male, Age=46.0, Tenure=4, Balance=82331.69, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=199203.51.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7907761152584771 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15570271, Surname=Folliero, CreditScore=746, Geography=France, Gender=Male, Age=46.0, Tenure=4, Balance=82331.69, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=199203.51.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    const wCreditScore = -0.0005146367187500001;
    const wAge = 0.7071445419189697;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000006378963431241724;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 0.18379882812500004; 
    const b = -9.372631125810566;

    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    const customerIdFactor = parseInt(CustomerId) % 7 / 12.100000000000001;
    
    const surnameFactor = Surname.length * -0.0001;
    const geographyFactor = (Geography === 'France') ? -1.5 : 4.043574218750001;
    const genderFactor = (Gender === 'Female') ? -2.2537783851146695 : -13.3254150390625;
    const numProductsFactor = NumOfProducts * -13.388169243312866;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.08506555843353271;

    const tenureAgeRatio = Tenure / Age * -55.65717838239399; 

    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio)));

    return probability;
}
