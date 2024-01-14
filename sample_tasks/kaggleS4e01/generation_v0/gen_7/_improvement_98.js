/* Best score: 0.8240712455823718 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15653780, Surname=White, CreditScore=559, Geography=Germany, Gender=Male, Age=43.0, Tenure=8, Balance=141243.53, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=182355.21. */
    
    /** // 0.823676684664879 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15653780, Surname=White, CreditScore=559, Geography=Germany, Gender=Male, Age=43.0, Tenure=8, Balance=141243.53, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=182355.21.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.73,
        HasCrCard: -0.37,
        IsActiveMember: -1.88,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.47,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.55,
        CustomParameterImpact: -0.70, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.06,  
        ExtraParameterImpact: 0.66,  
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.39;
    } else {
        surnameImpact = 1.51;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 427.44)) / (NumOfProducts + Balance);
    // Adding CreditScore as an additional factor in the calculation of newParameter
    newParameter += CreditScore * 0.01;

    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00) * (CreditScore / 1000.00); 
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -3.23) / 396.42;
    
    additionalVariable += NumOfProducts * 1.04;
    
    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.27;
            break;
        default:
            surnameValue = 0.33;
            break;
    }

    let customParameter = (Age * 0.99) / (EstimatedSalary * 0.09);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 3.61;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.04;
    } else {
        geographyImpact = -2.23;
    }

    // Adding Age as an additional factor in the calculation of geographyImpact
    geographyImpact += Age * 0.05;

    let unusedParameter = 108.91;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.67 : -2.47) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        unusedParameterImpact +
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 4.06) +
        coefficients.ExtraParameterImpact * (Balance * 0.00) +
        coefficients.ExtraParameterImpact * (NumOfProducts * 0.16) +
        coefficients.AdditionalImpact * (Age / 111.20) + 
        coefficients.GeographyImpact * (Geography === 'France' ? 1.00 : 0.00)  
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}