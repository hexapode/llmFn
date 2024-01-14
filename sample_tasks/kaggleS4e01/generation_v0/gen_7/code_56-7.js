/** // 0.6733574358833893 //**/
/**
I try on the following input and it returned 0.2922711801782581" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15731522, Surname=Ts'ui, CreditScore=713, Geography=France, Gender=Female, Age=39.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=51229.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Hand-picked coefficients for the logistic regression model
    const coefficients = {
        Intercept: -1.84,
        Age: 0.03,
        Tenure: -0.08,
        NumOfProducts: -0.89,
        IsActiveMember: -1.02,
        Geography_France: -0.26,
        Geography_Germany: 0.94,
        Gender_Male: 0.67,
        HasCrCard: -0.18,
        Balance: 0.00005,
        CreditScore: 0.002,
        EstimatedSalary: -0.000002
    };

    // Feature transformation
    const genderImpact = (Gender === 'Male') ? coefficients.Gender_Male : 0;
    const geographyImpact = (Geography === 'Germany') ? coefficients.Geography_Germany :
                          ((Geography === 'France') ? coefficients.Geography_France : 0);

    // Calculating the linear combination of features and coefficients
    const linearCombination = coefficients.Intercept +
                               coefficients.Age * Age +
                               coefficients.Tenure * Tenure +
                               coefficients.NumOfProducts * NumOfProducts +
                               coefficients.IsActiveMember * IsActiveMember +
                               geographyImpact +
                               genderImpact +
                               coefficients.HasCrCard * HasCrCard +
                               coefficients.Balance * Balance +
                               coefficients.CreditScore * CreditScore +
                               coefficients.EstimatedSalary * EstimatedSalary;

    // Applying the logistic function to get the probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
