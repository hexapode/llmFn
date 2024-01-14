/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15622538, Surname=O'Donnell, CreditScore=560, Geography=France, Gender=Female, Age=48.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=181549.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.78,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.34,
        CustomParameterImpact: -1.30, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.30  // impact of the unused parameter
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -1.18;
    } else {
        surnameImpact = 0.42;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);
    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact; 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 800.00;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.09;
            break;
        default:
            surnameValue = 0.11;
            break;
    }

    let customParameter = (Age * 0.14) / (EstimatedSalary * 0.05);

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
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * UnusedParameter  // impact of the unused parameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
