/** // 0.7923316033449225 //**/
/**
I try on the following input and it returned 0.7958943195102638" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15706199, Surname=White, CreditScore=636, Geography=France, Gender=Male, Age=36.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=182059.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CreditScore: 0.004,
        Age: 0.06,
        Tenure: -0.015,
        NumOfProducts: -0.3,
        HasCrCard: -0.2,
        IsActiveMember: -0.8,
        GeographyImpact: 0.4, 
        GenderImpact: -0.15, 
        SurnameImpact: 0.04,
        // NewParameterImpact: 0.02,  // removing NewParameterImpact
    };

    let surnameLength = Surname.length; 
    let surnameImpact = 0.00;

    if (surnameLength <= 5) {
        surnameImpact = -0.3; 
    } else {
        surnameImpact = 1.3;
    }

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.9 : -0.9) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 2.1 : -1.1) +
        coefficients.SurnameImpact * surnameImpact
    );

    const odds = Math.exp(-linearCombination);
    const probability = 1 / (1 + odds);

    return probability;
}
