/** // 0.4982244327345527 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15806964, Surname=Kable, CreditScore=746, Geography=Spain, Gender=Male, Age=36.0, Tenure=3, Balance=116227.28, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=131662.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const weightCustomerId = 0.05;
    const weightCreditScore = 0.2;
    const weightAge = 0.08;
    const weightTenure = 0.1;
    const weightBalance = 0.15;
    const weightNumOfProducts = 0.1;
    const weightHasCrCard = -0.05;
    const weightIsActiveMember = -0.1;
    const weightEstimatedSalary = 0.12;
    const weightGeographySpain = 0.05; // New weight for Geography=Spain
    
    // Add the new parameter Geography as a factor in the linear combination
    const linearCombination = weightCustomerId * CustomerId + weightCreditScore * CreditScore + weightAge * Age + weightTenure * Tenure + weightBalance * Balance + weightNumOfProducts * NumOfProducts + weightHasCrCard * HasCrCard + weightIsActiveMember * IsActiveMember + weightEstimatedSalary * EstimatedSalary + weightGeographySpain * (Geography === 'Spain' ? 1 : 0);
    
    const probability = 1 / (1 + Math.exp(-linearCombination));
    
    return probability;
}
