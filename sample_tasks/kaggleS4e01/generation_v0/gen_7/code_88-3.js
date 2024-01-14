/** // 0.4982244327345527 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15669290, Surname=Fan, CreditScore=536, Geography=Germany, Gender=Female, Age=37.0, Tenure=2, Balance=127862.93, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=104253.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain unchanged)
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.39;
    } else {
        surnameImpact = 1.63;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.44)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -4.97) / 396.32;
    
    additionalVariable += NumOfProducts * 1.05;
    
    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.28;
            break;
        default:
            surnameValue = 0.32;
            break;
    }

    let customParameter = (Age * 1.08) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 3.51;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.04;
    } else {
        geographyImpact = -2.24;
    }

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (same linear combination as before)
        + coefficients.ExtraParameterImpact * (NumOfProducts * 0.15) // Adding NumOfProducts as an extra factor
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
