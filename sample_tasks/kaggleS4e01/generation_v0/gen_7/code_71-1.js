/** // 0.6328040696135263 //**/
/**
I try on the following input and it returned 0.9899596320255014" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15682655, Surname=O'Donnell, CreditScore=656, Geography=France, Gender=Male, Age=36.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=151325.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Standardize the input variables
    const standardizedAge = (Age - 37.5) / 10.75; // Assuming mean age is 37.5 and stddev is 10.75
    const standardizedCreditScore = (CreditScore - 650) / 100; // Assuming mean credit score is 650 and stddev is 100
    const standardizedTenure = (Tenure - 5) / 3.5; // Assuming mean tenure is 5 and stddev is 3.5
    const standardizedBalance = Balance / 120000; // Assuming max balance is 120000
    const standardizedEstimatedSalary = EstimatedSalary / 200000; // Assuming max salary is 200000

    // Weighted sum of standardized input variables
    const weightedSum = (0.2 * standardizedAge) + (0.25 * standardizedCreditScore) + (0.15 * standardizedTenure) + (0.1 * standardizedBalance) + (0.3 * standardizedEstimatedSalary);

    // Apply sigmoid function
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
