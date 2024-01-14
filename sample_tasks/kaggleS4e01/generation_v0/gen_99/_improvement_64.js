/* Best score: 0.8112213007223426 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15568104, Surname=Zubarev, CreditScore=665, Geography=France, Gender=Male, Age=41.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=72993.67.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8107877616741651 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15568104, Surname=Zubarev, CreditScore=665, Geography=France, Gender=Male, Age=41.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=72993.67.You don't need to ouput again the subfunction just put a comment // functions go there
**/


// Gender could be a relevant factor for prediction as it might impact the decision to churn. 
// In many industries, there are differences in the likelihood of churn between males and females, 
// so it makes sense to include gender in the prediction model.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



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

    
    const customerIdFactor = (parseInt(CustomerId) % 7.700000000000001) / 20.796875000000004;
    const surnameFactor = Surname.length * 0.00024735283203125016;
    const geographyFactor = (Geography === 'France') ? -2.578125 : 6.512216715039067;
    const genderFactor = (Gender === 'Female') ? -5.656543555546981 : -19.509740158691415;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.15412379907688745;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    
    const creditScoreFactor = (CreditScore < -650) ? -3 : -18.17065122538805;

    
    const customerIdImpact = (parseInt(CustomerId) > 15675000) ? -0.6050000000000001 : 0.5445000000000001;

    
    const salaryAgeRatio = EstimatedSalary / Age * -0.0000019450927246093755; 

    const probability = 1.1 / (0.9801000000000002 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor 
        + hasCrCardFactor + tenureAgeRatio + creditScoreFactor + customerIdImpact + salaryAgeRatio)));

    return probability;
}

