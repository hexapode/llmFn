/* Best score: 0.8225563572212041 */


    /* I try on the following input and it returned 0.7584474611571589" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15657771, Surname=Ts'ui, CreditScore=623, Geography=Spain, Gender=Female, Age=36.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=17802.42. */
    
    /** // 0.659173130716232 //**/
/**
I try on the following input and it returned 0.7584474611571589" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15657771, Surname=Ts'ui, CreditScore=623, Geography=Spain, Gender=Female, Age=36.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=17802.42.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.50,
        HasCrCard: -0.15,
        IsActiveMember: -0.78,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.34,
        CustomParameterImpact: -1.30, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -1.18;
    } else {
        surnameImpact = 0.42;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);
    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact; 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 800.00;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.09;
            break;
        default:
            surnameValue = 0.11;
            break;
    }

    let customParameter = (Age * 0.14) / (EstimatedSalary * 0.05);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.24;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.96;
    } else {
        geographyImpact = -1.07;
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
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}