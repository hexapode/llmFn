/** // 0.6649664226624152 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15737133, Surname=Nworie, CreditScore=678, Geography=Germany, Gender=Male, Age=34.0, Tenure=10, Balance=128718.92, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=131283.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.62,
        HasCrCard: -0.35,
        IsActiveMember: -1.72,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.49, 
        AgeBalanceImpact: 0.03, // Added a new coefficient for novel variable combination
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.78,  
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.39;
    } else {
        surnameImpact = 1.31;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 405.14)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -2275.99) / 378.35;
    
    additionalVariable += NumOfProducts * 1.04;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.24;
            break;
        default:
            surnameValue = 0.33;
            break;
    }

    let customParameter = (Age * 0.96) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
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
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 0.00) +
        coefficients.ExtraParameterImpact * (Balance * 0.00) 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
