/* Best score: 0.8142870604235775 */


    /* Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15801462, Surname=H?, CreditScore=693, Geography=Germany, Gender=Female, Age=51.0, Tenure=2, Balance=108204.52, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=177528.92.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8112212192904816 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15801462, Surname=H?, CreditScore=693, Geography=Germany, Gender=Female, Age=51.0, Tenure=2, Balance=108204.52, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=177528.92.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {





    const wCreditScore = -0.014555325074465782;
    const wAge = 1.7353548041360871;
    const wBalance = 0.00004657500000000001;
    const wEstimatedSalary = 0.000008954719094864605;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 2.961930031055772;
    const wNumOfProducts = -14.726986167644155;
    const b = -11.340883662230786;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) 
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 20.796875000000004;
    const surnameFactor = Surname.length * -0.00024735283203125016;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 6.512216715039067;
    const genderFactor = (Gender === 'Female') ? -5.656543555546981 : -19.509740158691415;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.15412379907688745;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    
    const creditScoreFactor = (CreditScore < -650) ? -3 : -24.984645434908572;

    
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.6050000000000001 : 0.5445000000000001;

    
    const salaryAgeRatio = EstimatedSalary / Age * 0.0000019450927246093755; 
    
    // novel combination of variable
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -2.9304923228890942;

    const probability = 1.1 / (1.3476375000000005 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor 
        + hasCrCardFactor + tenureAgeRatio + creditScoreFactor + customerIdImpact + salaryAgeRatio + novelVariable)));

    return probability;
}
