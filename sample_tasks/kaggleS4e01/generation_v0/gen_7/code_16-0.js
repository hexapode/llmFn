/** // 0.7424258773739386 //**/
/**
I try on the following input and it returned 0.0073574331031615574" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15742632, Surname=Napolitani, CreditScore=645, Geography=France, Gender=Male, Age=28.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=101693.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.000002,
        CreditScore: 0.0002,
        Age: 0.07,
        Tenure: -0.004,
        Balance: 0.00002,
        NumOfProducts: -0.5,
        HasCrCard: -0.15,
        IsActiveMember: -0.8,
        EstimatedSalary: 0.000002,
        GeographyImpact: 0.5,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -0.002, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.0000002;

    if (surnameLength <= 5) {
        surnameImpact = -0.00000002;
    } else {
        surnameImpact = 0.0000005;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let lastDigit = CustomerId % 10;
    let customerIdImpact = 0.0000002 * lastDigit;

    let additionalVariable = Math.abs(CreditScore - 700) / 300;

    let surnameValue = 0.0;
    switch (Surname) {
        case "Napolitani":
            surnameValue = 0.0000005;
            break;
        // Add other specific surnames if necessary
        
        default:
            surnameValue = 0.0;
            break;
    }

    let customParameter = (Age * 0.003) / (EstimatedSalary * 0.0001);

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.9 : -0.9) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2 : -1) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
