/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15683544, Surname=Onwumelu, CreditScore=634, Geography=Germany, Gender=Female, Age=38.0, Tenure=2, Balance=144773.29, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=60905.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous function)
    };

    // ... (same as previous function)

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 44.40)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 799.91;
    
    additionalVariable += NumOfProducts * 0.03;

    let surnameValue = 0.00;
    switch (Surname) {
        // ... (same as previous function)
    }

    let customParameter = (Age * 0.13) / (EstimatedSalary * 0.06);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.24;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.97;
    } else {
        geographyImpact = -1.06;
    }

    let customStepImpact = IsActiveMember === 1.00 ? 0.15 : -0.25; // New step using unused parameter (IsActiveMember)

    let linearCombination = (
        // ... (same as previous function)
        + customStepImpact
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
