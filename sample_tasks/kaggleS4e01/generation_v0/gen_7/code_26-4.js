/** // 0.6638310003927228 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15757837, Surname=Chikere, CreditScore=599, Geography=Germany, Gender=Female, Age=60.0, Tenure=5, Balance=106901.44, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=118829.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.49,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.28;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);
    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact; 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -59.10) / 113.53;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Okwudilichukwu":
            surnameValue = 0.05;
            break;
        case "Okwudiliolisa":
            surnameValue = 0.20;
            break;
        case "Hsueh":
            surnameValue = 0.04;
            break;
        case "Norton": 
            surnameValue = -0.27;
            break;
        default:
            surnameValue = 0.00;
            break;
    }

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.90;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.12;
    } else {
        geographyImpact = 0.05;
    }

    let novelCombinationVariable = (Age * Balance) / (CreditScore + 1);

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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.06 : -1.07) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        novelCombinationVariable
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}