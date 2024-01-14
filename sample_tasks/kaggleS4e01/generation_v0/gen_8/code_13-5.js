/** // 0.5674930104111705 //**/
/**
I try on the following input and it returned -0.07495932741654376" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15573893, Surname=Palerma, CreditScore=632, Geography=Germany, Gender=Female, Age=54.0, Tenure=9, Balance=143571.52, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=145558.42.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const features = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
    const weights = [0.05, 0.07, -0.02, 0.00005, -0.15, -0.10, -0.90, 0.0000003]; // Replace these with the actual trained weights
    
    let weightedSum = 0;
    for (let i = 0; i < features.length; i++) {
        weightedSum += features[i] * weights[i];
    }
    weightedSum += 0.12; // Add intercept term
    
    const probability = 1 / (1 + Math.exp(-weightedSum));
    return probability;
}
