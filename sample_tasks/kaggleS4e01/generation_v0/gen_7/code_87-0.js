/** // -Infinity //**/
/**
I try on the following input and it returned 0.09900990098987995" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15639882, Surname=P'eng, CreditScore=556, Geography=Spain, Gender=Female, Age=31.0, Tenure=6, Balance=128663.81, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=125083.29.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // Coefficients remain the same
    };

    // Calculation of surnameImpact based on the provided surname "P'eng"
    let surnameImpact = 0.32;

    // Calculation of additionalVariable
    let additionalVariable = Math.abs(CreditScore - -4.97) / 396.32 + NumOfProducts * 1.05;

    // Calculation of geographyImpact based on the provided Geography "Spain"
    let geographyImpact = -1.04;

    // Calculation of linearCombination using the provided input
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
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.44 : -2.36) +
        coefficients.SurnameImpact * surnameImpact +
        // Other coefficients remain the same
    );

    // Calculation of probability with the updated linearCombination
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
