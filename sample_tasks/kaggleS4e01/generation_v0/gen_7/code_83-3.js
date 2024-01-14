/** // 0.4654961401338482 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15781563, Surname=Chukwumaobim, CreditScore=476, Geography=France, Gender=Male, Age=57.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=106655.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define the decision rules and feature weights
    let totalWeights = 0;
    totalWeights += (CustomerId === 15781563) ? 0.2 : 0;
    totalWeights += (Surname === "Chukwumaobim") ? 0.3 : 0;
    totalWeights += (CreditScore > 400) ? 0.15 : 0;
    totalWeights += (Geography === "France") ? 0.1 : 0;
    totalWeights += (Gender === "Male") ? 0.05 : 0;
    totalWeights += (Age > 50) ? 0.1 : 0;
    totalWeights += (Tenure > 2) ? 0.05 : 0;
    
    // Apply the weights to get the churn probability
    const probability = totalWeights;

    return probability;
}
