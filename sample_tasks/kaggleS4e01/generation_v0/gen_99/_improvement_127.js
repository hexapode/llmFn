/* Best score: 0.8193499153961642 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15685855, Surname=Ugochukwu, CreditScore=684, Geography=France, Gender=Male, Age=54.0, Tenure=1, Balance=114032.96, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=98840.95.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8185347628763273 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15685855, Surname=Ugochukwu, CreditScore=684, Geography=France, Gender=Male, Age=54.0, Tenure=1, Balance=114032.96, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=98840.95.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go there

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    // coefficients for the logistic regression model
    const wCreditScore = -0.014555325074465782;
    const wAge = 1.7353548041360871;
    const wBalance = 0.00004657500000000001;
    const wEstimatedSalary = 0.000018743018473831;
    const wIsActiveMember = -31.241616934781085;
    const wTenure = 2.961930031055772;
    const wNumOfProducts = -14.726986167644155;
    const b = -11.340883662230786;

    // calculate the linear combination of input features and weights
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    // factors based on input parameters
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 28.595703125000007;
    const surnameFactor = Surname.length * 0.000340110144042969;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 9.84972778149659 + ((Geography === 'Spain') ? -5 : 0);
    const genderFactor = (Gender === 'Female') ? -6.22219791110168 : -23.606785592016614;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.225652654228471;
    const tenureAgeRatio = Tenure / Age * -150.2429005409413 + ((Age > 35) ? 11 : 5.982968750000001) + ((Tenure > 5) ? -5 : 2);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -71.44535035400322;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.8994648437500004 : 0.8235562500000003;
    const salaryAgeRatio = EstimatedSalary / Age * 0.00000482016391312647;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -5.700079296775207;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -9.314727224271987;

    // calculate the probability of churn using the logistic regression equation
    const probability = 1 / (1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio));

    return probability;
}
