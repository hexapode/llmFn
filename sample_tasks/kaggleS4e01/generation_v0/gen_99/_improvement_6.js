/* Best score: 0.7559231179374152 */


    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15761654, Surname=Fomin, CreditScore=563, Geography=Germany, Gender=Male, Age=37.0, Tenure=4, Balance=136914.88, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=74800.62.You don't need to ouput again the subfunction just put a comment // functions go there */
    
    /** // 0.7541210794847958 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15761654, Surname=Fomin, CreditScore=563, Geography=Germany, Gender=Male, Age=37.0, Tenure=4, Balance=136914.88, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=74800.62.You don't need to ouput again the subfunction just put a comment // functions go there
**/

// function goes here

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {


    const wCreditScore = -0.0005146367187500001;
    const wAge = 0.7071445419189697;
    const wBalance = 0.000069;
    const wEstimatedSalary = -2e-7;
    const wIsActiveMember = -22.72117595256806;
    const wTenure = -0.18379882812500004; // new weight for tenure
    const b = -9.372631125810566;
    
    const Z = (wCreditScore * CreditScore) + (wAge * Age) + (wBalance * Balance) + (wEstimatedSalary * EstimatedSalary) + (wIsActiveMember * IsActiveMember) + (wTenure * Tenure) + b;
    
    const probability = 1 / (1 + Math.exp(-Z));
    
    return probability;
}
