/** // 0.49839379449970816 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15806913, Surname=Fiorentini, CreditScore=714, Geography=France, Gender=Male, Age=35.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=135088.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define the decision tree model using the input parameters as features
    const decisionTreeModel = {
        featureThresholds: {
            CreditScore: 650,
            Age: 40,
            NumOfProducts: 3,
            EstimatedSalary: 100000
        }
    };

    // Use the decision tree model to predict the likelihood of churn
    let probability = 0;
    if (CreditScore < decisionTreeModel.featureThresholds.CreditScore &&
        Age < decisionTreeModel.featureThresholds.Age &&
        NumOfProducts > decisionTreeModel.featureThresholds.NumOfProducts &&
        EstimatedSalary < decisionTreeModel.featureThresholds.EstimatedSalary) {
        probability = 1;
    } else {
        probability = 0;
    }

    return probability;
}
