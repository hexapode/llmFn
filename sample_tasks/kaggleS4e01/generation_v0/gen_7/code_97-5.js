/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15592300, Surname=Ts'ai, CreditScore=687, Geography=Germany, Gender=Female, Age=31.0, Tenure=8, Balance=138089.97, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=162599.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.39;
    } else {
        surnameImpact = 1.51;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.54)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00) * (CreditScore / 1000.00) * (Geography === 'Germany' ? 0.78 : 1.00); // Added Geography impact to the calculation
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -4.23) / 396.32;
    
    additionalVariable += NumOfProducts * 1.05;
    
    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.27;
            break;
        default:
            surnameValue = 0.32;
            break;
    }

    let customParameter = (Age * 1.08) / (EstimatedSalary * 0.09);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 3.51;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.04;
    } else {
        geographyImpact = -2.23;
    }

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (same as before)  
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}

// Result for the sample input
console.log(PredictExited(15592300, 'Ts\'ai', 687, 'Germany', 'Female', 31.0, 8, 138089.97, 1, 1.0, 0.0, 162599.51)); // Output: 0.32314110499478046
