/** // 0.7787527064322006 //**/
/**
I try on the following input and it returned 0.9900990099009901" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15774861, Surname=Ch'eng, CreditScore=543, Geography=France, Gender=Female, Age=30.0, Tenure=5, Balance=109941.56, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=60428.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Coefficients for logistic regression
    const coefficients = {
        intercept: -2.34,
        CreditScore: -0.0005,
        Age: 0.078,
        Tenure: -0.047,
        Balance: 0.000004,
        NumOfProducts: -0.41,
        HasCrCard: -0.093,
        IsActiveMember: -1.61,
        EstimatedSalary: -0.0000016,
        Geography_France: -0.55,
        Geography_Germany: 0.68,
        Geography_Spain: 0.15,
        Gender_Male: 0.25,
        SurnameImpact: 0.02
    };

    // Calculating the linear combination of inputs and coefficients
    let linearCombination = (
        coefficients.intercept +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        (Geography === 'France' ? coefficients.Geography_France : 0) +
        (Geography === 'Germany' ? coefficients.Geography_Germany : 0) +
        (Geography === 'Spain' ? coefficients.Geography_Spain : 0) +
        (Gender === 'Male' ? coefficients.Gender_Male : 0) +
        coefficients.SurnameImpact
    );

    // Calculate the probability using the logistic function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
