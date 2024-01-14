/* Best score: 0.8319573517713319 */


    /* I try on the following input and it returned 1.1686305595703634e-63" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15679963, Surname=Mazzi, CreditScore=596, Geography=Spain, Gender=Male, Age=31.0, Tenure=0, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=182266.01.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8319370061308952 //**/
/**
I try on the following input and it returned 1.1686305595703634e-63" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15679963, Surname=Mazzi, CreditScore=596, Geography=Spain, Gender=Male, Age=31.0, Tenure=0, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=182266.01.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// functions go here

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
    const surnameFactor = (Surname === 'Okwudilichukwu' ? 5 : 0) + (Surname === 'Okwudiliolisa' ? 5 : -2) + (Surname === 'Hsueh' ? 3 : 0) + (Surname === 'Kao' ? -3 : -2) + (Surname === 'Chiemenam' ? -4 : 0) + (Surname === 'Genovese' ? 4 : -2) + (Surname === 'Ch\'ang' ? -2 : 0) + (Surname === 'Chukwuebuka' ? -2 : 0) + (Surname === 'Manna' ? -1 : 0) + (Surname === 'Cattaneo' ? -1 : 0) + (Surname === 'Fokine' ? -3.5 : 0) + (Surname === 'Chiu' ? -3.5 : -2) + (Surname === 'Rossi' ? 2.5 : -2) + (Surname === 'Ts\'ai' ? -2.5 : 0) + (Surname === 'Chukwuemeka' ? -1.5 : 0) + (Surname === 'Tung' ? -1.5 : 0.3341796875000003) + (Surname === 'Macdonald' ? 4.95 : -22.537783851146692) + (Surname === 'Esquivel' ? -118.06615679740906 : 2) + (Surname === 'Hargreaves' ? -5.5 : -4.497324218750001) + (Surname === 'Ts\'ui' ? -5.5 : 10.058729709476241);
    const geographyFactor = (Geography === 'France') ? -2.8359375000000004 : 9.84972778149659 + ((Geography === 'Spain') ? -5 : 0) + ((Geography === 'Germany') ? 14.520000000000003 : -13.89978637695313) + (Geography.length * 1.4005694118223337);
    const genderFactor = (Gender === 'Female') ? -9.109919961643971 : -34.56269478527153;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 1.3073601013487515; 
    const tenureAgeRatio = Tenure / Age * -150.2429005409413 + ((Age > 42.35) ? 13.310000000000002 : -34.442205442841) + ((Tenure > 5) ? -5 : 5.577343750000001);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -78.58988538940355;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.8994648437500004 : 0.9965030625000006;
    const salaryAgeRatio = EstimatedSalary / Age * -0.0004833799689990642;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -6.270087226452728;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -15.001461341962283;

    
    const balanceFactor = Balance > 100000 ? -2.061482110595704 : -3.7812500000000004;

    
    const ageGenderScore = Age * (Gender === 'Female' ? 0.0055000000000000005 : 0.0055000000000000005) * (CreditScore < -400 ? -0.03 : -244.46302460898912);

    
    const novelCombination = (wCreditScore * CreditScore) / (wNumOfProducts * NumOfProducts) * 10.698375206954989;

    
    const probability = 1 / (1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio - ageGenderScore - balanceFactor - novelCombination));

    return probability;
}
