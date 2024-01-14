/* Best score: 0.8309017782835088 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15699772, Surname=Barclay, CreditScore=428, Geography=Germany, Gender=Female, Age=32.0, Tenure=3, Balance=129248.11, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=42862.82.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8304685722255933 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15699772, Surname=Barclay, CreditScore=428, Geography=Germany, Gender=Female, Age=32.0, Tenure=3, Balance=129248.11, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=42862.82.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// other functions go here

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {





    
    const wCreditScore = -0.014555325074465782;
    const wAge = 1.7353548041360871;
    const wBalance = -0.00004657500000000001;
    const wEstimatedSalary = 0.000018743018473831;
    const wIsActiveMember = -31.241616934781085;
    const wTenure = 2.961930031055772;
    const wNumOfProducts = -14.726986167644155;
    const b = 11.340883662230786;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 28.595703125000007;
    const surnameFactor = Surname.length * -0.000340110144042969;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 9.84972778149659 + ((Geography === 'Spain') ? -5 : 0) + ((Geography === 'Germany') ? 13.200000000000001 : -7.3519531250000005) + (Geography.length * 0.841814823033709);
    const genderFactor = (Gender === 'Female') ? -7.528859472433034 : -31.42063162297412;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 1.1885091830443195;
    const tenureAgeRatio = Tenure / Age * -150.2429005409413 + ((Age > 42.35) ? 12.100000000000001 : -20.701550979919453) + ((Tenure > 5) ? -5 : 5.577343750000001);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -78.58988538940355;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.8994648437500004 : 0.9965030625000006;
    const salaryAgeRatio = EstimatedSalary / Age * -0.0002812392546903646;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -6.270087226452728;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -15.001461341962283;

    // New step using the unused parameter - Balance
    const balanceFactor = Balance > 100000 ? 0.5 : -3.4375;

    
    const ageGenderScore = Age * (Gender === 'Female' ? 0.0055000000000000005 : 0.005) * (CreditScore < -400 ? -0.03 : -183.66868866190012);

    
    const probability = 1 / (1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio - ageGenderScore - balanceFactor));

    return probability;
}
