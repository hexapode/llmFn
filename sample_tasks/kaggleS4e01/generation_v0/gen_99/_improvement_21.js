/* Best score: 0.8067910727138435 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15574206, Surname=Shillito, CreditScore=678, Geography=France, Gender=Female, Age=37.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=55100.09.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7937673698685487 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15574206, Surname=Shillito, CreditScore=678, Geography=France, Gender=Female, Age=37.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=55100.09.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// The function aims to predict the likelihood of customer churn based on the provided input parameters. Each parameter is given a weight based on its impact on the customer's likelihood to churn. Some factors such as age, balance, credit score, and activity status are more likely to influence the customer's decision to churn. Other factors include geography, gender, and the number of products.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


    const wCreditScore = -0.0007076254882812502;
    const wAge = 1.4341775240794106;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000010963843397446713;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 2.692663664596156; 
    const b = -10.309894238391623;

    // Calculating the weighted sum of input factors
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    // Customer-specific factors
    const customerIdFactor = parseInt(CustomerId) % 7 / 12.100000000000001; 
    const surnameFactor = Surname.length * -0.00013750000000000004;
    const geographyFactor = (Geography === 'France') ? -1.5 : 4.892724804687502;
    const genderFactor = (Gender === 'Female') ? -2.2537783851146695 : -13.3254150390625;
    const numProductsFactor = NumOfProducts * -13.388169243312866;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.08506555843353271;

    // Tenure-age ratio factor
    const tenureAgeRatio = Tenure / Age * -112.87971490679283; 

    // Applying the logistic function to calculate the probability of churning
    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio)));

    return probability;
}
