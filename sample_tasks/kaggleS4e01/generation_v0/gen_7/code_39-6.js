/** // 0.7581579861007621 //**/
/**
I try on the following input and it returned 0.794497743303593" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15809248, Surname=Cole, CreditScore=524, Geography=France, Gender=Female, Age=36.0, Tenure=10, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=109614.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Manually tuned coefficients based on feature importance
    const coefficients = {
        CreditScore: 0.004,
        Age: 0.05,
        Tenure: -0.05,
        NumOfProducts: -0.3,
        HasCrCard: -0.15,
        IsActiveMember: -0.7,
        GeographyImpact: 0.3,
        GenderImpact: -0.2
    };

    // Encode categorical variables
    const genderImpact = Gender === 'Male' ? 0.1 : -0.1;
    const geographyImpact = Geography === 'Germany' ? 0.2 : (Geography === 'Spain' ? -0.1 : 0);

    // Calculate linear combination
    const linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact
    );

    // Calculate probability using logistic function
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
