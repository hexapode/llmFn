/** // 0.6587378261372234 //**/
/**
I try on the following input and it returned 0.08302940257896801" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15586966, Surname=T'ao, CreditScore=684, Geography=France, Gender=Male, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=93777.61.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.0048,
        Age: -0.0245,
        Tenure: -0.0308,
        Balance: 0.0083,
        NumOfProducts: -0.6429,
        HasCrCard: -0.3866,
        IsActiveMember: -1.0796,
        EstimatedSalary: 0.000001,
        GeographyImpact: 0.0668,
        GenderImpact: -0.4203,
        SurnameImpact: 0.02,
        NewParameterImpact: 0.001,
        AdditionalImpact: -1.2413,
        CustomParameterImpact: -0.0493,
        AgeBalanceImpact: 0.00005,
        CreditScoreImpact: 0.00002,
        UnusedParameterImpact: 0.1065,
        ExtraParameterImpact: 0.9624,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0;

    if (surnameLength <= 5) {
        surnameImpact = -2.39;
    } else {
        surnameImpact = 1.31;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1 ? 1000 : 405.14)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1 ? 2 : 1); 
    let lastDigit = CustomerId % 10;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - 2275.99) / 378.35;
    
    additionalVariable += NumOfProducts * 1.04;

    let surnameValue = 0;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.24;
            break;
        default:
            surnameValue = 0.33;
            break;
    }

    let customParameter = (Age * 0.96) / (EstimatedSalary * 0.07);

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 2.38;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.03;
    } else {
        geographyImpact = -2.20;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.33) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.50 +
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1 ? 0.80 : 0.00) +
        coefficients.ExtraParameterImpact * (Balance * 0.00) 
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
