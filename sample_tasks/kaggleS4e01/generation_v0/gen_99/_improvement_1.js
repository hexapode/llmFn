/* Best score: 0.6083906466014373 */


    /* I try on the following input and it returned 1" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15600106, Surname=Wei, CreditScore=631, Geography=France, Gender=Male, Age=36.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=133141.34.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.5520617400315302 //**/
/**
I try on the following input and it returned 1" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15600106, Surname=Wei, CreditScore=631, Geography=France, Gender=Male, Age=36.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=133141.34.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// In the previous implementation, a linear combination of the input features was used to calculate the probability of churn, and then it was passed through a sigmoid function.
// The issue with the previous implementation is that the linear combination by itself does not ensure that the probability falls within the range of 0 to 1. Also, it's not weighted properly.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


    // Initialize weights
    const wCreditScore = -0.00013310000000000004;
    const wAge = 0.0012100000000000001;
    const wBalance = 0.0000025154296874999996;
    const wEstimatedSalary = 0.000001;
    const b = 5;
    
    // Calculate Z (linear combination of input features)
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + b;
    
    // Apply sigmoid function to get the probability of churn
    const probability = 1 / (1 + Math.exp(-Z));
    
    return probability;
}
