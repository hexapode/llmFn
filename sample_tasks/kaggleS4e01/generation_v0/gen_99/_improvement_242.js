/* Best score: 0.8318258914756479 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15714981, Surname=Sabbatini, CreditScore=476, Geography=France, Gender=Male, Age=33.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=55775.84.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8316338309093136 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15714981, Surname=Sabbatini, CreditScore=476, Geography=France, Gender=Male, Age=33.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=55775.84.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


    // linear weights
    const wCreditScore = -0.014555325074465782;
    const wAge = 1.7353548041360871;
    const wBalance = -0.00004657500000000001;
    const wEstimatedSalary = 0.000018743018473831;
    const wIsActiveMember = -31.241616934781085;
    const wTenure = 2.961930031055772;
    const wNumOfProducts = -14.726986167644155;
    const b = 11.340883662230786;

    // calculate the linear combination of the features
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    // additional factors based on input parameters
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 28.595703125000007;
    const surnameFactor = (Surname === 'Okwudilichukwu' ? 5 : 0) + (Surname === 'Okwudiliolisa' ? 5 : -2) + (Surname === 'Hsueh' ? 3 : 0) + (Surname === 'Kao' ? -3 : -2) + (Surname === 'Chiemenam' ? -4 : 0) + (Surname === 'Genovese' ? 4 : -2) + (Surname === 'Ch\'ang' ? -2 : 0) + (Surname === 'Chukwuebuka' ? -2 : 0) + (Surname === 'Manna' ? -1 : 0) + (Surname === 'Cattaneo' ? -1 : 0) + (Surname === 'Fokine' ? -3.5 : 0) + (Surname === 'Chiu' ? -3.5 : -2) + (Surname === 'Rossi' ? 2.5 : -2) + (Surname === 'Ts\'ai' ? -2.5 : 0) + (Surname === 'Chukwuemeka' ? 1.5 : 0) + (Surname === 'Tung' ? -1.5 : 0) + (Surname === 'Macdonald' ? 4.5 : -2) + (Surname === 'Esquivel' ? -4.5 : -2) + (Surname === 'Hargreaves' ? -5.5 : -2.75) + (Surname === 'Ts\'ui' ? -5.5 : 10.058729709476241);
    const geographyFactor = (Geography === 'France') ? -2.8359375000000004 : 9.84972778149659 + ((Geography === 'Spain') ? -5 : 0) + ((Geography === 'Germany') ? 14.520000000000003 : -13.89978637695313) + (Geography.length * 1.4005694118223337);
    const genderFactor = (Gender === 'Female') ? -7.528859472433034 : -31.42063162297412;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 1.3073601013487515;
    const tenureAgeRatio = Tenure / Age * -150.2429005409413 + ((Age > 42.35) ? 12.100000000000001 : -31.31109585712818) + ((Tenure > 5) ? -5 : 5.577343750000001);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -78.58988538940355;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.8994648437500004 : 0.9965030625000006;
    const salaryAgeRatio = EstimatedSalary / Age * -0.0004833799689990642;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -6.270087226452728;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -15.001461341962283;

    // balance factor
    const balanceFactor = Balance > 100000 ? -1.3629633789062503 : -3.4375;

    // age and gender score
    const ageGenderScore = Age * (Gender === 'Female' ? 0.0055000000000000005 : 0.0055000000000000005) * (CreditScore < -400 ? -0.03 : -222.23911328089918);

    // novel combination
    const novelCombination = (wCreditScore * CreditScore) / (wNumOfProducts * NumOfProducts) * 10.698375206954989;

    // compute the probability using the logistic function
    const probability = 1 / (1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio - ageGenderScore - balanceFactor - novelCombination));

    return probability;
}
