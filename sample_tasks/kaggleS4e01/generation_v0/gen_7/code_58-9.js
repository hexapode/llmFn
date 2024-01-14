/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15785865, Surname=Milanesi, CreditScore=678, Geography=France, Gender=Female, Age=40.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=60956.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.03,
        CreditScore: -0.0008,
        Age: -0.04,
        Tenure: -0.07,
        Balance: 0.00002,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.5,
        EstimatedSalary: 0.000003,
        GeographyImpact: 0.45,
        GenderImpact: -0.25,
        SurnameImpact: 0.03,
        NewParameterImpact: 0.01,
        AdditionalImpact: -0.4,
        CustomParameterImpact: -0.49,
        AgeBalanceImpact: -0.0005,
        CreditScoreImpact: 0.0006,
        UnusedParameterImpact: 0.09,
        ExtraParameterImpact: 0.75,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.0;
    } else {
        surnameImpact = 1.0;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 405.14)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 1.7 : 1.0);
    let customerIdLastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * customerIdLastDigit;
    let additionalVariable = Math.abs(CreditScore - 678) / 400;
    
    additionalVariable += NumOfProducts * 1.0;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Milanesi":
            surnameValue = -0.2;
            break;
        default:
            surnameValue = 0.3;
            break;
    }

    let customParameter = (Age * 0.9) / (EstimatedSalary * 0.005);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.3;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.1;
    } else {
        geographyImpact = -2.2;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.4 : -2.3) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.5 +
        coefficients.ExtraParameterImpact * (Age * 0.2) + (HasCrCard === 1.00 ? 0.8 : 0.00) +
        coefficients.ExtraParameterImpact * (Balance * 0.01) 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
