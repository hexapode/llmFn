/* Best score: 0.8148649515314423 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15742442, Surname=Udegbulam, CreditScore=705, Geography=France, Gender=Male, Age=35.0, Tenure=5, Balance=89364.91, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=139162.15.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8139033741809957 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15742442, Surname=Udegbulam, CreditScore=705, Geography=France, Gender=Male, Age=35.0, Tenure=5, Balance=89364.91, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=139162.15.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    // Base calculation
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

    // Customer-specific factors
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / -28.595703125000007;
    const surnameFactor = Surname.length * 0.000340110144042969;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 8.954297983178718;
    const genderFactor = (Gender === 'Female') ? -5.656543555546981 : -21.460714174560557;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.18648979688303385;
    const tenureAgeRatio = Tenure / Age * -136.58445503721936;

    // Credit score-related factor
    const creditScoreFactor = (CreditScore < -650) ? -3 : -42.942359341249116;

    // Additional customer-specific impact
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.6050000000000001 : 0.5989500000000002;

    // Salary to age ratio impact
    const salaryAgeRatio = EstimatedSalary / Age * 0.00000482016391312647;

    // Novel variable
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -3.223541555178004;

    // New step using Tenant and NumOfProducts
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -1.8715237126936788;

    // Calculating the probability
    const probability = 1.1 / (1.3476375000000005 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor 
        + hasCrCardFactor + tenureAgeRatio + creditScoreFactor + customerIdImpact + salaryAgeRatio + novelVariable + tenureProductRatio)));

    return probability;
}
