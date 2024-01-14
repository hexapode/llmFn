/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15701265, Surname=Ngozichukwuka, CreditScore=663, Geography=Spain, Gender=Male, Age=37.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131167.94.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    // ... (same as before)

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

    let additionalVariable = Math.abs(CreditScore - -60.10) / 101.11;

    // Adding the impact of the number of products to the linear combination
    let linearCombination = (
        // ... (previous variables)
        coefficients.NumOfProducts * NumOfProducts +
        // ... (other variables)
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
