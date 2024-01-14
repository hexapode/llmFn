/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15806467, Surname=Ch'iu, CreditScore=637, Geography=France, Gender=Male, Age=34.0, Tenure=6, Balance=143964.61, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=1055.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        // ... (same as before)
    };

    let surnameImpact = 0.00;
    if (Surname.startsWith("Ch'") || Surname.startsWith("Ch'")) {
        surnameImpact = 0.42;
    } else {
        surnameImpact = -0.21;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 406.15)) / (NumOfProducts + Balance);
    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.37;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.04;
    } else {
        geographyImpact = -2.19;
    }

    let customParameter = (Age * 0.95) / (EstimatedSalary * 0.07);

    let linearCombination = (
        // ... (same as before)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
