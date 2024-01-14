/** // 0.4982244327345527 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15637644, Surname=Mazzi, CreditScore=484, Geography=France, Gender=Male, Age=35.0, Tenure=7, Balance=164701.68, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=85412.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // All the input parameters already seem to be relevant to predicting customer churn. However, we can consider including the Geography parameter as an extra factor in the computation, as different locations might affect customer behavior differently.

    const weightCustomerId = 0.05;
    const weightCreditScore = 0.2;
    const weightAge = 0.08;
    const weightTenure = 0.1;
    const weightBalance = 0.15;
    const weightNumOfProducts = 0.1;
    const weightHasCrCard = -0.05;
    const weightIsActiveMember = -0.1;
    const weightEstimatedSalary = 0.12;
    const weightGeography = 0.05; // Adding weight for Geography parameter

    const linearCombination = weightCustomerId * CustomerId + weightCreditScore * CreditScore + weightAge * Age + weightTenure * Tenure + weightBalance * Balance + weightNumOfProducts * NumOfProducts + weightHasCrCard * HasCrCard + weightIsActiveMember * IsActiveMember + weightEstimatedSalary * EstimatedSalary + weightGeography * (Geography === 'France' ? 1 : 0); // Including Geoegraphy in the linear combination

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
