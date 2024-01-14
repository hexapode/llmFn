/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15678928, Surname=Lucchese, CreditScore=687, Geography=France, Gender=Male, Age=34.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=139938.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary, UnusedParameter) {

    const coefficients = {
        // ... (same as before)
        UnusedParameterImpact: -0.25, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.27;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;

    let additionalVariable = Math.abs(CreditScore - -60.10) / 112.42;

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    // New step using the unused parameter
    let unusedParameterImpact = UnusedParameter > 100 ? 0.30 : -0.10;

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.90) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.08 : -1.08) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        coefficients.UnusedParameterImpact * unusedParameterImpact
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
