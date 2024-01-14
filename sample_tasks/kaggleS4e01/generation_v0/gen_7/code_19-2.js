/** // 0.8005158390612047 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15712241, Surname=Lucchesi, CreditScore=717, Geography=France, Gender=Male, Age=37.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=149170.96.
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
        OtherVariableImpact: 0.03  // New variable and its impact coefficient
    };

    // Similar calculations as before

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
            surnameValue = 0.03;
            break;
        default:
            surnameValue = 0.00;
            break;
    }

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    let otherVariable = NumOfProducts / Tenure; // New variable calculation

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.90;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.12;
    } else {
        geographyImpact = 0.05;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.06 : -1.07) +
        coefficients.SurnameImpact * 1.28 +  // Using a constant value based on previous logic
        coefficients.NewParameterImpact * customParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + 
        coefficients.OtherVariableImpact * otherVariable  // Adjusting linear combination with new variable impact
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
