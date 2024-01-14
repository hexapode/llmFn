/* Best score: 0.7119880370045988 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15810839, Surname=Ugochukwu, CreditScore=627, Geography=Spain, Gender=Male, Age=51.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=156774.83.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.6565414345284225 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15810839, Surname=Ugochukwu, CreditScore=627, Geography=Spain, Gender=Male, Age=51.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=156774.83.You don't need to ouput again the subfunction just put a comment // functions go there
**/


// The following function utilizes a different approach by introducing an additional variable and slightly adjusting the weight coefficients.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {



    const wCreditScore = -0.00014;
    const wAge = 0.08267960534667969;
    const wBalance = 0.000069;
    const wEstimatedSalary = 2e-7;
    const wIsActiveMember = -22.72117595256806;
    const b = -0.324;
    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + b;
    
    const probability = 1 / (1 + Math.exp(-Z));
    
    return probability;
}

