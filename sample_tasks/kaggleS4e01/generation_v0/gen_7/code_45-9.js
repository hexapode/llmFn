/** // 0.5692143762995654 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15789611, Surname=Onyemere, CreditScore=579, Geography=Spain, Gender=Female, Age=35.0, Tenure=3, Balance=131411.24, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=95009.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.36,
        IsActiveMember: -1.70,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.47, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.76,  
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.18;
    } else {
        surnameImpact = 1.35;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 407.14)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 399.36;
    
    
    additionalVariable += NumOfProducts * 1.13;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.23;
            break;
        default:
            surnameValue = 0.33;
            break;
    }

    let customParameter = (Age * 1.04) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.36;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.05;
    } else {
        geographyImpact = -2.28;
    }

    let tenureGenderImpact = (Tenure * 1.5) * (Gender === 'Male' ? 1.7 : 1.3);

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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.42 : -2.33) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.50 +
        coefficients.ExtraParameterImpact * (Age * 0.21) +
        tenureGenderImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}