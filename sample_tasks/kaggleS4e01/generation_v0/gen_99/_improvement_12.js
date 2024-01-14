/* Best score: 0.7791113314692385 */


    /* Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15778936, Surname=Onwumelu, CreditScore=562, Geography=Germany, Gender=Male, Age=31.0, Tenure=3, Balance=148962.46, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=88837.15.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7765079632251177 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15778936, Surname=Onwumelu, CreditScore=562, Geography=Germany, Gender=Male, Age=31.0, Tenure=3, Balance=148962.46, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=88837.15.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {




    const wCreditScore = -0.0005146367187500001;
    const wAge = 0.7071445419189697;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000006378963431241724;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = -0.18379882812500004; 
    const b = -9.372631125810566;
    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    const customerIdFactor = parseInt(CustomerId) % 7 / 12.100000000000001;

    
    const surnameFactor = Surname.length * -0.0001;
    const geographyFactor = (Geography === 'France') ? -0.3 : 0;
    const genderFactor = (Gender === 'Female') ? 0.2 : -2;
    const numProductsFactor = NumOfProducts * -13.388169243312866;

    // novel combination
    const tenureAgeRatio = Tenure / Age * -55.65717838239399; 

    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + tenureAgeRatio)));

    return probability;
}
