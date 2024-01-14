/** // 0.663839504740081 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15614137, Surname=Y?an, CreditScore=594, Geography=Germany, Gender=Female, Age=63.0, Tenure=7, Balance=102708.77, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=161241.65.
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
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01, 
        AgeBalanceImpact: 0.00004, // New coefficient to account for age and balance impact
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.28;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact; // Adding Age and Balance impact

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;

    let additionalVariable = Math.abs(CreditScore - -60.10) / 113.53;

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
        
        default:
            surnameValue = 0.00;
            break;
    }

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.89) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.08 : -1.08) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact // Adding ageBalanceImpact to the linearCombination
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
