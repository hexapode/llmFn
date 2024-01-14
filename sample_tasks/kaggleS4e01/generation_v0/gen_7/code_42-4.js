/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15665590, Surname=Echezonachukwu, CreditScore=557, Geography=France, Gender=Female, Age=38.0, Tenure=1, Balance=122641.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=77830.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.01,
        CreditScore: -0.03,
        Age: 0.02,
        Tenure: -0.02,
        Balance: 0.00,
        NumOfProducts: -0.06,
        HasCrCard: -0.26,
        IsActiveMember: -1.50,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.23,
        GenderImpact: -0.12,
        SurnameImpact: 0.03,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.35,
        CustomParameterImpact: -0.32, 
        AgeBalanceImpact: 0.01, 
        CreditScoreImpact: -0.02, 
        UnusedParameterImpact: 0.12,  
        ExtraParameterImpact: 0.61,  
        MaritalStatusImpact: -0.19,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.29;
    } else {
        surnameImpact = 1.46;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 202.46)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 799.82;
    
    additionalVariable += NumOfProducts * 1.03;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Echezonachukwu":
            surnameValue = -0.22;
            break;
        default:
            surnameValue = 0.22;
            break;
    }

    let customParameter = (Age * 1.03) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.21;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.11;
    } else {
        geographyImpact = -1.91;
    }

    let maritalStatusImpact = 0.00;
    if (MaritalStatus === 'Married') {
        maritalStatusImpact = 1.19;
    } else {
        maritalStatusImpact = -0.89;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.29 : -2.21) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.53 +
        coefficients.ExtraParameterImpact * (Age * 0.19) +
        coefficients.MaritalStatusImpact * maritalStatusImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
