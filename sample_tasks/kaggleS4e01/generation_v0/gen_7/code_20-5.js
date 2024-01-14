/** // 0.6493788856413242 //**/
/**
I try on the following input and it returned 0.04586541452908975" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15734461, Surname=Akabueze, CreditScore=706, Geography=Spain, Gender=Male, Age=39.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=93834.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.0045,
        Age: 0.063,
        Tenure: -0.027,
        Balance: 0.00018,
        NumOfProducts: -0.4,
        HasCrCard: -0.13,
        IsActiveMember: -0.28,
        EstimatedSalary: 0.0000018,
        GeographyImpact: 0.023,
        GenderImpact: -0.075,
        SurnameImpact: 0.032,
        NewParameterImpact: 0.0019,
        AdditionalImpact: -0.034,
        CustomParameterImpact: -0.011, 
        AgeBalanceImpact: 0.00027, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 0.08;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact; 

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.023 * lastDigit;

    let additionalVariable = Math.abs(CreditScore - 706) / 113.53;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Akabueze":
            surnameValue = 0.02;
            break;
        default:
            // Assume others have no impact
            surnameValue = 0.00;
            break;
    }

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.10;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.05;
    } else {
        geographyImpact = 0.025;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : -1) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact 
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
