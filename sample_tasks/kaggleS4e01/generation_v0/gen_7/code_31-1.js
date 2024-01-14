/** // 0.4982244327345527 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15628155, Surname=Echezonachukwu, CreditScore=758, Geography=France, Gender=Female, Age=30.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=98896.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
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
        // ... (same as before)
        coefficients.CreditScoreImpact * CreditScore + Age  // Added Age to the CreditScoreImpact line
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
