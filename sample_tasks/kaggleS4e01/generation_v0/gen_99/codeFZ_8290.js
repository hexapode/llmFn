/* 0.8669297385451465 */
/* Best score: 0.8393564034334638 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15777060, Surname=Chukwujekwu, CreditScore=645, Geography=Germany, Gender=Female, Age=35.0, Tenure=9, Balance=113034.31, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=107181.22.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8391000653976077 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15777060, Surname=Chukwujekwu, CreditScore=645, Geography=Germany, Gender=Female, Age=35.0, Tenure=9, Balance=113034.31, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=107181.22.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {





    

    const wCreditScore = -0.006554075309689209;
    const wAge = 0.9483194403558173;
    const wBalance = -0.00012062007458315609;
    const wEstimatedSalary = 0.00006152684797074216;
    const wIsActiveMember = -20.07821956463509;
    const wTenure = 1.1720166348003436;
    const wNumOfProducts = -5.909938231112307;
    const b = 10.946787954968267;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700023100023099) / 10.137848980953772;
    
    
    const surnameFactor = (Surname === 'Okwudilichukwu' ? 4.743221989359656 : -0.13928880289242382) + (Surname === 'Okwudiliolisa' ? 8.68894198925579 : 2.641523831290961) + (Surname === 'Hsueh' ? 1.1182464460349706 : -0.10619524625189157) + (Surname === 'Kao' ? -2.7703329868904834 : -2.9259639157870083) + (Surname === 'Chiemenam' ? -16.922249883502353 : -1.4447518082726434) + (Surname === 'Genovese' ? 3.9404457886479753 : -6.580120316676933) + (Surname === 'Ch\'ang' ? -0.6627958138745382 : -0.15760340013270674) + (Surname === 'Chukwuebuka' ? -2.623636827130315 : -1.2118056639497627) + (Surname === 'Manna' ? -2.735701250854148 : 0.3596158278295194) + (Surname === 'Cattaneo' ? -13.216734870205453 : -0.00003175192479379836) + (Surname === 'Fokine' ? -8.046999803772676 : -0.7010665772440452) + (Surname === 'Chiu' ? -4.167403294617836 : -3.2717043710478926) + (Surname === 'Rossi' ? 15.156855709674295 : -1.0867043914619694) + (Surname === 'Ts\'ai' ? -6.776667375556374 : 1.2794022282761488) + (Surname === 'Chukwuemeka' ? -1.6427845066445428 : -3.0742963596801913) + (Surname === 'Tung' ? 2.1078945140509115 : 4.838855866134861) + (Surname === 'Macdonald' ? -10.680296703161517 : -18.77890102751621) + (Surname === 'Esquivel' ? -118.06615679740906 : -4.415187511871121) + (Surname === 'Hargreaves' ? -13.298288620394649 : -11.412856661130387) + (Surname === 'Ts\'ui' ? -6.023486450447167 : 0.8835135388844332);
    const geographyFactor = (Geography === 'France') ? -1.0068445141453808 : 8.317037679083683 + ((Geography === 'Spain') ? -7.427977918310178 : -7.928482305027087) + ((Geography === 'Germany') ? 9.592901701427154 : -8.366296028070742) + (Geography.length * 1.4384528550995261);
    const genderFactor = (Gender === 'Female') ? -12.614687342661014 : -29.551525320198706;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 0.10042821246898222; 
    const tenureAgeRatio = Tenure / Age * -47.046411630038826 + ((Age > 41.926500000000004) ? 11.824861434506193 : -5.59057126677643) + ((Tenure > 5) ? -2.637438109361851 : -0.42510500286800657);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -550.7327535496282;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15658756.342450386) ? -1.8943988475938105 : -0.9090868235613025;
    const salaryAgeRatio = EstimatedSalary / Age * -0.0028515469324296716;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -3.1001299511623577;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -0.21501930426373236;

    
    const balanceFactor = Balance > 102529.37540738792 ? -0.000533931566785282 : -6.877665694584182;

    
    const ageGenderScore = Age * (Gender === 'Female' ? 0.006005745512103988 : 0.0056427173753720175) * (CreditScore < -400 ? -0.03 : -383.5505628466418);

    
    const novelCombination = (wCreditScore * CreditScore) / (wNumOfProducts * NumOfProducts) * -93.77944972816638 + Age * CreditScore * NumOfProducts / 666.1001720325245;

    
    const otherFactor = (NumOfProducts > 1) ? -39.85297032617289 : 52.801195678740136;

    
    const hasCrCardImpact = HasCrCard === 1 ? -0.15696815767826 : 1.918460060762525;

    const EstimatedSalaryImpact = EstimatedSalary > 143496.15380105047 ? 0.14136589752694606 : -2.99075798014017;

    const probability = 1 / (-1 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio - ageGenderScore - balanceFactor - novelCombination - otherFactor - hasCrCardImpact - EstimatedSalaryImpact));

    return probability;
}
