/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15764073, Surname=Vinogradov, CreditScore=724, Geography=France, Gender=Female, Age=35.0, Tenure=9, Balance=160652.45, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=197933.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same)
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.31;
    } else {
        surnameImpact = 1.37;
    }

    // Introducing an extra factor based on the IsActiveMember parameter
    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 407.13)) / (NumOfProducts + Balance) * (IsActiveMember === 1 ? 1.25 : 1.00);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    
    // ... (Other computation remains the same)
    
    let linearCombination = (
        // ... (computation remains the same)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
