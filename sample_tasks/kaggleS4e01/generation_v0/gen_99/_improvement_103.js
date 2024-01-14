/* Best score: 0.8152450373854251 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15628059, Surname=Smith, CreditScore=598, Geography=Spain, Gender=Female, Age=39.0, Tenure=6, Balance=61211.01, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=40321.63.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8148649515314423 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15628059, Surname=Smith, CreditScore=598, Geography=Spain, Gender=Female, Age=39.0, Tenure=6, Balance=61211.01, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=40321.63.You don't need to ouput again the subfunction just put a comment // functions go there
**/



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

  
    // functions go there
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 28.595703125000007;
    const surnameFactor = Surname.length * -0.000340110144042969;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 8.954297983178718;
    const genderFactor = (Gender === 'Female') ? -5.656543555546981 : -21.460714174560557;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 0.18648979688303385;
    const tenureAgeRatio = Tenure / Age * -136.58445503721936;

    const creditScoreFactor = (CreditScore < -650) ? -3 : -42.942359341249116;

  
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.6050000000000001 : 0.5989500000000002;

  
    const salaryAgeRatio = EstimatedSalary / Age * -0.00000482016391312647;

    
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -5.181890269795642;

    
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -3.7956840298068677;

    
    const probability = 1.1 / (1.3476375000000005 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor 
        + hasCrCardFactor + tenureAgeRatio + creditScoreFactor + customerIdImpact + salaryAgeRatio + novelVariable + tenureProductRatio)));

    return probability;
}

