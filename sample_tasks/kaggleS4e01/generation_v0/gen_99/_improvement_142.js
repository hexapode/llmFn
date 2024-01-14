/* Best score: 0.8278434198581246 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15623082, Surname=Ch'ang, CreditScore=649, Geography=Germany, Gender=Female, Age=40.0, Tenure=2, Balance=114737.26, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=106655.88.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8243291572339047 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15623082, Surname=Ch'ang, CreditScore=649, Geography=Germany, Gender=Female, Age=40.0, Tenure=2, Balance=114737.26, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=106655.88.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    // Coefficients for the logistic regression model
    const wCreditScore = -0.014555325074465782;
    const wAge = 1.7353548041360871;
    const wBalance = 0.00004657500000000001;
    const wEstimatedSalary = 0.000018743018473831;
    const wIsActiveMember = -31.241616934781085;
    const wTenure = 2.961930031055772;
    const wNumOfProducts = -14.726986167644155;
    const b = -11.340883662230786;

    // Calculate the linear combination of input features and coefficients
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    // Transform customer-specific parameters to factors impacting churn probability
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 28.595703125000007;
    const surnameFactor = Surname.length * -0.000340110144042969;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 9.84972778149659 + ((Geography === 'Spain') ? -5 : 0) + ((Geography === 'Germany') ? 13.200000000000001 : -7.3519531250000005);
    const genderFactor = (Gender === 'Female') ? -6.22219791110168 : -28.56421056634011;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 0.225652654228471;
    const tenureAgeRatio = Tenure / Age * -150.2429005409413 + ((Age > 42.35) ? 12.100000000000001 : -8.226582031250002) + ((Tenure > 5) ? -5 : 4.05625);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -78.58988538940355;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.8994648437500004 : 0.9965030625000006;
    const salaryAgeRatio = EstimatedSalary / Age * -0.00000482016391312647;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -5.700079296775207;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -12.397901935506018;

    // Calculate the probability of churning
    const probability = 1 / (1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio));

    return probability;
}
