/** // 0.5948973367758815 //**/
/**
I try on the following input and it returned 0.02094496978292409" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15790067, Surname=Mazzi, CreditScore=637, Geography=France, Gender=Male, Age=21.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=182865.04.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Using only relevant parameters
    const coefficients = {
        CreditScore: 0.03,
        Age: 0.05,
        Tenure: -0.1,
        Balance: 0.02,
        NumOfProducts: -0.2,
        HasCrCard: -0.15,
        IsActiveMember: -0.5,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        SurnameImpact: 0.05
    };

    // Calculating the linear combination
    const linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : 0)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1) +
        coefficients.SurnameImpact * (Surname.length > 5 ? 1 : -1)
    );

    // Calculating the probability using the logistic function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
