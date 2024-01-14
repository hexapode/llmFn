/** // 0.6118948125552222 //**/
/**
I try on the following input and it returned 0.9897493675407649" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15665695, Surname=Ts'ai, CreditScore=683, Geography=France, Gender=Male, Age=31.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=88827.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Coefficients for each input parameter
    const coefficients = {
        CreditScore: 0.015,
        Age: 0.07,
        Tenure: -0.05,
        Balance: 0.002,
        NumOfProducts: -0.03,
        HasCrCard: -0.02,
        IsActiveMember: -0.6,
        EstimatedSalary: 0.000003
    };

    // Calculating the linear combination of coefficients and input values
    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary
    );

    // Applying the logistic function to obtain the probability of churn
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
