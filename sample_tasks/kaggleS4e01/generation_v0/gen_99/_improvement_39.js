/* Best score: 0.8105280756883949 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15727291, Surname=Okwuadigbo, CreditScore=732, Geography=Spain, Gender=Male, Age=69.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131501.59.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8104216600918454 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15727291, Surname=Okwuadigbo, CreditScore=732, Geography=Spain, Gender=Male, Age=69.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131501.59.You don't need to ouput again the subfunction just put a comment // functions go there
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
    const surnameFactor = Surname.length * -0.00015125000000000004;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 5.920197013671879;
    const genderFactor = (Gender === 'Female') ? -6.2850483950522005 : -19.509740158691415;
    const numProductsFactor = NumOfProducts * -14.726986167644155;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.15568060512816911;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    
    const creditScoreFactor = (CreditScore < -650) ? -3 : -29.300117874145506;

    
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.5 : 0.6050000000000001;

    // additional step
    const salaryAgeRatio = EstimatedSalary / Age * -0.0000016075146484375; // impact from the salary relative to the age

    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio + creditScoreFactor + customerIdImpact + salaryAgeRatio)));

    return probability;
}
