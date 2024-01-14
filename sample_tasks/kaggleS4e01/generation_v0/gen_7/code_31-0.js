/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 1" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15766887, Surname=Chukwumaobim, CreditScore=669, Geography=Germany, Gender=Male, Age=41.0, Tenure=6, Balance=162082.08, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=107825.08.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        // ... (same as before)
    };

    let surnameImpact = 0.00;
    if (Surname.length <= 5) {
        surnameImpact = -1.18;
    } else {
        surnameImpact = 0.42;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);
    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.24;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.96;
    } else {
        geographyImpact = -1.07;
    }

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
        coefficients.GenderImpact * (Gender === 'Male' ? 1.11 : -1.11) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
