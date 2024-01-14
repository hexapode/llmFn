/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.8140464162105094" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15739123, Surname=Mellor, CreditScore=753, Geography=France, Gender=Female, Age=43.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=148412.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // Coefficients remain the same
    };

    // Calculate additional impact
    let additionalVariable = Math.abs(CreditScore - 1197.78) / 800.92;
    additionalVariable += NumOfProducts * 0.04;
    
    // Calculate linear combination
    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.35 : (Geography === 'Spain' ? -0.97 : -1.07)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1.22 : -1.13) +
        coefficients.SurnameImpact * (Surname.length <= 5 ? -1.30 : 0.47) +
        coefficients.AdditionalImpact * additionalVariable
        // Remove other parameters that were not used in the calculation
    );

    // Transform linear combination into probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
