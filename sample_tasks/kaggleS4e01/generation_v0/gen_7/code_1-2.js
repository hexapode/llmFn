/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15690540, Surname=Udinesi, CreditScore=532, Geography=France, Gender=Male, Age=40.0, Tenure=9, Balance=212314.03, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=148814.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // We can add a novel combination of variables such as the product of Age and Balance
    const novelVariable = Age * Balance;

    const weightCustomerId = 0.05;
    const weightCreditScore = 0.2;
    const weightAge = 0.08;
    const weightTenure = 0.1;
    const weightBalance = 0.15;
    const weightNumOfProducts = 0.1;
    const weightHasCrCard = -0.05;
    const weightIsActiveMember = -0.1;
    const weightEstimatedSalary = 0.12;
    const weightNovelVariable = 0.05; // Weight for the novel variable

    const linearCombination = weightCustomerId * CustomerId + weightCreditScore * CreditScore + weightAge * Age + weightTenure * Tenure + weightBalance * Balance + weightNumOfProducts * NumOfProducts + weightHasCrCard * HasCrCard + weightIsActiveMember * IsActiveMember + weightEstimatedSalary * EstimatedSalary + weightNovelVariable * novelVariable;

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
