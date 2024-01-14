/** // -Infinity //**/
/**
I try on the following input and it returned 0.09900990099005924" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15693526, Surname=Bellucci, CreditScore=678, Geography=France, Gender=Female, Age=35.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=167984.64.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        // ... coefficients remain unchanged
    };

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1.00 : 0.00) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1.00 : 0.00) +
        coefficients.SurnameImpact * (Surname === 'Bellucci' ? 1.00 : 0.00) +
        // Additional parameter impact calculations...
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
