/* Best score: 0.8243291572339047 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15579892, Surname=K?, CreditScore=678, Geography=France, Gender=Male, Age=34.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=120770.5.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8224038588941452 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15579892, Surname=K?, CreditScore=678, Geography=France, Gender=Male, Age=34.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=120770.5.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    // functions go there

    const wCreditScore = -0.014555325074465782;
    const wAge = 1.7353548041360871;
    const wBalance = -0.00004657500000000001;
    const wEstimatedSalary = 0.000018743018473831;
    const wIsActiveMember = -31.241616934781085;
    const wTenure = 2.961930031055772;
    const wNumOfProducts = -14.726986167644155;
    const b = -11.340883662230786;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 28.595703125000007;
    const surnameFactor = Surname.length * -0.000340110144042969;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 9.84972778149659 + ((Geography === 'Spain') ? -5 : 0) + ((Geography === 'Germany') ? 12 : -2);
    const genderFactor = (Gender === 'Female') ? -6.22219791110168 : -23.606785592016614;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.225652654228471;
    const tenureAgeRatio = Tenure / Age * -150.2429005409413 + ((Age > 38.5) ? 12.100000000000001 : 8.226582031250002) + ((Tenure > 5) ? -5 : 2);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -71.44535035400322;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.8994648437500004 : 0.9965030625000006;
    const salaryAgeRatio = EstimatedSalary / Age * -0.00000482016391312647;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -5.700079296775207;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -10.246199946699187;

    
    const probability = 1 / (1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio));

    return probability;
}
