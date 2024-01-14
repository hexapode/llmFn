/* Best score: 0.8107877616741651 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15748595, Surname=Remington, CreditScore=704, Geography=Germany, Gender=Male, Age=36.0, Tenure=1, Balance=133656.91, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=102756.38.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8105280756883949 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15748595, Surname=Remington, CreditScore=704, Geography=Germany, Gender=Male, Age=36.0, Tenure=1, Balance=133656.91, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=102756.38.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    const wCreditScore = -0.01617258341607309;
    const wAge = 1.7353548041360871;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000013266250510910525;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 2.961930031055772;
    const wNumOfProducts = -14.726986167644155;
    const b = -11.340883662230786;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) 
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 20.796875000000004;
    const surnameFactor = Surname.length * -0.00015125000000000004;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 5.920197013671879;
    const genderFactor = (Gender === 'Female') ? -6.2850483950522005 : -19.509740158691415;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.14011254461535222;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    
    const creditScoreFactor = (CreditScore < -650) ? -3 : -18.17065122538805;

    
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.55 : 0.5445000000000001;

    
    const salaryAgeRatio = EstimatedSalary / Age * -0.0000017682661132812502; 

    const probability = 1 / (0.81 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor 
        + hasCrCardFactor + tenureAgeRatio + creditScoreFactor + customerIdImpact + salaryAgeRatio)));

    return probability;
}

