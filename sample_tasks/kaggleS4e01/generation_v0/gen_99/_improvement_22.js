/* Best score: 0.8084688067507113 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15661442, Surname=Kao, CreditScore=581, Geography=Germany, Gender=Female, Age=20.0, Tenure=6, Balance=147531.82, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=116747.62.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.8067910727138435 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15661442, Surname=Kao, CreditScore=581, Geography=Germany, Gender=Female, Age=20.0, Tenure=6, Balance=147531.82, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=116747.62.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// Functions go here

// Function to predict the probability of customer churn
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


    // Coefficients for the logistic regression model
    const wCreditScore = -0.0007076254882812502;
    const wAge = 1.4341775240794106;
    const wBalance = 0.000069;
    const wEstimatedSalary = -0.000010963843397446713;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = 2.692663664596156;
    const b = -10.309894238391623;

    // Calculating the linear combination
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    // Additional factors
    const customerIdFactor = (parseInt(CustomerId) % 7) / -12.100000000000001;
    const surnameFactor = Surname.length * 0.00013750000000000004;
    const geographyFactor = (Geography === 'France') ? -1.5 : 4.892724804687502;
    const genderFactor = (Gender === 'Female') ? -4.570944287310691 : -16.123752197265627;
    const numProductsFactor = NumOfProducts * -14.726986167644155;
    const hasCrCardFactor = HasCrCard === 1 ? -0.15696815767826 : -0.09357211427688598;
    const tenureAgeRatio = Tenure / Age * -124.16768639747212;

    // Calculating the probability using the logistic function
    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor + hasCrCardFactor + tenureAgeRatio)));

    return probability;
}
