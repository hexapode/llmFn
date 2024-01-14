/** // 0.6343889334736188 //**/
/**
I try on the following input and it returned 1" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15697035, Surname=L?, CreditScore=648, Geography=France, Gender=Male, Age=35.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=57553.08.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Coefficients for each feature
    const coefficients = {
        CustomerId: 0.0000001,
        CreditScore: -0.0005,
        Age: 0.01,
        Tenure: -0.03,
        Balance: 0.000002,
        NumOfProducts: -0.03,
        HasCrCard: -0.1,
        IsActiveMember: -0.5,
        EstimatedSalary: 0.0000003
    };

    // Calculate the linear combination of input features and coefficients
    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary
    );

    // Apply the sigmoid function to get the churn probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
