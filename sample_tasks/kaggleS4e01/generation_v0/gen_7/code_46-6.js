/** // 0.5863788725680311 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15723793, Surname=Zaytseva, CreditScore=850, Geography=France, Gender=Male, Age=30.0, Tenure=9, Balance=102948.92, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=107971.15.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Analyze the input data and determine the most relevant features and their thresholds

    let prediction = 0; // Initialize the prediction as "stays" by default

    if (NumOfProducts <= 1 && Balance > 10000) {
        prediction = 1; // The customer is likely to churn based on the decision tree rules
    } else if (CreditScore < 400 && Age > 40) {
        prediction = 1; // The customer is likely to churn based on the decision tree rules
    } else if (Geography === 'Germany' && EstimatedSalary < 50000) {
        prediction = 1; // The customer is likely to churn based on the decision tree rules
    }
    
    return prediction;
}
