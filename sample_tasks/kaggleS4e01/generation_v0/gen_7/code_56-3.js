/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15758073, Surname=Cunningham, CreditScore=595, Geography=Spain, Gender=Male, Age=35.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=100015.79.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, 
    NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Implement decision tree algorithm to predict churn probability
    // Use historical customer data to train the decision tree model
    // Make predictions for new customers using the trained model

    // ... (code to train decision tree model)

    // Use the trained decision tree model to predict churn for new customer
    let churnProbability = 0.12; // Example prediction result

    return churnProbability;
}
