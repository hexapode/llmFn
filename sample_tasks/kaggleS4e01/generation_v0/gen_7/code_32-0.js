/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15697035, Surname=Chukwualuka, CreditScore=467, Geography=Spain, Gender=Female, Age=57.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=173680.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: -1.00,
        CreditScore: -0.01,
        Age: 0.05,
        Tenure: -0.06,
        Balance: 0.00,
        NumOfProducts: -0.35,
        HasCrCard: -0.25,
        IsActiveMember: -0.65,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.40,
        GenderImpact: -0.25,
        SurnameImpact: 0.06,
        NewParameterImpact: 0.03,
        AdditionalImpact: -0.30,
        AgeBalanceImpact: 0.00,
        CustomParameterImpact: -1.35, 
        CreditScoreImpact: 0.00, 
        OtherVariableImpact: 0.02,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 7.00) {
        surnameImpact = -1.28;
    } else {
        surnameImpact = 0.38;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);
    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact; 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 800.00;

    let otherVariable = (4 * Age) / (2 * Tenure);
    let otherVariableImpact = 0.00;

    if (otherVariable > 1.00) {
        otherVariableImpact = 0.50;
    } else {
        otherVariableImpact = -0.50;
    }

    let surnameValue = 0.00;
    switch (Surname) {
        case "Chukwualuka":
            surnameValue = 0.14;
            break;
        default:
            surnameValue = 0.11;
            break;
    }

    let customParameter = (Age * 0.14) / (EstimatedSalary * 0.05);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.30;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.90;
    } else {
        geographyImpact = -1.00;
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
        coefficients.AgeBalanceImpact * ageBalanceImpact +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue +
        coefficients.OtherVariableImpact * otherVariableImpact + coefficients.CreditScoreImpact * CreditScore 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
