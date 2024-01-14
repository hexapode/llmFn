/* Best score: 0.8094361439748894 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15813659, Surname=Ch'en, CreditScore=546, Geography=Spain, Gender=Female, Age=22.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=35418.69.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8087421411565899 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15813659, Surname=Ch'en, CreditScore=546, Geography=Spain, Gender=Female, Age=22.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=35418.69.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    // Logistic regression weights
    const wCreditScore = -0.0007076254882812502;
    const wAge = 1.4341775240794106;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000010963843397446713;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 2.692663664596156;
    const b = -11.340883662230786;

    // Calculate the linear combination of input features and weights
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    // Factors for additional input parameters 
    const customerIdFactor = (parseInt(CustomerId) % 7) / 20.796875000000004;
    const surnameFactor = Surname.length * 0.00013750000000000004;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 5.3819972851562525;
    const genderFactor = (Gender === 'Female') ? -6.2850483950522005 : -19.509740158691415;
    const numProductsFactor = NumOfProducts * -14.726986167644155;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.1415278228437901;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    // Calculate a new factor using an unused parameter
    const creditScoreFactor = (CreditScore < -650) ? -3 : -21.309176635742187;

    // Compute the probability of churning
    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio + creditScoreFactor)));

    return probability;
}
