/* Best score: 0.7907776142649844 */


    /* I try on the following input and it returned 0.20644018636920203" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15693374, Surname=Ch'iu, CreditScore=697, Geography=France, Gender=Female, Age=35.0, Tenure=7, Balance=114410.19, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=178256.52.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.780869348077818 //**/
/**
I try on the following input and it returned 0.20644018636920203" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15693374, Surname=Ch'iu, CreditScore=697, Geography=France, Gender=Female, Age=35.0, Tenure=7, Balance=114410.19, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=178256.52.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// Update the function calculation based on input parameters and the reflected observations

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    const wCreditScore = -0.0005146367187500001;
    const wAge = 0.7071445419189697;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000006378963431241724;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 0.18379882812500004; 
    const b = 9.372631125810566;
    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    const customerIdFactor = parseInt(CustomerId) % 7 / 12.100000000000001;
    
    const surnameFactor = Surname.length * -0.0001;
    const geographyFactor = (Geography === 'France') ? -1.5 : 2.9407812500000006;
    const genderFactor = (Gender === 'Female') ? 0.2 : -13.3254150390625;
    const numProductsFactor = NumOfProducts * -13.388169243312866;
    
    const tenureAgeRatio = Tenure / Age * -55.65717838239399; 

    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + tenureAgeRatio)));

    return probability;
}
