/* Best score: 0.776509876653775 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15804057, Surname=Yobanna, CreditScore=809, Geography=France, Gender=Female, Age=39.0, Tenure=7, Balance=148556.74, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=176692.65.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7547267637272497 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15804057, Surname=Yobanna, CreditScore=809, Geography=France, Gender=Female, Age=39.0, Tenure=7, Balance=148556.74, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=176692.65.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// The existing code is a logistic regression model that takes into account CreditScore, Age, Balance, EstimatedSalary, IsActiveMember, Tenure, and CustomerId to predict the probability of a customer churning. 
// Now, I will utilize the unused parameters, Surname, Geography, Gender, and NumOfProducts, to further impact the prediction.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


    const wCreditScore = -0.0005146367187500001;
    const wAge = 0.7071445419189697;
    const wBalance = 0.000069;
    const wEstimatedSalary = 0.000006378963431241724;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = -0.18379882812500004; 
    const b = -9.372631125810566;
    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;

    const customerIdFactor = parseInt(CustomerId) % 7 / 12.100000000000001;

    // Utilizing the unused parameters to further impact the prediction
    const surnameFactor = Surname.length * -0.0001;
    const geographyFactor = (Geography === 'France') ? -0.3 : 0;
    const genderFactor = (Gender === 'Female') ? 0.2 : -2;
    const numProductsFactor = NumOfProducts * -12.171062948466242;

    // Updated probability calculation with additional factors
    const probability = 1 / (1 + Math.exp(-(Z + customerIdFactor + surnameFactor + geographyFactor + genderFactor + numProductsFactor)));

    return probability;
}
