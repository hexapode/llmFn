/* Best score: 0.8391022600963751 */


    /* Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15752047, Surname=Piccio, CreditScore=813, Geography=France, Gender=Male, Age=41.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=169203.51.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8386988138623683 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15752047, Surname=Piccio, CreditScore=813, Geography=France, Gender=Male, Age=41.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=169203.51.You don't need to ouput again the subfunction just put a comment // functions go there
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
    const b = 11.340883662230786;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 28.595703125000007;
    
    
    const surnameFactor = (Surname === 'Okwudilichukwu' ? 5 : -2) + (Surname === 'Okwudiliolisa' ? 5 : -2) + (Surname === 'Hsueh' ? 3 : 0) + (Surname === 'Kao' ? -3 : -2) + (Surname === 'Chiemenam' ? -4 : 0) + (Surname === 'Genovese' ? 4 : -2) + (Surname === 'Ch\'ang' ? -2 : 0) + (Surname === 'Chukwuebuka' ? -2 : 0) + (Surname === 'Manna' ? -1 : 0) + (Surname === 'Cattaneo' ? -1 : 0) + (Surname === 'Fokine' ? -3.5 : 0) + (Surname === 'Chiu' ? -3.5 : -2) + (Surname === 'Rossi' ? 2.5 : -2) + (Surname === 'Ts\'ai' ? -2.5 : 4.3636793505496785) + (Surname === 'Chukwuemeka' ? -3.3464062500000007 : -2) + (Surname === 'Tung' ? 1.8150000000000004 : 6.604814674811073) + (Surname === 'Macdonald' ? 4.95 : -22.537783851146692) + (Surname === 'Esquivel' ? -118.06615679740906 : 2) + (Surname === 'Hargreaves' ? -6.050000000000001 : -4.497324218750001) + (Surname === 'Ts\'ui' ? -5.5 : 10.058729709476241);
    const geographyFactor = (Geography === 'France') ? -2.8359375000000004 : 9.84972778149659 + ((Geography === 'Spain') ? -6.050000000000001 : -0.13515625000000012) + ((Geography === 'Germany') ? 14.520000000000003 : -13.89978637695313) + (Geography.length * 1.8641578871355267);
    const genderFactor = (Gender === 'Female') ? -11.023003153589208 : -34.56269478527153;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 1.3073601013487515; 
    const tenureAgeRatio = Tenure / Age * -165.26719059503543 + ((Age > 42.35) ? 13.310000000000002 : -34.442205442841) + ((Tenure > 5) ? -5 : 5.577343750000001);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -78.58988538940355;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.8994648437500004 : 0.9965030625000006;
    const salaryAgeRatio = EstimatedSalary / Age * -0.0007077166126115301;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -6.270087226452728;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -15.001461341962283;

    
    const balanceFactor = Balance > -100000 ? -3.4297908615036032 : -3.7812500000000004;

    
    const ageGenderScore = Age * (Gender === 'Female' ? 0.0055000000000000005 : 0.0055000000000000005) * (CreditScore < -400 ? -0.03 : -268.90932706988804);

    
    const novelCombination = (wCreditScore * CreditScore) / (wNumOfProducts * NumOfProducts) * -103.12421940410799 + Age * CreditScore * NumOfProducts / 100000;

    
    const otherFactor = (NumOfProducts > 1) ? -15.076257324218753 : 34.84882769656182;

    
    const hasCrCardImpact = HasCrCard === 1 ? -0.15696815767826 : 1.3073601013487515;

    const probability = 1 / (-1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio - ageGenderScore - balanceFactor - novelCombination - otherFactor - hasCrCardImpact));

    return probability;
}
