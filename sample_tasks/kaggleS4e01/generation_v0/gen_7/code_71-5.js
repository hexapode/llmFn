/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15583073, Surname=Y?, CreditScore=636, Geography=France, Gender=Male, Age=40.0, Tenure=9, Balance=155619.58, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=62733.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain unchanged)
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.31;
    } else {
        surnameImpact = 1.37;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 407.13)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - 22.76) / 397.43;
    
    additionalVariable += NumOfProducts * 1.05;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.22;
            break;
        default:
            surnameValue = 0.33;
            break;
    }

    let customParameter = (Age * 0.98) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.40;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.03;
    } else {
        geographyImpact = -2.22;
    }

    
    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // Adding an extra parameter, "Age", as a multiplier for the coefficient in the linear combination
    let linearCombination = (
        // ... (previous coefficients calculation)
        + coefficients.ExtraParameterImpact * (Age * 0.21)  // Utilizing additional parameter "Age"
        // ... (remaining coefficients calculation)
    );

    // ...

    return probability;
}
