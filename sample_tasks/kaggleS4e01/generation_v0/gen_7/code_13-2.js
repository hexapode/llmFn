/** // 0.4559530637121624 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15772996, Surname=Chukwufumnanya, CreditScore=629, Geography=Germany, Gender=Male, Age=34.0, Tenure=3, Balance=134740.24, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=177670.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.00, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.27;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;

    let additionalVariable = Math.abs(CreditScore - -60.10) / 112.42;

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    let unusedImpact = HasCrCard * IsActiveMember * 0.05; // Using an unused parameter to impact the prediction

    let linearCombination = (
        // ... (same as before)
        + coefficients.NewParameterImpact * newParameter
        + customerIdImpact
        + coefficients.AdditionalImpact * additionalVariable
        + coefficients.CustomParameterImpact * customParameter
        + unusedImpact // Adding the impact of the unused parameter
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
