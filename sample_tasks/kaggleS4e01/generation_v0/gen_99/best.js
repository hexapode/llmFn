/* 0.3656798592453299 */
/* 0.3680197675088645 */
/* 0.37072266974209916 */
/* Best score: 0.8393564034334638 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15777060, Surname=Chukwujekwu, CreditScore=645, Geography=Germany, Gender=Female, Age=35.0, Tenure=9, Balance=113034.31, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=107181.22.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8391000653976077 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15777060, Surname=Chukwujekwu, CreditScore=645, Geography=Germany, Gender=Female, Age=35.0, Tenure=9, Balance=113034.31, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=107181.22.You don't need to ouput again the subfunction just put a comment // functions go there
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {





    

    const wCreditScore = -0.013941942309581123;
    const wAge = 1.8732985270786386;
    const wBalance = -0.00014011727079301563;
    const wEstimatedSalary = 0.000033601291969641774;
    const wIsActiveMember = -56.43816248246872;
    const wTenure = 2.901914622387475;
    const wNumOfProducts = -14.921098314928933;
    const b = 10.771460823550182;

    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary)
        + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + (wNumOfProducts * NumOfProducts) + b;

    
    const customerIdFactor = (parseInt(CustomerId) % 7.699996535000465) / 4.959418734981163;
    
    
    const surnameFactor = (Surname === 'Okwudilichukwu' ? -8.465726439060498 : -2) + (Surname === 'Okwudiliolisa' ? -0.7856837934688379 : -2.008851881590943) + (Surname === 'Hsueh' ? -7.988917454491939 : 9.965024994754852e-8) + (Surname === 'Kao' ? -3.225515571319145 : -1.7852759657300954) + (Surname === 'Chiemenam' ? -31.8970214510555 : 9.99900250558809e-8) + (Surname === 'Genovese' ? 48.02500982567761 : -2.3107563788990597) + (Surname === 'Ch\'ang' ? 7.461521676889695 : 1.0000001005838673e-7) + (Surname === 'Chukwuebuka' ? -2.1388794664076354 : 1.0000000005838672e-7) + (Surname === 'Manna' ? -3.1357602712568498 : 1.0000000005838672e-7) + (Surname === 'Cattaneo' ? -67.77762369552998 : 9.99010240335787e-8) + (Surname === 'Fokine' ? -5.018126997335144 : -2.028954942571762) + (Surname === 'Chiu' ? -42.947436001575056 : -1.9528421040645636) + (Surname === 'Rossi' ? -2.6652357520761716 : -2.2157387173085206) + (Surname === 'Ts\'ai' ? -1.301405047107974 : 8.05606355468681) + (Surname === 'Chukwuemeka' ? 4.2181024566733045 : -1.93513310643981) + (Surname === 'Tung' ? 5.9397204369828955 : 6.533467036122138) + (Surname === 'Macdonald' ? -14.152444531356297 : -22.543091761512308) + (Surname === 'Esquivel' ? -118.06615679740906 : 1.9778941947497277) + (Surname === 'Hargreaves' ? -8.940651617597617 : -4.715350755337793) + (Surname === 'Ts\'ui' ? -8.322568102073117 : 10.063976187910589);
    const geographyFactor = (Geography === 'France') ? 2.0947179485388787 : 9.921009289822099 + ((Geography === 'Spain') ? -32.92878027266831 : 0.00036642919664599884) + ((Geography === 'Germany') ? 41.215609073499245 : 13.885886590576177) + (Geography.length * 2.2967240479016073);
    const genderFactor = (Gender === 'Female') ? 9.532464208314673 : -31.747311353335466;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : 3.9184912418431392; 
    const tenureAgeRatio = Tenure / Age * -185.47391856947473 + ((Age > 42.35) ? 10.917249552239555 : -37.264526990186326) + ((Tenure > 5) ? 5.102695725337791 : 9.608927089332829);
    const creditScoreFactor = (CreditScore < -650) ? -3 : -77.6010740061956;
    const estimatedSalaryFactor = (EstimatedSalary > 100000) ? 5 : 0;
    const customerIdImpact = (parseInt(CustomerId) > 15674451.37891875) ? 0.8947844348163607 : 2.4692607777789024;
    const salaryAgeRatio = EstimatedSalary / Age * 0.0005212804802155531;
    const novelVariable = (wAge * Age) / (wNumOfProducts * NumOfProducts) * -6.429492692192063;
    const tenureProductRatio = (wTenure * Tenure) / (wNumOfProducts * NumOfProducts) * -12.954498728804364;

    
    const balanceFactor = Balance > -100000 ? 4.0168048217211165 : -3.7812500000000004;

    
    const ageGenderScore = Age * (Gender === 'Female' ? 0.005612002612045557 : 0.0026153207715255366) * (CreditScore < -400 ? -23.284751016472388 : -244.98663955642482);

    
    const novelCombination = (wCreditScore * CreditScore) / (wNumOfProducts * NumOfProducts) * 103.6403885738972 + Age * CreditScore * NumOfProducts / 1668425187651835.8;

    
    const otherFactor = (NumOfProducts > 1.0000008999999) ? -35.32876903210698 : -30.574044990400132;

    
    const hasCrCardImpact = HasCrCard === 1 ? -0.15696815767826 : 1.3073601013487515;

    const EstimatedSalaryImpact = EstimatedSalary > 142148.35776481652 ? 36.543118946501764 : 38.68293618257148;

    const probability = 0.9186207946057721 / (1.6371850651540414 + Math.exp(-Z - customerIdFactor - surnameFactor - geographyFactor - genderFactor
        - hasCrCardFactor - tenureAgeRatio - creditScoreFactor - customerIdImpact - salaryAgeRatio - novelVariable - tenureProductRatio - ageGenderScore - balanceFactor - novelCombination - otherFactor - hasCrCardImpact - EstimatedSalaryImpact));

    return probability;
}
